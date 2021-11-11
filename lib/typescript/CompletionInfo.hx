package typescript;

typedef CompletionInfo = {
	/**
		Not true for all global completions. This will be true if the enclosing scope matches a few syntax kinds. See `isSnippetScope`.
	**/
	var isGlobalCompletion : Bool;
	var isMemberCompletion : Bool;
	/**
		In the absence of `CompletionEntry["replacementSpan"], the editor may choose whether to use
		this span or its default one. If `CompletionEntry["replacementSpan"]` is defined, that span
		must be used to commit that completion entry.
	**/
	@:optional
	var optionalReplacementSpan : TextSpan;
	/**
		true when the current location also allows for a new identifier
	**/
	var isNewIdentifierLocation : Bool;
	var entries : Array<CompletionEntry>;
};