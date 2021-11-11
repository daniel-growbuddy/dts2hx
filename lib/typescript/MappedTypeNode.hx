package typescript;

typedef MappedTypeNode = {
	final kind : Int;
	@:optional
	final readonlyToken : ts.AnyOf3<ReadonlyKeyword, PlusToken, MinusToken>;
	final typeParameter : TypeParameterDeclaration;
	@:optional
	final nameType : TypeNode;
	@:optional
	final questionToken : ts.AnyOf3<QuestionToken, PlusToken, MinusToken>;
	@:optional
	final type : TypeNode;
	var _typeNodeBrand : Dynamic;
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