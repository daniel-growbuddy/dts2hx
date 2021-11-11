package typescript;

/**
	Signals that the user manually requested signature help.
	The language service will unconditionally attempt to provide a result.
**/
typedef SignatureHelpInvokedReason = {
	var kind : String;
	@:optional
	var triggerCharacter : Any;
};