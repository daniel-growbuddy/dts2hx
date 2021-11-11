package typescript;

typedef FlowCall = {
	var node : CallExpression;
	var antecedent : FlowNode;
	var flags : FlowFlags;
	@:optional
	var id : Float;
};