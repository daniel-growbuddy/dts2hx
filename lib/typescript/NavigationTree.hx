package typescript;

/**
	Node in a tree of nested declarations in a file.
	The top node is always a script or module node.
**/
typedef NavigationTree = {
	/**
		Name of the declaration, or a short description, e.g. "<class>".
	**/
	var text : String;
	var kind : ScriptElementKind;
	/**
		ScriptElementKindModifier separated by commas, e.g. "public,abstract"
	**/
	var kindModifiers : String;
	/**
		Spans of the nodes that generated this declaration.
		There will be more than one if this is the result of merging.
	**/
	var spans : Array<TextSpan>;
	var nameSpan : Null<TextSpan>;
	/**
		Present if non-empty
	**/
	@:optional
	var childItems : Array<NavigationTree>;
};