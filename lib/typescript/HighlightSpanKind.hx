package typescript;

@:jsRequire("typescript", "HighlightSpanKind") @:enum extern abstract HighlightSpanKind(String) from String to String {
	var none;
	var definition;
	var reference;
	var writtenReference;
}