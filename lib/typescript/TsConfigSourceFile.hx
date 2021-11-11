package typescript;

typedef TsConfigSourceFile = {
	@:optional
	var extendedSourceFiles : Array<String>;
	final statements : NodeArray<JsonObjectExpressionStatement>;
	final kind : Int;
	final endOfFileToken : Token<Int>;
	var fileName : String;
	var text : String;
	var amdDependencies : haxe.ds.ReadOnlyArray<AmdDependency>;
	@:optional
	var moduleName : String;
	var referencedFiles : haxe.ds.ReadOnlyArray<FileReference>;
	var typeReferenceDirectives : haxe.ds.ReadOnlyArray<FileReference>;
	var libReferenceDirectives : haxe.ds.ReadOnlyArray<FileReference>;
	var languageVariant : LanguageVariant;
	var isDeclarationFile : Bool;
	/**
		lib.d.ts should have a reference comment like
		
		  /// <reference no-default-lib="true"/>
		
		If any other file has this comment, it signals not to include lib.d.ts
		because this containing file is intended to act as a default library.
	**/
	var hasNoDefaultLib : Bool;
	var languageVersion : ScriptTarget;
	function getLineAndCharacterOfPosition(pos:Float):LineAndCharacter;
	function getLineEndOfPosition(pos:Float):Float;
	function getLineStarts():haxe.ds.ReadOnlyArray<Float>;
	function getPositionOfLineAndCharacter(line:Float, character:Float):Float;
	function update(newText:String, textChangeRange:TextChangeRange):SourceFile;
	var _declarationBrand : Dynamic;
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