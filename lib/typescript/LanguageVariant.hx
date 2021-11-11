package typescript;

@:jsRequire("typescript", "LanguageVariant") @:enum extern abstract LanguageVariant(Int) from Int to Int {
	var Standard;
	var JSX;
}