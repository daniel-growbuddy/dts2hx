package typescript;

/**
	A function that accepts and possibly transforms a node.
**/
typedef Visitor = (node:Node) -> VisitResult<Node>;