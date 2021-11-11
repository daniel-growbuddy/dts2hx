package typescript;

@:jsRequire("typescript", "OutputFileType") @:enum extern abstract OutputFileType(Int) from Int to Int {
	var JavaScript;
	var SourceMap;
	var Declaration;
}