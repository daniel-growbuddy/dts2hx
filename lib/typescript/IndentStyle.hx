package typescript;

@:jsRequire("typescript", "IndentStyle") @:enum extern abstract IndentStyle(Int) from Int to Int {
	var None;
	var Block;
	var Smart;
}