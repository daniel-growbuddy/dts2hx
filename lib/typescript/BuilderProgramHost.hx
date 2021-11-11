package typescript;

typedef BuilderProgramHost = {
	/**
		return true if file names are treated with case sensitivity
	**/
	function useCaseSensitiveFileNames():Bool;
	/**
		If provided this would be used this hash instead of actual file shape text for detecting changes
	**/
	@:optional
	dynamic function createHash(data:String):String;
	/**
		When emit or emitNextAffectedFile are called without writeFile,
		this callback if present would be used to write files
	**/
	@:optional
	dynamic function writeFile(fileName:String, data:String, writeByteOrderMark:Bool, ?onError:(message:String) -> Void, ?sourceFiles:haxe.ds.ReadOnlyArray<SourceFile>):Void;
};