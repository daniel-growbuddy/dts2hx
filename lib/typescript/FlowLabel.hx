package typescript;

typedef FlowLabel = {
	var antecedents : Null<Array<FlowNode>>;
	var flags : FlowFlags;
	@:optional
	var id : Float;
};