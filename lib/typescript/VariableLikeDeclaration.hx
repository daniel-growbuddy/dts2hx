package typescript;

typedef VariableLikeDeclaration = ts.AnyOf11<BindingElement, VariableDeclaration, ParameterDeclaration, JSDocParameterTag, PropertyDeclaration, PropertyAssignment, ShorthandPropertyAssignment, EnumMember, JSDocPropertyTag, JsxAttribute, PropertySignature>;