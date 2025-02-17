package typescript;

typedef Scanner = {
	function getStartPos():Float;
	function getToken():SyntaxKind;
	function getTextPos():Float;
	function getTokenPos():Float;
	function getTokenText():String;
	function getTokenValue():String;
	function hasUnicodeEscape():Bool;
	function hasExtendedUnicodeEscape():Bool;
	function hasPrecedingLineBreak():Bool;
	function isIdentifier():Bool;
	function isReservedWord():Bool;
	function isUnterminated():Bool;
	function reScanGreaterToken():SyntaxKind;
	function reScanSlashToken():SyntaxKind;
	function reScanAsteriskEqualsToken():SyntaxKind;
	function reScanTemplateToken(isTaggedTemplate:Bool):SyntaxKind;
	function reScanTemplateHeadOrNoSubstitutionTemplate():SyntaxKind;
	function scanJsxIdentifier():SyntaxKind;
	function scanJsxAttributeValue():SyntaxKind;
	function reScanJsxAttributeValue():SyntaxKind;
	function reScanJsxToken():JsxTokenSyntaxKind;
	function reScanLessThanToken():SyntaxKind;
	function reScanQuestionToken():SyntaxKind;
	function scanJsxToken():JsxTokenSyntaxKind;
	function scanJsDocToken():JSDocSyntaxKind;
	function scan():SyntaxKind;
	function getText():String;
	function setText(text:Null<String>, ?start:Float, ?length:Float):Void;
	function setOnError(onError:Null<ErrorCallback>):Void;
	function setScriptTarget(scriptTarget:ScriptTarget):Void;
	function setLanguageVariant(variant:LanguageVariant):Void;
	function setTextPos(textPos:Float):Void;
	function lookAhead<T>(callback:() -> T):T;
	function scanRange<T>(start:Float, length:Float, callback:() -> T):T;
	function tryScan<T>(callback:() -> T):T;
};