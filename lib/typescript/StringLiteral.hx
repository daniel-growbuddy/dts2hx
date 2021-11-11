package typescript;

typedef StringLiteral = {
	final kind : Int;
	var _literalExpressionBrand : Dynamic;
	var text : String;
	@:optional
	var isUnterminated : Bool;
	@:optional
	var hasExtendedUnicodeEscape : Bool;
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
	var _primaryExpressionBrand : Dynamic;
	var _memberExpressionBrand : Dynamic;
	var _leftHandSideExpressionBrand : Dynamic;
	var _updateExpressionBrand : Dynamic;
	var _unaryExpressionBrand : Dynamic;
	var _expressionBrand : Dynamic;
	var _declarationBrand : Dynamic;
};