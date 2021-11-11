package typescript;

/**
	Type references (ObjectFlags.Reference). When a class or interface has type parameters or
	a "this" type, references to the class or interface are made using type references. The
	typeArguments property specifies the types to substitute for the type parameters of the
	class or interface and optionally includes an extra element that specifies the type to
	substitute for "this" in the resulting instantiation. When no extra argument is present,
	the type reference itself is substituted for "this". The typeArguments property is undefined
	if the class or interface has no type parameters and the reference isn't specifying an
	explicit "this" argument.
**/
typedef TypeReference = {
	var target : GenericType;
	@:optional
	var node : ts.AnyOf3<TypeReferenceNode, ArrayTypeNode, TupleTypeNode>;
	@:optional
	var typeArguments : haxe.ds.ReadOnlyArray<Type_>;
	var objectFlags : ObjectFlags;
	var flags : TypeFlags;
	var symbol : Symbol;
	@:optional
	var pattern : BindingOrAssignmentPattern;
	@:optional
	var aliasSymbol : Symbol;
	@:optional
	var aliasTypeArguments : haxe.ds.ReadOnlyArray<Type_>;
	function getFlags():TypeFlags;
	function getSymbol():Null<Symbol>;
	function getProperties():Array<Symbol>;
	function getProperty(propertyName:String):Null<Symbol>;
	function getApparentProperties():Array<Symbol>;
	function getCallSignatures():haxe.ds.ReadOnlyArray<Signature>;
	function getConstructSignatures():haxe.ds.ReadOnlyArray<Signature>;
	function getStringIndexType():Null<Type_>;
	function getNumberIndexType():Null<Type_>;
	function getBaseTypes():Null<Array<BaseType>>;
	function getNonNullableType():Type_;
	function getConstraint():Null<Type_>;
	function getDefault():Null<Type_>;
	function isUnion():Bool;
	function isIntersection():Bool;
	function isUnionOrIntersection():Bool;
	function isLiteral():Bool;
	function isStringLiteral():Bool;
	function isNumberLiteral():Bool;
	function isTypeParameter():Bool;
	function isClassOrInterface():Bool;
	function isClass():Bool;
};