package typescript;

typedef UnparsedSource = {
	final kind : Int;
	var fileName : String;
	var text : String;
	final prologues : haxe.ds.ReadOnlyArray<UnparsedPrologue>;
	var helpers : Null<haxe.ds.ReadOnlyArray<UnscopedEmitHelper>>;
	var referencedFiles : haxe.ds.ReadOnlyArray<FileReference>;
	var typeReferenceDirectives : Null<haxe.ds.ReadOnlyArray<String>>;
	var libReferenceDirectives : haxe.ds.ReadOnlyArray<FileReference>;
	@:optional
	var hasNoDefaultLib : Bool;
	@:optional
	var sourceMapPath : String;
	@:optional
	var sourceMapText : String;
	@:optional
	final syntheticReferences : haxe.ds.ReadOnlyArray<UnparsedSyntheticReference>;
	final texts : haxe.ds.ReadOnlyArray<UnparsedSourceText>;
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
};