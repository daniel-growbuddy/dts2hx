package typescript;

typedef FlowAssignment = {
	var node : ts.AnyOf3<Expression, BindingElement, VariableDeclaration>;
	var antecedent : FlowNode;
	var flags : FlowFlags;
	@:optional
	var id : Float;
};