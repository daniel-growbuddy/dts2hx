package typescript;

typedef Signature = {
	@:optional
	var declaration : ts.AnyOf15<FunctionDeclaration, MethodDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, ConstructorDeclaration, FunctionExpression, ArrowFunction, CallSignatureDeclaration, ConstructSignatureDeclaration, MethodSignature, IndexSignatureDeclaration, FunctionTypeNode, ConstructorTypeNode, JSDocFunctionType, JSDocSignature>;
	@:optional
	var typeParameters : haxe.ds.ReadOnlyArray<TypeParameter>;
	var parameters : haxe.ds.ReadOnlyArray<Symbol>;
	function getDeclaration():SignatureDeclaration;
	function getTypeParameters():Null<Array<TypeParameter>>;
	function getParameters():Array<Symbol>;
	function getReturnType():Type_;
	function getDocumentationComment(typeChecker:Null<TypeChecker>):Array<SymbolDisplayPart>;
	function getJsDocTags():Array<JSDocTagInfo>;
};