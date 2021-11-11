package typescript;

/**
	Interface extending ParseConfigHost to support ParseConfigFile that reads config file and reports errors
**/
typedef ParseConfigFileHost = {
	function getCurrentDirectory():String;
	var useCaseSensitiveFileNames : Bool;
	function readDirectory(rootDir:String, extensions:haxe.ds.ReadOnlyArray<String>, excludes:Null<haxe.ds.ReadOnlyArray<String>>, includes:haxe.ds.ReadOnlyArray<String>, ?depth:Float):haxe.ds.ReadOnlyArray<String>;
	/**
		Gets a value indicating whether the specified path exists and is a file.
	**/
	function fileExists(path:String):Bool;
	function readFile(path:String):Null<String>;
	@:optional
	function trace(s:String):Void;
	/**
		Reports unrecoverable error when parsing config file
	**/
	dynamic function onUnRecoverableConfigFileDiagnostic(diagnostic:Diagnostic):Void;
};