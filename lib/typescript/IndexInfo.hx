package typescript;

typedef IndexInfo = {
	var type : Type_;
	var isReadonly : Bool;
	@:optional
	var declaration : IndexSignatureDeclaration;
};