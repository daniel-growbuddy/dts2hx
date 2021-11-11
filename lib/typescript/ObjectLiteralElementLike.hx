package typescript;

/**
	Unlike ObjectLiteralElement, excludes JSXAttribute and JSXSpreadAttribute.
**/
typedef ObjectLiteralElementLike = ts.AnyOf6<MethodDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, PropertyAssignment, ShorthandPropertyAssignment, SpreadAssignment>;