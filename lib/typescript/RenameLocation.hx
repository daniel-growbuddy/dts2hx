package typescript;

typedef RenameLocation = {
	@:optional
	final prefixText : String;
	@:optional
	final suffixText : String;
	var textSpan : TextSpan;
	var fileName : String;
	/**
		If the span represents a location that was remapped (e.g. via a .d.ts.map file),
		then the original filename and span will be specified here
	**/
	@:optional
	var originalTextSpan : TextSpan;
	@:optional
	var originalFileName : String;
	/**
		If DocumentSpan.textSpan is the span for name of the declaration,
		then this is the span for relevant declaration
	**/
	@:optional
	var contextSpan : TextSpan;
	@:optional
	var originalContextSpan : TextSpan;
};