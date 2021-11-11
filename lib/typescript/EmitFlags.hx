package typescript;

@:jsRequire("typescript", "EmitFlags") @:enum extern abstract EmitFlags(Int) from Int to Int {
	var None;
	var SingleLine;
	var AdviseOnEmitNode;
	var NoSubstitution;
	var CapturesThis;
	var NoLeadingSourceMap;
	var NoTrailingSourceMap;
	var NoSourceMap;
	var NoNestedSourceMaps;
	var NoTokenLeadingSourceMaps;
	var NoTokenTrailingSourceMaps;
	var NoTokenSourceMaps;
	var NoLeadingComments;
	var NoTrailingComments;
	var NoComments;
	var NoNestedComments;
	var HelperName;
	var ExportName;
	var LocalName;
	var InternalName;
	var Indented;
	var NoIndentation;
	var AsyncFunctionBody;
	var ReuseTempVariableScope;
	var CustomPrologue;
	var NoHoisting;
	var HasEndOfDeclarationMarker;
	var Iterator;
	var NoAsciiEscaping;
}