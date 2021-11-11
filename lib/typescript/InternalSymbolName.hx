package typescript;

@:jsRequire("typescript", "InternalSymbolName") @:enum extern abstract InternalSymbolName(String) from String to String {
	var Call;
	var Constructor;
	var New;
	var Index;
	var ExportStar;
	var Global;
	var Missing;
	var Type;
	var Object;
	var JSXAttributes;
	var Class;
	var Function;
	var Computed;
	var Resolving;
	var ExportEquals;
	var Default;
	var This;
}