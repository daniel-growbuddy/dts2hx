package typescript;

@:jsRequire("typescript", "FlowFlags") @:enum extern abstract FlowFlags(Int) from Int to Int {
	var Unreachable;
	var Start;
	var BranchLabel;
	var LoopLabel;
	var Assignment;
	var TrueCondition;
	var FalseCondition;
	var SwitchClause;
	var ArrayMutation;
	var Call;
	var ReduceLabel;
	var Referenced;
	var Shared;
	var Label;
	var Condition;
}