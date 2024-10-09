/*!
 *  Effekseer for Akashic Engine
 *  https://github.com/akashic-games/effekseer-for-akashic-engine
 *
 *  This software is licensed under the MIT License.
 *  http://www.opensource.org/licenses/mit-license
 */
var effekseer_native = (() => {
  var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  if (typeof __filename != 'undefined') _scriptName = _scriptName || __filename;
  return (
function(moduleArg = {}) {
  var moduleRtn;

var Module=Object.assign({},moduleArg);var readyPromiseResolve,readyPromiseReject;var readyPromise=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject});var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(ENVIRONMENT_IS_NODE){}var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary;if(ENVIRONMENT_IS_NODE){var fs=require("fs");var nodePath=require("path");scriptDirectory=__dirname+"/";read_=(filename,binary)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);return fs.readFileSync(filename,binary?undefined:"utf8")};readBinary=filename=>{var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}return ret};readAsync=function(filename,onload,onerror){let binary=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);fs.readFile(filename,binary?undefined:"utf8",(err,data)=>{if(err)onerror(err);else onload(binary?data.buffer:data)})};if(!Module["thisProgram"]&&process.argv.length>1){thisProgram=process.argv[1].replace(/\\/g,"/")}arguments_=process.argv.slice(2);quit_=(status,toThrow)=>{process.exitCode=status;throw toThrow}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptName){scriptDirectory=_scriptName}if(scriptDirectory.startsWith("blob:")){scriptDirectory=""}else{scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var wasmMemory;var ABORT=false;var EXITSTATUS;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){var _Module$monitorRunDep;runDependencies++;(_Module$monitorRunDep=Module["monitorRunDependencies"])===null||_Module$monitorRunDep===void 0||_Module$monitorRunDep.call(Module,runDependencies)}function removeRunDependency(id){var _Module$monitorRunDep2;runDependencies--;(_Module$monitorRunDep2=Module["monitorRunDependencies"])===null||_Module$monitorRunDep2===void 0||_Module$monitorRunDep2.call(Module,runDependencies);if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){var _Module$onAbort;(_Module$onAbort=Module["onAbort"])===null||_Module$onAbort===void 0||_Module$onAbort.call(Module,what);what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";var isDataURI=filename=>filename.startsWith(dataURIPrefix);var isFileURI=filename=>filename.startsWith("file://");function findWasmBinary(){var f="effekseer.core.wasm";if(!isDataURI(f)){return locateFile(f)}return f}var wasmBinaryFile;function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}function getBinaryPromise(binaryFile){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(binaryFile)){return fetch(binaryFile,{credentials:"same-origin"}).then(response=>{if(!response["ok"]){throw"failed to load wasm binary file at '".concat(binaryFile,"'")}return response["arrayBuffer"]()}).catch(()=>getBinarySync(binaryFile))}else if(readAsync){return new Promise((resolve,reject)=>{readAsync(binaryFile,response=>resolve(new Uint8Array(response)),reject)})}}return Promise.resolve().then(()=>getBinarySync(binaryFile))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then(binary=>WebAssembly.instantiate(binary,imports)).then(receiver,reason=>{err("failed to asynchronously prepare wasm: ".concat(reason));abort(reason)})}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(binaryFile)&&!isFileURI(binaryFile)&&!ENVIRONMENT_IS_NODE&&typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then(response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,function(reason){err("wasm streaming compile failed: ".concat(reason));err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(binaryFile,imports,callback)})})}return instantiateArrayBuffer(binaryFile,imports,callback)}function getWasmImports(){return{env:wasmImports,wasi_snapshot_preview1:wasmImports}}function createWasm(){var info=getWasmImports();function receiveInstance(instance,module){wasmExports=instance.exports;wasmMemory=wasmExports["memory"];updateMemoryViews();addOnInit(wasmExports["__wasm_call_ctors"]);removeRunDependency("wasm-instantiate");return wasmExports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){err("Module.instantiateWasm callback failed with error: ".concat(e));readyPromiseReject(e)}}if(!wasmBinaryFile)wasmBinaryFile=findWasmBinary();instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult).catch(readyPromiseReject);return{}}var ASM_CONSTS={367736:($0,$1)=>Module._loadBinary(UTF16ToString($0),$1)!=null,367798:($0,$1,$2,$3)=>{var buffer=Module._loadBinary(UTF16ToString($0),$3);var memptr=_malloc(buffer.byteLength);HEAP8.set(new Uint8Array(buffer),memptr);setValue($1,memptr,"i32");setValue($2,buffer.byteLength,"i32")},368011:$0=>Module._loadImage(UTF16ToString($0))!=null,368068:($0,$1)=>{var gl=Module["__akashic__"].gl;var binding=GLctx.getParameter(GLctx.TEXTURE_BINDING_2D);var img=Module._loadImage(UTF16ToString($0));GLctx.bindTexture(GLctx.TEXTURE_2D,GL.textures[$1]);var pa=gl.getParameter(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL);var oldFlipY=gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL);GLctx.pixelStorei(GLctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL,false);GLctx.texImage2D(GLctx.TEXTURE_2D,0,GLctx.RGBA,GLctx.RGBA,GLctx.UNSIGNED_BYTE,img);if(Module._isPowerOfTwo(img)){GLctx.generateMipmap(GLctx.TEXTURE_2D)}GLctx.pixelStorei(GLctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pa);GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL,oldFlipY);GLctx.bindTexture(GLctx.TEXTURE_2D,binding)}};function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit(".concat(status,")");this.status=status}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var noExitRuntime=Module["noExitRuntime"]||true;function setValue(ptr,value){let type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"i8";if(type.endsWith("*"))type="*";switch(type){case"i1":HEAP8[ptr]=value;break;case"i8":HEAP8[ptr]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":abort("to do setValue(i64) use WASM_BIGINT");case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;case"*":HEAPU32[ptr>>2]=value;break;default:abort("invalid type for setValue: ".concat(type))}}var stackRestore=val=>__emscripten_stack_restore(val);var stackSave=()=>_emscripten_stack_get_current();class ExceptionInfo{constructor(excPtr){this.excPtr=excPtr;this.ptr=excPtr-24}set_type(type){HEAPU32[this.ptr+4>>2]=type}get_type(){return HEAPU32[this.ptr+4>>2]}set_destructor(destructor){HEAPU32[this.ptr+8>>2]=destructor}get_destructor(){return HEAPU32[this.ptr+8>>2]}set_caught(caught){caught=caught?1:0;HEAP8[this.ptr+12]=caught}get_caught(){return HEAP8[this.ptr+12]!=0}set_rethrown(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13]=rethrown}get_rethrown(){return HEAP8[this.ptr+13]!=0}init(type,destructor){this.set_adjusted_ptr(0);this.set_type(type);this.set_destructor(destructor)}set_adjusted_ptr(adjustedPtr){HEAPU32[this.ptr+16>>2]=adjustedPtr}get_adjusted_ptr(){return HEAPU32[this.ptr+16>>2]}get_exception_ptr(){var isPointer=___cxa_is_pointer_type(this.get_type());if(isPointer){return HEAPU32[this.excPtr>>2]}var adjusted=this.get_adjusted_ptr();if(adjusted!==0)return adjusted;return this.excPtr}}var exceptionLast=0;var uncaughtExceptionCount=0;var ___cxa_throw=(ptr,type,destructor)=>{var info=new ExceptionInfo(ptr);info.init(type,destructor);exceptionLast=ptr;uncaughtExceptionCount++;throw exceptionLast};var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;var UTF8ArrayToString=(heapOrArray,idx,maxBytesToRead)=>{var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str};var UTF8ToString=(ptr,maxBytesToRead)=>ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):"";var SYSCALLS={varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;return 0}function ___syscall_ioctl(fd,op,varargs){SYSCALLS.varargs=varargs;return 0}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs}var __abort_js=()=>{abort("")};var nowIsMonotonic=1;var __emscripten_get_now_is_monotonic=()=>nowIsMonotonic;var __emscripten_memcpy_js=(dest,src,num)=>HEAPU8.copyWithin(dest,src,src+num);var _emscripten_set_main_loop_timing=(mode,value)=>{Browser.mainLoop.timingMode=mode;Browser.mainLoop.timingValue=value;if(!Browser.mainLoop.func){return 1}if(!Browser.mainLoop.running){Browser.mainLoop.running=true}if(mode==0){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setTimeout(){var timeUntilNextTick=Math.max(0,Browser.mainLoop.tickStartTime+value-_emscripten_get_now())|0;setTimeout(Browser.mainLoop.runner,timeUntilNextTick)};Browser.mainLoop.method="timeout"}else if(mode==1){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_rAF(){Browser.requestAnimationFrame(Browser.mainLoop.runner)};Browser.mainLoop.method="rAF"}else if(mode==2){if(typeof Browser.setImmediate=="undefined"){if(typeof setImmediate=="undefined"){var setImmediates=[];var emscriptenMainLoopMessageId="setimmediate";var Browser_setImmediate_messageHandler=event=>{if(event.data===emscriptenMainLoopMessageId||event.data.target===emscriptenMainLoopMessageId){event.stopPropagation();setImmediates.shift()()}};addEventListener("message",Browser_setImmediate_messageHandler,true);Browser.setImmediate=function Browser_emulated_setImmediate(func){setImmediates.push(func);if(ENVIRONMENT_IS_WORKER){if(Module["setImmediates"]===undefined)Module["setImmediates"]=[];Module["setImmediates"].push(func);postMessage({target:emscriptenMainLoopMessageId})}else postMessage(emscriptenMainLoopMessageId,"*")}}else{Browser.setImmediate=setImmediate}}Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setImmediate(){Browser.setImmediate(Browser.mainLoop.runner)};Browser.mainLoop.method="immediate"}return 0};var _emscripten_get_now;_emscripten_get_now=()=>performance.now();var setMainLoop=(browserIterationFunc,fps,simulateInfiniteLoop,arg,noSetTiming)=>{Browser.mainLoop.func=browserIterationFunc;Browser.mainLoop.arg=arg;var thisMainLoopId=Browser.mainLoop.currentlyRunningMainloop;function checkIsRunning(){if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop){return false}return true}Browser.mainLoop.running=false;Browser.mainLoop.runner=function Browser_mainLoop_runner(){var _SDL$audio,_SDL$audio$queueNewAu;if(ABORT)return;if(Browser.mainLoop.queue.length>0){var start=Date.now();var blocker=Browser.mainLoop.queue.shift();blocker.func(blocker.arg);if(Browser.mainLoop.remainingBlockers){var remaining=Browser.mainLoop.remainingBlockers;var next=remaining%1==0?remaining-1:Math.floor(remaining);if(blocker.counted){Browser.mainLoop.remainingBlockers=next}else{next=next+.5;Browser.mainLoop.remainingBlockers=(8*remaining+next)/9}}Browser.mainLoop.updateStatus();if(!checkIsRunning())return;setTimeout(Browser.mainLoop.runner,0);return}if(!checkIsRunning())return;Browser.mainLoop.currentFrameNumber=Browser.mainLoop.currentFrameNumber+1|0;if(Browser.mainLoop.timingMode==1&&Browser.mainLoop.timingValue>1&&Browser.mainLoop.currentFrameNumber%Browser.mainLoop.timingValue!=0){Browser.mainLoop.scheduler();return}else if(Browser.mainLoop.timingMode==0){Browser.mainLoop.tickStartTime=_emscripten_get_now()}Browser.mainLoop.runIter(browserIterationFunc);if(!checkIsRunning())return;if(typeof SDL=="object")(_SDL$audio=SDL.audio)===null||_SDL$audio===void 0||(_SDL$audio$queueNewAu=_SDL$audio.queueNewAudioData)===null||_SDL$audio$queueNewAu===void 0||_SDL$audio$queueNewAu.call(_SDL$audio);Browser.mainLoop.scheduler()};if(!noSetTiming){if(fps&&fps>0){_emscripten_set_main_loop_timing(0,1e3/fps)}else{_emscripten_set_main_loop_timing(1,1)}Browser.mainLoop.scheduler()}if(simulateInfiniteLoop){throw"unwind"}};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var runtimeKeepaliveCounter=0;var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){var _Module$onExit;(_Module$onExit=Module["onExit"])===null||_Module$onExit===void 0||_Module$onExit.call(Module,code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var _exit=exitJS;var maybeExit=()=>{if(!keepRuntimeAlive()){try{_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{func();maybeExit()}catch(e){handleException(e)}};var safeSetTimeout=(func,timeout)=>setTimeout(()=>{callUserCallback(func)},timeout);var warnOnce=text=>{warnOnce.shown||(warnOnce.shown={});if(!warnOnce.shown[text]){warnOnce.shown[text]=1;if(ENVIRONMENT_IS_NODE)text="warning: "+text;err(text)}};var Browser={mainLoop:{running:false,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause(){Browser.mainLoop.scheduler=null;Browser.mainLoop.currentlyRunningMainloop++},resume(){Browser.mainLoop.currentlyRunningMainloop++;var timingMode=Browser.mainLoop.timingMode;var timingValue=Browser.mainLoop.timingValue;var func=Browser.mainLoop.func;Browser.mainLoop.func=null;setMainLoop(func,0,false,Browser.mainLoop.arg,true);_emscripten_set_main_loop_timing(timingMode,timingValue);Browser.mainLoop.scheduler()},updateStatus(){if(Module["setStatus"]){var message=Module["statusMessage"]||"Please wait...";var remaining=Browser.mainLoop.remainingBlockers;var expected=Browser.mainLoop.expectedBlockers;if(remaining){if(remaining<expected){Module["setStatus"]("{message} ({expected - remaining}/{expected})")}else{Module["setStatus"](message)}}else{Module["setStatus"]("")}}},runIter(func){var _Module$postMainLoop;if(ABORT)return;if(Module["preMainLoop"]){var preRet=Module["preMainLoop"]();if(preRet===false){return}}callUserCallback(func);(_Module$postMainLoop=Module["postMainLoop"])===null||_Module$postMainLoop===void 0||_Module$postMainLoop.call(Module)}},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init(){if(Browser.initted)return;Browser.initted=true;function pointerLockChange(){Browser.pointerLock=document["pointerLockElement"]===Module["canvas"]||document["mozPointerLockElement"]===Module["canvas"]||document["webkitPointerLockElement"]===Module["canvas"]||document["msPointerLockElement"]===Module["canvas"]}var canvas=Module["canvas"];if(canvas){canvas.requestPointerLock=canvas["requestPointerLock"]||canvas["mozRequestPointerLock"]||canvas["webkitRequestPointerLock"]||canvas["msRequestPointerLock"]||(()=>{});canvas.exitPointerLock=document["exitPointerLock"]||document["mozExitPointerLock"]||document["webkitExitPointerLock"]||document["msExitPointerLock"]||(()=>{});canvas.exitPointerLock=canvas.exitPointerLock.bind(document);document.addEventListener("pointerlockchange",pointerLockChange,false);document.addEventListener("mozpointerlockchange",pointerLockChange,false);document.addEventListener("webkitpointerlockchange",pointerLockChange,false);document.addEventListener("mspointerlockchange",pointerLockChange,false);if(Module["elementPointerLock"]){canvas.addEventListener("click",ev=>{if(!Browser.pointerLock&&Module["canvas"].requestPointerLock){Module["canvas"].requestPointerLock();ev.preventDefault()}},false)}}},createContext(canvas,useWebGL,setInModule,webGLContextAttributes){if(useWebGL&&Module.ctx&&canvas==Module.canvas)return Module.ctx;var ctx;var contextHandle;if(useWebGL){var contextAttributes={antialias:false,alpha:false,majorVersion:1};if(webGLContextAttributes){for(var attribute in webGLContextAttributes){contextAttributes[attribute]=webGLContextAttributes[attribute]}}if(typeof GL!="undefined"){contextHandle=GL.createContext(canvas,contextAttributes);if(contextHandle){ctx=GL.getContext(contextHandle).GLctx}}}else{ctx=canvas.getContext("2d")}if(!ctx)return null;if(setInModule){Module.ctx=ctx;if(useWebGL)GL.makeContextCurrent(contextHandle);Module.useWebGL=useWebGL;Browser.moduleContextCreatedCallbacks.forEach(callback=>callback());Browser.init()}return ctx},destroyContext(canvas,useWebGL,setInModule){},fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen(lockPointer,resizeCanvas){Browser.lockPointer=lockPointer;Browser.resizeCanvas=resizeCanvas;if(typeof Browser.lockPointer=="undefined")Browser.lockPointer=true;if(typeof Browser.resizeCanvas=="undefined")Browser.resizeCanvas=false;var canvas=Module["canvas"];function fullscreenChange(){var _Module$onFullScreen,_Module$onFullscreen;Browser.isFullscreen=false;var canvasContainer=canvas.parentNode;if((document["fullscreenElement"]||document["mozFullScreenElement"]||document["msFullscreenElement"]||document["webkitFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvasContainer){canvas.exitFullscreen=Browser.exitFullscreen;if(Browser.lockPointer)canvas.requestPointerLock();Browser.isFullscreen=true;if(Browser.resizeCanvas){Browser.setFullscreenCanvasSize()}else{Browser.updateCanvasDimensions(canvas)}}else{canvasContainer.parentNode.insertBefore(canvas,canvasContainer);canvasContainer.parentNode.removeChild(canvasContainer);if(Browser.resizeCanvas){Browser.setWindowedCanvasSize()}else{Browser.updateCanvasDimensions(canvas)}}(_Module$onFullScreen=Module["onFullScreen"])===null||_Module$onFullScreen===void 0||_Module$onFullScreen.call(Module,Browser.isFullscreen);(_Module$onFullscreen=Module["onFullscreen"])===null||_Module$onFullscreen===void 0||_Module$onFullscreen.call(Module,Browser.isFullscreen)}if(!Browser.fullscreenHandlersInstalled){Browser.fullscreenHandlersInstalled=true;document.addEventListener("fullscreenchange",fullscreenChange,false);document.addEventListener("mozfullscreenchange",fullscreenChange,false);document.addEventListener("webkitfullscreenchange",fullscreenChange,false);document.addEventListener("MSFullscreenChange",fullscreenChange,false)}var canvasContainer=document.createElement("div");canvas.parentNode.insertBefore(canvasContainer,canvas);canvasContainer.appendChild(canvas);canvasContainer.requestFullscreen=canvasContainer["requestFullscreen"]||canvasContainer["mozRequestFullScreen"]||canvasContainer["msRequestFullscreen"]||(canvasContainer["webkitRequestFullscreen"]?()=>canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]):null)||(canvasContainer["webkitRequestFullScreen"]?()=>canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]):null);canvasContainer.requestFullscreen()},exitFullscreen(){if(!Browser.isFullscreen){return false}var CFS=document["exitFullscreen"]||document["cancelFullScreen"]||document["mozCancelFullScreen"]||document["msExitFullscreen"]||document["webkitCancelFullScreen"]||(()=>{});CFS.apply(document,[]);return true},nextRAF:0,fakeRequestAnimationFrame(func){var now=Date.now();if(Browser.nextRAF===0){Browser.nextRAF=now+1e3/60}else{while(now+2>=Browser.nextRAF){Browser.nextRAF+=1e3/60}}var delay=Math.max(Browser.nextRAF-now,0);setTimeout(func,delay)},requestAnimationFrame(func){if(typeof requestAnimationFrame=="function"){requestAnimationFrame(func);return}var RAF=Browser.fakeRequestAnimationFrame;RAF(func)},safeSetTimeout(func,timeout){return safeSetTimeout(func,timeout)},safeRequestAnimationFrame(func){return Browser.requestAnimationFrame(()=>{callUserCallback(func)})},getMimetype(name){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[name.substr(name.lastIndexOf(".")+1)]},getUserMedia(func){var _window;(_window=window).getUserMedia||(_window.getUserMedia=navigator["getUserMedia"]||navigator["mozGetUserMedia"]);window.getUserMedia(func)},getMovementX(event){return event["movementX"]||event["mozMovementX"]||event["webkitMovementX"]||0},getMovementY(event){return event["movementY"]||event["mozMovementY"]||event["webkitMovementY"]||0},getMouseWheelDelta(event){var delta=0;switch(event.type){case"DOMMouseScroll":delta=event.detail/3;break;case"mousewheel":delta=event.wheelDelta/120;break;case"wheel":delta=event.deltaY;switch(event.deltaMode){case 0:delta/=100;break;case 1:delta/=3;break;case 2:delta*=80;break;default:throw"unrecognized mouse wheel delta mode: "+event.deltaMode}break;default:throw"unrecognized mouse wheel event: "+event.type}return delta},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseCoords(pageX,pageY){var rect=Module["canvas"].getBoundingClientRect();var cw=Module["canvas"].width;var ch=Module["canvas"].height;var scrollX=typeof window.scrollX!="undefined"?window.scrollX:window.pageXOffset;var scrollY=typeof window.scrollY!="undefined"?window.scrollY:window.pageYOffset;var adjustedX=pageX-(scrollX+rect.left);var adjustedY=pageY-(scrollY+rect.top);adjustedX=adjustedX*(cw/rect.width);adjustedY=adjustedY*(ch/rect.height);return{x:adjustedX,y:adjustedY}},setMouseCoords(pageX,pageY){const{x:x,y:y}=Browser.calculateMouseCoords(pageX,pageY);Browser.mouseMovementX=x-Browser.mouseX;Browser.mouseMovementY=y-Browser.mouseY;Browser.mouseX=x;Browser.mouseY=y},calculateMouseEvent(event){if(Browser.pointerLock){if(event.type!="mousemove"&&"mozMovementX"in event){Browser.mouseMovementX=Browser.mouseMovementY=0}else{Browser.mouseMovementX=Browser.getMovementX(event);Browser.mouseMovementY=Browser.getMovementY(event)}Browser.mouseX+=Browser.mouseMovementX;Browser.mouseY+=Browser.mouseMovementY}else{if(event.type==="touchstart"||event.type==="touchend"||event.type==="touchmove"){var touch=event.touch;if(touch===undefined){return}var coords=Browser.calculateMouseCoords(touch.pageX,touch.pageY);if(event.type==="touchstart"){Browser.lastTouches[touch.identifier]=coords;Browser.touches[touch.identifier]=coords}else if(event.type==="touchend"||event.type==="touchmove"){var last=Browser.touches[touch.identifier];last||(last=coords);Browser.lastTouches[touch.identifier]=last;Browser.touches[touch.identifier]=coords}return}Browser.setMouseCoords(event.pageX,event.pageY)}},resizeListeners:[],updateResizeListeners(){var canvas=Module["canvas"];Browser.resizeListeners.forEach(listener=>listener(canvas.width,canvas.height))},setCanvasSize(width,height,noUpdates){var canvas=Module["canvas"];Browser.updateCanvasDimensions(canvas,width,height);if(!noUpdates)Browser.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen>>2];flags=flags|8388608;HEAP32[SDL.screen>>2]=flags}Browser.updateCanvasDimensions(Module["canvas"]);Browser.updateResizeListeners()},setWindowedCanvasSize(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen>>2];flags=flags&~8388608;HEAP32[SDL.screen>>2]=flags}Browser.updateCanvasDimensions(Module["canvas"]);Browser.updateResizeListeners()},updateCanvasDimensions(canvas,wNative,hNative){if(wNative&&hNative){canvas.widthNative=wNative;canvas.heightNative=hNative}else{wNative=canvas.widthNative;hNative=canvas.heightNative}var w=wNative;var h=hNative;if(Module["forcedAspectRatio"]&&Module["forcedAspectRatio"]>0){if(w/h<Module["forcedAspectRatio"]){w=Math.round(h*Module["forcedAspectRatio"])}else{h=Math.round(w/Module["forcedAspectRatio"])}}if((document["fullscreenElement"]||document["mozFullScreenElement"]||document["msFullscreenElement"]||document["webkitFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvas.parentNode&&typeof screen!="undefined"){var factor=Math.min(screen.width/w,screen.height/h);w=Math.round(w*factor);h=Math.round(h*factor)}if(Browser.resizeCanvas){if(canvas.width!=w)canvas.width=w;if(canvas.height!=h)canvas.height=h;if(typeof canvas.style!="undefined"){canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}else{if(canvas.width!=wNative)canvas.width=wNative;if(canvas.height!=hNative)canvas.height=hNative;if(typeof canvas.style!="undefined"){if(w!=wNative||h!=hNative){canvas.style.setProperty("width",w+"px","important");canvas.style.setProperty("height",h+"px","important")}else{canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}}}};var AL={QUEUE_INTERVAL:25,QUEUE_LOOKAHEAD:.1,DEVICE_NAME:"Emscripten OpenAL",CAPTURE_DEVICE_NAME:"Emscripten OpenAL capture",ALC_EXTENSIONS:{ALC_SOFT_pause_device:true,ALC_SOFT_HRTF:true},AL_EXTENSIONS:{AL_EXT_float32:true,AL_SOFT_loop_points:true,AL_SOFT_source_length:true,AL_EXT_source_distance_model:true,AL_SOFT_source_spatialize:true},_alcErr:0,alcErr:0,deviceRefCounts:{},alcStringCache:{},paused:false,stringCache:{},contexts:{},currentCtx:null,buffers:{0:{id:0,refCount:0,audioBuf:null,frequency:0,bytesPerSample:2,channels:1,length:0}},paramArray:[],_nextId:1,newId:()=>AL.freeIds.length>0?AL.freeIds.pop():AL._nextId++,freeIds:[],scheduleContextAudio:ctx=>{if(Browser.mainLoop.timingMode===1&&document["visibilityState"]!="visible"){return}for(var i in ctx.sources){AL.scheduleSourceAudio(ctx.sources[i])}},scheduleSourceAudio:(src,lookahead)=>{if(Browser.mainLoop.timingMode===1&&document["visibilityState"]!="visible"){return}if(src.state!==4114){return}var currentTime=AL.updateSourceTime(src);var startTime=src.bufStartTime;var startOffset=src.bufOffset;var bufCursor=src.bufsProcessed;for(var i=0;i<src.audioQueue.length;i++){var audioSrc=src.audioQueue[i];startTime=audioSrc._startTime+audioSrc._duration;startOffset=0;bufCursor+=audioSrc._skipCount+1}if(!lookahead){lookahead=AL.QUEUE_LOOKAHEAD}var lookaheadTime=currentTime+lookahead;var skipCount=0;while(startTime<lookaheadTime){if(bufCursor>=src.bufQueue.length){if(src.looping){bufCursor%=src.bufQueue.length}else{break}}var buf=src.bufQueue[bufCursor%src.bufQueue.length];if(buf.length===0){skipCount++;if(skipCount===src.bufQueue.length){break}}else{var audioSrc=src.context.audioCtx.createBufferSource();audioSrc.buffer=buf.audioBuf;audioSrc.playbackRate.value=src.playbackRate;if(buf.audioBuf._loopStart||buf.audioBuf._loopEnd){audioSrc.loopStart=buf.audioBuf._loopStart;audioSrc.loopEnd=buf.audioBuf._loopEnd}var duration=0;if(src.type===4136&&src.looping){duration=Number.POSITIVE_INFINITY;audioSrc.loop=true;if(buf.audioBuf._loopStart){audioSrc.loopStart=buf.audioBuf._loopStart}if(buf.audioBuf._loopEnd){audioSrc.loopEnd=buf.audioBuf._loopEnd}}else{duration=(buf.audioBuf.duration-startOffset)/src.playbackRate}audioSrc._startOffset=startOffset;audioSrc._duration=duration;audioSrc._skipCount=skipCount;skipCount=0;audioSrc.connect(src.gain);if(typeof audioSrc.start!="undefined"){startTime=Math.max(startTime,src.context.audioCtx.currentTime);audioSrc.start(startTime,startOffset)}else if(typeof audioSrc.noteOn!="undefined"){startTime=Math.max(startTime,src.context.audioCtx.currentTime);audioSrc.noteOn(startTime)}audioSrc._startTime=startTime;src.audioQueue.push(audioSrc);startTime+=duration}startOffset=0;bufCursor++}},updateSourceTime:src=>{var currentTime=src.context.audioCtx.currentTime;if(src.state!==4114){return currentTime}if(!isFinite(src.bufStartTime)){src.bufStartTime=currentTime-src.bufOffset/src.playbackRate;src.bufOffset=0}var nextStartTime=0;while(src.audioQueue.length){var audioSrc=src.audioQueue[0];src.bufsProcessed+=audioSrc._skipCount;nextStartTime=audioSrc._startTime+audioSrc._duration;if(currentTime<nextStartTime){break}src.audioQueue.shift();src.bufStartTime=nextStartTime;src.bufOffset=0;src.bufsProcessed++}if(src.bufsProcessed>=src.bufQueue.length&&!src.looping){AL.setSourceState(src,4116)}else if(src.type===4136&&src.looping){var buf=src.bufQueue[0];if(buf.length===0){src.bufOffset=0}else{var delta=(currentTime-src.bufStartTime)*src.playbackRate;var loopStart=buf.audioBuf._loopStart||0;var loopEnd=buf.audioBuf._loopEnd||buf.audioBuf.duration;if(loopEnd<=loopStart){loopEnd=buf.audioBuf.duration}if(delta<loopEnd){src.bufOffset=delta}else{src.bufOffset=loopStart+(delta-loopStart)%(loopEnd-loopStart)}}}else if(src.audioQueue[0]){src.bufOffset=(currentTime-src.audioQueue[0]._startTime)*src.playbackRate}else{if(src.type!==4136&&src.looping){var srcDuration=AL.sourceDuration(src)/src.playbackRate;if(srcDuration>0){src.bufStartTime+=Math.floor((currentTime-src.bufStartTime)/srcDuration)*srcDuration}}for(var i=0;i<src.bufQueue.length;i++){if(src.bufsProcessed>=src.bufQueue.length){if(src.looping){src.bufsProcessed%=src.bufQueue.length}else{AL.setSourceState(src,4116);break}}var buf=src.bufQueue[src.bufsProcessed];if(buf.length>0){nextStartTime=src.bufStartTime+buf.audioBuf.duration/src.playbackRate;if(currentTime<nextStartTime){src.bufOffset=(currentTime-src.bufStartTime)*src.playbackRate;break}src.bufStartTime=nextStartTime}src.bufOffset=0;src.bufsProcessed++}}return currentTime},cancelPendingSourceAudio:src=>{AL.updateSourceTime(src);for(var i=1;i<src.audioQueue.length;i++){var audioSrc=src.audioQueue[i];audioSrc.stop()}if(src.audioQueue.length>1){src.audioQueue.length=1}},stopSourceAudio:src=>{for(var i=0;i<src.audioQueue.length;i++){src.audioQueue[i].stop()}src.audioQueue.length=0},setSourceState:(src,state)=>{if(state===4114){if(src.state===4114||src.state==4116){src.bufsProcessed=0;src.bufOffset=0}else{}AL.stopSourceAudio(src);src.state=4114;src.bufStartTime=Number.NEGATIVE_INFINITY;AL.scheduleSourceAudio(src)}else if(state===4115){if(src.state===4114){AL.updateSourceTime(src);AL.stopSourceAudio(src);src.state=4115}}else if(state===4116){if(src.state!==4113){src.state=4116;src.bufsProcessed=src.bufQueue.length;src.bufStartTime=Number.NEGATIVE_INFINITY;src.bufOffset=0;AL.stopSourceAudio(src)}}else if(state===4113){if(src.state!==4113){src.state=4113;src.bufsProcessed=0;src.bufStartTime=Number.NEGATIVE_INFINITY;src.bufOffset=0;AL.stopSourceAudio(src)}}},initSourcePanner:src=>{if(src.type===4144){return}var templateBuf=AL.buffers[0];for(var i=0;i<src.bufQueue.length;i++){if(src.bufQueue[i].id!==0){templateBuf=src.bufQueue[i];break}}if(src.spatialize===1||src.spatialize===2&&templateBuf.channels===1){if(src.panner){return}src.panner=src.context.audioCtx.createPanner();AL.updateSourceGlobal(src);AL.updateSourceSpace(src);src.panner.connect(src.context.gain);src.gain.disconnect();src.gain.connect(src.panner)}else{if(!src.panner){return}src.panner.disconnect();src.gain.disconnect();src.gain.connect(src.context.gain);src.panner=null}},updateContextGlobal:ctx=>{for(var i in ctx.sources){AL.updateSourceGlobal(ctx.sources[i])}},updateSourceGlobal:src=>{var panner=src.panner;if(!panner){return}panner.refDistance=src.refDistance;panner.maxDistance=src.maxDistance;panner.rolloffFactor=src.rolloffFactor;panner.panningModel=src.context.hrtf?"HRTF":"equalpower";var distanceModel=src.context.sourceDistanceModel?src.distanceModel:src.context.distanceModel;switch(distanceModel){case 0:panner.distanceModel="inverse";panner.refDistance=340282e33;break;case 53249:case 53250:panner.distanceModel="inverse";break;case 53251:case 53252:panner.distanceModel="linear";break;case 53253:case 53254:panner.distanceModel="exponential";break}},updateListenerSpace:ctx=>{var listener=ctx.audioCtx.listener;if(listener.positionX){listener.positionX.value=ctx.listener.position[0];listener.positionY.value=ctx.listener.position[1];listener.positionZ.value=ctx.listener.position[2]}else{listener.setPosition(ctx.listener.position[0],ctx.listener.position[1],ctx.listener.position[2])}if(listener.forwardX){listener.forwardX.value=ctx.listener.direction[0];listener.forwardY.value=ctx.listener.direction[1];listener.forwardZ.value=ctx.listener.direction[2];listener.upX.value=ctx.listener.up[0];listener.upY.value=ctx.listener.up[1];listener.upZ.value=ctx.listener.up[2]}else{listener.setOrientation(ctx.listener.direction[0],ctx.listener.direction[1],ctx.listener.direction[2],ctx.listener.up[0],ctx.listener.up[1],ctx.listener.up[2])}for(var i in ctx.sources){AL.updateSourceSpace(ctx.sources[i])}},updateSourceSpace:src=>{if(!src.panner){return}var panner=src.panner;var posX=src.position[0];var posY=src.position[1];var posZ=src.position[2];var dirX=src.direction[0];var dirY=src.direction[1];var dirZ=src.direction[2];var listener=src.context.listener;var lPosX=listener.position[0];var lPosY=listener.position[1];var lPosZ=listener.position[2];if(src.relative){var lBackX=-listener.direction[0];var lBackY=-listener.direction[1];var lBackZ=-listener.direction[2];var lUpX=listener.up[0];var lUpY=listener.up[1];var lUpZ=listener.up[2];var inverseMagnitude=(x,y,z)=>{var length=Math.sqrt(x*x+y*y+z*z);if(length<Number.EPSILON){return 0}return 1/length};var invMag=inverseMagnitude(lBackX,lBackY,lBackZ);lBackX*=invMag;lBackY*=invMag;lBackZ*=invMag;invMag=inverseMagnitude(lUpX,lUpY,lUpZ);lUpX*=invMag;lUpY*=invMag;lUpZ*=invMag;var lRightX=lUpY*lBackZ-lUpZ*lBackY;var lRightY=lUpZ*lBackX-lUpX*lBackZ;var lRightZ=lUpX*lBackY-lUpY*lBackX;invMag=inverseMagnitude(lRightX,lRightY,lRightZ);lRightX*=invMag;lRightY*=invMag;lRightZ*=invMag;lUpX=lBackY*lRightZ-lBackZ*lRightY;lUpY=lBackZ*lRightX-lBackX*lRightZ;lUpZ=lBackX*lRightY-lBackY*lRightX;var oldX=dirX;var oldY=dirY;var oldZ=dirZ;dirX=oldX*lRightX+oldY*lUpX+oldZ*lBackX;dirY=oldX*lRightY+oldY*lUpY+oldZ*lBackY;dirZ=oldX*lRightZ+oldY*lUpZ+oldZ*lBackZ;oldX=posX;oldY=posY;oldZ=posZ;posX=oldX*lRightX+oldY*lUpX+oldZ*lBackX;posY=oldX*lRightY+oldY*lUpY+oldZ*lBackY;posZ=oldX*lRightZ+oldY*lUpZ+oldZ*lBackZ;posX+=lPosX;posY+=lPosY;posZ+=lPosZ}if(panner.positionX){if(posX!=panner.positionX.value)panner.positionX.value=posX;if(posY!=panner.positionY.value)panner.positionY.value=posY;if(posZ!=panner.positionZ.value)panner.positionZ.value=posZ}else{panner.setPosition(posX,posY,posZ)}if(panner.orientationX){if(dirX!=panner.orientationX.value)panner.orientationX.value=dirX;if(dirY!=panner.orientationY.value)panner.orientationY.value=dirY;if(dirZ!=panner.orientationZ.value)panner.orientationZ.value=dirZ}else{panner.setOrientation(dirX,dirY,dirZ)}var oldShift=src.dopplerShift;var velX=src.velocity[0];var velY=src.velocity[1];var velZ=src.velocity[2];var lVelX=listener.velocity[0];var lVelY=listener.velocity[1];var lVelZ=listener.velocity[2];if(posX===lPosX&&posY===lPosY&&posZ===lPosZ||velX===lVelX&&velY===lVelY&&velZ===lVelZ){src.dopplerShift=1}else{var speedOfSound=src.context.speedOfSound;var dopplerFactor=src.context.dopplerFactor;var slX=lPosX-posX;var slY=lPosY-posY;var slZ=lPosZ-posZ;var magSl=Math.sqrt(slX*slX+slY*slY+slZ*slZ);var vls=(slX*lVelX+slY*lVelY+slZ*lVelZ)/magSl;var vss=(slX*velX+slY*velY+slZ*velZ)/magSl;vls=Math.min(vls,speedOfSound/dopplerFactor);vss=Math.min(vss,speedOfSound/dopplerFactor);src.dopplerShift=(speedOfSound-dopplerFactor*vls)/(speedOfSound-dopplerFactor*vss)}if(src.dopplerShift!==oldShift){AL.updateSourceRate(src)}},updateSourceRate:src=>{if(src.state===4114){AL.cancelPendingSourceAudio(src);var audioSrc=src.audioQueue[0];if(!audioSrc){return}var duration;if(src.type===4136&&src.looping){duration=Number.POSITIVE_INFINITY}else{duration=(audioSrc.buffer.duration-audioSrc._startOffset)/src.playbackRate}audioSrc._duration=duration;audioSrc.playbackRate.value=src.playbackRate;AL.scheduleSourceAudio(src)}},sourceDuration:src=>{var length=0;for(var i=0;i<src.bufQueue.length;i++){var audioBuf=src.bufQueue[i].audioBuf;length+=audioBuf?audioBuf.duration:0}return length},sourceTell:src=>{AL.updateSourceTime(src);var offset=0;for(var i=0;i<src.bufsProcessed;i++){if(src.bufQueue[i].audioBuf){offset+=src.bufQueue[i].audioBuf.duration}}offset+=src.bufOffset;return offset},sourceSeek:(src,offset)=>{var playing=src.state==4114;if(playing){AL.setSourceState(src,4113)}if(src.bufQueue[src.bufsProcessed].audioBuf!==null){src.bufsProcessed=0;while(offset>src.bufQueue[src.bufsProcessed].audioBuf.duration){offset-=src.bufQueue[src.bufsProcessed].audiobuf.duration;src.bufsProcessed++}src.bufOffset=offset}if(playing){AL.setSourceState(src,4114)}},getGlobalParam:(funcname,param)=>{if(!AL.currentCtx){return null}switch(param){case 49152:return AL.currentCtx.dopplerFactor;case 49155:return AL.currentCtx.speedOfSound;case 53248:return AL.currentCtx.distanceModel;default:AL.currentCtx.err=40962;return null}},setGlobalParam:(funcname,param,value)=>{if(!AL.currentCtx){return}switch(param){case 49152:if(!Number.isFinite(value)||value<0){AL.currentCtx.err=40963;return}AL.currentCtx.dopplerFactor=value;AL.updateListenerSpace(AL.currentCtx);break;case 49155:if(!Number.isFinite(value)||value<=0){AL.currentCtx.err=40963;return}AL.currentCtx.speedOfSound=value;AL.updateListenerSpace(AL.currentCtx);break;case 53248:switch(value){case 0:case 53249:case 53250:case 53251:case 53252:case 53253:case 53254:AL.currentCtx.distanceModel=value;AL.updateContextGlobal(AL.currentCtx);break;default:AL.currentCtx.err=40963;return}break;default:AL.currentCtx.err=40962;return}},getListenerParam:(funcname,param)=>{if(!AL.currentCtx){return null}switch(param){case 4100:return AL.currentCtx.listener.position;case 4102:return AL.currentCtx.listener.velocity;case 4111:return AL.currentCtx.listener.direction.concat(AL.currentCtx.listener.up);case 4106:return AL.currentCtx.gain.gain.value;default:AL.currentCtx.err=40962;return null}},setListenerParam:(funcname,param,value)=>{if(!AL.currentCtx){return}if(value===null){AL.currentCtx.err=40962;return}var listener=AL.currentCtx.listener;switch(param){case 4100:if(!Number.isFinite(value[0])||!Number.isFinite(value[1])||!Number.isFinite(value[2])){AL.currentCtx.err=40963;return}listener.position[0]=value[0];listener.position[1]=value[1];listener.position[2]=value[2];AL.updateListenerSpace(AL.currentCtx);break;case 4102:if(!Number.isFinite(value[0])||!Number.isFinite(value[1])||!Number.isFinite(value[2])){AL.currentCtx.err=40963;return}listener.velocity[0]=value[0];listener.velocity[1]=value[1];listener.velocity[2]=value[2];AL.updateListenerSpace(AL.currentCtx);break;case 4106:if(!Number.isFinite(value)||value<0){AL.currentCtx.err=40963;return}AL.currentCtx.gain.gain.value=value;break;case 4111:if(!Number.isFinite(value[0])||!Number.isFinite(value[1])||!Number.isFinite(value[2])||!Number.isFinite(value[3])||!Number.isFinite(value[4])||!Number.isFinite(value[5])){AL.currentCtx.err=40963;return}listener.direction[0]=value[0];listener.direction[1]=value[1];listener.direction[2]=value[2];listener.up[0]=value[3];listener.up[1]=value[4];listener.up[2]=value[5];AL.updateListenerSpace(AL.currentCtx);break;default:AL.currentCtx.err=40962;return}},getBufferParam:(funcname,bufferId,param)=>{if(!AL.currentCtx){return}var buf=AL.buffers[bufferId];if(!buf||bufferId===0){AL.currentCtx.err=40961;return}switch(param){case 8193:return buf.frequency;case 8194:return buf.bytesPerSample*8;case 8195:return buf.channels;case 8196:return buf.length*buf.bytesPerSample*buf.channels;case 8213:if(buf.length===0){return[0,0]}return[(buf.audioBuf._loopStart||0)*buf.frequency,(buf.audioBuf._loopEnd||buf.length)*buf.frequency];default:AL.currentCtx.err=40962;return null}},setBufferParam:(funcname,bufferId,param,value)=>{if(!AL.currentCtx){return}var buf=AL.buffers[bufferId];if(!buf||bufferId===0){AL.currentCtx.err=40961;return}if(value===null){AL.currentCtx.err=40962;return}switch(param){case 8196:if(value!==0){AL.currentCtx.err=40963;return}break;case 8213:if(value[0]<0||value[0]>buf.length||value[1]<0||value[1]>buf.Length||value[0]>=value[1]){AL.currentCtx.err=40963;return}if(buf.refCount>0){AL.currentCtx.err=40964;return}if(buf.audioBuf){buf.audioBuf._loopStart=value[0]/buf.frequency;buf.audioBuf._loopEnd=value[1]/buf.frequency}break;default:AL.currentCtx.err=40962;return}},getSourceParam:(funcname,sourceId,param)=>{if(!AL.currentCtx){return null}var src=AL.currentCtx.sources[sourceId];if(!src){AL.currentCtx.err=40961;return null}switch(param){case 514:return src.relative;case 4097:return src.coneInnerAngle;case 4098:return src.coneOuterAngle;case 4099:return src.pitch;case 4100:return src.position;case 4101:return src.direction;case 4102:return src.velocity;case 4103:return src.looping;case 4105:if(src.type===4136){return src.bufQueue[0].id}return 0;case 4106:return src.gain.gain.value;case 4109:return src.minGain;case 4110:return src.maxGain;case 4112:return src.state;case 4117:if(src.bufQueue.length===1&&src.bufQueue[0].id===0){return 0}return src.bufQueue.length;case 4118:if(src.bufQueue.length===1&&src.bufQueue[0].id===0||src.looping){return 0}return src.bufsProcessed;case 4128:return src.refDistance;case 4129:return src.rolloffFactor;case 4130:return src.coneOuterGain;case 4131:return src.maxDistance;case 4132:return AL.sourceTell(src);case 4133:var offset=AL.sourceTell(src);if(offset>0){offset*=src.bufQueue[0].frequency}return offset;case 4134:var offset=AL.sourceTell(src);if(offset>0){offset*=src.bufQueue[0].frequency*src.bufQueue[0].bytesPerSample}return offset;case 4135:return src.type;case 4628:return src.spatialize;case 8201:var length=0;var bytesPerFrame=0;for(var i=0;i<src.bufQueue.length;i++){length+=src.bufQueue[i].length;if(src.bufQueue[i].id!==0){bytesPerFrame=src.bufQueue[i].bytesPerSample*src.bufQueue[i].channels}}return length*bytesPerFrame;case 8202:var length=0;for(var i=0;i<src.bufQueue.length;i++){length+=src.bufQueue[i].length}return length;case 8203:return AL.sourceDuration(src);case 53248:return src.distanceModel;default:AL.currentCtx.err=40962;return null}},setSourceParam:(funcname,sourceId,param,value)=>{if(!AL.currentCtx){return}var src=AL.currentCtx.sources[sourceId];if(!src){AL.currentCtx.err=40961;return}if(value===null){AL.currentCtx.err=40962;return}switch(param){case 514:if(value===1){src.relative=true;AL.updateSourceSpace(src)}else if(value===0){src.relative=false;AL.updateSourceSpace(src)}else{AL.currentCtx.err=40963;return}break;case 4097:if(!Number.isFinite(value)){AL.currentCtx.err=40963;return}src.coneInnerAngle=value;if(src.panner){src.panner.coneInnerAngle=value%360}break;case 4098:if(!Number.isFinite(value)){AL.currentCtx.err=40963;return}src.coneOuterAngle=value;if(src.panner){src.panner.coneOuterAngle=value%360}break;case 4099:if(!Number.isFinite(value)||value<=0){AL.currentCtx.err=40963;return}if(src.pitch===value){break}src.pitch=value;AL.updateSourceRate(src);break;case 4100:if(!Number.isFinite(value[0])||!Number.isFinite(value[1])||!Number.isFinite(value[2])){AL.currentCtx.err=40963;return}src.position[0]=value[0];src.position[1]=value[1];src.position[2]=value[2];AL.updateSourceSpace(src);break;case 4101:if(!Number.isFinite(value[0])||!Number.isFinite(value[1])||!Number.isFinite(value[2])){AL.currentCtx.err=40963;return}src.direction[0]=value[0];src.direction[1]=value[1];src.direction[2]=value[2];AL.updateSourceSpace(src);break;case 4102:if(!Number.isFinite(value[0])||!Number.isFinite(value[1])||!Number.isFinite(value[2])){AL.currentCtx.err=40963;return}src.velocity[0]=value[0];src.velocity[1]=value[1];src.velocity[2]=value[2];AL.updateSourceSpace(src);break;case 4103:if(value===1){src.looping=true;AL.updateSourceTime(src);if(src.type===4136&&src.audioQueue.length>0){var audioSrc=src.audioQueue[0];audioSrc.loop=true;audioSrc._duration=Number.POSITIVE_INFINITY}}else if(value===0){src.looping=false;var currentTime=AL.updateSourceTime(src);if(src.type===4136&&src.audioQueue.length>0){var audioSrc=src.audioQueue[0];audioSrc.loop=false;audioSrc._duration=src.bufQueue[0].audioBuf.duration/src.playbackRate;audioSrc._startTime=currentTime-src.bufOffset/src.playbackRate}}else{AL.currentCtx.err=40963;return}break;case 4105:if(src.state===4114||src.state===4115){AL.currentCtx.err=40964;return}if(value===0){for(var i in src.bufQueue){src.bufQueue[i].refCount--}src.bufQueue.length=1;src.bufQueue[0]=AL.buffers[0];src.bufsProcessed=0;src.type=4144}else{var buf=AL.buffers[value];if(!buf){AL.currentCtx.err=40963;return}for(var i in src.bufQueue){src.bufQueue[i].refCount--}src.bufQueue.length=0;buf.refCount++;src.bufQueue=[buf];src.bufsProcessed=0;src.type=4136}AL.initSourcePanner(src);AL.scheduleSourceAudio(src);break;case 4106:if(!Number.isFinite(value)||value<0){AL.currentCtx.err=40963;return}src.gain.gain.value=value;break;case 4109:if(!Number.isFinite(value)||value<0||value>Math.min(src.maxGain,1)){AL.currentCtx.err=40963;return}src.minGain=value;break;case 4110:if(!Number.isFinite(value)||value<Math.max(0,src.minGain)||value>1){AL.currentCtx.err=40963;return}src.maxGain=value;break;case 4128:if(!Number.isFinite(value)||value<0){AL.currentCtx.err=40963;return}src.refDistance=value;if(src.panner){src.panner.refDistance=value}break;case 4129:if(!Number.isFinite(value)||value<0){AL.currentCtx.err=40963;return}src.rolloffFactor=value;if(src.panner){src.panner.rolloffFactor=value}break;case 4130:if(!Number.isFinite(value)||value<0||value>1){AL.currentCtx.err=40963;return}src.coneOuterGain=value;if(src.panner){src.panner.coneOuterGain=value}break;case 4131:if(!Number.isFinite(value)||value<0){AL.currentCtx.err=40963;return}src.maxDistance=value;if(src.panner){src.panner.maxDistance=value}break;case 4132:if(value<0||value>AL.sourceDuration(src)){AL.currentCtx.err=40963;return}AL.sourceSeek(src,value);break;case 4133:var srcLen=AL.sourceDuration(src);if(srcLen>0){var frequency;for(var bufId in src.bufQueue){if(bufId){frequency=src.bufQueue[bufId].frequency;break}}value/=frequency}if(value<0||value>srcLen){AL.currentCtx.err=40963;return}AL.sourceSeek(src,value);break;case 4134:var srcLen=AL.sourceDuration(src);if(srcLen>0){var bytesPerSec;for(var bufId in src.bufQueue){if(bufId){var buf=src.bufQueue[bufId];bytesPerSec=buf.frequency*buf.bytesPerSample*buf.channels;break}}value/=bytesPerSec}if(value<0||value>srcLen){AL.currentCtx.err=40963;return}AL.sourceSeek(src,value);break;case 4628:if(value!==0&&value!==1&&value!==2){AL.currentCtx.err=40963;return}src.spatialize=value;AL.initSourcePanner(src);break;case 8201:case 8202:case 8203:AL.currentCtx.err=40964;break;case 53248:switch(value){case 0:case 53249:case 53250:case 53251:case 53252:case 53253:case 53254:src.distanceModel=value;if(AL.currentCtx.sourceDistanceModel){AL.updateContextGlobal(AL.currentCtx)}break;default:AL.currentCtx.err=40963;return}break;default:AL.currentCtx.err=40962;return}},captures:{},sharedCaptureAudioCtx:null,requireValidCaptureDevice:(deviceId,funcname)=>{if(deviceId===0){AL.alcErr=40961;return null}var c=AL.captures[deviceId];if(!c){AL.alcErr=40961;return null}var err=c.mediaStreamError;if(err){AL.alcErr=40961;return null}return c}};var _alBufferData=(bufferId,format,pData,size,freq)=>{if(!AL.currentCtx){return}var buf=AL.buffers[bufferId];if(!buf){AL.currentCtx.err=40963;return}if(freq<=0){AL.currentCtx.err=40963;return}var audioBuf=null;try{switch(format){case 4352:if(size>0){audioBuf=AL.currentCtx.audioCtx.createBuffer(1,size,freq);var channel0=audioBuf.getChannelData(0);for(var i=0;i<size;++i){channel0[i]=HEAPU8[pData++]*.0078125-1}}buf.bytesPerSample=1;buf.channels=1;buf.length=size;break;case 4353:if(size>0){audioBuf=AL.currentCtx.audioCtx.createBuffer(1,size>>1,freq);var channel0=audioBuf.getChannelData(0);pData>>=1;for(var i=0;i<size>>1;++i){channel0[i]=HEAP16[pData++]*30517578125e-15}}buf.bytesPerSample=2;buf.channels=1;buf.length=size>>1;break;case 4354:if(size>0){audioBuf=AL.currentCtx.audioCtx.createBuffer(2,size>>1,freq);var channel0=audioBuf.getChannelData(0);var channel1=audioBuf.getChannelData(1);for(var i=0;i<size>>1;++i){channel0[i]=HEAPU8[pData++]*.0078125-1;channel1[i]=HEAPU8[pData++]*.0078125-1}}buf.bytesPerSample=1;buf.channels=2;buf.length=size>>1;break;case 4355:if(size>0){audioBuf=AL.currentCtx.audioCtx.createBuffer(2,size>>2,freq);var channel0=audioBuf.getChannelData(0);var channel1=audioBuf.getChannelData(1);pData>>=1;for(var i=0;i<size>>2;++i){channel0[i]=HEAP16[pData++]*30517578125e-15;channel1[i]=HEAP16[pData++]*30517578125e-15}}buf.bytesPerSample=2;buf.channels=2;buf.length=size>>2;break;case 65552:if(size>0){audioBuf=AL.currentCtx.audioCtx.createBuffer(1,size>>2,freq);var channel0=audioBuf.getChannelData(0);pData>>=2;for(var i=0;i<size>>2;++i){channel0[i]=HEAPF32[pData++]}}buf.bytesPerSample=4;buf.channels=1;buf.length=size>>2;break;case 65553:if(size>0){audioBuf=AL.currentCtx.audioCtx.createBuffer(2,size>>3,freq);var channel0=audioBuf.getChannelData(0);var channel1=audioBuf.getChannelData(1);pData>>=2;for(var i=0;i<size>>3;++i){channel0[i]=HEAPF32[pData++];channel1[i]=HEAPF32[pData++]}}buf.bytesPerSample=4;buf.channels=2;buf.length=size>>3;break;default:AL.currentCtx.err=40963;return}buf.frequency=freq;buf.audioBuf=audioBuf}catch(e){AL.currentCtx.err=40963;return}};var _alDeleteBuffers=(count,pBufferIds)=>{if(!AL.currentCtx){return}for(var i=0;i<count;++i){var bufId=HEAP32[pBufferIds+i*4>>2];if(bufId===0){continue}if(!AL.buffers[bufId]){AL.currentCtx.err=40961;return}if(AL.buffers[bufId].refCount){AL.currentCtx.err=40964;return}}for(var i=0;i<count;++i){var bufId=HEAP32[pBufferIds+i*4>>2];if(bufId===0){continue}AL.deviceRefCounts[AL.buffers[bufId].deviceId]--;delete AL.buffers[bufId];AL.freeIds.push(bufId)}};var _alSourcei=(sourceId,param,value)=>{switch(param){case 514:case 4097:case 4098:case 4103:case 4105:case 4128:case 4129:case 4131:case 4132:case 4133:case 4134:case 4628:case 8201:case 8202:case 53248:AL.setSourceParam("alSourcei",sourceId,param,value);break;default:AL.setSourceParam("alSourcei",sourceId,param,null);break}};var _alDeleteSources=(count,pSourceIds)=>{if(!AL.currentCtx){return}for(var i=0;i<count;++i){var srcId=HEAP32[pSourceIds+i*4>>2];if(!AL.currentCtx.sources[srcId]){AL.currentCtx.err=40961;return}}for(var i=0;i<count;++i){var srcId=HEAP32[pSourceIds+i*4>>2];AL.setSourceState(AL.currentCtx.sources[srcId],4116);_alSourcei(srcId,4105,0);delete AL.currentCtx.sources[srcId];AL.freeIds.push(srcId)}};var _alGenBuffers=(count,pBufferIds)=>{if(!AL.currentCtx){return}for(var i=0;i<count;++i){var buf={deviceId:AL.currentCtx.deviceId,id:AL.newId(),refCount:0,audioBuf:null,frequency:0,bytesPerSample:2,channels:1,length:0};AL.deviceRefCounts[buf.deviceId]++;AL.buffers[buf.id]=buf;HEAP32[pBufferIds+i*4>>2]=buf.id}};var _alGenSources=(count,pSourceIds)=>{if(!AL.currentCtx){return}for(var i=0;i<count;++i){var gain=AL.currentCtx.audioCtx.createGain();gain.connect(AL.currentCtx.gain);var src={context:AL.currentCtx,id:AL.newId(),type:4144,state:4113,bufQueue:[AL.buffers[0]],audioQueue:[],looping:false,pitch:1,dopplerShift:1,gain:gain,minGain:0,maxGain:1,panner:null,bufsProcessed:0,bufStartTime:Number.NEGATIVE_INFINITY,bufOffset:0,relative:false,refDistance:1,maxDistance:340282e33,rolloffFactor:1,position:[0,0,0],velocity:[0,0,0],direction:[0,0,0],coneOuterGain:0,coneInnerAngle:360,coneOuterAngle:360,distanceModel:53250,spatialize:2,get playbackRate(){return this.pitch*this.dopplerShift}};AL.currentCtx.sources[src.id]=src;HEAP32[pSourceIds+i*4>>2]=src.id}};var _alGetSourcei=(sourceId,param,pValue)=>{var val=AL.getSourceParam("alGetSourcei",sourceId,param);if(val===null){return}if(!pValue){AL.currentCtx.err=40963;return}switch(param){case 514:case 4097:case 4098:case 4103:case 4105:case 4112:case 4117:case 4118:case 4128:case 4129:case 4131:case 4132:case 4133:case 4134:case 4135:case 4628:case 8201:case 8202:case 53248:HEAP32[pValue>>2]=val;break;default:AL.currentCtx.err=40962;return}};var _alListenerfv=(param,pValues)=>{if(!AL.currentCtx){return}if(!pValues){AL.currentCtx.err=40963;return}switch(param){case 4100:case 4102:AL.paramArray[0]=HEAPF32[pValues>>2];AL.paramArray[1]=HEAPF32[pValues+4>>2];AL.paramArray[2]=HEAPF32[pValues+8>>2];AL.setListenerParam("alListenerfv",param,AL.paramArray);break;case 4111:AL.paramArray[0]=HEAPF32[pValues>>2];AL.paramArray[1]=HEAPF32[pValues+4>>2];AL.paramArray[2]=HEAPF32[pValues+8>>2];AL.paramArray[3]=HEAPF32[pValues+12>>2];AL.paramArray[4]=HEAPF32[pValues+16>>2];AL.paramArray[5]=HEAPF32[pValues+20>>2];AL.setListenerParam("alListenerfv",param,AL.paramArray);break;default:AL.setListenerParam("alListenerfv",param,null);break}};var _alSourcePause=sourceId=>{if(!AL.currentCtx){return}var src=AL.currentCtx.sources[sourceId];if(!src){AL.currentCtx.err=40961;return}AL.setSourceState(src,4115)};var _alSourcePlay=sourceId=>{if(!AL.currentCtx){return}var src=AL.currentCtx.sources[sourceId];if(!src){AL.currentCtx.err=40961;return}AL.setSourceState(src,4114)};var _alSourceStop=sourceId=>{if(!AL.currentCtx){return}var src=AL.currentCtx.sources[sourceId];if(!src){AL.currentCtx.err=40961;return}AL.setSourceState(src,4116)};var _alSourcef=(sourceId,param,value)=>{switch(param){case 4097:case 4098:case 4099:case 4106:case 4109:case 4110:case 4128:case 4129:case 4130:case 4131:case 4132:case 4133:case 4134:case 8203:AL.setSourceParam("alSourcef",sourceId,param,value);break;default:AL.setSourceParam("alSourcef",sourceId,param,null);break}};var _alSourcefv=(sourceId,param,pValues)=>{if(!AL.currentCtx){return}if(!pValues){AL.currentCtx.err=40963;return}switch(param){case 4097:case 4098:case 4099:case 4106:case 4109:case 4110:case 4128:case 4129:case 4130:case 4131:case 4132:case 4133:case 4134:case 8203:var val=HEAPF32[pValues>>2];AL.setSourceParam("alSourcefv",sourceId,param,val);break;case 4100:case 4101:case 4102:AL.paramArray[0]=HEAPF32[pValues>>2];AL.paramArray[1]=HEAPF32[pValues+4>>2];AL.paramArray[2]=HEAPF32[pValues+8>>2];AL.setSourceParam("alSourcefv",sourceId,param,AL.paramArray);break;default:AL.setSourceParam("alSourcefv",sourceId,param,null);break}};var listenOnce=(object,event,func)=>{object.addEventListener(event,func,{once:true})};var autoResumeAudioContext=(ctx,elements)=>{if(!elements){elements=[document,document.getElementById("canvas")]}["keydown","mousedown","touchstart"].forEach(event=>{elements.forEach(element=>{if(element){listenOnce(element,event,()=>{if(ctx.state==="suspended")ctx.resume()})}})})};var _alcCreateContext=(deviceId,pAttrList)=>{if(!(deviceId in AL.deviceRefCounts)){AL.alcErr=40961;return 0}var options=null;var attrs=[];var hrtf=null;pAttrList>>=2;if(pAttrList){var attr=0;var val=0;while(true){attr=HEAP32[pAttrList++];attrs.push(attr);if(attr===0){break}val=HEAP32[pAttrList++];attrs.push(val);switch(attr){case 4103:if(!options){options={}}options.sampleRate=val;break;case 4112:case 4113:break;case 6546:switch(val){case 0:hrtf=false;break;case 1:hrtf=true;break;case 2:break;default:AL.alcErr=40964;return 0}break;case 6550:if(val!==0){AL.alcErr=40964;return 0}break;default:AL.alcErr=40964;return 0}}}var AudioContext=window.AudioContext||window.webkitAudioContext;var ac=null;try{if(options){ac=new AudioContext(options)}else{ac=new AudioContext}}catch(e){if(e.name==="NotSupportedError"){AL.alcErr=40964}else{AL.alcErr=40961}return 0}autoResumeAudioContext(ac);if(typeof ac.createGain=="undefined"){ac.createGain=ac.createGainNode}var gain=ac.createGain();gain.connect(ac.destination);var ctx={deviceId:deviceId,id:AL.newId(),attrs:attrs,audioCtx:ac,listener:{position:[0,0,0],velocity:[0,0,0],direction:[0,0,0],up:[0,0,0]},sources:[],interval:setInterval(()=>AL.scheduleContextAudio(ctx),AL.QUEUE_INTERVAL),gain:gain,distanceModel:53250,speedOfSound:343.3,dopplerFactor:1,sourceDistanceModel:false,hrtf:hrtf||false,_err:0,get err(){return this._err},set err(val){if(this._err===0||val===0){this._err=val}}};AL.deviceRefCounts[deviceId]++;AL.contexts[ctx.id]=ctx;if(hrtf!==null){for(var ctxId in AL.contexts){var c=AL.contexts[ctxId];if(c.deviceId===deviceId){c.hrtf=hrtf;AL.updateContextGlobal(c)}}}return ctx.id};var _alcMakeContextCurrent=contextId=>{if(contextId===0){AL.currentCtx=null}else{AL.currentCtx=AL.contexts[contextId]}return 1};var _alcOpenDevice=pDeviceName=>{if(pDeviceName){var name=UTF8ToString(pDeviceName);if(name!==AL.DEVICE_NAME){return 0}}if(typeof AudioContext!="undefined"||typeof webkitAudioContext!="undefined"){var deviceId=AL.newId();AL.deviceRefCounts[deviceId]=0;return deviceId}return 0};var readEmAsmArgsArray=[];var readEmAsmArgs=(sigPtr,buf)=>{readEmAsmArgsArray.length=0;var ch;while(ch=HEAPU8[sigPtr++]){var wide=ch!=105;wide&=ch!=112;buf+=wide&&buf%8?4:0;readEmAsmArgsArray.push(ch==112?HEAPU32[buf>>2]:ch==105?HEAP32[buf>>2]:HEAPF64[buf>>3]);buf+=wide?8:4}return readEmAsmArgsArray};var runEmAsmFunction=(code,sigPtr,argbuf)=>{var args=readEmAsmArgs(sigPtr,argbuf);return ASM_CONSTS[code](...args)};var _emscripten_asm_const_int=(code,sigPtr,argbuf)=>runEmAsmFunction(code,sigPtr,argbuf);var _emscripten_date_now=()=>Date.now();var webgl_enable_ANGLE_instanced_arrays=ctx=>{var ext=ctx.getExtension("ANGLE_instanced_arrays");if(ext){ctx["vertexAttribDivisor"]=(index,divisor)=>ext["vertexAttribDivisorANGLE"](index,divisor);ctx["drawArraysInstanced"]=(mode,first,count,primcount)=>ext["drawArraysInstancedANGLE"](mode,first,count,primcount);ctx["drawElementsInstanced"]=(mode,count,type,indices,primcount)=>ext["drawElementsInstancedANGLE"](mode,count,type,indices,primcount);return 1}};var webgl_enable_OES_vertex_array_object=ctx=>{var ext=ctx.getExtension("OES_vertex_array_object");if(ext){ctx["createVertexArray"]=()=>ext["createVertexArrayOES"]();ctx["deleteVertexArray"]=vao=>ext["deleteVertexArrayOES"](vao);ctx["bindVertexArray"]=vao=>ext["bindVertexArrayOES"](vao);ctx["isVertexArray"]=vao=>ext["isVertexArrayOES"](vao);return 1}};var webgl_enable_WEBGL_draw_buffers=ctx=>{var ext=ctx.getExtension("WEBGL_draw_buffers");if(ext){ctx["drawBuffers"]=(n,bufs)=>ext["drawBuffersWEBGL"](n,bufs);return 1}};var webgl_enable_WEBGL_multi_draw=ctx=>!!(ctx.multiDrawWebgl=ctx.getExtension("WEBGL_multi_draw"));var getEmscriptenSupportedExtensions=ctx=>{var supportedExtensions=["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_disjoint_timer_query","EXT_frag_depth","EXT_shader_texture_lod","EXT_sRGB","OES_element_index_uint","OES_fbo_render_mipmap","OES_standard_derivatives","OES_texture_float","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_depth_texture","WEBGL_draw_buffers","EXT_color_buffer_half_float","EXT_depth_clamp","EXT_float_blend","EXT_texture_compression_bptc","EXT_texture_compression_rgtc","EXT_texture_filter_anisotropic","KHR_parallel_shader_compile","OES_texture_float_linear","WEBGL_blend_func_extended","WEBGL_compressed_texture_astc","WEBGL_compressed_texture_etc","WEBGL_compressed_texture_etc1","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_debug_renderer_info","WEBGL_debug_shaders","WEBGL_lose_context","WEBGL_multi_draw"];return(ctx.getSupportedExtensions()||[]).filter(ext=>supportedExtensions.includes(ext))};var GL={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],stringCache:{},unpackAlignment:4,recordError:errorCode=>{if(!GL.lastError){GL.lastError=errorCode}},getNewId:table=>{var ret=GL.counter++;for(var i=table.length;i<ret;i++){table[i]=null}return ret},genObject:(n,buffers,createFunction,objectTable)=>{for(var i=0;i<n;i++){var buffer=GLctx[createFunction]();var id=buffer&&GL.getNewId(objectTable);if(buffer){buffer.name=id;objectTable[id]=buffer}else{GL.recordError(1282)}HEAP32[buffers+i*4>>2]=id}},getSource:(shader,count,string,length)=>{var source="";for(var i=0;i<count;++i){var len=length?HEAPU32[length+i*4>>2]:undefined;source+=UTF8ToString(HEAPU32[string+i*4>>2],len)}return source},createContext:(canvas,webGLContextAttributes)=>{if(!canvas.getContextSafariWebGL2Fixed){canvas.getContextSafariWebGL2Fixed=canvas.getContext;function fixedGetContext(ver,attrs){var gl=canvas.getContextSafariWebGL2Fixed(ver,attrs);return ver=="webgl"==gl instanceof WebGLRenderingContext?gl:null}canvas.getContext=fixedGetContext}var ctx=canvas.getContext("webgl",webGLContextAttributes);if(!ctx)return 0;var handle=GL.registerContext(ctx,webGLContextAttributes);return handle},registerContext:(ctx,webGLContextAttributes)=>{var handle=GL.getNewId(GL.contexts);var context={handle:handle,attributes:webGLContextAttributes,version:webGLContextAttributes.majorVersion,GLctx:ctx};if(ctx.canvas)ctx.canvas.GLctxObject=context;GL.contexts[handle]=context;if(typeof webGLContextAttributes.enableExtensionsByDefault=="undefined"||webGLContextAttributes.enableExtensionsByDefault){GL.initExtensions(context)}return handle},makeContextCurrent:contextHandle=>{var _GL$currentContext;GL.currentContext=GL.contexts[contextHandle];Module.ctx=GLctx=(_GL$currentContext=GL.currentContext)===null||_GL$currentContext===void 0?void 0:_GL$currentContext.GLctx;return!(contextHandle&&!GLctx)},getContext:contextHandle=>GL.contexts[contextHandle],deleteContext:contextHandle=>{if(GL.currentContext===GL.contexts[contextHandle]){GL.currentContext=null}if(typeof JSEvents=="object"){JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas)}if(GL.contexts[contextHandle]&&GL.contexts[contextHandle].GLctx.canvas){GL.contexts[contextHandle].GLctx.canvas.GLctxObject=undefined}GL.contexts[contextHandle]=null},initExtensions:context=>{context||(context=GL.currentContext);if(context.initExtensionsDone)return;context.initExtensionsDone=true;var GLctx=context.GLctx;webgl_enable_ANGLE_instanced_arrays(GLctx);webgl_enable_OES_vertex_array_object(GLctx);webgl_enable_WEBGL_draw_buffers(GLctx);{GLctx.disjointTimerQueryExt=GLctx.getExtension("EXT_disjoint_timer_query")}webgl_enable_WEBGL_multi_draw(GLctx);getEmscriptenSupportedExtensions(GLctx).forEach(ext=>{if(!ext.includes("lose_context")&&!ext.includes("debug")){GLctx.getExtension(ext)}})}};var _glActiveTexture=x0=>GLctx.activeTexture(x0);var _emscripten_glActiveTexture=_glActiveTexture;var _glAttachShader=(program,shader)=>{GLctx.attachShader(GL.programs[program],GL.shaders[shader])};var _emscripten_glAttachShader=_glAttachShader;var _glBeginQueryEXT=(target,id)=>{GLctx.disjointTimerQueryExt["beginQueryEXT"](target,GL.queries[id])};var _emscripten_glBeginQueryEXT=_glBeginQueryEXT;var _glBindAttribLocation=(program,index,name)=>{GLctx.bindAttribLocation(GL.programs[program],index,UTF8ToString(name))};var _emscripten_glBindAttribLocation=_glBindAttribLocation;var _glBindBuffer=(target,buffer)=>{GLctx.bindBuffer(target,GL.buffers[buffer])};var _emscripten_glBindBuffer=_glBindBuffer;var _glBindFramebuffer=(target,framebuffer)=>{GLctx.bindFramebuffer(target,GL.framebuffers[framebuffer])};var _emscripten_glBindFramebuffer=_glBindFramebuffer;var _glBindRenderbuffer=(target,renderbuffer)=>{GLctx.bindRenderbuffer(target,GL.renderbuffers[renderbuffer])};var _emscripten_glBindRenderbuffer=_glBindRenderbuffer;var _glBindTexture=(target,texture)=>{GLctx.bindTexture(target,GL.textures[texture])};var _emscripten_glBindTexture=_glBindTexture;var _glBindVertexArray=vao=>{GLctx.bindVertexArray(GL.vaos[vao])};var _glBindVertexArrayOES=_glBindVertexArray;var _emscripten_glBindVertexArrayOES=_glBindVertexArrayOES;var _glBlendColor=(x0,x1,x2,x3)=>GLctx.blendColor(x0,x1,x2,x3);var _emscripten_glBlendColor=_glBlendColor;var _glBlendEquation=x0=>GLctx.blendEquation(x0);var _emscripten_glBlendEquation=_glBlendEquation;var _glBlendEquationSeparate=(x0,x1)=>GLctx.blendEquationSeparate(x0,x1);var _emscripten_glBlendEquationSeparate=_glBlendEquationSeparate;var _glBlendFunc=(x0,x1)=>GLctx.blendFunc(x0,x1);var _emscripten_glBlendFunc=_glBlendFunc;var _glBlendFuncSeparate=(x0,x1,x2,x3)=>GLctx.blendFuncSeparate(x0,x1,x2,x3);var _emscripten_glBlendFuncSeparate=_glBlendFuncSeparate;var _glBufferData=(target,size,data,usage)=>{GLctx.bufferData(target,data?HEAPU8.subarray(data,data+size):size,usage)};var _emscripten_glBufferData=_glBufferData;var _glBufferSubData=(target,offset,size,data)=>{GLctx.bufferSubData(target,offset,HEAPU8.subarray(data,data+size))};var _emscripten_glBufferSubData=_glBufferSubData;var _glCheckFramebufferStatus=x0=>GLctx.checkFramebufferStatus(x0);var _emscripten_glCheckFramebufferStatus=_glCheckFramebufferStatus;var _glClear=x0=>GLctx.clear(x0);var _emscripten_glClear=_glClear;var _glClearColor=(x0,x1,x2,x3)=>GLctx.clearColor(x0,x1,x2,x3);var _emscripten_glClearColor=_glClearColor;var _glClearDepthf=x0=>GLctx.clearDepth(x0);var _emscripten_glClearDepthf=_glClearDepthf;var _glClearStencil=x0=>GLctx.clearStencil(x0);var _emscripten_glClearStencil=_glClearStencil;var _glColorMask=(red,green,blue,alpha)=>{GLctx.colorMask(!!red,!!green,!!blue,!!alpha)};var _emscripten_glColorMask=_glColorMask;var _glCompileShader=shader=>{GLctx.compileShader(GL.shaders[shader])};var _emscripten_glCompileShader=_glCompileShader;var _glCompressedTexImage2D=(target,level,internalFormat,width,height,border,imageSize,data)=>{GLctx.compressedTexImage2D(target,level,internalFormat,width,height,border,data?HEAPU8.subarray(data,data+imageSize):null)};var _emscripten_glCompressedTexImage2D=_glCompressedTexImage2D;var _glCompressedTexSubImage2D=(target,level,xoffset,yoffset,width,height,format,imageSize,data)=>{GLctx.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,data?HEAPU8.subarray(data,data+imageSize):null)};var _emscripten_glCompressedTexSubImage2D=_glCompressedTexSubImage2D;var _glCopyTexImage2D=(x0,x1,x2,x3,x4,x5,x6,x7)=>GLctx.copyTexImage2D(x0,x1,x2,x3,x4,x5,x6,x7);var _emscripten_glCopyTexImage2D=_glCopyTexImage2D;var _glCopyTexSubImage2D=(x0,x1,x2,x3,x4,x5,x6,x7)=>GLctx.copyTexSubImage2D(x0,x1,x2,x3,x4,x5,x6,x7);var _emscripten_glCopyTexSubImage2D=_glCopyTexSubImage2D;var _glCreateProgram=()=>{var id=GL.getNewId(GL.programs);var program=GLctx.createProgram();program.name=id;program.maxUniformLength=program.maxAttributeLength=program.maxUniformBlockNameLength=0;program.uniformIdCounter=1;GL.programs[id]=program;return id};var _emscripten_glCreateProgram=_glCreateProgram;var _glCreateShader=shaderType=>{var id=GL.getNewId(GL.shaders);GL.shaders[id]=GLctx.createShader(shaderType);return id};var _emscripten_glCreateShader=_glCreateShader;var _glCullFace=x0=>GLctx.cullFace(x0);var _emscripten_glCullFace=_glCullFace;var _glDeleteBuffers=(n,buffers)=>{for(var i=0;i<n;i++){var id=HEAP32[buffers+i*4>>2];var buffer=GL.buffers[id];if(!buffer)continue;GLctx.deleteBuffer(buffer);buffer.name=0;GL.buffers[id]=null}};var _emscripten_glDeleteBuffers=_glDeleteBuffers;var _glDeleteFramebuffers=(n,framebuffers)=>{for(var i=0;i<n;++i){var id=HEAP32[framebuffers+i*4>>2];var framebuffer=GL.framebuffers[id];if(!framebuffer)continue;GLctx.deleteFramebuffer(framebuffer);framebuffer.name=0;GL.framebuffers[id]=null}};var _emscripten_glDeleteFramebuffers=_glDeleteFramebuffers;var _glDeleteProgram=id=>{if(!id)return;var program=GL.programs[id];if(!program){GL.recordError(1281);return}GLctx.deleteProgram(program);program.name=0;GL.programs[id]=null};var _emscripten_glDeleteProgram=_glDeleteProgram;var _glDeleteQueriesEXT=(n,ids)=>{for(var i=0;i<n;i++){var id=HEAP32[ids+i*4>>2];var query=GL.queries[id];if(!query)continue;GLctx.disjointTimerQueryExt["deleteQueryEXT"](query);GL.queries[id]=null}};var _emscripten_glDeleteQueriesEXT=_glDeleteQueriesEXT;var _glDeleteRenderbuffers=(n,renderbuffers)=>{for(var i=0;i<n;i++){var id=HEAP32[renderbuffers+i*4>>2];var renderbuffer=GL.renderbuffers[id];if(!renderbuffer)continue;GLctx.deleteRenderbuffer(renderbuffer);renderbuffer.name=0;GL.renderbuffers[id]=null}};var _emscripten_glDeleteRenderbuffers=_glDeleteRenderbuffers;var _glDeleteShader=id=>{if(!id)return;var shader=GL.shaders[id];if(!shader){GL.recordError(1281);return}GLctx.deleteShader(shader);GL.shaders[id]=null};var _emscripten_glDeleteShader=_glDeleteShader;var _glDeleteTextures=(n,textures)=>{for(var i=0;i<n;i++){var id=HEAP32[textures+i*4>>2];var texture=GL.textures[id];if(!texture)continue;GLctx.deleteTexture(texture);texture.name=0;GL.textures[id]=null}};var _emscripten_glDeleteTextures=_glDeleteTextures;var _glDeleteVertexArrays=(n,vaos)=>{for(var i=0;i<n;i++){var id=HEAP32[vaos+i*4>>2];GLctx.deleteVertexArray(GL.vaos[id]);GL.vaos[id]=null}};var _glDeleteVertexArraysOES=_glDeleteVertexArrays;var _emscripten_glDeleteVertexArraysOES=_glDeleteVertexArraysOES;var _glDepthFunc=x0=>GLctx.depthFunc(x0);var _emscripten_glDepthFunc=_glDepthFunc;var _glDepthMask=flag=>{GLctx.depthMask(!!flag)};var _emscripten_glDepthMask=_glDepthMask;var _glDepthRangef=(x0,x1)=>GLctx.depthRange(x0,x1);var _emscripten_glDepthRangef=_glDepthRangef;var _glDetachShader=(program,shader)=>{GLctx.detachShader(GL.programs[program],GL.shaders[shader])};var _emscripten_glDetachShader=_glDetachShader;var _glDisable=x0=>GLctx.disable(x0);var _emscripten_glDisable=_glDisable;var _glDisableVertexAttribArray=index=>{GLctx.disableVertexAttribArray(index)};var _emscripten_glDisableVertexAttribArray=_glDisableVertexAttribArray;var _glDrawArrays=(mode,first,count)=>{GLctx.drawArrays(mode,first,count)};var _emscripten_glDrawArrays=_glDrawArrays;var _glDrawArraysInstanced=(mode,first,count,primcount)=>{GLctx.drawArraysInstanced(mode,first,count,primcount)};var _glDrawArraysInstancedANGLE=_glDrawArraysInstanced;var _emscripten_glDrawArraysInstancedANGLE=_glDrawArraysInstancedANGLE;var tempFixedLengthArray=[];var _glDrawBuffers=(n,bufs)=>{var bufArray=tempFixedLengthArray[n];for(var i=0;i<n;i++){bufArray[i]=HEAP32[bufs+i*4>>2]}GLctx.drawBuffers(bufArray)};var _glDrawBuffersWEBGL=_glDrawBuffers;var _emscripten_glDrawBuffersWEBGL=_glDrawBuffersWEBGL;var _glDrawElements=(mode,count,type,indices)=>{GLctx.drawElements(mode,count,type,indices)};var _emscripten_glDrawElements=_glDrawElements;var _glDrawElementsInstanced=(mode,count,type,indices,primcount)=>{GLctx.drawElementsInstanced(mode,count,type,indices,primcount)};var _glDrawElementsInstancedANGLE=_glDrawElementsInstanced;var _emscripten_glDrawElementsInstancedANGLE=_glDrawElementsInstancedANGLE;var _glEnable=x0=>GLctx.enable(x0);var _emscripten_glEnable=_glEnable;var _glEnableVertexAttribArray=index=>{GLctx.enableVertexAttribArray(index)};var _emscripten_glEnableVertexAttribArray=_glEnableVertexAttribArray;var _glEndQueryEXT=target=>{GLctx.disjointTimerQueryExt["endQueryEXT"](target)};var _emscripten_glEndQueryEXT=_glEndQueryEXT;var _glFinish=()=>GLctx.finish();var _emscripten_glFinish=_glFinish;var _glFlush=()=>GLctx.flush();var _emscripten_glFlush=_glFlush;var _glFramebufferRenderbuffer=(target,attachment,renderbuffertarget,renderbuffer)=>{GLctx.framebufferRenderbuffer(target,attachment,renderbuffertarget,GL.renderbuffers[renderbuffer])};var _emscripten_glFramebufferRenderbuffer=_glFramebufferRenderbuffer;var _glFramebufferTexture2D=(target,attachment,textarget,texture,level)=>{GLctx.framebufferTexture2D(target,attachment,textarget,GL.textures[texture],level)};var _emscripten_glFramebufferTexture2D=_glFramebufferTexture2D;var _glFrontFace=x0=>GLctx.frontFace(x0);var _emscripten_glFrontFace=_glFrontFace;var _glGenBuffers=(n,buffers)=>{GL.genObject(n,buffers,"createBuffer",GL.buffers)};var _emscripten_glGenBuffers=_glGenBuffers;var _glGenFramebuffers=(n,ids)=>{GL.genObject(n,ids,"createFramebuffer",GL.framebuffers)};var _emscripten_glGenFramebuffers=_glGenFramebuffers;var _glGenQueriesEXT=(n,ids)=>{for(var i=0;i<n;i++){var query=GLctx.disjointTimerQueryExt["createQueryEXT"]();if(!query){GL.recordError(1282);while(i<n)HEAP32[ids+i++*4>>2]=0;return}var id=GL.getNewId(GL.queries);query.name=id;GL.queries[id]=query;HEAP32[ids+i*4>>2]=id}};var _emscripten_glGenQueriesEXT=_glGenQueriesEXT;var _glGenRenderbuffers=(n,renderbuffers)=>{GL.genObject(n,renderbuffers,"createRenderbuffer",GL.renderbuffers)};var _emscripten_glGenRenderbuffers=_glGenRenderbuffers;var _glGenTextures=(n,textures)=>{GL.genObject(n,textures,"createTexture",GL.textures)};var _emscripten_glGenTextures=_glGenTextures;var _glGenVertexArrays=(n,arrays)=>{GL.genObject(n,arrays,"createVertexArray",GL.vaos)};var _glGenVertexArraysOES=_glGenVertexArrays;var _emscripten_glGenVertexArraysOES=_glGenVertexArraysOES;var _glGenerateMipmap=x0=>GLctx.generateMipmap(x0);var _emscripten_glGenerateMipmap=_glGenerateMipmap;var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx};var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);var __glGetActiveAttribOrUniform=(funcName,program,index,bufSize,length,size,type,name)=>{program=GL.programs[program];var info=GLctx[funcName](program,index);if(info){var numBytesWrittenExclNull=name&&stringToUTF8(info.name,name,bufSize);if(length)HEAP32[length>>2]=numBytesWrittenExclNull;if(size)HEAP32[size>>2]=info.size;if(type)HEAP32[type>>2]=info.type}};var _glGetActiveAttrib=(program,index,bufSize,length,size,type,name)=>{__glGetActiveAttribOrUniform("getActiveAttrib",program,index,bufSize,length,size,type,name)};var _emscripten_glGetActiveAttrib=_glGetActiveAttrib;var _glGetActiveUniform=(program,index,bufSize,length,size,type,name)=>{__glGetActiveAttribOrUniform("getActiveUniform",program,index,bufSize,length,size,type,name)};var _emscripten_glGetActiveUniform=_glGetActiveUniform;var _glGetAttachedShaders=(program,maxCount,count,shaders)=>{var result=GLctx.getAttachedShaders(GL.programs[program]);var len=result.length;if(len>maxCount){len=maxCount}HEAP32[count>>2]=len;for(var i=0;i<len;++i){var id=GL.shaders.indexOf(result[i]);HEAP32[shaders+i*4>>2]=id}};var _emscripten_glGetAttachedShaders=_glGetAttachedShaders;var _glGetAttribLocation=(program,name)=>GLctx.getAttribLocation(GL.programs[program],UTF8ToString(name));var _emscripten_glGetAttribLocation=_glGetAttribLocation;var writeI53ToI64=(ptr,num)=>{HEAPU32[ptr>>2]=num;var lower=HEAPU32[ptr>>2];HEAPU32[ptr+4>>2]=(num-lower)/4294967296};var emscriptenWebGLGet=(name_,p,type)=>{if(!p){GL.recordError(1281);return}var ret=undefined;switch(name_){case 36346:ret=1;break;case 36344:if(type!=0&&type!=1){GL.recordError(1280)}return;case 36345:ret=0;break;case 34466:var formats=GLctx.getParameter(34467);ret=formats?formats.length:0;break}if(ret===undefined){var result=GLctx.getParameter(name_);switch(typeof result){case"number":ret=result;break;case"boolean":ret=result?1:0;break;case"string":GL.recordError(1280);return;case"object":if(result===null){switch(name_){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:{ret=0;break}default:{GL.recordError(1280);return}}}else if(result instanceof Float32Array||result instanceof Uint32Array||result instanceof Int32Array||result instanceof Array){for(var i=0;i<result.length;++i){switch(type){case 0:HEAP32[p+i*4>>2]=result[i];break;case 2:HEAPF32[p+i*4>>2]=result[i];break;case 4:HEAP8[p+i]=result[i]?1:0;break}}return}else{try{ret=result.name|0}catch(e){GL.recordError(1280);err("GL_INVALID_ENUM in glGet".concat(type,"v: Unknown object returned from WebGL getParameter(").concat(name_,")! (error: ").concat(e,")"));return}}break;default:GL.recordError(1280);err("GL_INVALID_ENUM in glGet".concat(type,"v: Native code calling glGet").concat(type,"v(").concat(name_,") and it returns ").concat(result," of type ").concat(typeof result,"!"));return}}switch(type){case 1:writeI53ToI64(p,ret);break;case 0:HEAP32[p>>2]=ret;break;case 2:HEAPF32[p>>2]=ret;break;case 4:HEAP8[p]=ret?1:0;break}};var _glGetBooleanv=(name_,p)=>emscriptenWebGLGet(name_,p,4);var _emscripten_glGetBooleanv=_glGetBooleanv;var _glGetBufferParameteriv=(target,value,data)=>{if(!data){GL.recordError(1281);return}HEAP32[data>>2]=GLctx.getBufferParameter(target,value)};var _emscripten_glGetBufferParameteriv=_glGetBufferParameteriv;var _glGetError=()=>{var error=GLctx.getError()||GL.lastError;GL.lastError=0;return error};var _emscripten_glGetError=_glGetError;var _glGetFloatv=(name_,p)=>emscriptenWebGLGet(name_,p,2);var _emscripten_glGetFloatv=_glGetFloatv;var _glGetFramebufferAttachmentParameteriv=(target,attachment,pname,params)=>{var result=GLctx.getFramebufferAttachmentParameter(target,attachment,pname);if(result instanceof WebGLRenderbuffer||result instanceof WebGLTexture){result=result.name|0}HEAP32[params>>2]=result};var _emscripten_glGetFramebufferAttachmentParameteriv=_glGetFramebufferAttachmentParameteriv;var _glGetIntegerv=(name_,p)=>emscriptenWebGLGet(name_,p,0);var _emscripten_glGetIntegerv=_glGetIntegerv;var _glGetProgramInfoLog=(program,maxLength,length,infoLog)=>{var log=GLctx.getProgramInfoLog(GL.programs[program]);if(log===null)log="(unknown error)";var numBytesWrittenExclNull=maxLength>0&&infoLog?stringToUTF8(log,infoLog,maxLength):0;if(length)HEAP32[length>>2]=numBytesWrittenExclNull};var _emscripten_glGetProgramInfoLog=_glGetProgramInfoLog;var _glGetProgramiv=(program,pname,p)=>{if(!p){GL.recordError(1281);return}if(program>=GL.counter){GL.recordError(1281);return}program=GL.programs[program];if(pname==35716){var log=GLctx.getProgramInfoLog(program);if(log===null)log="(unknown error)";HEAP32[p>>2]=log.length+1}else if(pname==35719){if(!program.maxUniformLength){for(var i=0;i<GLctx.getProgramParameter(program,35718);++i){program.maxUniformLength=Math.max(program.maxUniformLength,GLctx.getActiveUniform(program,i).name.length+1)}}HEAP32[p>>2]=program.maxUniformLength}else if(pname==35722){if(!program.maxAttributeLength){for(var i=0;i<GLctx.getProgramParameter(program,35721);++i){program.maxAttributeLength=Math.max(program.maxAttributeLength,GLctx.getActiveAttrib(program,i).name.length+1)}}HEAP32[p>>2]=program.maxAttributeLength}else if(pname==35381){if(!program.maxUniformBlockNameLength){for(var i=0;i<GLctx.getProgramParameter(program,35382);++i){program.maxUniformBlockNameLength=Math.max(program.maxUniformBlockNameLength,GLctx.getActiveUniformBlockName(program,i).length+1)}}HEAP32[p>>2]=program.maxUniformBlockNameLength}else{HEAP32[p>>2]=GLctx.getProgramParameter(program,pname)}};var _emscripten_glGetProgramiv=_glGetProgramiv;var _glGetQueryObjecti64vEXT=(id,pname,params)=>{if(!params){GL.recordError(1281);return}var query=GL.queries[id];var param;{param=GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query,pname)}var ret;if(typeof param=="boolean"){ret=param?1:0}else{ret=param}writeI53ToI64(params,ret)};var _emscripten_glGetQueryObjecti64vEXT=_glGetQueryObjecti64vEXT;var _glGetQueryObjectivEXT=(id,pname,params)=>{if(!params){GL.recordError(1281);return}var query=GL.queries[id];var param=GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query,pname);var ret;if(typeof param=="boolean"){ret=param?1:0}else{ret=param}HEAP32[params>>2]=ret};var _emscripten_glGetQueryObjectivEXT=_glGetQueryObjectivEXT;var _glGetQueryObjectui64vEXT=_glGetQueryObjecti64vEXT;var _emscripten_glGetQueryObjectui64vEXT=_glGetQueryObjectui64vEXT;var _glGetQueryObjectuivEXT=_glGetQueryObjectivEXT;var _emscripten_glGetQueryObjectuivEXT=_glGetQueryObjectuivEXT;var _glGetQueryivEXT=(target,pname,params)=>{if(!params){GL.recordError(1281);return}HEAP32[params>>2]=GLctx.disjointTimerQueryExt["getQueryEXT"](target,pname)};var _emscripten_glGetQueryivEXT=_glGetQueryivEXT;var _glGetRenderbufferParameteriv=(target,pname,params)=>{if(!params){GL.recordError(1281);return}HEAP32[params>>2]=GLctx.getRenderbufferParameter(target,pname)};var _emscripten_glGetRenderbufferParameteriv=_glGetRenderbufferParameteriv;var _glGetShaderInfoLog=(shader,maxLength,length,infoLog)=>{var log=GLctx.getShaderInfoLog(GL.shaders[shader]);if(log===null)log="(unknown error)";var numBytesWrittenExclNull=maxLength>0&&infoLog?stringToUTF8(log,infoLog,maxLength):0;if(length)HEAP32[length>>2]=numBytesWrittenExclNull};var _emscripten_glGetShaderInfoLog=_glGetShaderInfoLog;var _glGetShaderPrecisionFormat=(shaderType,precisionType,range,precision)=>{var result=GLctx.getShaderPrecisionFormat(shaderType,precisionType);HEAP32[range>>2]=result.rangeMin;HEAP32[range+4>>2]=result.rangeMax;HEAP32[precision>>2]=result.precision};var _emscripten_glGetShaderPrecisionFormat=_glGetShaderPrecisionFormat;var _glGetShaderSource=(shader,bufSize,length,source)=>{var result=GLctx.getShaderSource(GL.shaders[shader]);if(!result)return;var numBytesWrittenExclNull=bufSize>0&&source?stringToUTF8(result,source,bufSize):0;if(length)HEAP32[length>>2]=numBytesWrittenExclNull};var _emscripten_glGetShaderSource=_glGetShaderSource;var _glGetShaderiv=(shader,pname,p)=>{if(!p){GL.recordError(1281);return}if(pname==35716){var log=GLctx.getShaderInfoLog(GL.shaders[shader]);if(log===null)log="(unknown error)";var logLength=log?log.length+1:0;HEAP32[p>>2]=logLength}else if(pname==35720){var source=GLctx.getShaderSource(GL.shaders[shader]);var sourceLength=source?source.length+1:0;HEAP32[p>>2]=sourceLength}else{HEAP32[p>>2]=GLctx.getShaderParameter(GL.shaders[shader],pname)}};var _emscripten_glGetShaderiv=_glGetShaderiv;var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToNewUTF8=str=>{var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8(str,ret,size);return ret};var webglGetExtensions=function $webglGetExtensions(){var exts=getEmscriptenSupportedExtensions(GLctx);exts=exts.concat(exts.map(e=>"GL_"+e));return exts};var _glGetString=name_=>{var ret=GL.stringCache[name_];if(!ret){switch(name_){case 7939:ret=stringToNewUTF8(webglGetExtensions().join(" "));break;case 7936:case 7937:case 37445:case 37446:var s=GLctx.getParameter(name_);if(!s){GL.recordError(1280)}ret=s?stringToNewUTF8(s):0;break;case 7938:var glVersion=GLctx.getParameter(7938);{glVersion="OpenGL ES 2.0 (".concat(glVersion,")")}ret=stringToNewUTF8(glVersion);break;case 35724:var glslVersion=GLctx.getParameter(35724);var ver_re=/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;var ver_num=glslVersion.match(ver_re);if(ver_num!==null){if(ver_num[1].length==3)ver_num[1]=ver_num[1]+"0";glslVersion="OpenGL ES GLSL ES ".concat(ver_num[1]," (").concat(glslVersion,")")}ret=stringToNewUTF8(glslVersion);break;default:GL.recordError(1280)}GL.stringCache[name_]=ret}return ret};var _emscripten_glGetString=_glGetString;var _glGetTexParameterfv=(target,pname,params)=>{if(!params){GL.recordError(1281);return}HEAPF32[params>>2]=GLctx.getTexParameter(target,pname)};var _emscripten_glGetTexParameterfv=_glGetTexParameterfv;var _glGetTexParameteriv=(target,pname,params)=>{if(!params){GL.recordError(1281);return}HEAP32[params>>2]=GLctx.getTexParameter(target,pname)};var _emscripten_glGetTexParameteriv=_glGetTexParameteriv;var jstoi_q=str=>parseInt(str);var webglGetLeftBracePos=name=>name.slice(-1)=="]"&&name.lastIndexOf("[");var webglPrepareUniformLocationsBeforeFirstUse=program=>{var uniformLocsById=program.uniformLocsById,uniformSizeAndIdsByName=program.uniformSizeAndIdsByName,i,j;if(!uniformLocsById){program.uniformLocsById=uniformLocsById={};program.uniformArrayNamesById={};for(i=0;i<GLctx.getProgramParameter(program,35718);++i){var u=GLctx.getActiveUniform(program,i);var nm=u.name;var sz=u.size;var lb=webglGetLeftBracePos(nm);var arrayName=lb>0?nm.slice(0,lb):nm;var id=program.uniformIdCounter;program.uniformIdCounter+=sz;uniformSizeAndIdsByName[arrayName]=[sz,id];for(j=0;j<sz;++j){uniformLocsById[id]=j;program.uniformArrayNamesById[id++]=arrayName}}}};var _glGetUniformLocation=(program,name)=>{name=UTF8ToString(name);if(program=GL.programs[program]){webglPrepareUniformLocationsBeforeFirstUse(program);var uniformLocsById=program.uniformLocsById;var arrayIndex=0;var uniformBaseName=name;var leftBrace=webglGetLeftBracePos(name);if(leftBrace>0){arrayIndex=jstoi_q(name.slice(leftBrace+1))>>>0;uniformBaseName=name.slice(0,leftBrace)}var sizeAndId=program.uniformSizeAndIdsByName[uniformBaseName];if(sizeAndId&&arrayIndex<sizeAndId[0]){arrayIndex+=sizeAndId[1];if(uniformLocsById[arrayIndex]=uniformLocsById[arrayIndex]||GLctx.getUniformLocation(program,name)){return arrayIndex}}}else{GL.recordError(1281)}return-1};var _emscripten_glGetUniformLocation=_glGetUniformLocation;var webglGetUniformLocation=location=>{var p=GLctx.currentProgram;if(p){var webglLoc=p.uniformLocsById[location];if(typeof webglLoc=="number"){p.uniformLocsById[location]=webglLoc=GLctx.getUniformLocation(p,p.uniformArrayNamesById[location]+(webglLoc>0?"[".concat(webglLoc,"]"):""))}return webglLoc}else{GL.recordError(1282)}};var emscriptenWebGLGetUniform=(program,location,params,type)=>{if(!params){GL.recordError(1281);return}program=GL.programs[program];webglPrepareUniformLocationsBeforeFirstUse(program);var data=GLctx.getUniform(program,webglGetUniformLocation(location));if(typeof data=="number"||typeof data=="boolean"){switch(type){case 0:HEAP32[params>>2]=data;break;case 2:HEAPF32[params>>2]=data;break}}else{for(var i=0;i<data.length;i++){switch(type){case 0:HEAP32[params+i*4>>2]=data[i];break;case 2:HEAPF32[params+i*4>>2]=data[i];break}}}};var _glGetUniformfv=(program,location,params)=>{emscriptenWebGLGetUniform(program,location,params,2)};var _emscripten_glGetUniformfv=_glGetUniformfv;var _glGetUniformiv=(program,location,params)=>{emscriptenWebGLGetUniform(program,location,params,0)};var _emscripten_glGetUniformiv=_glGetUniformiv;var _glGetVertexAttribPointerv=(index,pname,pointer)=>{if(!pointer){GL.recordError(1281);return}HEAP32[pointer>>2]=GLctx.getVertexAttribOffset(index,pname)};var _emscripten_glGetVertexAttribPointerv=_glGetVertexAttribPointerv;var emscriptenWebGLGetVertexAttrib=(index,pname,params,type)=>{if(!params){GL.recordError(1281);return}var data=GLctx.getVertexAttrib(index,pname);if(pname==34975){HEAP32[params>>2]=data&&data["name"]}else if(typeof data=="number"||typeof data=="boolean"){switch(type){case 0:HEAP32[params>>2]=data;break;case 2:HEAPF32[params>>2]=data;break;case 5:HEAP32[params>>2]=Math.fround(data);break}}else{for(var i=0;i<data.length;i++){switch(type){case 0:HEAP32[params+i*4>>2]=data[i];break;case 2:HEAPF32[params+i*4>>2]=data[i];break;case 5:HEAP32[params+i*4>>2]=Math.fround(data[i]);break}}}};var _glGetVertexAttribfv=(index,pname,params)=>{emscriptenWebGLGetVertexAttrib(index,pname,params,2)};var _emscripten_glGetVertexAttribfv=_glGetVertexAttribfv;var _glGetVertexAttribiv=(index,pname,params)=>{emscriptenWebGLGetVertexAttrib(index,pname,params,5)};var _emscripten_glGetVertexAttribiv=_glGetVertexAttribiv;var _glHint=(x0,x1)=>GLctx.hint(x0,x1);var _emscripten_glHint=_glHint;var _glIsBuffer=buffer=>{var b=GL.buffers[buffer];if(!b)return 0;return GLctx.isBuffer(b)};var _emscripten_glIsBuffer=_glIsBuffer;var _glIsEnabled=x0=>GLctx.isEnabled(x0);var _emscripten_glIsEnabled=_glIsEnabled;var _glIsFramebuffer=framebuffer=>{var fb=GL.framebuffers[framebuffer];if(!fb)return 0;return GLctx.isFramebuffer(fb)};var _emscripten_glIsFramebuffer=_glIsFramebuffer;var _glIsProgram=program=>{program=GL.programs[program];if(!program)return 0;return GLctx.isProgram(program)};var _emscripten_glIsProgram=_glIsProgram;var _glIsQueryEXT=id=>{var query=GL.queries[id];if(!query)return 0;return GLctx.disjointTimerQueryExt["isQueryEXT"](query)};var _emscripten_glIsQueryEXT=_glIsQueryEXT;var _glIsRenderbuffer=renderbuffer=>{var rb=GL.renderbuffers[renderbuffer];if(!rb)return 0;return GLctx.isRenderbuffer(rb)};var _emscripten_glIsRenderbuffer=_glIsRenderbuffer;var _glIsShader=shader=>{var s=GL.shaders[shader];if(!s)return 0;return GLctx.isShader(s)};var _emscripten_glIsShader=_glIsShader;var _glIsTexture=id=>{var texture=GL.textures[id];if(!texture)return 0;return GLctx.isTexture(texture)};var _emscripten_glIsTexture=_glIsTexture;var _glIsVertexArray=array=>{var vao=GL.vaos[array];if(!vao)return 0;return GLctx.isVertexArray(vao)};var _glIsVertexArrayOES=_glIsVertexArray;var _emscripten_glIsVertexArrayOES=_glIsVertexArrayOES;var _glLineWidth=x0=>GLctx.lineWidth(x0);var _emscripten_glLineWidth=_glLineWidth;var _glLinkProgram=program=>{program=GL.programs[program];GLctx.linkProgram(program);program.uniformLocsById=0;program.uniformSizeAndIdsByName={}};var _emscripten_glLinkProgram=_glLinkProgram;var _glPixelStorei=(pname,param)=>{if(pname==3317){GL.unpackAlignment=param}GLctx.pixelStorei(pname,param)};var _emscripten_glPixelStorei=_glPixelStorei;var _glPolygonOffset=(x0,x1)=>GLctx.polygonOffset(x0,x1);var _emscripten_glPolygonOffset=_glPolygonOffset;var _glQueryCounterEXT=(id,target)=>{GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id],target)};var _emscripten_glQueryCounterEXT=_glQueryCounterEXT;var computeUnpackAlignedImageSize=(width,height,sizePerPixel,alignment)=>{function roundedToNextMultipleOf(x,y){return x+y-1&-y}var plainRowSize=width*sizePerPixel;var alignedRowSize=roundedToNextMultipleOf(plainRowSize,alignment);return height*alignedRowSize};var colorChannelsInGlTextureFormat=format=>{var colorChannels={5:3,6:4,8:2,29502:3,29504:4};return colorChannels[format-6402]||1};var heapObjectForWebGLType=type=>{type-=5120;if(type==1)return HEAPU8;if(type==4)return HEAP32;if(type==6)return HEAPF32;if(type==5||type==28922)return HEAPU32;return HEAPU16};var toTypedArrayIndex=(pointer,heap)=>pointer>>>31-Math.clz32(heap.BYTES_PER_ELEMENT);var emscriptenWebGLGetTexPixelData=(type,format,width,height,pixels,internalFormat)=>{var heap=heapObjectForWebGLType(type);var sizePerPixel=colorChannelsInGlTextureFormat(format)*heap.BYTES_PER_ELEMENT;var bytes=computeUnpackAlignedImageSize(width,height,sizePerPixel,GL.unpackAlignment);return heap.subarray(toTypedArrayIndex(pixels,heap),toTypedArrayIndex(pixels+bytes,heap))};var _glReadPixels=(x,y,width,height,format,type,pixels)=>{var pixelData=emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,format);if(!pixelData){GL.recordError(1280);return}GLctx.readPixels(x,y,width,height,format,type,pixelData)};var _emscripten_glReadPixels=_glReadPixels;var _glReleaseShaderCompiler=()=>{};var _emscripten_glReleaseShaderCompiler=_glReleaseShaderCompiler;var _glRenderbufferStorage=(x0,x1,x2,x3)=>GLctx.renderbufferStorage(x0,x1,x2,x3);var _emscripten_glRenderbufferStorage=_glRenderbufferStorage;var _glSampleCoverage=(value,invert)=>{GLctx.sampleCoverage(value,!!invert)};var _emscripten_glSampleCoverage=_glSampleCoverage;var _glScissor=(x0,x1,x2,x3)=>GLctx.scissor(x0,x1,x2,x3);var _emscripten_glScissor=_glScissor;var _glShaderBinary=(count,shaders,binaryformat,binary,length)=>{GL.recordError(1280)};var _emscripten_glShaderBinary=_glShaderBinary;var _glShaderSource=(shader,count,string,length)=>{var source=GL.getSource(shader,count,string,length);GLctx.shaderSource(GL.shaders[shader],source)};var _emscripten_glShaderSource=_glShaderSource;var _glStencilFunc=(x0,x1,x2)=>GLctx.stencilFunc(x0,x1,x2);var _emscripten_glStencilFunc=_glStencilFunc;var _glStencilFuncSeparate=(x0,x1,x2,x3)=>GLctx.stencilFuncSeparate(x0,x1,x2,x3);var _emscripten_glStencilFuncSeparate=_glStencilFuncSeparate;var _glStencilMask=x0=>GLctx.stencilMask(x0);var _emscripten_glStencilMask=_glStencilMask;var _glStencilMaskSeparate=(x0,x1)=>GLctx.stencilMaskSeparate(x0,x1);var _emscripten_glStencilMaskSeparate=_glStencilMaskSeparate;var _glStencilOp=(x0,x1,x2)=>GLctx.stencilOp(x0,x1,x2);var _emscripten_glStencilOp=_glStencilOp;var _glStencilOpSeparate=(x0,x1,x2,x3)=>GLctx.stencilOpSeparate(x0,x1,x2,x3);var _emscripten_glStencilOpSeparate=_glStencilOpSeparate;var _glTexImage2D=(target,level,internalFormat,width,height,border,format,type,pixels)=>{var pixelData=pixels?emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,internalFormat):null;GLctx.texImage2D(target,level,internalFormat,width,height,border,format,type,pixelData)};var _emscripten_glTexImage2D=_glTexImage2D;var _glTexParameterf=(x0,x1,x2)=>GLctx.texParameterf(x0,x1,x2);var _emscripten_glTexParameterf=_glTexParameterf;var _glTexParameterfv=(target,pname,params)=>{var param=HEAPF32[params>>2];GLctx.texParameterf(target,pname,param)};var _emscripten_glTexParameterfv=_glTexParameterfv;var _glTexParameteri=(x0,x1,x2)=>GLctx.texParameteri(x0,x1,x2);var _emscripten_glTexParameteri=_glTexParameteri;var _glTexParameteriv=(target,pname,params)=>{var param=HEAP32[params>>2];GLctx.texParameteri(target,pname,param)};var _emscripten_glTexParameteriv=_glTexParameteriv;var _glTexSubImage2D=(target,level,xoffset,yoffset,width,height,format,type,pixels)=>{var pixelData=pixels?emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,0):null;GLctx.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,pixelData)};var _emscripten_glTexSubImage2D=_glTexSubImage2D;var _glUniform1f=(location,v0)=>{GLctx.uniform1f(webglGetUniformLocation(location),v0)};var _emscripten_glUniform1f=_glUniform1f;var miniTempWebGLFloatBuffers=[];var _glUniform1fv=(location,count,value)=>{if(count<=288){var view=miniTempWebGLFloatBuffers[count];for(var i=0;i<count;++i){view[i]=HEAPF32[value+4*i>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*4>>2)}GLctx.uniform1fv(webglGetUniformLocation(location),view)};var _emscripten_glUniform1fv=_glUniform1fv;var _glUniform1i=(location,v0)=>{GLctx.uniform1i(webglGetUniformLocation(location),v0)};var _emscripten_glUniform1i=_glUniform1i;var miniTempWebGLIntBuffers=[];var _glUniform1iv=(location,count,value)=>{if(count<=288){var view=miniTempWebGLIntBuffers[count];for(var i=0;i<count;++i){view[i]=HEAP32[value+4*i>>2]}}else{var view=HEAP32.subarray(value>>2,value+count*4>>2)}GLctx.uniform1iv(webglGetUniformLocation(location),view)};var _emscripten_glUniform1iv=_glUniform1iv;var _glUniform2f=(location,v0,v1)=>{GLctx.uniform2f(webglGetUniformLocation(location),v0,v1)};var _emscripten_glUniform2f=_glUniform2f;var _glUniform2fv=(location,count,value)=>{if(count<=144){var view=miniTempWebGLFloatBuffers[2*count];for(var i=0;i<2*count;i+=2){view[i]=HEAPF32[value+4*i>>2];view[i+1]=HEAPF32[value+(4*i+4)>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*8>>2)}GLctx.uniform2fv(webglGetUniformLocation(location),view)};var _emscripten_glUniform2fv=_glUniform2fv;var _glUniform2i=(location,v0,v1)=>{GLctx.uniform2i(webglGetUniformLocation(location),v0,v1)};var _emscripten_glUniform2i=_glUniform2i;var _glUniform2iv=(location,count,value)=>{if(count<=144){var view=miniTempWebGLIntBuffers[2*count];for(var i=0;i<2*count;i+=2){view[i]=HEAP32[value+4*i>>2];view[i+1]=HEAP32[value+(4*i+4)>>2]}}else{var view=HEAP32.subarray(value>>2,value+count*8>>2)}GLctx.uniform2iv(webglGetUniformLocation(location),view)};var _emscripten_glUniform2iv=_glUniform2iv;var _glUniform3f=(location,v0,v1,v2)=>{GLctx.uniform3f(webglGetUniformLocation(location),v0,v1,v2)};var _emscripten_glUniform3f=_glUniform3f;var _glUniform3fv=(location,count,value)=>{if(count<=96){var view=miniTempWebGLFloatBuffers[3*count];for(var i=0;i<3*count;i+=3){view[i]=HEAPF32[value+4*i>>2];view[i+1]=HEAPF32[value+(4*i+4)>>2];view[i+2]=HEAPF32[value+(4*i+8)>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*12>>2)}GLctx.uniform3fv(webglGetUniformLocation(location),view)};var _emscripten_glUniform3fv=_glUniform3fv;var _glUniform3i=(location,v0,v1,v2)=>{GLctx.uniform3i(webglGetUniformLocation(location),v0,v1,v2)};var _emscripten_glUniform3i=_glUniform3i;var _glUniform3iv=(location,count,value)=>{if(count<=96){var view=miniTempWebGLIntBuffers[3*count];for(var i=0;i<3*count;i+=3){view[i]=HEAP32[value+4*i>>2];view[i+1]=HEAP32[value+(4*i+4)>>2];view[i+2]=HEAP32[value+(4*i+8)>>2]}}else{var view=HEAP32.subarray(value>>2,value+count*12>>2)}GLctx.uniform3iv(webglGetUniformLocation(location),view)};var _emscripten_glUniform3iv=_glUniform3iv;var _glUniform4f=(location,v0,v1,v2,v3)=>{GLctx.uniform4f(webglGetUniformLocation(location),v0,v1,v2,v3)};var _emscripten_glUniform4f=_glUniform4f;var _glUniform4fv=(location,count,value)=>{if(count<=72){var view=miniTempWebGLFloatBuffers[4*count];var heap=HEAPF32;value=value>>2;for(var i=0;i<4*count;i+=4){var dst=value+i;view[i]=heap[dst];view[i+1]=heap[dst+1];view[i+2]=heap[dst+2];view[i+3]=heap[dst+3]}}else{var view=HEAPF32.subarray(value>>2,value+count*16>>2)}GLctx.uniform4fv(webglGetUniformLocation(location),view)};var _emscripten_glUniform4fv=_glUniform4fv;var _glUniform4i=(location,v0,v1,v2,v3)=>{GLctx.uniform4i(webglGetUniformLocation(location),v0,v1,v2,v3)};var _emscripten_glUniform4i=_glUniform4i;var _glUniform4iv=(location,count,value)=>{if(count<=72){var view=miniTempWebGLIntBuffers[4*count];for(var i=0;i<4*count;i+=4){view[i]=HEAP32[value+4*i>>2];view[i+1]=HEAP32[value+(4*i+4)>>2];view[i+2]=HEAP32[value+(4*i+8)>>2];view[i+3]=HEAP32[value+(4*i+12)>>2]}}else{var view=HEAP32.subarray(value>>2,value+count*16>>2)}GLctx.uniform4iv(webglGetUniformLocation(location),view)};var _emscripten_glUniform4iv=_glUniform4iv;var _glUniformMatrix2fv=(location,count,transpose,value)=>{if(count<=72){var view=miniTempWebGLFloatBuffers[4*count];for(var i=0;i<4*count;i+=4){view[i]=HEAPF32[value+4*i>>2];view[i+1]=HEAPF32[value+(4*i+4)>>2];view[i+2]=HEAPF32[value+(4*i+8)>>2];view[i+3]=HEAPF32[value+(4*i+12)>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*16>>2)}GLctx.uniformMatrix2fv(webglGetUniformLocation(location),!!transpose,view)};var _emscripten_glUniformMatrix2fv=_glUniformMatrix2fv;var _glUniformMatrix3fv=(location,count,transpose,value)=>{if(count<=32){var view=miniTempWebGLFloatBuffers[9*count];for(var i=0;i<9*count;i+=9){view[i]=HEAPF32[value+4*i>>2];view[i+1]=HEAPF32[value+(4*i+4)>>2];view[i+2]=HEAPF32[value+(4*i+8)>>2];view[i+3]=HEAPF32[value+(4*i+12)>>2];view[i+4]=HEAPF32[value+(4*i+16)>>2];view[i+5]=HEAPF32[value+(4*i+20)>>2];view[i+6]=HEAPF32[value+(4*i+24)>>2];view[i+7]=HEAPF32[value+(4*i+28)>>2];view[i+8]=HEAPF32[value+(4*i+32)>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*36>>2)}GLctx.uniformMatrix3fv(webglGetUniformLocation(location),!!transpose,view)};var _emscripten_glUniformMatrix3fv=_glUniformMatrix3fv;var _glUniformMatrix4fv=(location,count,transpose,value)=>{if(count<=18){var view=miniTempWebGLFloatBuffers[16*count];var heap=HEAPF32;value=value>>2;for(var i=0;i<16*count;i+=16){var dst=value+i;view[i]=heap[dst];view[i+1]=heap[dst+1];view[i+2]=heap[dst+2];view[i+3]=heap[dst+3];view[i+4]=heap[dst+4];view[i+5]=heap[dst+5];view[i+6]=heap[dst+6];view[i+7]=heap[dst+7];view[i+8]=heap[dst+8];view[i+9]=heap[dst+9];view[i+10]=heap[dst+10];view[i+11]=heap[dst+11];view[i+12]=heap[dst+12];view[i+13]=heap[dst+13];view[i+14]=heap[dst+14];view[i+15]=heap[dst+15]}}else{var view=HEAPF32.subarray(value>>2,value+count*64>>2)}GLctx.uniformMatrix4fv(webglGetUniformLocation(location),!!transpose,view)};var _emscripten_glUniformMatrix4fv=_glUniformMatrix4fv;var _glUseProgram=program=>{program=GL.programs[program];GLctx.useProgram(program);GLctx.currentProgram=program};var _emscripten_glUseProgram=_glUseProgram;var _glValidateProgram=program=>{GLctx.validateProgram(GL.programs[program])};var _emscripten_glValidateProgram=_glValidateProgram;var _glVertexAttrib1f=(x0,x1)=>GLctx.vertexAttrib1f(x0,x1);var _emscripten_glVertexAttrib1f=_glVertexAttrib1f;var _glVertexAttrib1fv=(index,v)=>{GLctx.vertexAttrib1f(index,HEAPF32[v>>2])};var _emscripten_glVertexAttrib1fv=_glVertexAttrib1fv;var _glVertexAttrib2f=(x0,x1,x2)=>GLctx.vertexAttrib2f(x0,x1,x2);var _emscripten_glVertexAttrib2f=_glVertexAttrib2f;var _glVertexAttrib2fv=(index,v)=>{GLctx.vertexAttrib2f(index,HEAPF32[v>>2],HEAPF32[v+4>>2])};var _emscripten_glVertexAttrib2fv=_glVertexAttrib2fv;var _glVertexAttrib3f=(x0,x1,x2,x3)=>GLctx.vertexAttrib3f(x0,x1,x2,x3);var _emscripten_glVertexAttrib3f=_glVertexAttrib3f;var _glVertexAttrib3fv=(index,v)=>{GLctx.vertexAttrib3f(index,HEAPF32[v>>2],HEAPF32[v+4>>2],HEAPF32[v+8>>2])};var _emscripten_glVertexAttrib3fv=_glVertexAttrib3fv;var _glVertexAttrib4f=(x0,x1,x2,x3,x4)=>GLctx.vertexAttrib4f(x0,x1,x2,x3,x4);var _emscripten_glVertexAttrib4f=_glVertexAttrib4f;var _glVertexAttrib4fv=(index,v)=>{GLctx.vertexAttrib4f(index,HEAPF32[v>>2],HEAPF32[v+4>>2],HEAPF32[v+8>>2],HEAPF32[v+12>>2])};var _emscripten_glVertexAttrib4fv=_glVertexAttrib4fv;var _glVertexAttribDivisor=(index,divisor)=>{GLctx.vertexAttribDivisor(index,divisor)};var _glVertexAttribDivisorANGLE=_glVertexAttribDivisor;var _emscripten_glVertexAttribDivisorANGLE=_glVertexAttribDivisorANGLE;var _glVertexAttribPointer=(index,size,type,normalized,stride,ptr)=>{GLctx.vertexAttribPointer(index,size,type,!!normalized,stride,ptr)};var _emscripten_glVertexAttribPointer=_glVertexAttribPointer;var _glViewport=(x0,x1,x2,x3)=>GLctx.viewport(x0,x1,x2,x3);var _emscripten_glViewport=_glViewport;var getHeapMax=()=>2147483648;var growMemory=size=>{var b=wasmMemory.buffer;var pages=(size-b.byteLength+65535)/65536;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}var alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push("".concat(x,"=").concat(env[x]))}getEnvStrings.strings=strings}return getEnvStrings.strings};var stringToAscii=(str,buffer)=>{for(var i=0;i<str.length;++i){HEAP8[buffer++]=str.charCodeAt(i)}HEAP8[buffer]=0};var _environ_get=(__environ,environ_buf)=>{var bufSize=0;getEnvStrings().forEach((string,i)=>{var ptr=environ_buf+bufSize;HEAPU32[__environ+i*4>>2]=ptr;stringToAscii(string,ptr);bufSize+=string.length+1});return 0};var _environ_sizes_get=(penviron_count,penviron_buf_size)=>{var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(string=>bufSize+=string.length+1);HEAPU32[penviron_buf_size>>2]=bufSize;return 0};var _fd_close=fd=>52;var _fd_read=(fd,iov,iovcnt,pnum)=>52;var convertI32PairToI53Checked=(lo,hi)=>hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN;function _fd_seek(fd,offset_low,offset_high,whence,newOffset){var offset=convertI32PairToI53Checked(offset_low,offset_high);return 70}var printCharBuffers=[null,[],[]];var printChar=(stream,curr)=>{var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}};var _fd_write=(fd,iov,iovcnt,pnum)=>{var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j])}num+=len}HEAPU32[pnum>>2]=num;return 0};var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var arraySum=(array,index)=>{var sum=0;for(var i=0;i<=index;sum+=array[i++]){}return sum};var MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];var MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];var addDays=(date,days)=>{var newDate=new Date(date.getTime());while(days>0){var leap=isLeapYear(newDate.getFullYear());var currentMonth=newDate.getMonth();var daysInCurrentMonth=(leap?MONTH_DAYS_LEAP:MONTH_DAYS_REGULAR)[currentMonth];if(days>daysInCurrentMonth-newDate.getDate()){days-=daysInCurrentMonth-newDate.getDate()+1;newDate.setDate(1);if(currentMonth<11){newDate.setMonth(currentMonth+1)}else{newDate.setMonth(0);newDate.setFullYear(newDate.getFullYear()+1)}}else{newDate.setDate(newDate.getDate()+days);return newDate}}return newDate};function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}var writeArrayToMemory=(array,buffer)=>{HEAP8.set(array,buffer)};var _strftime=(s,maxsize,format,tm)=>{var tm_zone=HEAPU32[tm+40>>2];var date={tm_sec:HEAP32[tm>>2],tm_min:HEAP32[tm+4>>2],tm_hour:HEAP32[tm+8>>2],tm_mday:HEAP32[tm+12>>2],tm_mon:HEAP32[tm+16>>2],tm_year:HEAP32[tm+20>>2],tm_wday:HEAP32[tm+24>>2],tm_yday:HEAP32[tm+28>>2],tm_isdst:HEAP32[tm+32>>2],tm_gmtoff:HEAP32[tm+36>>2],tm_zone:tm_zone?UTF8ToString(tm_zone):""};var pattern=UTF8ToString(format);var EXPANSION_RULES_1={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var rule in EXPANSION_RULES_1){pattern=pattern.replace(new RegExp(rule,"g"),EXPANSION_RULES_1[rule])}var WEEKDAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];function leadingSomething(value,digits,character){var str=typeof value=="number"?value.toString():value||"";while(str.length<digits){str=character[0]+str}return str}function leadingNulls(value,digits){return leadingSomething(value,digits,"0")}function compareByDay(date1,date2){function sgn(value){return value<0?-1:value>0?1:0}var compare;if((compare=sgn(date1.getFullYear()-date2.getFullYear()))===0){if((compare=sgn(date1.getMonth()-date2.getMonth()))===0){compare=sgn(date1.getDate()-date2.getDate())}}return compare}function getFirstWeekStartDate(janFourth){switch(janFourth.getDay()){case 0:return new Date(janFourth.getFullYear()-1,11,29);case 1:return janFourth;case 2:return new Date(janFourth.getFullYear(),0,3);case 3:return new Date(janFourth.getFullYear(),0,2);case 4:return new Date(janFourth.getFullYear(),0,1);case 5:return new Date(janFourth.getFullYear()-1,11,31);case 6:return new Date(janFourth.getFullYear()-1,11,30)}}function getWeekBasedYear(date){var thisDate=addDays(new Date(date.tm_year+1900,0,1),date.tm_yday);var janFourthThisYear=new Date(thisDate.getFullYear(),0,4);var janFourthNextYear=new Date(thisDate.getFullYear()+1,0,4);var firstWeekStartThisYear=getFirstWeekStartDate(janFourthThisYear);var firstWeekStartNextYear=getFirstWeekStartDate(janFourthNextYear);if(compareByDay(firstWeekStartThisYear,thisDate)<=0){if(compareByDay(firstWeekStartNextYear,thisDate)<=0){return thisDate.getFullYear()+1}return thisDate.getFullYear()}return thisDate.getFullYear()-1}var EXPANSION_RULES_2={"%a":date=>WEEKDAYS[date.tm_wday].substring(0,3),"%A":date=>WEEKDAYS[date.tm_wday],"%b":date=>MONTHS[date.tm_mon].substring(0,3),"%B":date=>MONTHS[date.tm_mon],"%C":date=>{var year=date.tm_year+1900;return leadingNulls(year/100|0,2)},"%d":date=>leadingNulls(date.tm_mday,2),"%e":date=>leadingSomething(date.tm_mday,2," "),"%g":date=>getWeekBasedYear(date).toString().substring(2),"%G":getWeekBasedYear,"%H":date=>leadingNulls(date.tm_hour,2),"%I":date=>{var twelveHour=date.tm_hour;if(twelveHour==0)twelveHour=12;else if(twelveHour>12)twelveHour-=12;return leadingNulls(twelveHour,2)},"%j":date=>leadingNulls(date.tm_mday+arraySum(isLeapYear(date.tm_year+1900)?MONTH_DAYS_LEAP:MONTH_DAYS_REGULAR,date.tm_mon-1),3),"%m":date=>leadingNulls(date.tm_mon+1,2),"%M":date=>leadingNulls(date.tm_min,2),"%n":()=>"\n","%p":date=>{if(date.tm_hour>=0&&date.tm_hour<12){return"AM"}return"PM"},"%S":date=>leadingNulls(date.tm_sec,2),"%t":()=>"\t","%u":date=>date.tm_wday||7,"%U":date=>{var days=date.tm_yday+7-date.tm_wday;return leadingNulls(Math.floor(days/7),2)},"%V":date=>{var val=Math.floor((date.tm_yday+7-(date.tm_wday+6)%7)/7);if((date.tm_wday+371-date.tm_yday-2)%7<=2){val++}if(!val){val=52;var dec31=(date.tm_wday+7-date.tm_yday-1)%7;if(dec31==4||dec31==5&&isLeapYear(date.tm_year%400-1)){val++}}else if(val==53){var jan1=(date.tm_wday+371-date.tm_yday)%7;if(jan1!=4&&(jan1!=3||!isLeapYear(date.tm_year)))val=1}return leadingNulls(val,2)},"%w":date=>date.tm_wday,"%W":date=>{var days=date.tm_yday+7-(date.tm_wday+6)%7;return leadingNulls(Math.floor(days/7),2)},"%y":date=>(date.tm_year+1900).toString().substring(2),"%Y":date=>date.tm_year+1900,"%z":date=>{var off=date.tm_gmtoff;var ahead=off>=0;off=Math.abs(off)/60;off=off/60*100+off%60;return(ahead?"+":"-")+String("0000"+off).slice(-4)},"%Z":date=>date.tm_zone,"%%":()=>"%"};pattern=pattern.replace(/%%/g,"\0\0");for(var rule in EXPANSION_RULES_2){if(pattern.includes(rule)){pattern=pattern.replace(new RegExp(rule,"g"),EXPANSION_RULES_2[rule](date))}}pattern=pattern.replace(/\0\0/g,"%");var bytes=intArrayFromString(pattern,false);if(bytes.length>maxsize){return 0}writeArrayToMemory(bytes,s);return bytes.length-1};var _strftime_l=(s,maxsize,format,tm,loc)=>_strftime(s,maxsize,format,tm);var getCFunc=ident=>{var func=Module["_"+ident];return func};var stackAlloc=sz=>__emscripten_stack_alloc(sz);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return ret},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func(...cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}return ccall(ident,returnType,argTypes,args,opts)}};var UTF16Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):undefined;var UTF16ToString=(ptr,maxBytesToRead)=>{var endPtr=ptr;var idx=endPtr>>1;var maxIdx=idx+maxBytesToRead/2;while(!(idx>=maxIdx)&&HEAPU16[idx])++idx;endPtr=idx<<1;if(endPtr-ptr>32&&UTF16Decoder)return UTF16Decoder.decode(HEAPU8.subarray(ptr,endPtr));var str="";for(var i=0;!(i>=maxBytesToRead/2);++i){var codeUnit=HEAP16[ptr+i*2>>1];if(codeUnit==0)break;str+=String.fromCharCode(codeUnit)}return str};Module["requestFullscreen"]=Browser.requestFullscreen;Module["requestAnimationFrame"]=Browser.requestAnimationFrame;Module["setCanvasSize"]=Browser.setCanvasSize;Module["pauseMainLoop"]=Browser.mainLoop.pause;Module["resumeMainLoop"]=Browser.mainLoop.resume;Module["getUserMedia"]=Browser.getUserMedia;Module["createContext"]=Browser.createContext;var GLctx;for(var i=0;i<32;++i)tempFixedLengthArray.push(new Array(i));var miniTempWebGLFloatBuffersStorage=new Float32Array(288);for(var i=0;i<288;++i){miniTempWebGLFloatBuffers[i]=miniTempWebGLFloatBuffersStorage.subarray(0,i)}var miniTempWebGLIntBuffersStorage=new Int32Array(288);for(var i=0;i<288;++i){miniTempWebGLIntBuffers[i]=miniTempWebGLIntBuffersStorage.subarray(0,i)}var wasmImports={__cxa_throw:___cxa_throw,__syscall_fcntl64:___syscall_fcntl64,__syscall_ioctl:___syscall_ioctl,__syscall_openat:___syscall_openat,_abort_js:__abort_js,_emscripten_get_now_is_monotonic:__emscripten_get_now_is_monotonic,_emscripten_memcpy_js:__emscripten_memcpy_js,alBufferData:_alBufferData,alDeleteBuffers:_alDeleteBuffers,alDeleteSources:_alDeleteSources,alGenBuffers:_alGenBuffers,alGenSources:_alGenSources,alGetSourcei:_alGetSourcei,alListenerfv:_alListenerfv,alSourcePause:_alSourcePause,alSourcePlay:_alSourcePlay,alSourceStop:_alSourceStop,alSourcef:_alSourcef,alSourcefv:_alSourcefv,alSourcei:_alSourcei,alcCreateContext:_alcCreateContext,alcMakeContextCurrent:_alcMakeContextCurrent,alcOpenDevice:_alcOpenDevice,emscripten_asm_const_int:_emscripten_asm_const_int,emscripten_date_now:_emscripten_date_now,emscripten_get_now:_emscripten_get_now,emscripten_glActiveTexture:_emscripten_glActiveTexture,emscripten_glAttachShader:_emscripten_glAttachShader,emscripten_glBeginQueryEXT:_emscripten_glBeginQueryEXT,emscripten_glBindAttribLocation:_emscripten_glBindAttribLocation,emscripten_glBindBuffer:_emscripten_glBindBuffer,emscripten_glBindFramebuffer:_emscripten_glBindFramebuffer,emscripten_glBindRenderbuffer:_emscripten_glBindRenderbuffer,emscripten_glBindTexture:_emscripten_glBindTexture,emscripten_glBindVertexArrayOES:_emscripten_glBindVertexArrayOES,emscripten_glBlendColor:_emscripten_glBlendColor,emscripten_glBlendEquation:_emscripten_glBlendEquation,emscripten_glBlendEquationSeparate:_emscripten_glBlendEquationSeparate,emscripten_glBlendFunc:_emscripten_glBlendFunc,emscripten_glBlendFuncSeparate:_emscripten_glBlendFuncSeparate,emscripten_glBufferData:_emscripten_glBufferData,emscripten_glBufferSubData:_emscripten_glBufferSubData,emscripten_glCheckFramebufferStatus:_emscripten_glCheckFramebufferStatus,emscripten_glClear:_emscripten_glClear,emscripten_glClearColor:_emscripten_glClearColor,emscripten_glClearDepthf:_emscripten_glClearDepthf,emscripten_glClearStencil:_emscripten_glClearStencil,emscripten_glColorMask:_emscripten_glColorMask,emscripten_glCompileShader:_emscripten_glCompileShader,emscripten_glCompressedTexImage2D:_emscripten_glCompressedTexImage2D,emscripten_glCompressedTexSubImage2D:_emscripten_glCompressedTexSubImage2D,emscripten_glCopyTexImage2D:_emscripten_glCopyTexImage2D,emscripten_glCopyTexSubImage2D:_emscripten_glCopyTexSubImage2D,emscripten_glCreateProgram:_emscripten_glCreateProgram,emscripten_glCreateShader:_emscripten_glCreateShader,emscripten_glCullFace:_emscripten_glCullFace,emscripten_glDeleteBuffers:_emscripten_glDeleteBuffers,emscripten_glDeleteFramebuffers:_emscripten_glDeleteFramebuffers,emscripten_glDeleteProgram:_emscripten_glDeleteProgram,emscripten_glDeleteQueriesEXT:_emscripten_glDeleteQueriesEXT,emscripten_glDeleteRenderbuffers:_emscripten_glDeleteRenderbuffers,emscripten_glDeleteShader:_emscripten_glDeleteShader,emscripten_glDeleteTextures:_emscripten_glDeleteTextures,emscripten_glDeleteVertexArraysOES:_emscripten_glDeleteVertexArraysOES,emscripten_glDepthFunc:_emscripten_glDepthFunc,emscripten_glDepthMask:_emscripten_glDepthMask,emscripten_glDepthRangef:_emscripten_glDepthRangef,emscripten_glDetachShader:_emscripten_glDetachShader,emscripten_glDisable:_emscripten_glDisable,emscripten_glDisableVertexAttribArray:_emscripten_glDisableVertexAttribArray,emscripten_glDrawArrays:_emscripten_glDrawArrays,emscripten_glDrawArraysInstancedANGLE:_emscripten_glDrawArraysInstancedANGLE,emscripten_glDrawBuffersWEBGL:_emscripten_glDrawBuffersWEBGL,emscripten_glDrawElements:_emscripten_glDrawElements,emscripten_glDrawElementsInstancedANGLE:_emscripten_glDrawElementsInstancedANGLE,emscripten_glEnable:_emscripten_glEnable,emscripten_glEnableVertexAttribArray:_emscripten_glEnableVertexAttribArray,emscripten_glEndQueryEXT:_emscripten_glEndQueryEXT,emscripten_glFinish:_emscripten_glFinish,emscripten_glFlush:_emscripten_glFlush,emscripten_glFramebufferRenderbuffer:_emscripten_glFramebufferRenderbuffer,emscripten_glFramebufferTexture2D:_emscripten_glFramebufferTexture2D,emscripten_glFrontFace:_emscripten_glFrontFace,emscripten_glGenBuffers:_emscripten_glGenBuffers,emscripten_glGenFramebuffers:_emscripten_glGenFramebuffers,emscripten_glGenQueriesEXT:_emscripten_glGenQueriesEXT,emscripten_glGenRenderbuffers:_emscripten_glGenRenderbuffers,emscripten_glGenTextures:_emscripten_glGenTextures,emscripten_glGenVertexArraysOES:_emscripten_glGenVertexArraysOES,emscripten_glGenerateMipmap:_emscripten_glGenerateMipmap,emscripten_glGetActiveAttrib:_emscripten_glGetActiveAttrib,emscripten_glGetActiveUniform:_emscripten_glGetActiveUniform,emscripten_glGetAttachedShaders:_emscripten_glGetAttachedShaders,emscripten_glGetAttribLocation:_emscripten_glGetAttribLocation,emscripten_glGetBooleanv:_emscripten_glGetBooleanv,emscripten_glGetBufferParameteriv:_emscripten_glGetBufferParameteriv,emscripten_glGetError:_emscripten_glGetError,emscripten_glGetFloatv:_emscripten_glGetFloatv,emscripten_glGetFramebufferAttachmentParameteriv:_emscripten_glGetFramebufferAttachmentParameteriv,emscripten_glGetIntegerv:_emscripten_glGetIntegerv,emscripten_glGetProgramInfoLog:_emscripten_glGetProgramInfoLog,emscripten_glGetProgramiv:_emscripten_glGetProgramiv,emscripten_glGetQueryObjecti64vEXT:_emscripten_glGetQueryObjecti64vEXT,emscripten_glGetQueryObjectivEXT:_emscripten_glGetQueryObjectivEXT,emscripten_glGetQueryObjectui64vEXT:_emscripten_glGetQueryObjectui64vEXT,emscripten_glGetQueryObjectuivEXT:_emscripten_glGetQueryObjectuivEXT,emscripten_glGetQueryivEXT:_emscripten_glGetQueryivEXT,emscripten_glGetRenderbufferParameteriv:_emscripten_glGetRenderbufferParameteriv,emscripten_glGetShaderInfoLog:_emscripten_glGetShaderInfoLog,emscripten_glGetShaderPrecisionFormat:_emscripten_glGetShaderPrecisionFormat,emscripten_glGetShaderSource:_emscripten_glGetShaderSource,emscripten_glGetShaderiv:_emscripten_glGetShaderiv,emscripten_glGetString:_emscripten_glGetString,emscripten_glGetTexParameterfv:_emscripten_glGetTexParameterfv,emscripten_glGetTexParameteriv:_emscripten_glGetTexParameteriv,emscripten_glGetUniformLocation:_emscripten_glGetUniformLocation,emscripten_glGetUniformfv:_emscripten_glGetUniformfv,emscripten_glGetUniformiv:_emscripten_glGetUniformiv,emscripten_glGetVertexAttribPointerv:_emscripten_glGetVertexAttribPointerv,emscripten_glGetVertexAttribfv:_emscripten_glGetVertexAttribfv,emscripten_glGetVertexAttribiv:_emscripten_glGetVertexAttribiv,emscripten_glHint:_emscripten_glHint,emscripten_glIsBuffer:_emscripten_glIsBuffer,emscripten_glIsEnabled:_emscripten_glIsEnabled,emscripten_glIsFramebuffer:_emscripten_glIsFramebuffer,emscripten_glIsProgram:_emscripten_glIsProgram,emscripten_glIsQueryEXT:_emscripten_glIsQueryEXT,emscripten_glIsRenderbuffer:_emscripten_glIsRenderbuffer,emscripten_glIsShader:_emscripten_glIsShader,emscripten_glIsTexture:_emscripten_glIsTexture,emscripten_glIsVertexArrayOES:_emscripten_glIsVertexArrayOES,emscripten_glLineWidth:_emscripten_glLineWidth,emscripten_glLinkProgram:_emscripten_glLinkProgram,emscripten_glPixelStorei:_emscripten_glPixelStorei,emscripten_glPolygonOffset:_emscripten_glPolygonOffset,emscripten_glQueryCounterEXT:_emscripten_glQueryCounterEXT,emscripten_glReadPixels:_emscripten_glReadPixels,emscripten_glReleaseShaderCompiler:_emscripten_glReleaseShaderCompiler,emscripten_glRenderbufferStorage:_emscripten_glRenderbufferStorage,emscripten_glSampleCoverage:_emscripten_glSampleCoverage,emscripten_glScissor:_emscripten_glScissor,emscripten_glShaderBinary:_emscripten_glShaderBinary,emscripten_glShaderSource:_emscripten_glShaderSource,emscripten_glStencilFunc:_emscripten_glStencilFunc,emscripten_glStencilFuncSeparate:_emscripten_glStencilFuncSeparate,emscripten_glStencilMask:_emscripten_glStencilMask,emscripten_glStencilMaskSeparate:_emscripten_glStencilMaskSeparate,emscripten_glStencilOp:_emscripten_glStencilOp,emscripten_glStencilOpSeparate:_emscripten_glStencilOpSeparate,emscripten_glTexImage2D:_emscripten_glTexImage2D,emscripten_glTexParameterf:_emscripten_glTexParameterf,emscripten_glTexParameterfv:_emscripten_glTexParameterfv,emscripten_glTexParameteri:_emscripten_glTexParameteri,emscripten_glTexParameteriv:_emscripten_glTexParameteriv,emscripten_glTexSubImage2D:_emscripten_glTexSubImage2D,emscripten_glUniform1f:_emscripten_glUniform1f,emscripten_glUniform1fv:_emscripten_glUniform1fv,emscripten_glUniform1i:_emscripten_glUniform1i,emscripten_glUniform1iv:_emscripten_glUniform1iv,emscripten_glUniform2f:_emscripten_glUniform2f,emscripten_glUniform2fv:_emscripten_glUniform2fv,emscripten_glUniform2i:_emscripten_glUniform2i,emscripten_glUniform2iv:_emscripten_glUniform2iv,emscripten_glUniform3f:_emscripten_glUniform3f,emscripten_glUniform3fv:_emscripten_glUniform3fv,emscripten_glUniform3i:_emscripten_glUniform3i,emscripten_glUniform3iv:_emscripten_glUniform3iv,emscripten_glUniform4f:_emscripten_glUniform4f,emscripten_glUniform4fv:_emscripten_glUniform4fv,emscripten_glUniform4i:_emscripten_glUniform4i,emscripten_glUniform4iv:_emscripten_glUniform4iv,emscripten_glUniformMatrix2fv:_emscripten_glUniformMatrix2fv,emscripten_glUniformMatrix3fv:_emscripten_glUniformMatrix3fv,emscripten_glUniformMatrix4fv:_emscripten_glUniformMatrix4fv,emscripten_glUseProgram:_emscripten_glUseProgram,emscripten_glValidateProgram:_emscripten_glValidateProgram,emscripten_glVertexAttrib1f:_emscripten_glVertexAttrib1f,emscripten_glVertexAttrib1fv:_emscripten_glVertexAttrib1fv,emscripten_glVertexAttrib2f:_emscripten_glVertexAttrib2f,emscripten_glVertexAttrib2fv:_emscripten_glVertexAttrib2fv,emscripten_glVertexAttrib3f:_emscripten_glVertexAttrib3f,emscripten_glVertexAttrib3fv:_emscripten_glVertexAttrib3fv,emscripten_glVertexAttrib4f:_emscripten_glVertexAttrib4f,emscripten_glVertexAttrib4fv:_emscripten_glVertexAttrib4fv,emscripten_glVertexAttribDivisorANGLE:_emscripten_glVertexAttribDivisorANGLE,emscripten_glVertexAttribPointer:_emscripten_glVertexAttribPointer,emscripten_glViewport:_emscripten_glViewport,emscripten_resize_heap:_emscripten_resize_heap,environ_get:_environ_get,environ_sizes_get:_environ_sizes_get,fd_close:_fd_close,fd_read:_fd_read,fd_seek:_fd_seek,fd_write:_fd_write,glActiveTexture:_glActiveTexture,glAttachShader:_glAttachShader,glBindBuffer:_glBindBuffer,glBindFramebuffer:_glBindFramebuffer,glBindTexture:_glBindTexture,glBlendEquation:_glBlendEquation,glBlendEquationSeparate:_glBlendEquationSeparate,glBlendFuncSeparate:_glBlendFuncSeparate,glBufferData:_glBufferData,glBufferSubData:_glBufferSubData,glClear:_glClear,glClearColor:_glClearColor,glCompileShader:_glCompileShader,glCopyTexSubImage2D:_glCopyTexSubImage2D,glCreateProgram:_glCreateProgram,glCreateShader:_glCreateShader,glCullFace:_glCullFace,glDeleteBuffers:_glDeleteBuffers,glDeleteFramebuffers:_glDeleteFramebuffers,glDeleteProgram:_glDeleteProgram,glDeleteShader:_glDeleteShader,glDeleteTextures:_glDeleteTextures,glDepthFunc:_glDepthFunc,glDepthMask:_glDepthMask,glDisable:_glDisable,glDisableVertexAttribArray:_glDisableVertexAttribArray,glDrawElements:_glDrawElements,glEnable:_glEnable,glEnableVertexAttribArray:_glEnableVertexAttribArray,glFramebufferTexture2D:_glFramebufferTexture2D,glGenBuffers:_glGenBuffers,glGenFramebuffers:_glGenFramebuffers,glGenTextures:_glGenTextures,glGenerateMipmap:_glGenerateMipmap,glGetAttribLocation:_glGetAttribLocation,glGetBooleanv:_glGetBooleanv,glGetIntegerv:_glGetIntegerv,glGetProgramiv:_glGetProgramiv,glGetShaderiv:_glGetShaderiv,glGetString:_glGetString,glGetUniformLocation:_glGetUniformLocation,glIsEnabled:_glIsEnabled,glLinkProgram:_glLinkProgram,glShaderSource:_glShaderSource,glTexImage2D:_glTexImage2D,glTexParameteri:_glTexParameteri,glUniform1i:_glUniform1i,glUniform4fv:_glUniform4fv,glUniformMatrix4fv:_glUniformMatrix4fv,glUseProgram:_glUseProgram,glVertexAttribPointer:_glVertexAttribPointer,glViewport:_glViewport,strftime_l:_strftime_l};var wasmExports=createWasm();var ___wasm_call_ctors=()=>(___wasm_call_ctors=wasmExports["__wasm_call_ctors"])();var _malloc=Module["_malloc"]=a0=>(_malloc=Module["_malloc"]=wasmExports["malloc"])(a0);var _free=Module["_free"]=a0=>(_free=Module["_free"]=wasmExports["free"])(a0);var _EffekseerInit=Module["_EffekseerInit"]=(a0,a1,a2)=>(_EffekseerInit=Module["_EffekseerInit"]=wasmExports["EffekseerInit"])(a0,a1,a2);var _EffekseerTerminate=Module["_EffekseerTerminate"]=a0=>(_EffekseerTerminate=Module["_EffekseerTerminate"]=wasmExports["EffekseerTerminate"])(a0);var _EffekseerUpdate=Module["_EffekseerUpdate"]=(a0,a1)=>(_EffekseerUpdate=Module["_EffekseerUpdate"]=wasmExports["EffekseerUpdate"])(a0,a1);var _EffekseerBeginUpdate=Module["_EffekseerBeginUpdate"]=a0=>(_EffekseerBeginUpdate=Module["_EffekseerBeginUpdate"]=wasmExports["EffekseerBeginUpdate"])(a0);var _EffekseerEndUpdate=Module["_EffekseerEndUpdate"]=a0=>(_EffekseerEndUpdate=Module["_EffekseerEndUpdate"]=wasmExports["EffekseerEndUpdate"])(a0);var _EffekseerUpdateHandle=Module["_EffekseerUpdateHandle"]=(a0,a1,a2)=>(_EffekseerUpdateHandle=Module["_EffekseerUpdateHandle"]=wasmExports["EffekseerUpdateHandle"])(a0,a1,a2);var _EffekseerDraw=Module["_EffekseerDraw"]=a0=>(_EffekseerDraw=Module["_EffekseerDraw"]=wasmExports["EffekseerDraw"])(a0);var _EffekseerBeginDraw=Module["_EffekseerBeginDraw"]=a0=>(_EffekseerBeginDraw=Module["_EffekseerBeginDraw"]=wasmExports["EffekseerBeginDraw"])(a0);var _EffekseerEndDraw=Module["_EffekseerEndDraw"]=a0=>(_EffekseerEndDraw=Module["_EffekseerEndDraw"]=wasmExports["EffekseerEndDraw"])(a0);var _EffekseerDrawHandle=Module["_EffekseerDrawHandle"]=(a0,a1)=>(_EffekseerDrawHandle=Module["_EffekseerDrawHandle"]=wasmExports["EffekseerDrawHandle"])(a0,a1);var _EffekseerSetProjectionMatrix=Module["_EffekseerSetProjectionMatrix"]=(a0,a1)=>(_EffekseerSetProjectionMatrix=Module["_EffekseerSetProjectionMatrix"]=wasmExports["EffekseerSetProjectionMatrix"])(a0,a1);var _EffekseerSetProjectionPerspective=Module["_EffekseerSetProjectionPerspective"]=(a0,a1,a2,a3,a4)=>(_EffekseerSetProjectionPerspective=Module["_EffekseerSetProjectionPerspective"]=wasmExports["EffekseerSetProjectionPerspective"])(a0,a1,a2,a3,a4);var _EffekseerSetProjectionOrthographic=Module["_EffekseerSetProjectionOrthographic"]=(a0,a1,a2,a3,a4)=>(_EffekseerSetProjectionOrthographic=Module["_EffekseerSetProjectionOrthographic"]=wasmExports["EffekseerSetProjectionOrthographic"])(a0,a1,a2,a3,a4);var _EffekseerSetCameraMatrix=Module["_EffekseerSetCameraMatrix"]=(a0,a1)=>(_EffekseerSetCameraMatrix=Module["_EffekseerSetCameraMatrix"]=wasmExports["EffekseerSetCameraMatrix"])(a0,a1);var _EffekseerSetCameraLookAt=Module["_EffekseerSetCameraLookAt"]=(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)=>(_EffekseerSetCameraLookAt=Module["_EffekseerSetCameraLookAt"]=wasmExports["EffekseerSetCameraLookAt"])(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9);var _EffekseerLoadEffect=Module["_EffekseerLoadEffect"]=(a0,a1,a2,a3)=>(_EffekseerLoadEffect=Module["_EffekseerLoadEffect"]=wasmExports["EffekseerLoadEffect"])(a0,a1,a2,a3);var _EffekseerReleaseEffect=Module["_EffekseerReleaseEffect"]=(a0,a1)=>(_EffekseerReleaseEffect=Module["_EffekseerReleaseEffect"]=wasmExports["EffekseerReleaseEffect"])(a0,a1);var _EffekseerReloadResources=Module["_EffekseerReloadResources"]=(a0,a1,a2,a3)=>(_EffekseerReloadResources=Module["_EffekseerReloadResources"]=wasmExports["EffekseerReloadResources"])(a0,a1,a2,a3);var _EffekseerStopAllEffects=Module["_EffekseerStopAllEffects"]=a0=>(_EffekseerStopAllEffects=Module["_EffekseerStopAllEffects"]=wasmExports["EffekseerStopAllEffects"])(a0);var _EffekseerPlayEffect=Module["_EffekseerPlayEffect"]=(a0,a1,a2,a3,a4)=>(_EffekseerPlayEffect=Module["_EffekseerPlayEffect"]=wasmExports["EffekseerPlayEffect"])(a0,a1,a2,a3,a4);var _EffekseerStopEffect=Module["_EffekseerStopEffect"]=(a0,a1)=>(_EffekseerStopEffect=Module["_EffekseerStopEffect"]=wasmExports["EffekseerStopEffect"])(a0,a1);var _EffekseerStopRoot=Module["_EffekseerStopRoot"]=(a0,a1)=>(_EffekseerStopRoot=Module["_EffekseerStopRoot"]=wasmExports["EffekseerStopRoot"])(a0,a1);var _EffekseerExists=Module["_EffekseerExists"]=(a0,a1)=>(_EffekseerExists=Module["_EffekseerExists"]=wasmExports["EffekseerExists"])(a0,a1);var _EffekseerSetFrame=Module["_EffekseerSetFrame"]=(a0,a1,a2)=>(_EffekseerSetFrame=Module["_EffekseerSetFrame"]=wasmExports["EffekseerSetFrame"])(a0,a1,a2);var _EffekseerSetLocation=Module["_EffekseerSetLocation"]=(a0,a1,a2,a3,a4)=>(_EffekseerSetLocation=Module["_EffekseerSetLocation"]=wasmExports["EffekseerSetLocation"])(a0,a1,a2,a3,a4);var _EffekseerSetRotation=Module["_EffekseerSetRotation"]=(a0,a1,a2,a3,a4)=>(_EffekseerSetRotation=Module["_EffekseerSetRotation"]=wasmExports["EffekseerSetRotation"])(a0,a1,a2,a3,a4);var _EffekseerSetScale=Module["_EffekseerSetScale"]=(a0,a1,a2,a3,a4)=>(_EffekseerSetScale=Module["_EffekseerSetScale"]=wasmExports["EffekseerSetScale"])(a0,a1,a2,a3,a4);var _EffekseerSetMatrix=Module["_EffekseerSetMatrix"]=(a0,a1,a2)=>(_EffekseerSetMatrix=Module["_EffekseerSetMatrix"]=wasmExports["EffekseerSetMatrix"])(a0,a1,a2);var _EffekseerGetDynamicInput=Module["_EffekseerGetDynamicInput"]=(a0,a1,a2)=>(_EffekseerGetDynamicInput=Module["_EffekseerGetDynamicInput"]=wasmExports["EffekseerGetDynamicInput"])(a0,a1,a2);var _EffekseerSetDynamicInput=Module["_EffekseerSetDynamicInput"]=(a0,a1,a2,a3)=>(_EffekseerSetDynamicInput=Module["_EffekseerSetDynamicInput"]=wasmExports["EffekseerSetDynamicInput"])(a0,a1,a2,a3);var _EffekseerSendTrigger=Module["_EffekseerSendTrigger"]=(a0,a1,a2)=>(_EffekseerSendTrigger=Module["_EffekseerSendTrigger"]=wasmExports["EffekseerSendTrigger"])(a0,a1,a2);var _EffekseerSetAllColor=Module["_EffekseerSetAllColor"]=(a0,a1,a2,a3,a4,a5)=>(_EffekseerSetAllColor=Module["_EffekseerSetAllColor"]=wasmExports["EffekseerSetAllColor"])(a0,a1,a2,a3,a4,a5);var _EffekseerSetTargetLocation=Module["_EffekseerSetTargetLocation"]=(a0,a1,a2,a3,a4)=>(_EffekseerSetTargetLocation=Module["_EffekseerSetTargetLocation"]=wasmExports["EffekseerSetTargetLocation"])(a0,a1,a2,a3,a4);var _EffekseerSetPaused=Module["_EffekseerSetPaused"]=(a0,a1,a2)=>(_EffekseerSetPaused=Module["_EffekseerSetPaused"]=wasmExports["EffekseerSetPaused"])(a0,a1,a2);var _EffekseerSetShown=Module["_EffekseerSetShown"]=(a0,a1,a2)=>(_EffekseerSetShown=Module["_EffekseerSetShown"]=wasmExports["EffekseerSetShown"])(a0,a1,a2);var _EffekseerSetSpeed=Module["_EffekseerSetSpeed"]=(a0,a1,a2)=>(_EffekseerSetSpeed=Module["_EffekseerSetSpeed"]=wasmExports["EffekseerSetSpeed"])(a0,a1,a2);var _EffekseerSetRandomSeed=Module["_EffekseerSetRandomSeed"]=(a0,a1,a2)=>(_EffekseerSetRandomSeed=Module["_EffekseerSetRandomSeed"]=wasmExports["EffekseerSetRandomSeed"])(a0,a1,a2);var _EffekseerGetRestInstancesCount=Module["_EffekseerGetRestInstancesCount"]=a0=>(_EffekseerGetRestInstancesCount=Module["_EffekseerGetRestInstancesCount"]=wasmExports["EffekseerGetRestInstancesCount"])(a0);var _EffekseerGetUpdateTime=Module["_EffekseerGetUpdateTime"]=a0=>(_EffekseerGetUpdateTime=Module["_EffekseerGetUpdateTime"]=wasmExports["EffekseerGetUpdateTime"])(a0);var _EffekseerGetDrawTime=Module["_EffekseerGetDrawTime"]=a0=>(_EffekseerGetDrawTime=Module["_EffekseerGetDrawTime"]=wasmExports["EffekseerGetDrawTime"])(a0);var _EffekseerIsVertexArrayObjectSupported=Module["_EffekseerIsVertexArrayObjectSupported"]=a0=>(_EffekseerIsVertexArrayObjectSupported=Module["_EffekseerIsVertexArrayObjectSupported"]=wasmExports["EffekseerIsVertexArrayObjectSupported"])(a0);var _EffekseerSetRestorationOfStatesFlag=Module["_EffekseerSetRestorationOfStatesFlag"]=(a0,a1)=>(_EffekseerSetRestorationOfStatesFlag=Module["_EffekseerSetRestorationOfStatesFlag"]=wasmExports["EffekseerSetRestorationOfStatesFlag"])(a0,a1);var _EffekseerCaptureBackground=Module["_EffekseerCaptureBackground"]=(a0,a1,a2,a3,a4)=>(_EffekseerCaptureBackground=Module["_EffekseerCaptureBackground"]=wasmExports["EffekseerCaptureBackground"])(a0,a1,a2,a3,a4);var _EffekseerResetBackground=Module["_EffekseerResetBackground"]=a0=>(_EffekseerResetBackground=Module["_EffekseerResetBackground"]=wasmExports["EffekseerResetBackground"])(a0);var _EffekseerSetLogEnabled=Module["_EffekseerSetLogEnabled"]=a0=>(_EffekseerSetLogEnabled=Module["_EffekseerSetLogEnabled"]=wasmExports["EffekseerSetLogEnabled"])(a0);var __emscripten_stack_restore=a0=>(__emscripten_stack_restore=wasmExports["_emscripten_stack_restore"])(a0);var __emscripten_stack_alloc=a0=>(__emscripten_stack_alloc=wasmExports["_emscripten_stack_alloc"])(a0);var _emscripten_stack_get_current=()=>(_emscripten_stack_get_current=wasmExports["emscripten_stack_get_current"])();var ___cxa_is_pointer_type=a0=>(___cxa_is_pointer_type=wasmExports["__cxa_is_pointer_type"])(a0);var dynCall_jii=Module["dynCall_jii"]=(a0,a1,a2)=>(dynCall_jii=Module["dynCall_jii"]=wasmExports["dynCall_jii"])(a0,a1,a2);var dynCall_viij=Module["dynCall_viij"]=(a0,a1,a2,a3,a4)=>(dynCall_viij=Module["dynCall_viij"]=wasmExports["dynCall_viij"])(a0,a1,a2,a3,a4);var dynCall_vijf=Module["dynCall_vijf"]=(a0,a1,a2,a3,a4)=>(dynCall_vijf=Module["dynCall_vijf"]=wasmExports["dynCall_vijf"])(a0,a1,a2,a3,a4);var dynCall_ji=Module["dynCall_ji"]=(a0,a1)=>(dynCall_ji=Module["dynCall_ji"]=wasmExports["dynCall_ji"])(a0,a1);var dynCall_vij=Module["dynCall_vij"]=(a0,a1,a2,a3)=>(dynCall_vij=Module["dynCall_vij"]=wasmExports["dynCall_vij"])(a0,a1,a2,a3);var dynCall_jiji=Module["dynCall_jiji"]=(a0,a1,a2,a3,a4)=>(dynCall_jiji=Module["dynCall_jiji"]=wasmExports["dynCall_jiji"])(a0,a1,a2,a3,a4);var dynCall_viijii=Module["dynCall_viijii"]=(a0,a1,a2,a3,a4,a5,a6)=>(dynCall_viijii=Module["dynCall_viijii"]=wasmExports["dynCall_viijii"])(a0,a1,a2,a3,a4,a5,a6);var dynCall_iiiiij=Module["dynCall_iiiiij"]=(a0,a1,a2,a3,a4,a5,a6)=>(dynCall_iiiiij=Module["dynCall_iiiiij"]=wasmExports["dynCall_iiiiij"])(a0,a1,a2,a3,a4,a5,a6);var dynCall_iiiiijj=Module["dynCall_iiiiijj"]=(a0,a1,a2,a3,a4,a5,a6,a7,a8)=>(dynCall_iiiiijj=Module["dynCall_iiiiijj"]=wasmExports["dynCall_iiiiijj"])(a0,a1,a2,a3,a4,a5,a6,a7,a8);var dynCall_iiiiiijj=Module["dynCall_iiiiiijj"]=(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)=>(dynCall_iiiiiijj=Module["dynCall_iiiiiijj"]=wasmExports["dynCall_iiiiiijj"])(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9);Module["cwrap"]=cwrap;Module["UTF8ToString"]=UTF8ToString;Module["UTF16ToString"]=UTF16ToString;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();Module["GL"]=GL;moduleRtn=readyPromise;


  return moduleRtn;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = effekseer_native;
else if (typeof define === 'function' && define['amd'])
  define([], () => effekseer_native);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var effekseer = function () {
  var Module = {};
  var Core = {};
  var _imageCrossOrigin = "";
  var _onloadAssembly = function _onloadAssembly() {};
  var _onerrorAssembly = function _onerrorAssembly() {};
  var _is_runtime_initialized = false;
  var _onRuntimeInitialized = function _onRuntimeInitialized() {
    // C++ functions
    Core = {
      Init: Module.cwrap("EffekseerInit", "number", ["number", "number", "number"]),
      Terminate: Module.cwrap("EffekseerTerminate", "void", ["number"]),
      Update: Module.cwrap("EffekseerUpdate", "void", ["number", "number"]),
      BeginUpdate: Module.cwrap("EffekseerBeginUpdate", "void", ["number"]),
      EndUpdate: Module.cwrap("EffekseerEndUpdate", "void", ["number"]),
      UpdateHandle: Module.cwrap("EffekseerUpdateHandle", "void", ["number", "number", "number"]),
      Draw: Module.cwrap("EffekseerDraw", "void", ["number"]),
      BeginDraw: Module.cwrap("EffekseerBeginDraw", "void", ["number"]),
      EndDraw: Module.cwrap("EffekseerEndDraw", "void", ["number"]),
      DrawHandle: Module.cwrap("EffekseerDrawHandle", "void", ["number", "number"]),
      SetProjectionMatrix: Module.cwrap("EffekseerSetProjectionMatrix", "void", ["number", "number"]),
      SetProjectionPerspective: Module.cwrap("EffekseerSetProjectionPerspective", "void", ["number", "number", "number", "number", "number"]),
      SetProjectionOrthographic: Module.cwrap("EffekseerSetProjectionOrthographic", "void", ["number", "number", "number", "number", "number"]),
      SetCameraMatrix: Module.cwrap("EffekseerSetCameraMatrix", "void", ["number", "number"]),
      SetCameraLookAt: Module.cwrap("EffekseerSetCameraLookAt", "void", ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]),
      LoadEffect: Module.cwrap("EffekseerLoadEffect", "number", ["number", "number", "number", "number", "number"]),
      ReleaseEffect: Module.cwrap("EffekseerReleaseEffect", "void", ["number", "number"]),
      ReloadResources: Module.cwrap("EffekseerReloadResources", "void", ["number", "number"]),
      StopAllEffects: Module.cwrap("EffekseerStopAllEffects", "void", ["number"]),
      PlayEffect: Module.cwrap("EffekseerPlayEffect", "number", ["number", "number", "number", "number", "number"]),
      StopEffect: Module.cwrap("EffekseerStopEffect", "void", ["number", "number"]),
      StopRoot: Module.cwrap("EffekseerStopRoot", "void", ["number", "number"]),
      Exists: Module.cwrap("EffekseerExists", "number", ["number", "number"]),
      SetFrame: Module.cwrap("EffekseerSetFrame", "void", ["number", "number", "number"]),
      SetLocation: Module.cwrap("EffekseerSetLocation", "void", ["number", "number", "number", "number", "number"]),
      SetRotation: Module.cwrap("EffekseerSetRotation", "void", ["number", "number", "number", "number", "number"]),
      SetScale: Module.cwrap("EffekseerSetScale", "void", ["number", "number", "number", "number", "number"]),
      SetMatrix: Module.cwrap("EffekseerSetMatrix", "void", ["number", "number", "number"]),
      SetAllColor: Module.cwrap("EffekseerSetAllColor", "void", ["number", "number", "number", "number", "number", "number"]),
      SetTargetLocation: Module.cwrap("EffekseerSetTargetLocation", "void", ["number", "number", "number", "number", "number"]),
      GetDynamicInput: Module.cwrap("EffekseerGetDynamicInput", "number", ["number", "number", "number"]),
      SetDynamicInput: Module.cwrap("EffekseerSetDynamicInput", "void", ["number", "number", "number", "number"]),
      SendTrigger: Module.cwrap("EffekseerSendTrigger", "void", ["number", "number", "number"]),
      SetPaused: Module.cwrap("EffekseerSetPaused", "void", ["number", "number", "number"]),
      SetShown: Module.cwrap("EffekseerSetShown", "void", ["number", "number", "number"]),
      SetSpeed: Module.cwrap("EffekseerSetSpeed", "void", ["number", "number", "number"]),
      SetRandomSeed: Module.cwrap("EffekseerSetRandomSeed", "void", ["number", "number", "number"]),
      GetRestInstancesCount: Module.cwrap("EffekseerGetRestInstancesCount", "number", ["number"]),
      GetUpdateTime: Module.cwrap("EffekseerGetUpdateTime", "number", ["number"]),
      GetDrawTime: Module.cwrap("EffekseerGetDrawTime", "number", ["number"]),
      IsVertexArrayObjectSupported: Module.cwrap("EffekseerIsVertexArrayObjectSupported", "number", ["number"]),
      SetRestorationOfStatesFlag: Module.cwrap("EffekseerSetRestorationOfStatesFlag", "void", ["number", "number"]),
      CaptureBackground: Module.cwrap("EffekseerCaptureBackground", "void", ["number", "number", "number", "number", "number"]),
      ResetBackground: Module.cwrap("EffekseerResetBackground", "void", ["number"]),
      SetLogEnabled: Module.cwrap("EffekseerSetLogEnabled", "void", ["number"])
    };

    Module.resourcesMap = {};

    Module._isPowerOfTwo = function (img) {
      return _isImagePowerOfTwo(img);
    };

    Module._loadImage = function (path) {
      var effect = loadingEffect;
      effect.context._makeContextCurrent();

      {
        var _res = effect.resources.find(function (res) {
          return res.path == path;
        });
        if (_res) {
          return _res.isLoaded ? _res.image : null;
        }
      }

      // <<<<<<< ORIGINAL
      /*
      const res = { path: path, isLoaded: false, image: null, isRequired: true };
      effect.resources.push(res);
       var path = effect.baseDir + path;
      if (effect.redirect) {
        path = effect.redirect(path);
      }
       {
        const arrayBuffer = Module.resourcesMap[path];
        if (arrayBuffer != null) {
          const arrayBufferView = new Uint8Array( arrayBuffer );
          Promise.resolve(new Blob([arrayBufferView], { type: 'image/png' }))
          .then(blob => {
            return Promise.resolve(URL.createObjectURL(blob))
          })
          .then(url => {
            const img = new Image();
            img.onload = () => {
              res.image = img;
              res.isLoaded = true;
              effect._update();
            };
            img.src = url;
          });
        } else {
          _loadResource(path, image => {
            res.image = image
            res.isLoaded = true;
            effect._update();
          }, effect.onerror);
        }
      }
      */
      // =======
      var imageAsset = g.game.scene().asset.getImage(g.PathUtil.resolvePath(effect.baseDir, path));
      var image = imageAsset.data;
      var res = { path: path, isLoaded: true, image: image, isRequired: true };
      effect.resources.push(res);
      effect._update();
      // >>>>>>> CHANGED
      return null;
    };

    Module._loadBinary = function (path, isRequired) {
      var effect = loadingEffect;
      effect.context._makeContextCurrent();

      // <<<<<<< ORIGINAL
      // =======
      // Effekseer の効果音再生を抑止する。
      // WAV ファイルはロードせず null を返す。Effekseer はリソースがロード
      // されていない時一旦 null を返すので、これは正常系である。
      var dotIndex = path.lastIndexOf(".");
      if (dotIndex >= 1) {
        var ext = path.split(".").pop();
        if (ext.toLowerCase() === "wav") {
          return null;
        }
      }
      // >>>>>>> CHANGED
      var res = effect.resources.find(function (res) {
        return res.path == path;
      });
      if (res) {
        return res.isLoaded ? res.buffer : null;
      }

      var res = { path: path, isLoaded: false, buffer: null, isRequired: isRequired };
      effect.resources.push(res);

      // <<<<<<< ORIGINAL
      /*
      var path = effect.baseDir + path;
      */
      // =======
      // ここでフルパスになる。
      var path = g.PathUtil.resolvePath(effect.baseDir, path);
      // >>>>>>> CHANGED
      if (effect.redirect) {
        path = effect.redirect(path);
      }

      var arrayBuffer = Module.resourcesMap[path];
      if (arrayBuffer != null) {
        res.buffer = arrayBuffer;
        res.isLoaded = true;
        effect._update();
      } else {
        _loadResource(path, function (buffer) {
          res.buffer = buffer;
          res.isLoaded = true;
          effect._update();
        }, effect.onerror);
      }
      return null;
    };

    _is_runtime_initialized = true;
    _onloadAssembly();
  };

  // <<<<<<< ORIGINAL
  /*
  const _initalize_wasm = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      var params = {};
      params.wasmBinary = xhr.response;
      // params.onRuntimeInitialized = _onRuntimeInitialized;
      effekseer_native(params).then(function (module) {
        Module = module;
        _onRuntimeInitialized();
      });
    };
    xhr.onerror = () => {
      _onerrorAssembly();
    };
    xhr.send(null);
  };
  */
  // =======
  // >>>>>>> CHANGED

  var _initalize_wasm_with_binary = function _initalize_wasm_with_binary(wasmBinary) {
    // <<<<<<< ORIGINAL
    /*
    var params = {};
    */
    // =======
    var params = {
      __akashic__: {
        gl: null,
        ext_timer: null
      }
    };
    // >>>>>>> CHANGED
    params.wasmBinary = wasmBinary;
    effekseer_native(params).then(function (module) {
      Module = module;
      _onRuntimeInitialized();
    });
  };

  if (typeof effekseer_native === "undefined") {
    moduleOrPromise = effekseer();

    if (moduleOrPromise instanceof Promise) {
      moduleOrPromise.then(function (module) {
        Module = module;
        _onRuntimeInitialized();
      });
    } else {
      Module = moduleOrPromise;
      _onRuntimeInitialized();
    }
  }

  /**
   * A loaded effect data
   * @class
   */

  var EffekseerEffect = function () {
    function EffekseerEffect(context) {
      _classCallCheck(this, EffekseerEffect);

      this.context = context;
      this.nativeptr = 0;
      this.baseDir = "";
      this.isLoaded = false;
      this.scale = 1.0;
      this.resources = [];
      this.main_buffer = null;
    }

    _createClass(EffekseerEffect, [{
      key: "_load",
      value: function _load(buffer) {
        loadingEffect = this;
        this.main_buffer = buffer;
        var memptr = Module._malloc(buffer.byteLength);
        Module.HEAP8.set(new Uint8Array(buffer), memptr);
        this.nativeptr = Core.LoadEffect(this.context.nativeptr, memptr, buffer.byteLength, this.scale);
        Module._free(memptr);
        loadingEffect = null;
        this._update();
      }

      /**
       * Load Effect from arraybuffer of .efkpkg file
       * @param {ArrayBuffer} buffer a ArrayBuffer of the .efkpkg file
       * @param {Object} Unzip a Unzip object
       */

    }, {
      key: "_loadFromPackage",
      value: async function _loadFromPackage(buffer, Unzip) {
        var unzip = new Unzip(new Uint8Array(buffer));
        var meta_buffer = unzip.decompress('metafile.json');
        var textDecoder = new TextDecoder();
        var text = textDecoder.decode(meta_buffer);
        var json = JSON.parse(text);

        var efkFile = void 0;
        var dependencies = [];
        for (var key in json.files) {
          var val = json.files[key];
          if (val.type === 'Effect') {
            efkFile = key;
            Array.prototype.push.apply(dependencies, val.dependencies);
          }
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = dependencies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var dep = _step.value;

            // const relative_path = json.files[dep].relative_path;
            var _buffer = unzip.decompress(dep);
            Module.resourcesMap[dep] = _buffer.buffer;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var efk_buffer = unzip.decompress(efkFile);
        this._load(efk_buffer.buffer);
      }
    }, {
      key: "_reload",
      value: function _reload() {
        loadingEffect = this;
        var buffer = this.main_buffer;
        var memptr = Module._malloc(buffer.byteLength);
        Module.HEAP8.set(new Uint8Array(buffer), memptr);
        Core.ReloadResources(this.context.nativeptr, this.nativeptr, memptr, buffer.byteLength);
        Module._free(memptr);
        loadingEffect = null;
      }
    }, {
      key: "_update",
      value: function _update() {
        var loaded = this.nativeptr != 0;
        if (this.resources.length > 0) {
          for (var i = 0; i < this.resources.length; i++) {
            if (!this.resources[i].isLoaded && this.resources[i].isRequired) {
              loaded = false;
              break;
            }
          }
          if (loaded) {
            // glGetIntegerv(GL_ELEMENT_ARRAY_BUFFER_BINDING is wrong with Emscripten (Why?)
            this.context._makeContextCurrent();
            this.context.contextStates.save();
            this._reload();
            this.context.contextStates.restore();
          }
        }
        if (!this.isLoaded && loaded) {
          this.isLoaded = true;
          if (this.onload) this.onload();
        }
      }
    }]);

    return EffekseerEffect;
  }();

  /**
   * A handle that played effect instance.
   * @class
   */


  var EffekseerHandle = function () {
    function EffekseerHandle(context, native) {
      _classCallCheck(this, EffekseerHandle);

      this.context = context;
      this.native = native;
    }

    /**
     * Stop this effect instance.
     */


    _createClass(EffekseerHandle, [{
      key: "stop",
      value: function stop() {
        Core.StopEffect(this.context.nativeptr, this.native);
      }

      /**
       * Stop the root node of this effect instance.
       */

    }, {
      key: "stopRoot",
      value: function stopRoot() {
        Core.StopRoot(this.context.nativeptr, this.native);
      }

      /**
       * if returned false, this effect is end of playing.
       * @property {boolean}
       */

    }, {
      key: "setFrame",


      /**
       * Set frame of this effect instance.
       * @param {number} frame Frame of this effect instance.
       */
      value: function setFrame(frame) {
        Core.SetFrame(this.context.nativeptr, this.native, frame);
      }

      /**
       * Set the location of this effect instance.
       * @param {number} x X value of location
       * @param {number} y Y value of location
       * @param {number} z Z value of location
       */

    }, {
      key: "setLocation",
      value: function setLocation(x, y, z) {
        Core.SetLocation(this.context.nativeptr, this.native, x, y, z);
      }

      /**
       * Set the rotation of this effect instance.
       * @param {number} x X value of euler angle
       * @param {number} y Y value of euler angle
       * @param {number} z Z value of euler angle
       */

    }, {
      key: "setRotation",
      value: function setRotation(x, y, z) {
        Core.SetRotation(this.context.nativeptr, this.native, x, y, z);
      }

      /**
       * Set the scale of this effect instance.
       * @param {number} x X value of scale factor
       * @param {number} y Y value of scale factor
       * @param {number} z Z value of scale factor
       */

    }, {
      key: "setScale",
      value: function setScale(x, y, z) {
        Core.SetScale(this.context.nativeptr, this.native, x, y, z);
      }

      /**
       * Set the model matrix of this effect instance.
       * @param {array} matrixArray An array that is requred 16 elements
       */

    }, {
      key: "setMatrix",
      value: function setMatrix(matrixArray) {
        var stack = Module.stackSave();
        var arrmem = Module.stackAlloc(4 * 16);
        Module.HEAPF32.set(matrixArray, arrmem >> 2);
        Core.SetMatrix(this.context.nativeptr, this.native, arrmem);
        Module.stackRestore(stack);
      }

      /**
       * Set the color of this effect instance.
       * @param {number} r R channel value of color
       * @param {number} g G channel value of color
       * @param {number} b B channel value of color
       * @param {number} a A channel value of color
       */

    }, {
      key: "setAllColor",
      value: function setAllColor(r, g, b, a) {
        Core.SetAllColor(this.context.nativeptr, this.native, r, g, b, a);
      }

      /**
       * Set the target location of this effect instance.
       * @param {number} x X value of target location
       * @param {number} y Y value of target location
       * @param {number} z Z value of target location
       */

    }, {
      key: "setTargetLocation",
      value: function setTargetLocation(x, y, z) {
        Core.SetTargetLocation(this.context.nativeptr, this.native, x, y, z);
      }

      /**
       * get a dynamic parameter, which changes effect parameters dynamically while playing
       * @param {number} index slot index
       * @returns {number} value
       */

    }, {
      key: "getDynamicInput",
      value: function getDynamicInput(index) {
        return Core.GetDynamicInput(this.context.nativeptr, this.native, index);
      }

      /**
       * specfiy a dynamic parameter, which changes effect parameters dynamically while playing
       * @param {number} index slot index
       * @param {number} value value
       */

    }, {
      key: "setDynamicInput",
      value: function setDynamicInput(index, value) {
        Core.SetDynamicInput(this.context.nativeptr, this.native, index, value);
      }

      /**
       * Sends the specified trigger to the currently playing effect
       * @param {number} index trigger index
       */

    }, {
      key: "sendTrigger",
      value: function sendTrigger(index) {
        Core.SendTrigger(this.context.nativeptr, this.native, index);
      }

      /**
       * Set the paused flag of this effect instance.
       * if specified true, this effect playing will not advance.
       * @param {boolean} paused Paused flag
       */

    }, {
      key: "setPaused",
      value: function setPaused(paused) {
        Core.SetPaused(this.context.nativeptr, this.native, paused);
      }

      /**
       * Set the shown flag of this effect instance.
       * if specified false, this effect will be invisible.
       * @param {boolean} shown Shown flag
       */

    }, {
      key: "setShown",
      value: function setShown(shown) {
        Core.SetShown(this.context.nativeptr, this.native, shown);
      }

      /**
       * Set playing speed of this effect.
       * @param {number} speed Speed ratio
       */

    }, {
      key: "setSpeed",
      value: function setSpeed(speed) {
        Core.SetSpeed(this.context.nativeptr, this.native, speed);
      }

      /**
       * Set random seed of this effect.
       * @param {number} seed Random seed
       */

    }, {
      key: "setRandomSeed",
      value: function setRandomSeed(seed) {
        Core.SetRandomSeed(this.context.nativeptr, this.native, seed);
      }
    }, {
      key: "exists",
      get: function get() {
        return !!Core.Exists(this.context.nativeptr, this.native);
      }
    }]);

    return EffekseerHandle;
  }();

  var _isImagePowerOfTwo = function _isImagePowerOfTwo(image) {
    return !(image.width & image.width - 1) && !(image.height & image.height - 1);
  };

  var calcNextPowerOfTwo = function calcNextPowerOfTwo(v) {
    var sizes = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

    var foundInd = -1;
    for (var i = 0; i < sizes.length; i++) {
      if (sizes[i] >= v) {
        return sizes[i];
      }
    }

    for (var i = sizes.length - 1; i >= 0; i--) {
      if (sizes[i] <= v) {
        return sizes[i];
      }
    }
    return 1;
  };

  // <<<<<<< ORIGINAL
  /*
  let _convertPowerOfTwoImage = (image) => {
    if (!_isImagePowerOfTwo(image)) {
      var canvas = document.createElement("canvas");
      canvas.width = calcNextPowerOfTwo(image.width);
      canvas.height = calcNextPowerOfTwo(image.height);
      var context2d = canvas.getContext("2d");
      context2d.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
      image = canvas;
    }
     return image;
  };
  */
  // =======
  var _convertPowerOfTwoImage = function _convertPowerOfTwoImage(image) {
    if (!_isImagePowerOfTwo(image)) {
      var width = calcNextPowerOfTwo(image.width);
      var height = calcNextPowerOfTwo(image.height);
      var src = image.asSurface();
      var dst = g.game.resourceFactory.createSurface(width, height);
      var renderer = dst.renderer();
      var sx = width / src.width;
      var sy = height / src.height;

      renderer.begin();
      renderer.clear();
      renderer.setTransform([sx, 0, 0, sy, 0, 0]);
      renderer.drawImage(src, 0, 0, src.width, src.height, 0, 0);
      renderer.end();

      return dst._drawable;
    }
    return null;
  };
  // >>>>>>> CHANGED

  var _loadBinFile = function _loadBinFile(url, onload, onerror) {
    // <<<<<<< ORIGINAL
    /*
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      onload(xhr.response);
    };
    xhr.onerror = () => {
      if (!(typeof onerror === "undefined")) onerror('not found', url);
    };
    xhr.send(null);
    */
    // =======
    // urlの途中にある ".." を解決する。"/" に意味はない。
    var resolvedUrl = g.PathUtil.resolvePath("/", url);
    var binaryAsset = g.game.scene().asset.getBinary(resolvedUrl);
    if (binaryAsset) {
      onload(binaryAsset.data);
    } else {
      if (!(typeof onerror === "undefined")) onerror('not found', resolvedUrl);
    }
    // >>>>>>> CHANGED
  };

  var _loadResource = function _loadResource(path, onload, onerror) {

    // <<<<<<< ORIGINAL
    /*
    splitted_path = path.split('?');
    */
    // =======
    // "splitted_path is not defined" となったため var を追加。
    var splitted_path = path.split('?');
    // >>>>>>> CHANGED
    var ext_path = path;
    if (splitted_path.length >= 2) {
      ext_path = splitted_path[0];
    }

    var extindex = ext_path.lastIndexOf(".");
    var ext = extindex >= 0 ? ext_path.slice(extindex) : "";
    if (ext == ".png" || ext == ".jpg") {
      // <<<<<<< ORIGINAL
      /*
      const image = new Image();
      image.onload = () => {
        let converted_image = _convertPowerOfTwoImage(image);
        onload(converted_image);
      };
      image.onerror = () => {
        if (!(typeof onerror === "undefined")) onerror('not found', path);
      };
       image.crossOrigin = _imageCrossOrigin;
      image.src = path;
      */
      // =======
      // 画像は Module._loadImage でロードしている。いくつかのサンプルデータで
      // 試した限り、このパスに入ることはなかった。
      // そのため動作確認ができていない。
      var imageAsset = g.game.scene().asset.getImage(path);
      if (imageAsset) {
        var resized = _convertPowerOfTwoImage(imageAsset);
        onload(resized != null ? resized : imageAsset.data);
      } else {
        if (!(typeof onerror === "undefined")) onerror('not found', path);
      }
      // >>>>>>> CHANGED
    } else if (ext == ".tga") {
      if (!(typeof onerror === "undefined")) onerror('not supported', path);
    } else {
      _loadBinFile(path, function (buffer) {
        onload(buffer);
      }, onerror);
    }
  };

  var loadingEffect = null;

  var ContextStates = function () {
    function ContextStates(gl) {
      _classCallCheck(this, ContextStates);

      this.restore_texture_slot_max = 8;
      this._gl = gl;
      this.ext_vao = null;
      this.isWebGL2VAOEnabled = false;
      this.effekseer_vao = null;
      this.current_vao = null;
      this.current_vbo = null;
      this.current_ibo = null;
      this.current_textures = [];
      this.current_textures.length = this.restore_texture_slot_max;
      this.current_active_texture_id = null;

      this.ext_vao = this._gl.getExtension('OES_vertex_array_object');
      if (this.ext_vao != null) {
        this.effekseer_vao = this.ext_vao.createVertexArrayOES();
      } else if ('createVertexArray' in this._gl) {
        this.isWebGL2VAOEnabled = true;
        this.effekseer_vao = this._gl.createVertexArray();
      }
    }

    _createClass(ContextStates, [{
      key: "release",
      value: function release() {
        if (this.effekseer_vao) {
          if (this.ext_vao) {
            this.ext_vao.deleteVertexArrayOES(this.effekseer_vao);
          } else if (this.isWebGL2VAOEnabled) {
            this._gl.deleteVertexArray(this.effekseer_vao);
          }

          this.effekseer_vao = null;
        }

        this._gl = null;
      }
    }, {
      key: "save",
      value: function save() {
        // glGetIntegerv(GL_ELEMENT_ARRAY_BUFFER_BINDING) is wrong with Emscripten (Why?)
        // glGetIntegerv(GL_TEXTURE_BINDING_2D) is wrong with Emscripten (Why?)

        this.current_vbo = this._gl.getParameter(this._gl.ARRAY_BUFFER_BINDING);
        this.current_ibo = this._gl.getParameter(this._gl.ELEMENT_ARRAY_BUFFER_BINDING);
        if (this.ext_vao != null) {
          this.current_vao = this._gl.getParameter(this.ext_vao.VERTEX_ARRAY_BINDING_OES);
          this.ext_vao.bindVertexArrayOES(this.effekseer_vao);
        } else if (this.isWebGL2VAOEnabled) {
          this.current_vao = this._gl.getParameter(this._gl.VERTEX_ARRAY_BINDING);
          this._gl.bindVertexArray(this.effekseer_vao);
        }

        this.current_active_texture_id = this._gl.getParameter(this._gl.ACTIVE_TEXTURE);

        for (var i = 0; i < this.restore_texture_slot_max; i++) {
          this._gl.activeTexture(this._gl.TEXTURE0 + i);
          this.current_textures[i] = this._gl.getParameter(this._gl.TEXTURE_BINDING_2D);
        }
      }
    }, {
      key: "restore",
      value: function restore() {
        for (var i = 0; i < this.restore_texture_slot_max; i++) {
          this._gl.activeTexture(this._gl.TEXTURE0 + i);
          this._gl.bindTexture(this._gl.TEXTURE_2D, this.current_textures[i]);
        }
        this._gl.activeTexture(this.current_active_texture_id);

        if (this.ext_vao != null) {
          this.ext_vao.bindVertexArrayOES(this.current_vao);
        } else if (this.isWebGL2VAOEnabled) {
          this._gl.bindVertexArray(this.current_vao);
        }

        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this.current_vbo);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this.current_ibo);
      }
    }, {
      key: "disableVAO",
      value: function disableVAO() {
        if (this.ext_vao != null) {
          this.ext_vao.bindVertexArrayOES(null);
        } else if (this.isWebGL2VAOEnabled) {
          this._gl.bindVertexArray(null);
        }
      }
    }]);

    return ContextStates;
  }();

  var EffekseerContext = function () {
    function EffekseerContext() {
      _classCallCheck(this, EffekseerContext);
    }

    _createClass(EffekseerContext, [{
      key: "_makeContextCurrent",
      value: function _makeContextCurrent() {
        Module.GL.makeContextCurrent(this.ctx);
      }

      /**
       * Initialize graphics system.
       * @param {WebGLRenderingContext} webglContext WebGL Context
       * @param {object} settings Some settings with Effekseer initialization
       */

    }, {
      key: "init",
      value: function init(webglContext, settings) {
        this._gl = webglContext;
        this.contextStates = new ContextStates(this._gl);

        var instanceMaxCount = 4000;
        var squareMaxCount = 10000;
        var enableExtensionsByDefault = true;

        if (settings) {
          if ("instanceMaxCount" in settings) {
            instanceMaxCount = settings.instanceMaxCount;
          }
          if ("squareMaxCount" in settings) {
            squareMaxCount = settings.squareMaxCount;
          }
          if ("enableExtensionsByDefault" in settings) {
            enableExtensionsByDefault = settings.enableExtensionsByDefault;
          }
        }
        // <<<<<<< ORIGINAL
        /*
        window.gl = this._gl;
         window.ext_timer = window.gl.getExtension("EXT_disjoint_timer_query_webgl2");
        */
        // =======
        Module["__akashic__"].gl = this._gl;
        // >>>>>>> CHANGED

        // Setup native OpenGL context
        this.ctx = Module.GL.registerContext(webglContext, {
          majorVersion: 1, minorVersion: 0, enableExtensionsByDefault: enableExtensionsByDefault
        });
        this._makeContextCurrent();

        this._restorationOfStatesFlag = true;

        // Initializes Effekseer core.
        this.contextStates.save();
        this.nativeptr = Core.Init(instanceMaxCount, squareMaxCount, enableExtensionsByDefault);
        this.contextStates.restore();
      }

      /**
       * Advance frames.
       * @param {number=} deltaFrames number of advance frames
       */

    }, {
      key: "update",
      value: function update(deltaFrames) {
        if (!deltaFrames) deltaFrames = 1.0;
        // Update frame
        Core.Update(this.nativeptr, deltaFrames);
      }
    }, {
      key: "beginUpdate",
      value: function beginUpdate() {
        Core.BeginUpdate(this.nativeptr);
      }
    }, {
      key: "endUpdate",
      value: function endUpdate() {
        Core.EndUpdate(this.nativeptr);
      }
    }, {
      key: "updateHandle",
      value: function updateHandle(handle, deltaFrames) {
        Core.UpdateHandle(this.nativeptr, handle.native, deltaFrames);
      }

      /**
       * Main rendering.
       */

    }, {
      key: "draw",
      value: function draw() {
        this._makeContextCurrent();

        var program = null;

        if (this._restorationOfStatesFlag) {
          // Save WebGL states
          program = this._gl.getParameter(this._gl.CURRENT_PROGRAM);

          // Draw the effekseer core
          this.contextStates.save();
        } else {
          // avoid to make external vao dirtied.
          this.contextStates.disableVAO();
        }
        Core.Draw(this.nativeptr);

        if (this._restorationOfStatesFlag) {
          this.contextStates.restore();

          // Restore WebGL states
          this._gl.useProgram(program);
        }
      }
    }, {
      key: "beginDraw",
      value: function beginDraw() {
        if (this._restorationOfStatesFlag) {
          this.contextStates.save();
        } else {
          // avoid to make external vao dirtied.
          this.contextStates.disableVAO();
        }

        Core.BeginDraw(this.nativeptr);
      }
    }, {
      key: "endDraw",
      value: function endDraw() {
        Core.EndDraw(this.nativeptr);

        if (this._restorationOfStatesFlag) {
          this.contextStates.restore();
        }
      }
    }, {
      key: "drawHandle",
      value: function drawHandle(handle) {
        Core.DrawHandle(this.nativeptr, handle.native);
      }

      /**
       * Set camera projection from matrix.
       * @param {array} matrixArray An array that is requred 16 elements
       */

    }, {
      key: "setProjectionMatrix",
      value: function setProjectionMatrix(matrixArray) {
        var stack = Module.stackSave();
        var arrmem = Module.stackAlloc(4 * 16);
        Module.HEAPF32.set(matrixArray, arrmem >> 2);
        Core.SetProjectionMatrix(this.nativeptr, arrmem);
        Module.stackRestore(stack);
      }

      /**
       * Set camera projection from perspective parameters.
       * @param {number} fov Field of view in degree
       * @param {number} aspect Aspect ratio
       * @param {number} near Distance of near plane
       * @param {number} aspect Distance of far plane
       */

    }, {
      key: "setProjectionPerspective",
      value: function setProjectionPerspective(fov, aspect, near, far) {
        Core.SetProjectionPerspective(this.nativeptr, fov, aspect, near, far);
      }

      /**
       * Set camera projection from orthographic parameters.
       * @param {number} width Width coordinate of the view plane
       * @param {number} height Height coordinate of the view plane
       * @param {number} near Distance of near plane
       * @param {number} aspect Distance of far plane
       */

    }, {
      key: "setProjectionOrthographic",
      value: function setProjectionOrthographic(width, height, near, far) {
        Core.SetProjectionOrthographic(this.nativeptr, width, height, near, far);
      }

      /**
       * Set camera view from matrix.
       * @param {array} matrixArray An array that is requred 16 elements
       */

    }, {
      key: "setCameraMatrix",
      value: function setCameraMatrix(matrixArray) {
        var stack = Module.stackSave();
        var arrmem = Module.stackAlloc(4 * 16);
        Module.HEAPF32.set(matrixArray, arrmem >> 2);
        Core.SetCameraMatrix(this.nativeptr, arrmem);
        Module.stackRestore(stack);
      }

      /**
       * Set camera view from lookat parameters.
       * @param {number} positionX X value of camera position
       * @param {number} positionY Y value of camera position
       * @param {number} positionZ Z value of camera position
       * @param {number} targetX X value of target position
       * @param {number} targetY Y value of target position
       * @param {number} targetZ Z value of target position
       * @param {number} upvecX X value of upper vector
       * @param {number} upvecY Y value of upper vector
       * @param {number} upvecZ Z value of upper vector
       */

    }, {
      key: "setCameraLookAt",
      value: function setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ) {
        Core.SetCameraLookAt(this.nativeptr, positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ);
      }

      /**
       * Set camera view from lookat vector parameters.
       * @param {object} position camera position
       * @param {object} target target position
       * @param {object=} upvec upper vector
       */

    }, {
      key: "setCameraLookAtFromVector",
      value: function setCameraLookAtFromVector(position, target, upvec) {
        upvecVector = (typeof upvecVector === "undefined" ? "undefined" : _typeof(upvecVector)) === "object" ? upvecVector : { x: 0, y: 1, z: 0 };
        Core.SetCameraLookAt(this.nativeptr, position.x, position.y, position.z, target.x, target.y, target.z, upvec.x, upvec.y, upvec.z);
      }

      // <<<<<<< ORIGINAL
      /*
      /**
       * Load the effect data file (and resources).
       * @param {string|ArrayBuffer} data A URL/ArrayBuffer of effect file (*.efk)
       * @param {number} scale A magnification rate for the effect. The effect is loaded magnificating with this specified number.
       * @param {function=} onload A function that is called at loading complete
       * @param {function=} onerror A function that is called at loading error. First argument is a message. Second argument is an url.
       * @param {function=} redirect A function to redirect a path. First argument is an url and return redirected url.
       * @returns {EffekseerEffect} The effect data
       */
      /*
      loadEffect(data, scale = 1.0, onload, onerror, redirect) {
        this._makeContextCurrent();
         const effect = new EffekseerEffect(this);
         if (typeof (scale) === "function") {
          console.log("Error : second arguments is number from version 1.5");
          effect.scale = 1.0;
          effect.onload = scale;
          effect.onerror = onload;
          effect.redirect = redirect;
        }
        else {
          effect.scale = scale;
          effect.onload = onload;
          effect.onerror = onerror;
          effect.redirect = redirect;
        }
         if (typeof data === "string") {
          const dirIndex = data.lastIndexOf("/");
          effect.baseDir = (dirIndex >= 0) ? data.slice(0, dirIndex + 1) : "";
          _loadBinFile(data, buffer => {
            effect._load(buffer);
          }, effect.onerror);
        } else if (data instanceof ArrayBuffer) {
          const buffer = data;
          effect._load(buffer);
        }
         return effect;
      }
      */
      /*
      /**
       * Load the effect data file (and resources).
       * @param {string|ArrayBuffer} path A URL/ArrayBuffer of effect package file (*.efkpkg)
       * @param {Object} Unzip a Unzip object
       * @param {number} scale A magnification rate for the effect. The effect is loaded magnificating with this specified number.
       * @param {function=} onload A function that is called at loading complete
       * @param {function=} onerror A function that is called at loading error. First argument is a message. Second argument is an url.
       * @returns {EffekseerEffect} The effect data
       */
      /*
      loadEffectPackage(data, Unzip, scale = 1.0, onload, onerror) {
        if (Unzip == null)
        this._makeContextCurrent();
         const effect = new EffekseerEffect(this);
        effect.scale = scale;
        effect.onload = onload;
        effect.onerror = onerror;
         if (typeof path === "string") {
          const dirIndex = path.lastIndexOf("/");
          effect.baseDir = (dirIndex >= 0) ? path.slice(0, dirIndex + 1) : "";
          _loadBinFile(path, buffer => {
            effect._loadFromPackage(buffer, Unzip);
          }, effect.onerror);
        } else if (path instanceof ArrayBuffer) {
          const buffer = path;
          effect._loadFromPackage(buffer, Unzip);
        }
         return effect;
      }
      */
      // =======

    }, {
      key: "loadEffectBinaryAsset",
      value: function loadEffectBinaryAsset(asset) {
        var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
        var onload = arguments[2];
        var onerror = arguments[3];

        this._makeContextCurrent();

        var effect = new EffekseerEffect(this);

        if (typeof scale === "function") {
          console.log("Error : second arguments is number from version 1.5");
          effect.scale = 1.0;
          effect.onload = scale;
          effect.onerror = onload;
          effect.redirect = undefined;
        } else {
          effect.scale = scale;
          effect.onload = onload;
          effect.onerror = onerror;
          effect.redirect = undefined;
        }

        // efkefcファイルの存在するディレクトリを求める。
        var path = g.game.asset.pathOf(asset.id);
        var dirIndex = path.lastIndexOf("/");
        var dir = dirIndex >= 0 ? path.slice(0, dirIndex + 1) : path;
        // 関連ファイルを探索するための基準となるフルパス。
        effect.baseDir = dir;
        effect._load(asset.data);
        return effect;
      }
      // >>>>>>> CHANGED

      /**
       * Release the specified effect. Don't touch the instance of effect after released.
       * @param {EffekseerEffect} effect The loaded effect
       */

    }, {
      key: "releaseEffect",
      value: function releaseEffect(effect) {
        this._makeContextCurrent();

        if (effect == null) {
          console.warn("the effect is null.");
          return;
        }

        if (!effect.isLoaded) {
          console.warn("the effect has not be loaded yet.");
          return;
        }

        if (effect.nativeptr == null) {
          console.warn("the effect has been released.");
          return;
        }

        Core.ReleaseEffect(this.nativeptr, effect.nativeptr);
        effect.nativeptr = null;
      }

      /**
       * Play the specified effect.
       * @param {EffekseerEffect} effect The loaded effect
       * @param {number} x X value of location that is emited
       * @param {number} y Y value of location that is emited
       * @param {number} z Z value of location that is emited
       * @returns {EffekseerHandle} The effect handle
       */

    }, {
      key: "play",
      value: function play(effect, x, y, z) {
        if (!effect || !effect.isLoaded) {
          return null;
        }
        if (x === undefined) x = 0;
        if (y === undefined) y = 0;
        if (z === undefined) z = 0;
        var handle = Core.PlayEffect(this.nativeptr, effect.nativeptr, x, y, z);
        return handle >= 0 ? new EffekseerHandle(this, handle) : null;
      }

      /**
       * Stop the all effects.
       */

    }, {
      key: "stopAll",
      value: function stopAll() {
        Core.StopAllEffects(this.nativeptr);
      }

      /**
       * Set the resource loader function.
       * @param {function} loader
       */

    }, {
      key: "setResourceLoader",
      value: function setResourceLoader(loader) {
        _loadResource = loader;
      }

      /**
       * Gets the number of remaining allocated instances.
       */

    }, {
      key: "getRestInstancesCount",
      value: function getRestInstancesCount() {
        return Core.GetRestInstancesCount(this.nativeptr);
      }

      /**
       * Gets a time when updating
       */

    }, {
      key: "getUpdateTime",
      value: function getUpdateTime() {
        return Core.GetUpdateTime(this.nativeptr);
      }

      /**
       * Gets a time when drawing
       */

    }, {
      key: "getDrawTime",
      value: function getDrawTime() {
        return Core.GetDrawTime(this.nativeptr);
      }

      /**
       * Get whether VAO is supported
       */

    }, {
      key: "isVertexArrayObjectSupported",
      value: function isVertexArrayObjectSupported() {
        return Core.IsVertexArrayObjectSupported(this.nativeptr);
      }

      /**
       * Set the flag whether the library restores OpenGL states
       * if specified true, it makes slow.
       * if specified false, You need to restore OpenGL states by yourself
       * it must be called after init
       * @param {boolean} flag
       */

    }, {
      key: "setRestorationOfStatesFlag",
      value: function setRestorationOfStatesFlag(flag) {
        this._restorationOfStatesFlag = flag;
        Core.SetRestorationOfStatesFlag(this.nativeptr, flag);
      }

      /**
       * Capture current frame buffer and set the image as a background
       * @param {number} x captured image's x offset
       * @param {number} y captured image's y offset
       * @param {number} width captured image's width
       * @param {number} height captured image's height
       */

    }, {
      key: "captureBackground",
      value: function captureBackground(x, y, width, height) {
        return Core.CaptureBackground(this.nativeptr, x, y, width, height);
      }

      /**
       * Reset background
       */

    }, {
      key: "resetBackground",
      value: function resetBackground() {
        return Core.ResetBackground(this.nativeptr);
      }
    }]);

    return EffekseerContext;
  }();

  /**
   * Effekseer Context
   * @class
   */


  var Effekseer = function () {
    function Effekseer() {
      _classCallCheck(this, Effekseer);
    }

    _createClass(Effekseer, [{
      key: "initRuntimeWithWasmBinary",

      // <<<<<<< ORIGINAL
      /*
      /**
      * Initialize Effekseer.js.
      * This function must be called at first if use WebAssembly
      * @param {string} path A file of webassembply
      * @param {function=} onload A function that is called at loading complete
      * @param {function=} onerror A function that is called at loading error.
      */
      /*
      initRuntime(path, onload, onerror) {
        if (typeof effekseer_native === "undefined") {
          onload();
          return;
        }
         _onloadAssembly = onload;
        _onerrorAssembly = onerror;
        _initalize_wasm(path);
      }
      */
      // =======
      /**
       * Initialize Effekseer.js.
       * This function must be called at first if use WebAssembly
       * @param {object} wasmBinary A WASM binary
       * @param {function=} onload A function that is called at loading complete
       * @param {function=} onerror A function that is called at loading error.
       * @param {object=} game An Akashic Game object.
       */
      value: function initRuntimeWithWasmBinary(wasmBinary, onload, onerror) {
        if (typeof effekseer_native === "undefined") {
          onload();
          return;
        }

        _onloadAssembly = onload;
        _onerrorAssembly = onerror;
        _initalize_wasm_with_binary(wasmBinary);
      }
      // >>>>>>> CHANGED

      /**
       * Create a context to render in multiple scenes
       * @returns {EffekseerContext} context
       */

    }, {
      key: "createContext",
      value: function createContext() {
        if (!_is_runtime_initialized) {
          return null;
        }

        return new EffekseerContext();
      }

      /**
      * Release specified context. After that, don't touch a context
      * @param {EffekseerContext} context context
      */

    }, {
      key: "releaseContext",
      value: function releaseContext(context) {
        if (context.contextStates) {
          context.contextStates.release();
        }

        if (context._gl) {
          context._gl = null;
        }

        if (context.nativeptr == null) {
          return;
        }
        Core.Terminate(context.nativeptr);
        context.nativeptr = null;
      }

      /**
       * Set the flag whether Effekseer show logs
       * @param {boolean} flag
       */

    }, {
      key: "setLogEnabled",
      value: function setLogEnabled(flag) {
        Core.SetLogEnabled(flag);
      }

      /**
       * Set the string of cross origin for images
       * @param {string} crossOrigin
       */

    }, {
      key: "setImageCrossOrigin",
      value: function setImageCrossOrigin(crossOrigin) {
        _imageCrossOrigin = crossOrigin;
      }

      /**
       * Initialize graphics system.
       * @param {WebGLRenderingContext} webglContext WebGL Context
       * @param {object} settings Some settings with Effekseer initialization
       */

    }, {
      key: "init",
      value: function init(webglContext, settings) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext = new EffekseerContext();
        this.defaultContext.init(webglContext, settings);
      }

      /**
       * Advance frames.
       * @param {number=} deltaFrames number of advance frames
       */

    }, {
      key: "update",
      value: function update(deltaFrames) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.update(deltaFrames);
      }
    }, {
      key: "beginUpdate",
      value: function beginUpdate() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.beginUpdate();
      }
    }, {
      key: "endUpdate",
      value: function endUpdate() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.endUpdate();
      }
    }, {
      key: "updateHandle",
      value: function updateHandle(handle, deltaFrames) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.updateHandle(handle, deltaFrames);
      }

      /**
       * Main rendering.
       */

    }, {
      key: "draw",
      value: function draw() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.draw();
      }
    }, {
      key: "beginDraw",
      value: function beginDraw() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.beginDraw();
      }
    }, {
      key: "endDraw",
      value: function endDraw() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.endDraw();
      }
    }, {
      key: "drawHandle",
      value: function drawHandle(handle) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.drawHandle(handle);
      }

      /**
       * Set camera projection from matrix.
       * @param {array} matrixArray An array that is requred 16 elements
       */

    }, {
      key: "setProjectionMatrix",
      value: function setProjectionMatrix(matrixArray) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setProjectionMatrix(matrixArray);
      }

      /**
       * Set camera projection from perspective parameters.
       * @param {number} fov Field of view in degree
       * @param {number} aspect Aspect ratio
       * @param {number} near Distance of near plane
       * @param {number} aspect Distance of far plane
       */

    }, {
      key: "setProjectionPerspective",
      value: function setProjectionPerspective(fov, aspect, near, far) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.SetProjectionPerspective(fov, aspect, near, far);
      }

      /**
       * Set camera projection from orthographic parameters.
       * @param {number} width Width coordinate of the view plane
       * @param {number} height Height coordinate of the view plane
       * @param {number} near Distance of near plane
       * @param {number} aspect Distance of far plane
       */

    }, {
      key: "setProjectionOrthographic",
      value: function setProjectionOrthographic(width, height, near, far) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setProjectionOrthographic(width, height, near, far);
      }

      /**
       * Set camera view from matrix.
       * @param {array} matrixArray An array that is requred 16 elements
       */

    }, {
      key: "setCameraMatrix",
      value: function setCameraMatrix(matrixArray) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setCameraMatrix(matrixArray);
      }

      /**
       * Set camera view from lookat parameters.
       * @param {number} positionX X value of camera position
       * @param {number} positionY Y value of camera position
       * @param {number} positionZ Z value of camera position
       * @param {number} targetX X value of target position
       * @param {number} targetY Y value of target position
       * @param {number} targetZ Z value of target position
       * @param {number} upvecX X value of upper vector
       * @param {number} upvecY Y value of upper vector
       * @param {number} upvecZ Z value of upper vector
       */

    }, {
      key: "setCameraLookAt",
      value: function setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ);
      }

      /**
       * Set camera view from lookat vector parameters.
       * @param {object} position camera position
       * @param {object} target target position
       * @param {object=} upvec upper vector
       */

    }, {
      key: "setCameraLookAtFromVector",
      value: function setCameraLookAtFromVector(position, target, upvec) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setCameraLookAtFromVector(position, target, upvec);
      }

      // <<<<<<< ORIGINAL
      /*
      /**
       * Load the effect data file (and resources).
       * @param {string} path A URL of effect file (*.efk)
       * @param {number} scale A magnification rate for the effect. The effect is loaded magnificating with this specified number.
       * @param {function=} onload A function that is called at loading complete
       * @param {function=} onerror A function that is called at loading error. First argument is a message. Second argument is an url.
       * @returns {EffekseerEffect} The effect data
       */
      /*
      loadEffect(path, scale = 1.0, onload, onerror) {
        console.warn('deprecated : please use through createContext.');
        return this.defaultContext.loadEffect(path, scale, onload, onerror);
      }
      */
      // =======
      // >>>>>>> CHANGED

      /**
       * Release the specified effect. Don't touch the instance of effect after released.
       * @param {EffekseerEffect} effect The loaded effect
       */

    }, {
      key: "releaseEffect",
      value: function releaseEffect(effect) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.releaseEffect(effect);
      }

      /**
       * Play the specified effect.
       * @param {EffekseerEffect} effect The loaded effect
       * @param {number} x X value of location that is emited
       * @param {number} y Y value of location that is emited
       * @param {number} z Z value of location that is emited
       * @returns {EffekseerHandle} The effect handle
       */

    }, {
      key: "play",
      value: function play(effect, x, y, z) {
        console.warn('deprecated : please use through createContext.');
        return this.defaultContext.play(effect, x, y, z);
      }

      /**
       * Stop the all effects.
       */

    }, {
      key: "stopAll",
      value: function stopAll() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.stopAll();
      }

      /**
       * Set the resource loader function.
       * @param {function} loader
       */

    }, {
      key: "setResourceLoader",
      value: function setResourceLoader(loader) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setResourceLoader(loader);
      }

      /**
       * Get whether VAO is supported
       */

    }, {
      key: "isVertexArrayObjectSupported",
      value: function isVertexArrayObjectSupported() {
        console.warn('deprecated : please use through createContext.');
        return this.defaultContext.isVertexArrayObjectSupported();
      }
    }]);

    return Effekseer;
  }();

  return new Effekseer();
}();

