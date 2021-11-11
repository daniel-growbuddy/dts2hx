package typescript;

@:jsRequire("typescript", "InferencePriority") @:enum extern abstract InferencePriority(Int) from Int to Int {
	var NakedTypeVariable;
	var SpeculativeTuple;
	var HomomorphicMappedType;
	var PartialHomomorphicMappedType;
	var MappedTypeConstraint;
	var ContravariantConditional;
	var ReturnType;
	var LiteralKeyof;
	var NoConstraints;
	var AlwaysStrict;
	var MaxValue;
	var PriorityImpliesCombination;
	var Circularity;
}