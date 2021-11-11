package typescript;

typedef TupleType = {
	var elementFlags : haxe.ds.ReadOnlyArray<ElementFlags>;
	var minLength : Float;
	var fixedLength : Float;
	var hasRestElement : Bool;
	var combinedFlags : ElementFlags;
	var readonly : Bool;
	@:optional
	var labeledElementDeclarations : haxe.ds.ReadOnlyArray<ts.AnyOf2<ParameterDeclaration, NamedTupleMember>>;
	var typeParameters : Null<Array<TypeParameter>>;
	var outerTypeParameters : Null<Array<TypeParameter>>;
	var localTypeParameters : Null<Array<TypeParameter>>;
	var thisType : Null<TypeParameter>;
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
	var target : GenericType;
	@:optional
	var node : ts.AnyOf3<TypeReferenceNode, ArrayTypeNode, TupleTypeNode>;
	@:optional
	var typeArguments : haxe.ds.ReadOnlyArray<Type_>;
};