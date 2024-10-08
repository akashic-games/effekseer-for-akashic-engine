import sys
import os
import shutil
import subprocess
import platform
import dukpy
import jsmin
import re

def compile(build_dir,target_dir, option, license_js, effekseer_core_js, effekseer_src_js, effekseer_js, effekseer_min_js):
    if not os.path.exists(build_dir):
        os.mkdir(build_dir)
    os.chdir(build_dir)

    if platform.system() == "Windows":
        subprocess.check_call(["cmd", "/c", "emcmake", "cmake",
                           "-G", "MinGW Makefiles", option, target_dir])
        subprocess.check_call(["mingw32-make"])
    else:
        subprocess.check_call(["command", "emcmake", "cmake", option, target_dir])
        subprocess.check_call(["make"])

    outfile_js = open(effekseer_js, "w")
    outfile_min_js = open(effekseer_min_js, "w")

    with open(license_js) as infile:
        data = infile.read()
        outfile_js.write(data)
        outfile_min_js.write(data)
    with open(effekseer_core_js) as infile:
        data = infile.read()
        # Effekseer for Akashic Engine を akashic install することに失敗する。
        # browserify が no logical or assignment を扱えないため。
        # akashic install コマンドが修正されるまで、暫定対応として置換する。
        data_no_logical_or_assignment = re.sub(
            r'_scriptName \|\|\= __filename',
            "_scriptName = _scriptName || __filename",
            data)
        outfile_js.write(data_no_logical_or_assignment)
        outfile_min_js.write(data_no_logical_or_assignment)
    # effekseer.src.js は UTF-8 でエンコーディングされている。
    # Windows 環境でも正しく読み込めるよう、エンコーディングを指定する。
    with open(effekseer_src_js, encoding="utf-8") as infile:
        data = infile.read()
        data_es5 = dukpy.babel_compile(data)["code"]
        outfile_js.write(data_es5)
        outfile_min_js.write(jsmin.jsmin(data_es5))

    os.chdir('../')

# <<<<<<< ORIGINAL
"""
compile('build_asmjs',
    '../src/',
    '-DAS_WASM=OFF',
    license_js = os.path.join("..", "src", "js", "license.js"),
    effekseer_core_js = os.path.join(".", "effekseer.core.js"),
    effekseer_src_js = os.path.join("..", "src", "js", "effekseer.src.js"),
    effekseer_js = os.path.join("..", "Release", "effekseer_asmjs.js"),
    effekseer_min_js = os.path.join("..", "Release", "effekseer_asmjs.min.js"))
"""
# =======
# >>>>>>> CHANGED

compile('build_wasm',
    '../src/',
    '-DAS_WASM=ON',
    license_js = os.path.join("..", "src", "js", "license.js"),
    effekseer_core_js = os.path.join(".", "effekseer.core.js"),
    effekseer_src_js = os.path.join("..", "src", "js", "effekseer.src.js"),
    effekseer_js = os.path.join("..", "Release", "effekseer.js"),
    effekseer_min_js = os.path.join("..", "Release", "effekseer.min.js"))

shutil.copy('build_wasm/effekseer.core.wasm', 'Release/effekseer.wasm')