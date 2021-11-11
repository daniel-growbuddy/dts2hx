package typescript;

/**
	A set of edits to make in response to a refactor action, plus an optional
	location where renaming should be invoked from
**/
typedef RefactorEditInfo = {
	var edits : Array<FileTextChanges>;
	@:optional
	var renameFilename : String;
	@:optional
	var renameLocation : Float;
	@:optional
	var commands : Array<InstallPackageAction>;
};