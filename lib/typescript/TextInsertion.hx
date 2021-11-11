package typescript;

typedef TextInsertion = {
	var newText : String;
	/**
		The position in newText the caret should point to after the insertion.
	**/
	var caretOffset : Float;
};