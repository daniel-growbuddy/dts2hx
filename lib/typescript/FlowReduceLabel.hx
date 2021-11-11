package typescript;

typedef FlowReduceLabel = {
	var target : FlowLabel;
	var antecedents : Array<FlowNode>;
	var antecedent : FlowNode;
	var flags : FlowFlags;
	@:optional
	var id : Float;
};