package typescript;

/**
	A function that transforms a node.
**/
typedef Transformer<T> = (node:T) -> T;