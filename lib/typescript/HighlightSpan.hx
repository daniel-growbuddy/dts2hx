package typescript;

typedef HighlightSpan = {
	@:optional
	var fileName : String;
	@:optional
	var isInString : Bool;
	var textSpan : TextSpan;
	@:optional
	var contextSpan : TextSpan;
	var kind : HighlightSpanKind;
};