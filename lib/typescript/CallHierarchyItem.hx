package typescript;

typedef CallHierarchyItem = {
	var name : String;
	var kind : ScriptElementKind;
	@:optional
	var kindModifiers : String;
	var file : String;
	var span : TextSpan;
	var selectionSpan : TextSpan;
	@:optional
	var containerName : String;
};