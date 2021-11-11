package typescript;

@:jsRequire("typescript", "SignatureKind") @:enum extern abstract SignatureKind(Int) from Int to Int {
	var Call;
	var Construct;
}