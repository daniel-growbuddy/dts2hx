package typescript;

typedef FormatCodeSettings = {
	@:optional
	final insertSpaceAfterCommaDelimiter : Bool;
	@:optional
	final insertSpaceAfterSemicolonInForStatements : Bool;
	@:optional
	final insertSpaceBeforeAndAfterBinaryOperators : Bool;
	@:optional
	final insertSpaceAfterConstructor : Bool;
	@:optional
	final insertSpaceAfterKeywordsInControlFlowStatements : Bool;
	@:optional
	final insertSpaceAfterFunctionKeywordForAnonymousFunctions : Bool;
	@:optional
	final insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis : Bool;
	@:optional
	final insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets : Bool;
	@:optional
	final insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces : Bool;
	@:optional
	final insertSpaceAfterOpeningAndBeforeClosingEmptyBraces : Bool;
	@:optional
	final insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces : Bool;
	@:optional
	final insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces : Bool;
	@:optional
	final insertSpaceAfterTypeAssertion : Bool;
	@:optional
	final insertSpaceBeforeFunctionParenthesis : Bool;
	@:optional
	final placeOpenBraceOnNewLineForFunctions : Bool;
	@:optional
	final placeOpenBraceOnNewLineForControlBlocks : Bool;
	@:optional
	final insertSpaceBeforeTypeAnnotation : Bool;
	@:optional
	final indentMultiLineObjectLiteralBeginningOnBlankLine : Bool;
	@:optional
	final semicolons : SemicolonPreference;
	@:optional
	var baseIndentSize : Float;
	@:optional
	var indentSize : Float;
	@:optional
	var tabSize : Float;
	@:optional
	var newLineCharacter : String;
	@:optional
	var convertTabsToSpaces : Bool;
	@:optional
	var indentStyle : IndentStyle;
	@:optional
	var trimTrailingWhitespace : Bool;
};