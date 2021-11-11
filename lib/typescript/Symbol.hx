package typescript;

typedef Symbol = {
	var flags : SymbolFlags;
	var escapedName : __String;
	var declarations : Array<Declaration>;
	var valueDeclaration : Declaration;
	@:optional
	var members : SymbolTable;
	@:optional
	var exports : SymbolTable;
	@:optional
	var globalExports : SymbolTable;
	final name : String;
	function getFlags():SymbolFlags;
	function getEscapedName():__String;
	function getName():String;
	function getDeclarations():Null<Array<Declaration>>;
	function getDocumentationComment(typeChecker:Null<TypeChecker>):Array<SymbolDisplayPart>;
	function getJsDocTags():Array<JSDocTagInfo>;
};