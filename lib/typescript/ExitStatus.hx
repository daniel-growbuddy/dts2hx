package typescript;

/**
	Return code used by getEmitOutput function to indicate status of the function
**/
@:jsRequire("typescript", "ExitStatus") @:enum extern abstract ExitStatus(Int) from Int to Int {
	var Success;
	var DiagnosticsPresent_OutputsSkipped;
	var DiagnosticsPresent_OutputsGenerated;
	var InvalidProject_OutputsSkipped;
	var ProjectReferenceCycle_OutputsSkipped;
	var ProjectReferenceCycle_OutputsSkupped;
}