// <<<<<<< ORIGINAL
/*
// Add support for CommonJS libraries such as browserify.
if (typeof exports !== 'undefined') {
  exports = effekseer;
}
*/
// =======
// emscripten の出力する effekseer.core.js の先頭に以下のコードがある。
//
// if (typeof exports === 'object' && typeof module === 'object')
//   module.exports = effekseer_native;
// else if (typeof define === 'function' && define['amd'])
//   define([], () => effekseer_native);
//
// しかし effekseer.js （アプリケーションの利用するモジュール。
// effekseer.core.js の後ろに effekseer.src.js (本ファイル) を加えたもの）が
// 提供したい機能は effekseer 変数にある。effekseer_native ではない。そこで
// exports を改めて生成する。
//
// オリジナルでは effekseer インスタンスを export し、型定義ファイルでは
// namespace effekseer を export している。
//
// Effekseer for Akashic Engine では namespace を用いない。effekseer インスタンスの
// メソッドを関数として export する。

module.exports = {};
Object.getOwnPropertyNames(Object.getPrototypeOf(effekseer)).forEach(function (name) {
  if (name === "constructor") return;
  var fn = effekseer[name];
  if (typeof fn !== 'function') return;
  module.exports[name] = fn.bind(effekseer);
});

var NullEffekseerEffect = function NullEffekseerEffect() {
  _classCallCheck(this, NullEffekseerEffect);
};

