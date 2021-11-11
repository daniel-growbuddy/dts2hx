package typescript;

typedef PrinterOptions = {
	@:optional
	var removeComments : Bool;
	@:optional
	var newLine : NewLineKind;
	@:optional
	var omitTrailingSemicolon : Bool;
	@:optional
	var noEmitHelpers : Bool;
};