package typescript;

typedef EmitResult = {
	var emitSkipped : Bool;
	/**
		Contains declaration emit diagnostics
	**/
	var diagnostics : haxe.ds.ReadOnlyArray<Diagnostic>;
	@:optional
	var emittedFiles : Array<String>;
};