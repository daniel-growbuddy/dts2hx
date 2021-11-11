package typescript;

@:jsRequire("typescript", "ModuleResolutionKind") @:enum extern abstract ModuleResolutionKind(Int) from Int to Int {
	var Classic;
	var NodeJs;
}