package typescript;

typedef FlowArrayMutation = {
	var node : ts.AnyOf2<CallExpression, BinaryExpression>;
	var antecedent : FlowNode;
	var flags : FlowFlags;
	@:optional
	var id : Float;
};