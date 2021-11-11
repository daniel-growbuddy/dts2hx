package typescript;

typedef TypeChecker = {
	function getTypeOfSymbolAtLocation(symbol:Symbol, node:Node):Type_;
	function getDeclaredTypeOfSymbol(symbol:Symbol):Type_;
	function getPropertiesOfType(type:Type_):Array<Symbol>;
	function getPropertyOfType(type:Type_, propertyName:String):Null<Symbol>;
	function getPrivateIdentifierPropertyOfType(leftType:Type_, name:String, location:Node):Null<Symbol>;
	function getIndexInfoOfType(type:Type_, kind:IndexKind):Null<IndexInfo>;
	function getSignaturesOfType(type:Type_, kind:SignatureKind):haxe.ds.ReadOnlyArray<Signature>;
	function getIndexTypeOfType(type:Type_, kind:IndexKind):Null<Type_>;
	function getBaseTypes(type:InterfaceType):Array<BaseType>;
	function getBaseTypeOfLiteralType(type:Type_):Type_;
	function getWidenedType(type:Type_):Type_;
	function getReturnTypeOfSignature(signature:Signature):Type_;
	function getNullableType(type:Type_, flags:TypeFlags):Type_;
	function getNonNullableType(type:Type_):Type_;
	function getTypeArguments(type:TypeReference):haxe.ds.ReadOnlyArray<Type_>;
	/**
		Note that the resulting nodes cannot be checked.
	**/
	function typeToTypeNode(type:Type_, enclosingDeclaration:Null<Node>, flags:Null<NodeBuilderFlags>):Null<TypeNode>;
	/**
		Note that the resulting nodes cannot be checked.
	**/
	function signatureToSignatureDeclaration(signature:Signature, kind:SyntaxKind, enclosingDeclaration:Null<Node>, flags:Null<NodeBuilderFlags>):Null<ts.AnyOf14<FunctionDeclaration & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, MethodDeclaration & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, GetAccessorDeclaration & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, SetAccessorDeclaration & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, ConstructorDeclaration & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, FunctionExpression & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, ArrowFunction & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, CallSignatureDeclaration & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, ConstructSignatureDeclaration & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, MethodSignature & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, IndexSignatureDeclaration & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, FunctionTypeNode & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, ConstructorTypeNode & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}, JSDocFunctionType & {
		@:optional
		var typeArguments : NodeArray<TypeNode>;
	}>>;
	/**
		Note that the resulting nodes cannot be checked.
	**/
	function indexInfoToIndexSignatureDeclaration(indexInfo:IndexInfo, kind:IndexKind, enclosingDeclaration:Null<Node>, flags:Null<NodeBuilderFlags>):Null<IndexSignatureDeclaration>;
	/**
		Note that the resulting nodes cannot be checked.
	**/
	function symbolToEntityName(symbol:Symbol, meaning:SymbolFlags, enclosingDeclaration:Null<Node>, flags:Null<NodeBuilderFlags>):Null<EntityName>;
	/**
		Note that the resulting nodes cannot be checked.
	**/
	function symbolToExpression(symbol:Symbol, meaning:SymbolFlags, enclosingDeclaration:Null<Node>, flags:Null<NodeBuilderFlags>):Null<Expression>;
	/**
		Note that the resulting nodes cannot be checked.
	**/
	function symbolToTypeParameterDeclarations(symbol:Symbol, enclosingDeclaration:Null<Node>, flags:Null<NodeBuilderFlags>):Null<NodeArray<TypeParameterDeclaration>>;
	/**
		Note that the resulting nodes cannot be checked.
	**/
	function symbolToParameterDeclaration(symbol:Symbol, enclosingDeclaration:Null<Node>, flags:Null<NodeBuilderFlags>):Null<ParameterDeclaration>;
	/**
		Note that the resulting nodes cannot be checked.
	**/
	function typeParameterToDeclaration(parameter:TypeParameter, enclosingDeclaration:Null<Node>, flags:Null<NodeBuilderFlags>):Null<TypeParameterDeclaration>;
	function getSymbolsInScope(location:Node, meaning:SymbolFlags):Array<Symbol>;
	function getSymbolAtLocation(node:Node):Null<Symbol>;
	function getSymbolsOfParameterPropertyDeclaration(parameter:ParameterDeclaration, parameterName:String):Array<Symbol>;
	/**
		The function returns the value (local variable) symbol of an identifier in the short-hand property assignment.
		This is necessary as an identifier in short-hand property assignment can contains two meaning: property name and property value.
	**/
	function getShorthandAssignmentValueSymbol(location:Node):Null<Symbol>;
	function getExportSpecifierLocalTargetSymbol(location:ts.AnyOf2<Identifier, ExportSpecifier>):Null<Symbol>;
	/**
		If a symbol is a local symbol with an associated exported symbol, returns the exported symbol.
		Otherwise returns its input.
		For example, at `export type T = number;`:
		     - `getSymbolAtLocation` at the location `T` will return the exported symbol for `T`.
		     - But the result of `getSymbolsInScope` will contain the *local* symbol for `T`, not the exported symbol.
		     - Calling `getExportSymbolOfSymbol` on that local symbol will return the exported symbol.
	**/
	function getExportSymbolOfSymbol(symbol:Symbol):Symbol;
	function getPropertySymbolOfDestructuringAssignment(location:Identifier):Null<Symbol>;
	function getTypeOfAssignmentPattern(pattern:AssignmentPattern):Type_;
	function getTypeAtLocation(node:Node):Type_;
	function getTypeFromTypeNode(node:TypeNode):Type_;
	function signatureToString(signature:Signature, ?enclosingDeclaration:Node, ?flags:TypeFormatFlags, ?kind:SignatureKind):String;
	function typeToString(type:Type_, ?enclosingDeclaration:Node, ?flags:TypeFormatFlags):String;
	function symbolToString(symbol:Symbol, ?enclosingDeclaration:Node, ?meaning:SymbolFlags, ?flags:SymbolFormatFlags):String;
	function typePredicateToString(predicate:TypePredicate, ?enclosingDeclaration:Node, ?flags:TypeFormatFlags):String;
	function getFullyQualifiedName(symbol:Symbol):String;
	function getAugmentedPropertiesOfType(type:Type_):Array<Symbol>;
	function getRootSymbols(symbol:Symbol):haxe.ds.ReadOnlyArray<Symbol>;
	function getSymbolOfExpando(node:Node, allowDeclaration:Bool):Null<Symbol>;
	function getContextualType(node:Expression):Null<Type_>;
	/**
		returns unknownSignature in the case of an error.
		returns undefined if the node is not valid.
	**/
	function getResolvedSignature(node:CallLikeExpression, ?candidatesOutArray:Array<Signature>, ?argumentCount:Float):Null<Signature>;
	function getSignatureFromDeclaration(declaration:SignatureDeclaration):Null<Signature>;
	function isImplementationOfOverload(node:SignatureDeclaration):Null<Bool>;
	function isUndefinedSymbol(symbol:Symbol):Bool;
	function isArgumentsSymbol(symbol:Symbol):Bool;
	function isUnknownSymbol(symbol:Symbol):Bool;
	function getConstantValue(node:ts.AnyOf3<ElementAccessExpression, PropertyAccessExpression, EnumMember>):Null<ts.AnyOf2<String, Float>>;
	function isValidPropertyAccess(node:ts.AnyOf3<PropertyAccessExpression, QualifiedName, ImportTypeNode>, propertyName:String):Bool;
	/**
		Follow all aliases to get the original symbol.
	**/
	function getAliasedSymbol(symbol:Symbol):Symbol;
	function getExportsOfModule(moduleSymbol:Symbol):Array<Symbol>;
	function getJsxIntrinsicTagNamesAt(location:Node):Array<Symbol>;
	function isOptionalParameter(node:ParameterDeclaration):Bool;
	function getAmbientModules():Array<Symbol>;
	function tryGetMemberInModuleExports(memberName:String, moduleSymbol:Symbol):Null<Symbol>;
	function getApparentType(type:Type_):Type_;
	function getBaseConstraintOfType(type:Type_):Null<Type_>;
	function getDefaultFromTypeParameter(type:Type_):Null<Type_>;
	/**
		Depending on the operation performed, it may be appropriate to throw away the checker
		if the cancellation token is triggered. Typically, if it is used for error checking
		and the operation is cancelled, then it should be discarded, otherwise it is safe to keep.
	**/
	function runWithCancellationToken<T>(token:CancellationToken, cb:(checker:TypeChecker) -> T):T;
};