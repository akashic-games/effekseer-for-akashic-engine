<p align="center">
<img src="https://raw.githubusercontent.com/akashic-games/effekseer-for-akashic-engine/main/img/akashic.png" />
</p>

# Effekseer for Akashic Engine

Effekseer for Akashic Engine は [EffekseerForWebGL](https://github.com/effekseer/EffekseerForWebGL) の [Akashic Engine](https://akashic-games.github.io/) 向けポートです。 [Effekseer 1.7e](https://github.com/effekseer/Effekseer/releases/tag/170e) を利用します。

## 利用方法

[akashic-cli](https://github.com/akashic-games/akashic-cli) でインストールします。

```sh
akashic install @akashic-extension/effekseer-for-akashic-engine
```

コンテンツからは、

```javascript
const ea = require("@akashic-extension/effekseer-for-akashic-engine");
```

で利用してください。

[Akashic Engine](https://akashic-games.github.io/) の詳細な利用方法については、 [公式ページ](https://akashic-games.github.io/) を参照してください。

## サンプル

`Release/Sample` ディレクトリにサンプルが用意されています。詳細はサンプルの `README.md` を参照してください。

## APIリファレンス

[こちら](https://akashic-games.github.io/effekseer-for-akashic-engine/api/index.html)。

## ビルド方法

### 事前準備

Effekseer for Akashic Engine のビルドには git, python, cmake, emscripten そして node.js が必要です。それぞれの公式サイトにある手順に従ってインストールしてください。Window環境では [MinGW](https://winlibs.com/) もインストールしてください。Emscripten はバージョン 3.1.60 で確認しています。一部 Emscripten の出力するソースコードを書き換えているため、他のバージョンでの動作は確認していません。

- [MinGW](https://winlibs.com/) (Windows 環境のみ)
  - 解凍後 mingw32/bin または mingw64/bin を PATH 環境変数に加える
- [Git \- Downloads](https://git-scm.com/downloads)
- [Download Python \| Python\.org](https://www.python.org/downloads/)
- [Download CMake](https://cmake.org/download/)
- [Download and install — Emscripten 3\.1\.61\-git \(dev\) documentation](https://emscripten.org/docs/getting_started/downloads.html)
- [Node\.js — Download Node\.js®](https://nodejs.org/en/download/package-manager)

git submodule を利用しています。リポジトリをクローンした後、初期化します。

```sh
git clone https://github.com/akashic-games/effekseer-for-akashic-engine
cd effekseer-for-akashic-engine
git submodule update --init # Effekseer をサブモジュールとして導入
```

build.py に必要なパッケージをインストールします。以下の手順ではグローバル環境にインストールします。必要に応じて [venv](https://docs.python.org/ja/3/library/venv.html) などで作成した仮想環境を利用してください。

```sh
python -m pip install -r requirements.txt
```

### ビルド

```sh
python build.py # Effekseer を Wasm 形式にビルド
```

## ライセンス

オリジナルの EffekseerForWebGL は MIT License の元で公開されています。[LICENE-Effekseer](./LICENSE-Effekseer)をご覧ください。

Akashic Engine 向けの変更および追加は同じく MIT License の元で公開されています。[LICENSE](./LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは [CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。また、サンプルで使用している Effekseer のエフェクトは [Effekseer 公式サイト](https://effekseer.github.io/jp/contribute.html)で配布されているもので、[CC-0](http://creativecommons.org/about/cc0) ライセンスで公開されています。
