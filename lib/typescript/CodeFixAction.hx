package typescript;

typedef CodeFixAction = {
	/**
		Short name to identify the fix, for use by telemetry.
	**/
	var fixName : String;
	/**
		If present, one may call 'getCombinedCodeFix' with this fixId.
		This may be omitted to indicate that the code fix can't be applied in a group.
	**/
	@:optional
	var fixId : { };
	@:optional
	var fixAllDescription : String;
	/**
		Description of the code action to display in the UI of the editor
	**/
	var description : String;
	/**
		Text changes to apply to each file as part of the code action
	**/
	var changes : Array<FileTextChanges>;
	/**
		If the user accepts the code fix, the editor should send the action back in a `applyAction` request.
		This allows the language service to have side effects (e.g. installing dependencies) upon a code fix.
	**/
	@:optional
	var commands : Array<InstallPackageAction>;
};