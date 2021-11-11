package typescript;

typedef FlowNode = ts.AnyOf8<FlowStart, FlowLabel, FlowAssignment, FlowCall, FlowCondition, FlowSwitchClause, FlowArrayMutation, FlowReduceLabel>;