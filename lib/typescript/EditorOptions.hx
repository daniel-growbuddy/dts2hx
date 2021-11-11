package typescript;

typedef EditorOptions = {
	@:optional
	var BaseIndentSize : Float;
	var IndentSize : Float;
	var TabSize : Float;
	var NewLineCharacter : String;
	var ConvertTabsToSpaces : Bool;
	var IndentStyle : IndentStyle;
};