var NullEffekseerHandle = function () {
  function NullEffekseerHandle() {
    _classCallCheck(this, NullEffekseerHandle);
  }

  _createClass(NullEffekseerHandle, [{
    key: "stop",
    value: function stop() {}
  }, {
    key: "stopRoot",
    value: function stopRoot() {}
  }, {
    key: "setFrame",
    value: function setFrame(frame) {}
  }, {
    key: "setLocation",
    value: function setLocation(x, y, z) {}
  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {}
  }, {
    key: "setScale",
    value: function setScale(x, y, z) {}
  }, {
    key: "setMatrix",
    value: function setMatrix(matrixArray) {}
  }, {
    key: "setAllColor",
    value: function setAllColor(r, g, b, a) {}
  }, {
    key: "setTargetLocation",
    value: function setTargetLocation(x, y, z) {}
  }, {
    key: "getDynamicInput",
    value: function getDynamicInput(index) {
      return 0;
    }
  }, {
    key: "setDynamicInput",
    value: function setDynamicInput(index, value) {}
  }, {
    key: "sendTrigger",
    value: function sendTrigger(index) {}
  }, {
    key: "setPaused",
    value: function setPaused(paused) {}
  }, {
    key: "setShown",
    value: function setShown(shown) {}
  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {}
  }, {
    key: "setRandomSeed",
    value: function setRandomSeed(seed) {}
  }, {
    key: "exists",
    get: function get() {
      return false;
    }
  }]);

  return NullEffekseerHandle;
}();

