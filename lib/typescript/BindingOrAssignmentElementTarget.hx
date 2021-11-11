package typescript;

typedef BindingOrAssignmentElementTarget = ts.AnyOf8<Identifier, ObjectBindingPattern, ArrayBindingPattern, ElementAccessExpression, PropertyAccessExpression, OmittedExpression, ArrayLiteralExpression, ObjectLiteralExpression>;