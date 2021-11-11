package typescript;

typedef CompletionEntryDetails = {
	var name : String;
	var kind : ScriptElementKind;
	var kindModifiers : String;
	var displayParts : Array<SymbolDisplayPart>;
	@:optional
	var documentation : Array<SymbolDisplayPart>;
	@:optional
	var tags : Array<JSDocTagInfo>;
	@:optional
	var codeActions : Array<CodeAction>;
	@:optional
	var source : Array<SymbolDisplayPart>;
};