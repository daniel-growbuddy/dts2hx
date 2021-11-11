package typescript;

typedef FlowSwitchClause = {
	var switchStatement : SwitchStatement;
	var clauseStart : Float;
	var clauseEnd : Float;
	var antecedent : FlowNode;
	var flags : FlowFlags;
	@:optional
	var id : Float;
};