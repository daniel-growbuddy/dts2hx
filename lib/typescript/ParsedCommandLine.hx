package typescript;

/**
	Either a parsed command line or a parsed tsconfig.json
**/
typedef ParsedCommandLine = {
	var options : CompilerOptions;
	@:optional
	var typeAcquisition : TypeAcquisition;
	var fileNames : Array<String>;
	@:optional
	var projectReferences : haxe.ds.ReadOnlyArray<ProjectReference>;
	@:optional
	var watchOptions : WatchOptions;
	@:optional
	var raw : Dynamic;
	var errors : Array<Diagnostic>;
	@:optional
	var wildcardDirectories : MapLike<WatchDirectoryFlags>;
	@:optional
	var compileOnSave : Bool;
};