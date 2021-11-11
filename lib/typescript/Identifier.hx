package typescript;

typedef Identifier = {
	final kind : Int;
	/**
		Prefer to use `id.unescapedText`. (Note: This is available only in services, not internally to the TypeScript compiler.)
		Text of identifier, but if the identifier begins with two underscores, this will begin with three.
	**/
	final escapedText : __String;
	@:optional
	final originalKeywordKind : SyntaxKind;
	@:optional
	var isInJSDocNamespace : Bool;
	final text : String;
	var _primaryExpressionBrand : Dynamic;
	var _memberExpressionBrand : Dynamic;
	var _leftHandSideExpressionBrand : Dynamic;
	var _updateExpressionBrand : Dynamic;
	var _unaryExpressionBrand : Dynamic;
	var _expressionBrand : Dynamic;
	final flags : NodeFlags;
	@:optional
	final decorators : NodeArray<Decorator>;
	@:optional
	final modifiers : ModifiersArray;
	final parent : Node;
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
	var _declarationBrand : Dynamic;
};