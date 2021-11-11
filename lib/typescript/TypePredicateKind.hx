package typescript;

@:jsRequire("typescript", "TypePredicateKind") @:enum extern abstract TypePredicateKind(Int) from Int to Int {
	var This;
	var Identifier;
	var AssertsThis;
	var AssertsIdentifier;
}