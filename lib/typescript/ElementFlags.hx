package typescript;

@:jsRequire("typescript", "ElementFlags") @:enum extern abstract ElementFlags(Int) from Int to Int {
	var Required;
	var Optional;
	var Rest;
	var Variadic;
	var Variable;
}