package typescript;

/**
	Represents a single signature to show in signature help.
	The id is used for subsequent calls into the language service to ask questions about the
	signature help item in the context of any documents that have been updated.  i.e. after
	an edit has happened, while signature help is still active, the host can ask important
	questions like 'what parameter is the user currently contained within?'.
**/
typedef SignatureHelpItem = {
	var isVariadic : Bool;
	var prefixDisplayParts : Array<SymbolDisplayPart>;
	var suffixDisplayParts : Array<SymbolDisplayPart>;
	var separatorDisplayParts : Array<SymbolDisplayPart>;
	var parameters : Array<SignatureHelpParameter>;
	var documentation : Array<SymbolDisplayPart>;
	var tags : Array<JSDocTagInfo>;
};