package typescript;

typedef CompilerHost = {
	function getSourceFile(fileName:String, languageVersion:ScriptTarget, ?onError:(message:String) -> Void, ?shouldCreateNewSourceFile:Bool):Null<SourceFile>;
	@:optional
	function getSourceFileByPath(fileName:String, path:Path, languageVersion:ScriptTarget, ?onError:(message:String) -> Void, ?shouldCreateNewSourceFile:Bool):Null<SourceFile>;
	@:optional
	function getCancellationToken():CancellationToken;
	function getDefaultLibFileName(options:CompilerOptions):String;
	@:optional
	function getDefaultLibLocation():String;
	dynamic function writeFile(fileName:String, data:String, writeByteOrderMark:Bool, ?onError:(message:String) -> Void, ?sourceFiles:haxe.ds.ReadOnlyArray<SourceFile>):Void;
	function getCurrentDirectory():String;
	function getCanonicalFileName(fileName:String):String;
	function useCaseSensitiveFileNames():Bool;
	function getNewLine():String;
	@:optional
	function readDirectory(rootDir:String, extensions:haxe.ds.ReadOnlyArray<String>, excludes:Null<haxe.ds.ReadOnlyArray<String>>, includes:haxe.ds.ReadOnlyArray<String>, ?depth:Float):Array<String>;
	@:optional
	function resolveModuleNames(moduleNames:Array<String>, containingFile:String, reusedNames:Null<Array<String>>, redirectedReference:Null<ResolvedProjectReference>, options:CompilerOptions):Array<Null<ResolvedModule>>;
	/**
		This method is a companion for 'resolveModuleNames' and is used to resolve 'types' references to actual type declaration files
	**/
	@:optional
	function resolveTypeReferenceDirectives(typeReferenceDirectiveNames:Array<String>, containingFile:String, redirectedReference:Null<ResolvedProjectReference>, options:CompilerOptions):Array<Null<ResolvedTypeReferenceDirective>>;
	@:optional
	function getEnvironmentVariable(name:String):Null<String>;
	@:optional
	function createHash(data:String):String;
	@:optional
	function getParsedCommandLine(fileName:String):Null<ParsedCommandLine>;
	function fileExists(fileName:String):Bool;
	function readFile(fileName:String):Null<String>;
	@:optional
	function trace(s:String):Void;
	@:optional
	function directoryExists(directoryName:String):Bool;
	/**
		Resolve a symbolic link.
	**/
	@:optional
	function realpath(path:String):String;
	@:optional
	function getDirectories(path:String):Array<String>;
};