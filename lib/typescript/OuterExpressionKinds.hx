package typescript;

@:jsRequire("typescript", "OuterExpressionKinds") @:enum extern abstract OuterExpressionKinds(Int) from Int to Int {
	var Parentheses;
	var TypeAssertions;
	var NonNullAssertions;
	var PartiallyEmittedExpressions;
	var Assertions;
	var All;
}