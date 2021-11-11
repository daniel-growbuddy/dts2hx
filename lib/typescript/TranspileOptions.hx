package typescript;

typedef TranspileOptions = {
	@:optional
	var compilerOptions : CompilerOptions;
	@:optional
	var fileName : String;
	@:optional
	var reportDiagnostics : Bool;
	@:optional
	var moduleName : String;
	@:optional
	var renamedDependencies : MapLike<String>;
	@:optional
	var transformers : CustomTransformers;
};