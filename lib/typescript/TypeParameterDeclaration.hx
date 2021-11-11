package typescript;

typedef TypeParameterDeclaration = {
	final kind : Int;
	final parent : ts.AnyOf20<JSDocTemplateTag, FunctionDeclaration, MethodDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, ConstructorDeclaration, FunctionExpression, ArrowFunction, CallSignatureDeclaration, ConstructSignatureDeclaration, MethodSignature, IndexSignatureDeclaration, FunctionTypeNode, ConstructorTypeNode, JSDocFunctionType, ClassDeclaration, ClassExpression, InterfaceDeclaration, TypeAliasDeclaration, InferTypeNode>;
	final name : Identifier;
	/**
		Note: Consider calling `getEffectiveConstraintOfTypeParameter`
	**/
	@:optional
	final constraint : TypeNode;
	@:optional
	@:native("default")
	final default_ : TypeNode;
	@:optional
	var expression : Expression;
	var _declarationBrand : Dynamic;
	final flags : NodeFlags;
	@:optional
	final decorators : NodeArray<Decorator>;
	@:optional
	final modifiers : ModifiersArray;
	function getSourceFile():SourceFile;
	function getChildCount(?sourceFile:SourceFile):Float;
	function getChildAt(index:Float, ?sourceFile:SourceFile):Node;
	function getChildren(?sourceFile:SourceFile):Array<Node>;
	function getStart(?sourceFile:SourceFile, ?includeJsDocComment:Bool):Float;
	function getFullStart():Float;
	function getEnd():Float;
	function getWidth(?sourceFile:SourceFileLike):Float;
	function getFullWidth():Float;
	function getLeadingTriviaWidth(?sourceFile:SourceFile):Float;
	function getFullText(?sourceFile:SourceFile):String;
	function getText(?sourceFile:SourceFile):String;
	function getFirstToken(?sourceFile:SourceFile):Null<Node>;
	function getLastToken(?sourceFile:SourceFile):Null<Node>;
	function forEachChild<T>(cbNode:(node:Node) -> Null<T>, ?cbNodeArray:(nodes:NodeArray<Node>) -> Null<T>):Null<T>;
	final pos : Float;
	final end : Float;
};