package typescript;

@:jsRequire("typescript", "NodeBuilderFlags") @:enum extern abstract NodeBuilderFlags(Int) from Int to Int {
	var None;
	var NoTruncation;
	var WriteArrayAsGenericType;
	var GenerateNamesForShadowedTypeParams;
	var UseStructuralFallback;
	var ForbidIndexedAccessSymbolReferences;
	var WriteTypeArgumentsOfSignature;
	var UseFullyQualifiedType;
	var UseOnlyExternalAliasing;
	var SuppressAnyReturnType;
	var WriteTypeParametersInQualifiedName;
	var MultilineObjectLiterals;
	var WriteClassExpressionAsTypeLiteral;
	var UseTypeOfFunction;
	var OmitParameterModifiers;
	var UseAliasDefinedOutsideCurrentScope;
	var UseSingleQuotesForStringLiteralType;
	var NoTypeReduction;
	var NoUndefinedOptionalParameterType;
	var AllowThisInObjectLiteral;
	var AllowQualifedNameInPlaceOfIdentifier;
	var AllowAnonymousIdentifier;
	var AllowEmptyUnionOrIntersection;
	var AllowEmptyTuple;
	var AllowUniqueESSymbolType;
	var AllowEmptyIndexInfoType;
	var AllowNodeModulesRelativePaths;
	var IgnoreErrors;
	var InObjectTypeLiteral;
	var InTypeAlias;
	var InInitialEntityName;
	var InReverseMappedType;
}