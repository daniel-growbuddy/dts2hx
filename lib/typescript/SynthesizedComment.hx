package typescript;

typedef SynthesizedComment = {
	var text : String;
	var pos : Int;
	var end : Int;
	@:optional
	var hasLeadingNewline : Bool;
	@:optional
	var hasTrailingNewLine : Bool;
	var kind : CommentKind;
};