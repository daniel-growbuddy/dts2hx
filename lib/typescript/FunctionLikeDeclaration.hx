package typescript;

typedef FunctionLikeDeclaration = ts.AnyOf7<FunctionDeclaration, MethodDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, ConstructorDeclaration, FunctionExpression, ArrowFunction>;