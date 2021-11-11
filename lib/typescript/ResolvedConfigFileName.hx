package typescript;

/**
	Branded string for keeping track of when we've turned an ambiguous path
	specified like "./blah" to an absolute path to an actual
	tsconfig file, e.g. "/root/blah/tsconfig.json"
**/
typedef ResolvedConfigFileName = Dynamic;