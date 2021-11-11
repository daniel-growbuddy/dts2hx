package typescript;

typedef ScriptReferenceHost = {
	function getCompilerOptions():CompilerOptions;
	function getSourceFile(fileName:String):Null<SourceFile>;
	function getSourceFileByPath(path:Path):Null<SourceFile>;
	function getCurrentDirectory():String;
};