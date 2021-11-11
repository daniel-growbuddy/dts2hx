package typescript;

@:jsRequire("typescript", "ObjectFlags") @:enum extern abstract ObjectFlags(Int) from Int to Int {
	var Class;
	var Interface;
	var Reference;
	var Tuple;
	var Anonymous;
	var Mapped;
	var Instantiated;
	var ObjectLiteral;
	var EvolvingArray;
	var ObjectLiteralPatternWithComputedProperties;
	var ContainsSpread;
	var ReverseMapped;
	var JsxAttributes;
	var MarkerType;
	var JSLiteral;
	var FreshLiteral;
	var ArrayLiteral;
	var ObjectRestType;
	var ClassOrInterface;
}