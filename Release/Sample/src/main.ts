import * as effekseer from "@akashic-extension/effekseer-for-akashic-engine";
import { EffekseerRenderer } from "./EffekseerRenderer";

function main(_param: g.GameMainParameterObject): void {
	const scene = new g.Scene({
		game: g.game,
		assetIds: ["player", "shot", "se"],
		assetPaths: [
			"/assets/Effekseer/**/*",
			"/node_modules/@akashic-extension/effekseer-for-akashic-engine/Release/effekseer.wasm"
		]
	});

	scene.onLoad.add(() => {
		// 透過した背景に対して加算合成のエフェクトを正しく描画することはできない
		// ので、不透明の背景を用意する
		const background = new g.FilledRect({
			scene,
			width: g.game.width,
			height: g.game.height,
			cssColor: "black"
		});

		const playerImageAsset = scene.asset.getImageById("player");
		const shotImageAsset = scene.asset.getImageById("shot");
		const seAudioAsset = scene.asset.getAudioById("se");

		const player = new g.Sprite({
			scene: scene,
			src: playerImageAsset,
			x: (g.game.width - playerImageAsset.width) / 2,
			y: (g.game.height - playerImageAsset.height) / 2
		});

		player.onUpdate.add(() => {
			player.y = (g.game.height - player.height) / 2 + Math.sin(g.game.age % (g.game.fps * 10) / 4) * 10;
			player.modified();
		});

		scene.onPointDownCapture.add(() => {
			seAudioAsset.play();

			const shot = new g.Sprite({
				scene: scene,
				src: shotImageAsset,
				width: shotImageAsset.width,
				height: shotImageAsset.height,
				x: player.x + player.width,
				y: player.y
			});

			shot.onUpdate.add(() => {
				if (shot.x > g.game.width) shot.destroy();
				shot.x += 10;
				shot.modified();
			});

			scene.append(shot);
		});

		const effekseerRenderer = setupEffect(scene);

		scene.append(background);
		scene.append(effekseerRenderer);
		scene.append(player);
	});

	g.game.pushScene(scene, {
		prepare: done => {
			// Effekseer を初期化する。
			// 初期化が完了してからシーンが開始されるよう、prepare 内で初期化を行う。
			const wasmBinaryAsset = scene.asset.getBinary("/node_modules/@akashic-extension/effekseer-for-akashic-engine/Release/effekseer.wasm");
			effekseer.initRuntimeWithWasmBinary(
				wasmBinaryAsset.data,
				() => {
					done();
				},
				() => {
					console.log("Error on effekseer.initRuntime");
					done();
				}
			);
		},
	});
}

function setupEffect(scene: g.Scene): EffekseerRenderer {
	// Effekseer のコンテキストを生成する
	const context = effekseer.utils.createEffekseerContext(g.game.renderers[0]);

	// コンテキストの諸設定
	const aspect = g.game.width / g.game.height;
	context.setProjectionPerspective(30, aspect, 1, 1000);
	context.setCameraLookAt(
		0, 0, 30, // camera position
		0, 0, 0, // target position
		0, 1, 0 // up vector
	);

	const effekseerRenderer = new EffekseerRenderer({
		scene,
		context
	});

	const effect = context.loadEffectBinaryAsset(scene.asset.getBinary("/assets/Effekseer/Blow5.efkefc"), 1.0);

	// エフェクトを更新する
	effekseerRenderer.onUpdate.add(() => {
		context.update(2);
	});

	// 画面押下時にエフェクトを再生する
	scene.onPointDownCapture.add(() => {
		context.play(effect, 0, 0, 0);
	});

	return effekseerRenderer;
}

export = main;
