package typescript;

typedef DiagnosticRelatedInformation = {
	var category : DiagnosticCategory;
	var code : Float;
	var file : Null<SourceFile>;
	var start : Null<Float>;
	var length : Null<Float>;
	var messageText : ts.AnyOf2<String, DiagnosticMessageChain>;
};