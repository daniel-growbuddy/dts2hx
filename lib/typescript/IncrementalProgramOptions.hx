package typescript;

typedef IncrementalProgramOptions<T> = {
	var rootNames : haxe.ds.ReadOnlyArray<String>;
	var options : CompilerOptions;
	@:optional
	var configFileParsingDiagnostics : haxe.ds.ReadOnlyArray<Diagnostic>;
	@:optional
	var projectReferences : haxe.ds.ReadOnlyArray<ProjectReference>;
	@:optional
	var host : CompilerHost;
	@:optional
	dynamic function createProgram(rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<CompilerOptions>, ?host:CompilerHost, ?oldProgram:T, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<Diagnostic>, ?projectReferences:haxe.ds.ReadOnlyArray<ProjectReference>):T;
};