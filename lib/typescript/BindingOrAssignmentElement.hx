package typescript;

typedef BindingOrAssignmentElement = ts.AnyOf14<Identifier, BindingElement, VariableDeclaration, ParameterDeclaration, ElementAccessExpression, PropertyAccessExpression, OmittedExpression, ArrayLiteralExpression, PropertyAssignment, ShorthandPropertyAssignment, SpreadAssignment, ObjectLiteralExpression, SpreadElement, AssignmentExpression<EqualsToken>>;