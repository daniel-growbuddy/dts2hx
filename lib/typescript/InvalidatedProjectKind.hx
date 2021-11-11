package typescript;

@:jsRequire("typescript", "InvalidatedProjectKind") @:enum extern abstract InvalidatedProjectKind(Int) from Int to Int {
	var Build;
	var UpdateBundle;
	var UpdateOutputFileStamps;
}