var NullEffekseerContext = function () {
  function NullEffekseerContext() {
    _classCallCheck(this, NullEffekseerContext);
  }

  _createClass(NullEffekseerContext, [{
    key: "init",
    value: function init(webglContext, settings) {}
  }, {
    key: "update",
    value: function update(deltaFrames) {}
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "setProjectionMatrix",
    value: function setProjectionMatrix(matrixArray) {}
  }, {
    key: "setProjectionPerspective",
    value: function setProjectionPerspective(fov, aspect, near, far) {}
  }, {
    key: "setProjectionOrthographic",
    value: function setProjectionOrthographic(width, height, near, far) {}
  }, {
    key: "setCameraMatrix",
    value: function setCameraMatrix(matrixArray) {}
  }, {
    key: "setCameraLookAt",
    value: function setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ) {}
  }, {
    key: "setCameraLookAtFromVector",
    value: function setCameraLookAtFromVector(position, target, upvec) {}
  }, {
    key: "loadEffectBinaryAsset",
    value: function loadEffectBinaryAsset(asset, scale, onload, onerror) {
      return new NullEffekseerEffect();
    }
  }, {
    key: "releaseEffect",
    value: function releaseEffect(effect) {}
  }, {
    key: "play",
    value: function play(effect, x, y, z) {
      // const handle = Core.PlayEffect(this.nativeptr, effect.nativeptr, x, y, z);
      // return (handle >= 0) ? new EffekseerHandle(this, handle) : null;
      return new NullEffekseerHandle();
    }
  }, {
    key: "stopAll",
    value: function stopAll() {}
  }, {
    key: "setResourceLoader",
    value: function setResourceLoader(loader) {}
  }, {
    key: "getRestInstancesCount",
    value: function getRestInstancesCount() {
      return 0;
    }
  }, {
    key: "getUpdateTime",
    value: function getUpdateTime() {
      return 0;
    }
  }, {
    key: "getDrawTime",
    value: function getDrawTime() {
      return 0;
    }
  }, {
    key: "isVertexArrayObjectSupported",
    value: function isVertexArrayObjectSupported() {
      return false;
    }
  }, {
    key: "setRestorationOfStatesFlag",
    value: function setRestorationOfStatesFlag(flag) {}
  }, {
    key: "captureBackground",
    value: function captureBackground(x, y, width, height) {}
  }, {
    key: "resetBackground",
    value: function resetBackground() {}
  }]);

  return NullEffekseerContext;
}();

