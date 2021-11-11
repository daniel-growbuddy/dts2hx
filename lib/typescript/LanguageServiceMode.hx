package typescript;

@:jsRequire("typescript", "LanguageServiceMode") @:enum extern abstract LanguageServiceMode(Int) from Int to Int {
	var Semantic;
	var PartialSemantic;
	var Syntactic;
}