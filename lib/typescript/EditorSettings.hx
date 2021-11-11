package typescript;

typedef EditorSettings = {
	@:optional
	var baseIndentSize : Float;
	@:optional
	var indentSize : Float;
	@:optional
	var tabSize : Float;
	@:optional
	var newLineCharacter : String;
	@:optional
	var convertTabsToSpaces : Bool;
	@:optional
	var indentStyle : IndentStyle;
	@:optional
	var trimTrailingWhitespace : Bool;
};