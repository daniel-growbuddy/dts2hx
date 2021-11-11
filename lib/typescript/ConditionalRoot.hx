package typescript;

typedef ConditionalRoot = {
	var node : ConditionalTypeNode;
	var checkType : Type_;
	var extendsType : Type_;
	var isDistributive : Bool;
	@:optional
	var inferTypeParameters : Array<TypeParameter>;
	@:optional
	var outerTypeParameters : Array<TypeParameter>;
	@:optional
	var instantiations : Map_<Type_>;
	@:optional
	var aliasSymbol : Symbol;
	@:optional
	var aliasTypeArguments : Array<Type_>;
};