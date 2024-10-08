import { EffekseerContext, utils } from "@akashic-extension/effekseer-for-akashic-engine";

/**
 * EffekseerRenderer パラメータオブジェクト。
 */
export interface EffekseerRendererParameterObject extends g.EParameterObject {
	context: EffekseerContext;
}

/**
 * Effekseerのエフェクトの描画を行うエンティティ。
 */
export class EffekseerRenderer extends g.E {
	context: EffekseerContext;

	constructor(param: EffekseerRendererParameterObject) {
		super(param);
		this.context = param.context;
	}

	renderSelf(renderer: g.Renderer, _camera?: g.Camera): boolean {
		utils.renderEffekseer(renderer, this.context);
		return true;
	}
}
