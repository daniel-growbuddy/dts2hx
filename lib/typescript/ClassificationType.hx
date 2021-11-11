package typescript;

@:jsRequire("typescript", "ClassificationType") @:enum extern abstract ClassificationType(Int) from Int to Int {
	var comment;
	var identifier;
	var keyword;
	var numericLiteral;
	@:native("operator")
	var operator_;
	var stringLiteral;
	var regularExpressionLiteral;
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
	var bigintLiteral;
}