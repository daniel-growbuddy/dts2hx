package typescript;

typedef FlowStart = {
	@:optional
	var node : ts.AnyOf3<MethodDeclaration, FunctionExpression, ArrowFunction>;
	var flags : FlowFlags;
	@:optional
	var id : Float;
};