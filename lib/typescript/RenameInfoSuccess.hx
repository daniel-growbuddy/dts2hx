package typescript;

typedef RenameInfoSuccess = {
	var canRename : Bool;
	/**
		File or directory to rename.
		If set, `getEditsForFileRename` should be called instead of `findRenameLocations`.
	**/
	@:optional
	var fileToRename : String;
	var displayName : String;
	var fullDisplayName : String;
	var kind : ScriptElementKind;
	var kindModifiers : String;
	var triggerSpan : TextSpan;
};