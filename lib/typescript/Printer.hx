package typescript;

typedef Printer = {
	/**
		Print a node and its subtree as-is, without any emit transformations.
	**/
	function printNode(hint:EmitHint, node:Node, sourceFile:SourceFile):String;
	/**
		Prints a list of nodes using the given format flags
	**/
	function printList<T>(format:ListFormat, list:NodeArray<T>, sourceFile:SourceFile):String;
	/**
		Prints a source file as-is, without any emit transformations.
	**/
	function printFile(sourceFile:SourceFile):String;
	/**
		Prints a bundle of source files as-is, without any emit transformations.
	**/
	function printBundle(bundle:Bundle):String;
};