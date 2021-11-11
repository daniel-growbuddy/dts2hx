package typescript;

@:jsRequire("typescript", "ClassificationTypeNames") @:enum extern abstract ClassificationTypeNames(String) from String to String {
	var comment;
	var identifier;
	var keyword;
	var numericLiteral;
	var bigintLiteral;
	@:native("operator")
	var operator_;
	var stringLiteral;
	var whiteSpace;
	var text;
	var punctuation;
	var className;
	var enumName;
	var interfaceName;
	var moduleName;
	var typeParameterName;
	var typeAliasName;
	var parameterName;
	var docCommentTagName;
	var jsxOpenTagName;
	var jsxCloseTagName;
	var jsxSelfClosingTagName;
	var jsxAttribute;
	var jsxText;
	var jsxAttributeStringLiteralValue;
}