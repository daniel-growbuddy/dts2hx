package typescript;

@:jsRequire("typescript", "DiagnosticCategory") @:enum extern abstract DiagnosticCategory(Int) from Int to Int {
	var Warning;
	var Error;
	var Suggestion;
	var Message;
}