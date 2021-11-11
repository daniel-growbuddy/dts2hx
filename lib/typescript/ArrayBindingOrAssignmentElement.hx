package typescript;

typedef ArrayBindingOrAssignmentElement = ts.AnyOf9<Identifier, BindingElement, ElementAccessExpression, PropertyAccessExpression, OmittedExpression, ArrayLiteralExpression, ObjectLiteralExpression, SpreadElement, AssignmentExpression<EqualsToken>>;