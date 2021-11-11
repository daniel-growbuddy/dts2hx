package typescript;

typedef System = {
	var args : Array<String>;
	var newLine : String;
	var useCaseSensitiveFileNames : Bool;
	function write(s:String):Void;
	@:optional
	function writeOutputIsTTY():Bool;
	function readFile(path:String, ?encoding:String):Null<String>;
	@:optional
	function getFileSize(path:String):Float;
	function writeFile(path:String, data:String, ?writeByteOrderMark:Bool):Void;
	@:optional
	function watchFile(path:String, callback:FileWatcherCallback, ?pollingInterval:Float, ?options:WatchOptions):FileWatcher;
	@:optional
	function watchDirectory(path:String, callback:DirectoryWatcherCallback, ?recursive:Bool, ?options:WatchOptions):FileWatcher;
	function resolvePath(path:String):String;
	function fileExists(path:String):Bool;
	function directoryExists(path:String):Bool;
	function createDirectory(path:String):Void;
	function getExecutingFilePath():String;
	function getCurrentDirectory():String;
	function getDirectories(path:String):Array<String>;
	function readDirectory(path:String, ?extensions:haxe.ds.ReadOnlyArray<String>, ?exclude:haxe.ds.ReadOnlyArray<String>, ?include:haxe.ds.ReadOnlyArray<String>, ?depth:Float):Array<String>;
	@:optional
	function getModifiedTime(path:String):Null<js.lib.Date>;
	@:optional
	function setModifiedTime(path:String, time:js.lib.Date):Void;
	@:optional
	function deleteFile(path:String):Void;
	/**
		A good implementation is node.js' `crypto.createHash`. (https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm)
	**/
	@:optional
	function createHash(data:String):String;
	/**
		This must be cryptographically secure. Only implement this method using `crypto.createHash("sha256")`.
	**/
	@:optional
	function createSHA256Hash(data:String):String;
	@:optional
	function getMemoryUsage():Float;
	function exit(?exitCode:Float):Void;
	@:optional
	function realpath(path:String):String;
	@:optional
	function setTimeout(callback:(args:haxe.extern.Rest<Dynamic>) -> Void, ms:Float, args:haxe.extern.Rest<Dynamic>):Dynamic;
	@:optional
	function clearTimeout(timeoutId:Dynamic):Void;
	@:optional
	function clearScreen():Void;
	@:optional
	function base64decode(input:String):String;
	@:optional
	function base64encode(input:String):String;
};