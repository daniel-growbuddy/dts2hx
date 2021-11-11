package typescript;

@:jsRequire("typescript", "SymbolFormatFlags") @:enum extern abstract SymbolFormatFlags(Int) from Int to Int {
	var None;
	var WriteTypeParametersOrArguments;
	var UseOnlyExternalAliasing;
	var AllowAnyNodeKind;
	var UseAliasDefinedOutsideCurrentScope;
}