module.exports["utils"] = {
  /**
   * EffekseerContext を生成する。
   *
   * @param renderer g.Renderer インスタンス
   * @returns EffekseerContext インスタンス
   */
  createEffekseerContext: function createEffekseerContext(renderer, settings) {
    var shared = renderer._shared;
    if (shared == null) {
      return new NullEffekseerContext();
    }

    var glContext = shared._context;

    var context = module.exports.createContext();
    context.init(glContext, settings);

    return context;
  },

  /**
   * Effekseer の描画を行う。
   *
   * @param renderer g.Renderer インスタンス
   * @param context EffekseerContext インスタンス
   */
  renderEffekseer: function renderEffekseer(renderer, context) {
    var shared = renderer._shared;
    if (shared == null) {
      return;
    };

    shared._commit();

    var gl = shared._context;

    // Akashic Engine の描画順序は E のツリー構造で定まり、後から描画したものが
    // 以前に描画したものを上書きする。 Effekseer の描画もこのルールに従うよう、
    // 次のようにする。
    //
    // 1. Akachic の描画ではZテスト・Zライトを無効にする
    // 2. Effekseer の描画ではZテスト・Zライトを有効にする
    //
    // `2.` でZテスト・Zライトを有効にしているは、3Dオブジェクトの交差を正しく
    // 描画するためである。一方、 Effekseer, Akashic, Effekseer の順で描画すると
    // 不自然な結果になることがある。

    gl.depthMask(true);
    gl.enable(gl.DEPTH_TEST);

    renderer.save();
    context.draw();
    renderer.restore();

    gl.disable(gl.DEPTH_TEST);
    gl.depthMask(false);
  }
};
// >>>>>>> CHANGED