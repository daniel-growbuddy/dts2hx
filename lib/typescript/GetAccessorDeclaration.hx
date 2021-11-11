package typescript;

typedef GetAccessorDeclaration = {
	final kind : Int;
	final parent : ts.AnyOf3<ClassDeclaration, ClassExpression, ObjectLiteralExpression>;
	final name : PropertyName;
	@:optional
	final body : Block;
	var _functionLikeDeclarationBrand : Dynamic;
	@:optional
	final asteriskToken : AsteriskToken;
	@:optional
	final questionToken : QuestionToken;
	@:optional
	final exclamationToken : ExclamationToken;
	@:optional
	final typeParameters : NodeArray<TypeParameterDeclaration>;
	final parameters : NodeArray<ParameterDeclaration>;
	@:optional
	final type : TypeNode;
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
	var _classElementBrand : Dynamic;
	var _objectLiteralBrand : Dynamic;
};