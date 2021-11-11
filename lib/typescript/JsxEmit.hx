package typescript;

@:jsRequire("typescript", "JsxEmit") @:enum extern abstract JsxEmit(Int) from Int to Int {
	var None;
	var Preserve;
	var React;
	var ReactNative;
	var ReactJSX;
	var ReactJSXDev;
}