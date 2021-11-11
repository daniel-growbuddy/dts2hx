package typescript;

/**
	Navigation bar interface designed for visual studio's dual-column layout.
	This does not form a proper tree.
	The navbar is returned as a list of top-level items, each of which has a list of child items.
	Child items always have an empty array for their `childItems`.
**/
typedef NavigationBarItem = {
	var text : String;
	var kind : ScriptElementKind;
	var kindModifiers : String;
	var spans : Array<TextSpan>;
	var childItems : Array<NavigationBarItem>;
	var indent : Float;
	var bolded : Bool;
	var grayed : Bool;
};