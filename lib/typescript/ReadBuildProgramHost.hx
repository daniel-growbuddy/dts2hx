package typescript;

typedef ReadBuildProgramHost = {
	function useCaseSensitiveFileNames():Bool;
	function getCurrentDirectory():String;
	function readFile(fileName:String):Null<String>;
};