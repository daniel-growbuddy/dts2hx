package typescript;

typedef GetCompletionsAtPositionOptions = {
	/**
		If the editor is asking for completions because a certain character was typed
		(as opposed to when the user explicitly requested them) this should be set.
	**/
	@:optional
	var triggerCharacter : CompletionsTriggerCharacter;
	@:optional
	var includeExternalModuleExports : Bool;
	@:optional
	var includeInsertTextCompletions : Bool;
	@:optional
	final disableSuggestions : Bool;
	@:optional
	final quotePreference : String;
	@:optional
	final includeCompletionsForModuleExports : Bool;
	@:optional
	final includeAutomaticOptionalChainCompletions : Bool;
	@:optional
	final includeCompletionsWithInsertText : Bool;
	@:optional
	final importModuleSpecifierPreference : String;
	/**
		Determines whether we import `foo/index.ts` as "foo", "foo/index", or "foo/index.js"
	**/
	@:optional
	final importModuleSpecifierEnding : String;
	@:optional
	final allowTextChangesInNewFiles : Bool;
	@:optional
	final providePrefixAndSuffixTextForRename : Bool;
	@:optional
	final includePackageJsonAutoImports : String;
	@:optional
	final provideRefactorNotApplicableReason : Bool;
};