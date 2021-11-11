package typescript;

typedef SolutionBuilderHost<T> = {
	@:optional
	dynamic function reportErrorSummary(errorCount:Float):Void;
	@:optional
	function createDirectory(path:String):Void;
	/**
		Should provide create directory and writeFile if done of invalidatedProjects is not invoked with
		writeFileCallback
	**/
	@:optional
	function writeFile(path:String, data:String, ?writeByteOrderMark:Bool):Void;
	function getModifiedTime(fileName:String):Null<js.lib.Date>;
	function setModifiedTime(fileName:String, date:js.lib.Date):Void;
	function deleteFile(fileName:String):Void;
	@:optional
	function getParsedCommandLine(fileName:String):Null<ParsedCommandLine>;
	dynamic function reportDiagnostic(diagnostic:Diagnostic):Void;
	dynamic function reportSolutionBuilderStatus(diagnostic:Diagnostic):Void;
	@:optional
	function afterProgramEmitAndDiagnostics(program:T):Void;
	/**
		Used to create the program when need for program creation or recreation detected
	**/
	dynamic function createProgram(rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<CompilerOptions>, ?host:CompilerHost, ?oldProgram:T, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<Diagnostic>, ?projectReferences:haxe.ds.ReadOnlyArray<ProjectReference>):T;
	function useCaseSensitiveFileNames():Bool;
	function getNewLine():String;
	function getCurrentDirectory():String;
	function getDefaultLibFileName(options:CompilerOptions):String;
	@:optional
	function getDefaultLibLocation():String;
	@:optional
	function createHash(data:String):String;
	/**
		Use to check file presence for source files and
		if resolveModuleNames is not provided (complier is in charge of module resolution) then module files as well
	**/
	function fileExists(path:String):Bool;
	/**
		Use to read file text for source files and
		if resolveModuleNames is not provided (complier is in charge of module resolution) then module files as well
	**/
	function readFile(path:String, ?encoding:String):Null<String>;
	/**
		If provided, used for module resolution as well as to handle directory structure
	**/
	@:optional
	function directoryExists(path:String):Bool;
	/**
		If provided, used in resolutions as well as handling directory structure
	**/
	@:optional
	function getDirectories(path:String):Array<String>;
	/**
		If provided, used to cache and handle directory structure modifications
	**/
	@:optional
	function readDirectory(path:String, ?extensions:haxe.ds.ReadOnlyArray<String>, ?exclude:haxe.ds.ReadOnlyArray<String>, ?include:haxe.ds.ReadOnlyArray<String>, ?depth:Float):Array<String>;
	/**
		Symbol links resolution
	**/
	@:optional
	function realpath(path:String):String;
	/**
		If provided would be used to write log about compilation
	**/
	@:optional
	function trace(s:String):Void;
	/**
		If provided is used to get the environment variable
	**/
	@:optional
	function getEnvironmentVariable(name:String):Null<String>;
	/**
		If provided, used to resolve the module names, otherwise typescript's default module resolution
	**/
	@:optional
	function resolveModuleNames(moduleNames:Array<String>, containingFile:String, reusedNames:Null<Array<String>>, redirectedReference:Null<ResolvedProjectReference>, options:CompilerOptions):Array<Null<ResolvedModule>>;
	/**
		If provided, used to resolve type reference directives, otherwise typescript's default resolution
	**/
	@:optional
	function resolveTypeReferenceDirectives(typeReferenceDirectiveNames:Array<String>, containingFile:String, redirectedReference:Null<ResolvedProjectReference>, options:CompilerOptions):Array<Null<ResolvedTypeReferenceDirective>>;
};