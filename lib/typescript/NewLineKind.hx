package typescript;

@:jsRequire("typescript", "NewLineKind") @:enum extern abstract NewLineKind(Int) from Int to Int {
	var CarriageReturnLineFeed;
	var LineFeed;
}