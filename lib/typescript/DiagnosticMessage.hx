package typescript;

typedef DiagnosticMessage = {
	var key : String;
	var category : DiagnosticCategory;
	var code : Float;
	var message : String;
	@:optional
	var reportsUnnecessary : { };
	@:optional
	var reportsDeprecated : { };
};