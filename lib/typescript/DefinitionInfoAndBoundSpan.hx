package typescript;

typedef DefinitionInfoAndBoundSpan = {
	@:optional
	var definitions : haxe.ds.ReadOnlyArray<DefinitionInfo>;
	var textSpan : TextSpan;
};