package typescript;

typedef SelectionRange = {
	var textSpan : TextSpan;
	@:optional
	var parent : SelectionRange;
};