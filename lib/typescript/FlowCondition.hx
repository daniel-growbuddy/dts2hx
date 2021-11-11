package typescript;

typedef FlowCondition = {
	var node : Expression;
	var antecedent : FlowNode;
	var flags : FlowFlags;
	@:optional
	var id : Float;
};