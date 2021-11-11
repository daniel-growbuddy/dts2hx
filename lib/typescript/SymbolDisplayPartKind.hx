package typescript;

@:jsRequire("typescript", "SymbolDisplayPartKind") @:enum extern abstract SymbolDisplayPartKind(Int) from Int to Int {
	var aliasName;
	var className;
	var enumName;
	var fieldName;
	var interfaceName;
	var keyword;
	var lineBreak;
	var numericLiteral;
	var stringLiteral;
	var localName;
	var methodName;
	var moduleName;
	@:native("operator")
	var operator_;
	var parameterName;
	var propertyName;
	var punctuation;
	var space;
	var text;
	var typeParameterName;
	var enumMemberName;
	var functionName;
	var regularExpressionLiteral;
}