package typescript;

typedef FormatCodeOptions = {
	var InsertSpaceAfterCommaDelimiter : Bool;
	var InsertSpaceAfterSemicolonInForStatements : Bool;
	var InsertSpaceBeforeAndAfterBinaryOperators : Bool;
	@:optional
	var InsertSpaceAfterConstructor : Bool;
	var InsertSpaceAfterKeywordsInControlFlowStatements : Bool;
	var InsertSpaceAfterFunctionKeywordForAnonymousFunctions : Bool;
	var InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis : Bool;
	var InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets : Bool;
	@:optional
	var InsertSpaceAfterOpeningAndBeforeClosingNonemptyBraces : Bool;
	var InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces : Bool;
	@:optional
	var InsertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces : Bool;
	@:optional
	var InsertSpaceAfterTypeAssertion : Bool;
	@:optional
	var InsertSpaceBeforeFunctionParenthesis : Bool;
	var PlaceOpenBraceOnNewLineForFunctions : Bool;
	var PlaceOpenBraceOnNewLineForControlBlocks : Bool;
	@:optional
	var insertSpaceBeforeTypeAnnotation : Bool;
	@:optional
	var BaseIndentSize : Float;
	var IndentSize : Float;
	var TabSize : Float;
	var NewLineCharacter : String;
	var ConvertTabsToSpaces : Bool;
	var IndentStyle : IndentStyle;
};