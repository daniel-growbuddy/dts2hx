package typescript;

typedef WatchCompilerHost<T> = {
	/**
		Instead of using output d.ts file from project reference, use its source file
	**/
	@:optional
	function useSourceOfProjectReferenceRedirect():Bool;
	/**
		If provided, callback to invoke after every new program creation
	**/
	@:optional
	function afterProgramCreate(program:T):Void;
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
	/**
		If provided, called with Diagnostic message that informs about change in watch status
	**/
	@:optional
	function onWatchStatusChange(diagnostic:Diagnostic, newLine:String, options:CompilerOptions, ?errorCount:Float):Void;
	/**
		Used to watch changes in source files, missing files needed to update the program or config file
	**/
	function watchFile(path:String, callback:FileWatcherCallback, ?pollingInterval:Float, ?options:CompilerOptions):FileWatcher;
	/**
		Used to watch resolved module's failed lookup locations, config file specs, type roots where auto type reference directives are added
	**/
	function watchDirectory(path:String, callback:DirectoryWatcherCallback, ?recursive:Bool, ?options:CompilerOptions):FileWatcher;
	/**
		If provided, will be used to set delayed compilation, so that multiple changes in short span are compiled together
	**/
	@:optional
	function setTimeout(callback:(args:haxe.extern.Rest<Dynamic>) -> Void, ms:Float, args:haxe.extern.Rest<Dynamic>):Dynamic;
	/**
		If provided, will be used to reset existing delayed compilation
	**/
	@:optional
	function clearTimeout(timeoutId:Dynamic):Void;
};