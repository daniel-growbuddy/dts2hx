package ts.html;
extern typedef ResponseInit = {
	@:optional
	var headers : ts.AnyOf3<ts.lib.IHeaders, std.Array<std.Array<String>>, Any>;
	@:optional
	var status : Float;
	@:optional
	var statusText : String;
};