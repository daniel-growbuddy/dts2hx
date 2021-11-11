package typescript;

typedef CreateProgramOptions = {
	var rootNames : haxe.ds.ReadOnlyArray<String>;
	var options : CompilerOptions;
	@:optional
	var projectReferences : haxe.ds.ReadOnlyArray<ProjectReference>;
	@:optional
	var host : CompilerHost;
	@:optional
	var oldProgram : Program;
	@:optional
	var configFileParsingDiagnostics : haxe.ds.ReadOnlyArray<Diagnostic>;
};