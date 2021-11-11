package typescript;

typedef BuildOptions = {
	@:optional
	var dry : Bool;
	@:optional
	var force : Bool;
	@:optional
	var verbose : Bool;
	@:optional
	var incremental : Bool;
	@:optional
	var assumeChangesOnlyAffectDirectDependencies : Bool;
	@:optional
	var traceResolution : Bool;
};