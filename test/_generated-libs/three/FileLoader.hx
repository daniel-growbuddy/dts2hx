package three;
@:jsRequire("three", "FileLoader") extern class FileLoader {
	function new(?manager:LoadingManager);
	var manager : LoadingManager;
	var mimeType : ts.html.IMimeType;
	var path : String;
	var responseType : String;
	var withCredentials : String;
	function load(url:String, ?onLoad:(response:ts.AnyOf2<String, ts.lib.IArrayBuffer>) -> Void, ?onProgress:(request:ts.html.IProgressEvent<ts.html.IEventTarget>) -> Void, ?onError:(event:ts.html.IErrorEvent) -> Void):Dynamic;
	function setMimeType(mimeType:ts.html.IMimeType):FileLoader;
	function setPath(path:String):FileLoader;
	function setResponseType(responseType:String):FileLoader;
	function setWithCredentials(value:String):FileLoader;
	function setRequestHeader(value:{ }):FileLoader;
}