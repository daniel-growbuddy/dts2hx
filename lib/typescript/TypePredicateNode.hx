package typescript;

typedef TypePredicateNode = {
	final kind : Int;
	final parent : ts.AnyOf15<FunctionDeclaration, MethodDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, ConstructorDeclaration, FunctionExpression, ArrowFunction, CallSignatureDeclaration, ConstructSignatureDeclaration, MethodSignature, IndexSignatureDeclaration, FunctionTypeNode, ConstructorTypeNode, JSDocFunctionType, JSDocTypeExpression>;
	@:optional
	final assertsModifier : AssertsKeyword;
	final parameterName : ts.AnyOf2<Identifier, ThisTypeNode>;
	@:optional
	final type : TypeNode;
	var _typeNodeBrand : Dynamic;
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