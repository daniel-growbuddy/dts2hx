package typescript;

typedef LanguageServiceHost = {
	function getCompilationSettings():CompilerOptions;
	@:optional
	function getNewLine():String;
	@:optional
	function getProjectVersion():String;
	function getScriptFileNames():Array<String>;
	@:optional
	function getScriptKind(fileName:String):ScriptKind;
	function getScriptVersion(fileName:String):String;
	function getScriptSnapshot(fileName:String):Null<IScriptSnapshot>;
	@:optional
	function getProjectReferences():Null<haxe.ds.ReadOnlyArray<ProjectReference>>;
	@:optional
	function getLocalizedDiagnosticMessages():Dynamic;
	@:optional
	function getCancellationToken():HostCancellationToken;
	function getCurrentDirectory():String;
	function getDefaultLibFileName(options:CompilerOptions):String;
	@:optional
	function log(s:String):Void;
	@:optional
	function trace(s:String):Void;
	@:optional
	function error(s:String):Void;
	@:optional
	function useCaseSensitiveFileNames():Bool;
	@:optional
	function readDirectory(path:String, ?extensions:haxe.ds.ReadOnlyArray<String>, ?exclude:haxe.ds.ReadOnlyArray<String>, ?include:haxe.ds.ReadOnlyArray<String>, ?depth:Float):Array<String>;
	@:optional
	function readFile(path:String, ?encoding:String):Null<String>;
	@:optional
	function realpath(path:String):String;
	@:optional
	function fileExists(path:String):Bool;
	@:optional
	function getTypeRootsVersion():Float;
	@:optional
	function resolveModuleNames(moduleNames:Array<String>, containingFile:String, reusedNames:Null<Array<String>>, redirectedReference:Null<ResolvedProjectReference>, options:CompilerOptions):Array<Null<ResolvedModule>>;
	@:optional
	function getResolvedModuleWithFailedLookupLocationsFromCache(modulename:String, containingFile:String):Null<ResolvedModuleWithFailedLookupLocations>;
	@:optional
	function resolveTypeReferenceDirectives(typeDirectiveNames:Array<String>, containingFile:String, redirectedReference:Null<ResolvedProjectReference>, options:CompilerOptions):Array<Null<ResolvedTypeReferenceDirective>>;
	@:optional
	function getDirectories(directoryName:String):Array<String>;
	/**
		Gets a set of custom transformers to use during emit.
	**/
	@:optional
	function getCustomTransformers():Null<CustomTransformers>;
	@:optional
	function isKnownTypesPackageName(name:String):Bool;
	@:optional
	function installPackage(options:InstallPackageOptions):js.lib.Promise<ApplyCodeActionCommandResult>;
	@:optional
	function writeFile(fileName:String, content:String):Void;
	@:optional
	function directoryExists(directoryName:String):Bool;
};