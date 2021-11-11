package typescript;

@:jsRequire("typescript", "TypeFormatFlags") @:enum extern abstract TypeFormatFlags(Int) from Int to Int {
	var None;
	var NoTruncation;
	var WriteArrayAsGenericType;
	var UseStructuralFallback;
	var WriteTypeArgumentsOfSignature;
	var UseFullyQualifiedType;
	var SuppressAnyReturnType;
	var MultilineObjectLiterals;
	var WriteClassExpressionAsTypeLiteral;
	var UseTypeOfFunction;
	var OmitParameterModifiers;
	var UseAliasDefinedOutsideCurrentScope;
	var UseSingleQuotesForStringLiteralType;
	var NoTypeReduction;
	var AllowUniqueESSymbolType;
	var AddUndefined;
	var WriteArrowStyleSignature;
	var InArrayType;
	var InElementType;
	var InFirstTypeArgument;
	var InTypeAlias;
	var WriteOwnNameForAnyLike;
	var NodeBuilderFlagsMask;
}