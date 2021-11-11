package typescript;

/**
	A function that is used to initialize and return a `Transformer` callback, which in turn
	will be used to transform one or more nodes.
**/
typedef TransformerFactory<T> = (context:TransformationContext) -> Transformer<T>;