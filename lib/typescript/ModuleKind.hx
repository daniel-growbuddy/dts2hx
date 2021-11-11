package typescript;

@:jsRequire("typescript", "ModuleKind") @:enum extern abstract ModuleKind(Int) from Int to Int {
	var None;
	var CommonJS;
	var AMD;
	var UMD;
	var System;
	var ES2015;
	var ES2020;
	var ESNext;
}