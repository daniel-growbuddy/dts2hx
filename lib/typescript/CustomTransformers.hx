package typescript;

typedef CustomTransformers = {
	/**
		Custom transformers to evaluate before built-in .js transformations.
	**/
	@:optional
	var before : Array<ts.AnyOf2<CustomTransformerFactory, TransformerFactory<SourceFile>>>;
	/**
		Custom transformers to evaluate after built-in .js transformations.
	**/
	@:optional
	var after : Array<ts.AnyOf2<CustomTransformerFactory, TransformerFactory<SourceFile>>>;
	/**
		Custom transformers to evaluate after built-in .d.ts transformations.
	**/
	@:optional
	var afterDeclarations : Array<ts.AnyOf2<CustomTransformerFactory, TransformerFactory<ts.AnyOf2<SourceFile, Bundle>>>>;
};