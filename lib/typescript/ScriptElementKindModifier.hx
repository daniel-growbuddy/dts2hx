package typescript;

@:jsRequire("typescript", "ScriptElementKindModifier") @:enum extern abstract ScriptElementKindModifier(String) from String to String {
	var none;
	var publicMemberModifier;
	var privateMemberModifier;
	var protectedMemberModifier;
	var exportedModifier;
	var ambientModifier;
	var staticModifier;
	var abstractModifier;
	var optionalModifier;
	var deprecatedModifier;
	var dtsModifier;
	var tsModifier;
	var tsxModifier;
	var jsModifier;
	var jsxModifier;
	var jsonModifier;
}