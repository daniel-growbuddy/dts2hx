package typescript;

typedef NavigateToItem = {
	var name : String;
	var kind : ScriptElementKind;
	var kindModifiers : String;
	var matchKind : String;
	var isCaseSensitive : Bool;
	var fileName : String;
	var textSpan : TextSpan;
	var containerName : String;
	var containerKind : ScriptElementKind;
};