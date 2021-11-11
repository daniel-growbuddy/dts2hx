package typescript;

typedef LanguageService = {
	/**
		This is used as a part of restarting the language service.
	**/
	function cleanupSemanticCache():Void;
	/**
		Gets errors indicating invalid syntax in a file.
		
		In English, "this cdeo have, erorrs" is syntactically invalid because it has typos,
		grammatical errors, and misplaced punctuation. Likewise, examples of syntax
		errors in TypeScript are missing parentheses in an `if` statement, mismatched
		curly braces, and using a reserved keyword as a variable name.
		
		These diagnostics are inexpensive to compute and don't require knowledge of
		other files. Note that a non-empty result increases the likelihood of false positives
		from `getSemanticDiagnostics`.
		
		While these represent the majority of syntax-related diagnostics, there are some
		that require the type system, which will be present in `getSemanticDiagnostics`.
	**/
	function getSyntacticDiagnostics(fileName:String):Array<DiagnosticWithLocation>;
	/**
		Gets warnings or errors indicating type system issues in a given file.
		Requesting semantic diagnostics may start up the type system and
		run deferred work, so the first call may take longer than subsequent calls.
		
		Unlike the other get*Diagnostics functions, these diagnostics can potentially not
		include a reference to a source file. Specifically, the first time this is called,
		it will return global diagnostics with no associated location.
		
		To contrast the differences between semantic and syntactic diagnostics, consider the
		sentence: "The sun is green." is syntactically correct; those are real English words with
		correct sentence structure. However, it is semantically invalid, because it is not true.
	**/
	function getSemanticDiagnostics(fileName:String):Array<Diagnostic>;
	/**
		Gets suggestion diagnostics for a specific file. These diagnostics tend to
		proactively suggest refactors, as opposed to diagnostics that indicate
		potentially incorrect runtime behavior.
	**/
	function getSuggestionDiagnostics(fileName:String):Array<DiagnosticWithLocation>;
	/**
		Gets global diagnostics related to the program configuration and compiler options.
	**/
	function getCompilerOptionsDiagnostics():Array<Diagnostic>;
	@:overload(function(fileName:String, span:TextSpan, format:SemanticClassificationFormat):ts.AnyOf2<Array<ClassifiedSpan>, Array<ClassifiedSpan2020>> { })
	function getSyntacticClassifications(fileName:String, span:TextSpan):Array<ClassifiedSpan>;
	@:overload(function(fileName:String, span:TextSpan, format:SemanticClassificationFormat):ts.AnyOf2<Array<ClassifiedSpan>, Array<ClassifiedSpan2020>> { })
	function getSemanticClassifications(fileName:String, span:TextSpan):Array<ClassifiedSpan>;
	/**
		Encoded as triples of [start, length, ClassificationType].
	**/
	function getEncodedSyntacticClassifications(fileName:String, span:TextSpan):Classifications;
	/**
		Gets semantic highlights information for a particular file. Has two formats, an older
		version used by VS and a format used by VS Code.
	**/
	function getEncodedSemanticClassifications(fileName:String, span:TextSpan, ?format:SemanticClassificationFormat):Classifications;
	/**
		Gets completion entries at a particular position in a file.
	**/
	function getCompletionsAtPosition(fileName:String, position:Float, options:Null<GetCompletionsAtPositionOptions>):Null<WithMetadata<CompletionInfo>>;
	/**
		Gets the extended details for a completion entry retrieved from `getCompletionsAtPosition`.
	**/
	function getCompletionEntryDetails(fileName:String, position:Float, entryName:String, formatOptions:Null<ts.AnyOf2<FormatCodeSettings, FormatCodeOptions>>, source:Null<String>, preferences:Null<UserPreferences>):Null<CompletionEntryDetails>;
	function getCompletionEntrySymbol(fileName:String, position:Float, name:String, source:Null<String>):Null<Symbol>;
	/**
		Gets semantic information about the identifier at a particular position in a
		file. Quick info is what you typically see when you hover in an editor.
	**/
	function getQuickInfoAtPosition(fileName:String, position:Float):Null<QuickInfo>;
	function getNameOrDottedNameSpan(fileName:String, startPos:Float, endPos:Float):Null<TextSpan>;
	function getBreakpointStatementAtPosition(fileName:String, position:Float):Null<TextSpan>;
	function getSignatureHelpItems(fileName:String, position:Float, options:Null<SignatureHelpItemsOptions>):Null<SignatureHelpItems>;
	function getRenameInfo(fileName:String, position:Float, ?options:RenameInfoOptions):RenameInfo;
	function findRenameLocations(fileName:String, position:Float, findInStrings:Bool, findInComments:Bool, ?providePrefixAndSuffixTextForRename:Bool):Null<haxe.ds.ReadOnlyArray<RenameLocation>>;
	function getSmartSelectionRange(fileName:String, position:Float):SelectionRange;
	function getDefinitionAtPosition(fileName:String, position:Float):Null<haxe.ds.ReadOnlyArray<DefinitionInfo>>;
	function getDefinitionAndBoundSpan(fileName:String, position:Float):Null<DefinitionInfoAndBoundSpan>;
	function getTypeDefinitionAtPosition(fileName:String, position:Float):Null<haxe.ds.ReadOnlyArray<DefinitionInfo>>;
	function getImplementationAtPosition(fileName:String, position:Float):Null<haxe.ds.ReadOnlyArray<ImplementationLocation>>;
	function getReferencesAtPosition(fileName:String, position:Float):Null<Array<ReferenceEntry>>;
	function findReferences(fileName:String, position:Float):Null<Array<ReferencedSymbol>>;
	function getDocumentHighlights(fileName:String, position:Float, filesToSearch:Array<String>):Null<Array<DocumentHighlights>>;
	function getOccurrencesAtPosition(fileName:String, position:Float):Null<haxe.ds.ReadOnlyArray<ReferenceEntry>>;
	function getNavigateToItems(searchValue:String, ?maxResultCount:Float, ?fileName:String, ?excludeDtsFiles:Bool):Array<NavigateToItem>;
	function getNavigationBarItems(fileName:String):Array<NavigationBarItem>;
	function getNavigationTree(fileName:String):NavigationTree;
	function prepareCallHierarchy(fileName:String, position:Float):Null<ts.AnyOf2<CallHierarchyItem, Array<CallHierarchyItem>>>;
	function provideCallHierarchyIncomingCalls(fileName:String, position:Float):Array<CallHierarchyIncomingCall>;
	function provideCallHierarchyOutgoingCalls(fileName:String, position:Float):Array<CallHierarchyOutgoingCall>;
	function getOutliningSpans(fileName:String):Array<OutliningSpan>;
	function getTodoComments(fileName:String, descriptors:Array<TodoCommentDescriptor>):Array<TodoComment>;
	function getBraceMatchingAtPosition(fileName:String, position:Float):Array<TextSpan>;
	function getIndentationAtPosition(fileName:String, position:Float, options:ts.AnyOf2<EditorSettings, EditorOptions>):Float;
	function getFormattingEditsForRange(fileName:String, start:Float, end:Float, options:ts.AnyOf2<FormatCodeSettings, FormatCodeOptions>):Array<TextChange>;
	function getFormattingEditsForDocument(fileName:String, options:ts.AnyOf2<FormatCodeSettings, FormatCodeOptions>):Array<TextChange>;
	function getFormattingEditsAfterKeystroke(fileName:String, position:Float, key:String, options:ts.AnyOf2<FormatCodeSettings, FormatCodeOptions>):Array<TextChange>;
	function getDocCommentTemplateAtPosition(fileName:String, position:Float):Null<TextInsertion>;
	function isValidBraceCompletionAtPosition(fileName:String, position:Float, openingBrace:Float):Bool;
	/**
		This will return a defined result if the position is after the `>` of the opening tag, or somewhere in the text, of a JSXElement with no closing tag.
		Editors should call this after `>` is typed.
	**/
	function getJsxClosingTagAtPosition(fileName:String, position:Float):Null<JsxClosingTagInfo>;
	function getSpanOfEnclosingComment(fileName:String, position:Float, onlyMultiLine:Bool):Null<TextSpan>;
	@:optional
	function toLineColumnOffset(fileName:String, position:Float):LineAndCharacter;
	function getCodeFixesAtPosition(fileName:String, start:Float, end:Float, errorCodes:haxe.ds.ReadOnlyArray<Float>, formatOptions:FormatCodeSettings, preferences:UserPreferences):haxe.ds.ReadOnlyArray<CodeFixAction>;
	function getCombinedCodeFix(scope:CombinedCodeFixScope, fixId:{ }, formatOptions:FormatCodeSettings, preferences:UserPreferences):CombinedCodeActions;
	@:overload(function(action:Array<InstallPackageAction>, ?formatSettings:FormatCodeSettings):js.lib.Promise<Array<ApplyCodeActionCommandResult>> { })
	@:overload(function(action:ts.AnyOf2<InstallPackageAction, Array<InstallPackageAction>>, ?formatSettings:FormatCodeSettings):js.lib.Promise<ts.AnyOf2<ApplyCodeActionCommandResult, Array<ApplyCodeActionCommandResult>>> { })
	@:overload(function(fileName:String, action:InstallPackageAction):js.lib.Promise<ApplyCodeActionCommandResult> { })
	@:overload(function(fileName:String, action:Array<InstallPackageAction>):js.lib.Promise<Array<ApplyCodeActionCommandResult>> { })
	@:overload(function(fileName:String, action:ts.AnyOf2<InstallPackageAction, Array<InstallPackageAction>>):js.lib.Promise<ts.AnyOf2<ApplyCodeActionCommandResult, Array<ApplyCodeActionCommandResult>>> { })
	function applyCodeActionCommand(action:InstallPackageAction, ?formatSettings:FormatCodeSettings):js.lib.Promise<ApplyCodeActionCommandResult>;
	function getApplicableRefactors(fileName:String, positionOrRange:ts.AnyOf2<Float, TextRange>, preferences:Null<UserPreferences>, ?triggerReason:RefactorTriggerReason):Array<ApplicableRefactorInfo>;
	function getEditsForRefactor(fileName:String, formatOptions:FormatCodeSettings, positionOrRange:ts.AnyOf2<Float, TextRange>, refactorName:String, actionName:String, preferences:Null<UserPreferences>):Null<RefactorEditInfo>;
	function organizeImports(scope:CombinedCodeFixScope, formatOptions:FormatCodeSettings, preferences:Null<UserPreferences>):haxe.ds.ReadOnlyArray<FileTextChanges>;
	function getEditsForFileRename(oldFilePath:String, newFilePath:String, formatOptions:FormatCodeSettings, preferences:Null<UserPreferences>):haxe.ds.ReadOnlyArray<FileTextChanges>;
	function getEmitOutput(fileName:String, ?emitOnlyDtsFiles:Bool, ?forceDtsEmit:Bool):EmitOutput;
	function getProgram():Null<Program>;
	function toggleLineComment(fileName:String, textRange:TextRange):Array<TextChange>;
	function toggleMultilineComment(fileName:String, textRange:TextRange):Array<TextChange>;
	function commentSelection(fileName:String, textRange:TextRange):Array<TextChange>;
	function uncommentSelection(fileName:String, textRange:TextRange):Array<TextChange>;
	function dispose():Void;
};