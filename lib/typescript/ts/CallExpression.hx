package typescript.ts;


/**
Generated from: test-definitions/typescript/typescript-extended.d.ts:1118:5
**/
@:native('ts.CallExpression')
extern interface CallExpression extends typescript.ts.LeftHandSideExpression {
	var expression: typescript.ts.LeftHandSideExpression;
	@:optional
	var questionDotToken: typescript.ts.QuestionDotToken;
	@:optional
	var typeArguments: typescript.ts.NodeArray<typescript.ts.TypeNode>;
	var arguments: typescript.ts.NodeArray<typescript.ts.Expression>;
}

