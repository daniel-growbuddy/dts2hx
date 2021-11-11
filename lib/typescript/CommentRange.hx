package typescript;

typedef CommentRange = {
	@:optional
	var hasTrailingNewLine : Bool;
	var kind : CommentKind;
	var pos : Float;
	var end : Float;
};