package typescript;

typedef UserPreferences = {
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