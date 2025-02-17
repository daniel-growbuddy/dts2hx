package typescript;

/**
	A linked list of formatted diagnostic messages to be used as part of a multiline message.
	It is built from the bottom up, leaving the head to be the "main" diagnostic.
	While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
	the difference is that messages are all preformatted in DMC.
**/
typedef DiagnosticMessageChain = {
	var messageText : String;
	var category : DiagnosticCategory;
	var code : Float;
	@:optional
	var next : Array<DiagnosticMessageChain>;
};