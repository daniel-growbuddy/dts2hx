package typescript;

typedef TranspileOutput = {
	var outputText : String;
	@:optional
	var diagnostics : Array<Diagnostic>;
	@:optional
	var sourceMapText : String;
};