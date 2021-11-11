package typescript;

typedef DiagnosticWithLocation = {
	var file : SourceFile;
	var start : Float;
	var length : Float;
	/**
		May store more in future. For now, this will simply be `true` to indicate when a diagnostic is an unused-identifier diagnostic.
	**/
	@:optional
	var reportsUnnecessary : { };
	@:optional
	var reportsDeprecated : { };
	@:optional
	var source : String;
	@:optional
	var relatedInformation : Array<DiagnosticRelatedInformation>;
	var category : DiagnosticCategory;
	var code : Float;
	var messageText : ts.AnyOf2<String, DiagnosticMessageChain>;
};