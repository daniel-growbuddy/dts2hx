package typescript;

@:jsRequire("typescript", "ScriptKind") @:enum extern abstract ScriptKind(Int) from Int to Int {
	var Unknown;
	var JS;
	var JSX;
	var TS;
	var TSX;
	var External;
	var JSON;
	/**
		Used on extensions that doesn't define the ScriptKind but the content defines it.
		Deferred extensions are going to be included in all project contexts.
	**/
	var Deferred;
}