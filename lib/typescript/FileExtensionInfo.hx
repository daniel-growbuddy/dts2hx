package typescript;

typedef FileExtensionInfo = {
	var extension : String;
	var isMixedContent : Bool;
	@:optional
	var scriptKind : ScriptKind;
};