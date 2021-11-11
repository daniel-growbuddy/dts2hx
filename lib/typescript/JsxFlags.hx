package typescript;

@:jsRequire("typescript", "JsxFlags") @:enum extern abstract JsxFlags(Int) from Int to Int {
	var None;
	/**
		An element from a named property of the JSX.IntrinsicElements interface
	**/
	var IntrinsicNamedElement;
	/**
		An element inferred from the string index signature of the JSX.IntrinsicElements interface
	**/
	var IntrinsicIndexedElement;
	var IntrinsicElement;
}