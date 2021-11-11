package typescript;

@:jsRequire("typescript", "TokenFlags") @:enum extern abstract TokenFlags(Int) from Int to Int {
	var None;
	var Scientific;
	var Octal;
	var HexSpecifier;
	var BinarySpecifier;
	var OctalSpecifier;
}