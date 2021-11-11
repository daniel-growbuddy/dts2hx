package typescript;

typedef JsonObjectExpression = ts.AnyOf8<StringLiteral, NumericLiteral, NullLiteral, TrueLiteral, FalseLiteral, ArrayLiteralExpression, ObjectLiteralExpression, JsonMinusNumericLiteral>;