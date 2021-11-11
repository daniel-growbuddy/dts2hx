package typescript;

typedef SignatureHelpParameter = {
	var name : String;
	var documentation : Array<SymbolDisplayPart>;
	var displayParts : Array<SymbolDisplayPart>;
	var isOptional : Bool;
};