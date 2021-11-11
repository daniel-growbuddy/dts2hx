package typescript;

@:jsRequire("typescript", "SemicolonPreference") @:enum extern abstract SemicolonPreference(String) from String to String {
	var Ignore;
	var Insert;
	var Remove;
}