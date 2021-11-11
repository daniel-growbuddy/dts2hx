package typescript;

typedef QuickInfo = {
	var kind : ScriptElementKind;
	var kindModifiers : String;
	var textSpan : TextSpan;
	@:optional
	var displayParts : Array<SymbolDisplayPart>;
	@:optional
	var documentation : Array<SymbolDisplayPart>;
	@:optional
	var tags : Array<JSDocTagInfo>;
};