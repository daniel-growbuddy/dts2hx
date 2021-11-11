package typescript;

@:jsRequire("typescript", "EmitHint") @:enum extern abstract EmitHint(Int) from Int to Int {
	var SourceFile;
	var Expression;
	var IdentifierName;
	var MappedTypeParameter;
	var Unspecified;
	var EmbeddedStatement;
	var JsxAttributeValue;
}