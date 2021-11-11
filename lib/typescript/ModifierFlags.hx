package typescript;

@:jsRequire("typescript", "ModifierFlags") @:enum extern abstract ModifierFlags(Int) from Int to Int {
	var None;
	var Export;
	var Ambient;
	var Public;
	var Private;
	var Protected;
	var Static;
	var Readonly;
	var Abstract;
	var Async;
	var Default;
	var Const;
	var HasComputedJSDocModifiers;
	var Deprecated;
	var HasComputedFlags;
	var AccessibilityModifier;
	var ParameterPropertyModifier;
	var NonPublicAccessibilityModifier;
	var TypeScriptModifier;
	var ExportDefault;
	var All;
}