@:jsRequire("typescript") @valueModuleOnly extern class Typescript {
	static function getSymbolId(symbol: typescript.Symbol): Float;
	static final versionMajorMinor : String;
	/**
		The version of the TypeScript compiler release
	**/
	static final version : String;
	static function getNodeMajorVersion():Null<Float>;
	static var sys : typescript.System;
	static function tokenToString(t:typescript.SyntaxKind):Null<String>;
	static function getPositionOfLineAndCharacter(sourceFile:typescript.SourceFileLike, line:Float, character:Float):Float;
	static function getLineAndCharacterOfPosition(sourceFile:typescript.SourceFileLike, position:Float):typescript.LineAndCharacter;
	static function isWhiteSpaceLike(ch:Float):Bool;
	/**
		Does not include line breaks. For that, see isWhiteSpaceLike.
	**/
	static function isWhiteSpaceSingleLine(ch:Float):Bool;
	static function isLineBreak(ch:Float):Bool;
	static function couldStartTrivia(text:String, pos:Float):Bool;
	@:overload(function<T, U>(text:String, pos:Float, cb:(pos:Float, end:Float, kind:typescript.CommentKind, hasTrailingNewLine:Bool, state:T) -> U, state:T):Null<U> { })
	static function forEachLeadingCommentRange<U>(text:String, pos:Float, cb:(pos:Float, end:Float, kind:typescript.CommentKind, hasTrailingNewLine:Bool) -> U):Null<U>;
	@:overload(function<T, U>(text:String, pos:Float, cb:(pos:Float, end:Float, kind:typescript.CommentKind, hasTrailingNewLine:Bool, state:T) -> U, state:T):Null<U> { })
	static function forEachTrailingCommentRange<U>(text:String, pos:Float, cb:(pos:Float, end:Float, kind:typescript.CommentKind, hasTrailingNewLine:Bool) -> U):Null<U>;
	static function reduceEachLeadingCommentRange<T, U>(text:String, pos:Float, cb:(pos:Float, end:Float, kind:typescript.CommentKind, hasTrailingNewLine:Bool, state:T, memo:U) -> U, state:T, initial:U):Null<U>;
	static function reduceEachTrailingCommentRange<T, U>(text:String, pos:Float, cb:(pos:Float, end:Float, kind:typescript.CommentKind, hasTrailingNewLine:Bool, state:T, memo:U) -> U, state:T, initial:U):Null<U>;
	static function getLeadingCommentRanges(text:String, pos:Float):Null<Array<typescript.CommentRange>>;
	static function getTrailingCommentRanges(text:String, pos:Float):Null<Array<typescript.CommentRange>>;
	/**
		Optionally, get the shebang
	**/
	static function getShebang(text:String):Null<String>;
	static function isIdentifierStart(ch:Float, languageVersion:Null<typescript.ScriptTarget>):Bool;
	static function isIdentifierPart(ch:Float, languageVersion:Null<typescript.ScriptTarget>, ?identifierVariant:typescript.LanguageVariant):Bool;
	static function createScanner(languageVersion:typescript.ScriptTarget, skipTrivia:Bool, ?languageVariant:typescript.LanguageVariant, ?textInitial:String, ?onError:typescript.ErrorCallback, ?start:Float, ?length:Float):typescript.Scanner;
	static function isExternalModuleNameRelative(moduleName:String):Bool;
	static function sortAndDeduplicateDiagnostics<T>(diagnostics:haxe.ds.ReadOnlyArray<T>):typescript.SortedReadonlyArray<T>;
	static function getDefaultLibFileName(options:typescript.CompilerOptions):String;
	static function textSpanEnd(span:typescript.TextSpan):Float;
	static function textSpanIsEmpty(span:typescript.TextSpan):Bool;
	static function textSpanContainsPosition(span:typescript.TextSpan, position:Float):Bool;
	static function textSpanContainsTextSpan(span:typescript.TextSpan, other:typescript.TextSpan):Bool;
	static function textSpanOverlapsWith(span:typescript.TextSpan, other:typescript.TextSpan):Bool;
	static function textSpanOverlap(span1:typescript.TextSpan, span2:typescript.TextSpan):Null<typescript.TextSpan>;
	static function textSpanIntersectsWithTextSpan(span:typescript.TextSpan, other:typescript.TextSpan):Bool;
	static function textSpanIntersectsWith(span:typescript.TextSpan, start:Float, length:Float):Bool;
	static function decodedTextSpanIntersectsWith(start1:Float, length1:Float, start2:Float, length2:Float):Bool;
	static function textSpanIntersectsWithPosition(span:typescript.TextSpan, position:Float):Bool;
	static function textSpanIntersection(span1:typescript.TextSpan, span2:typescript.TextSpan):Null<typescript.TextSpan>;
	static function createTextSpan(start:Float, length:Float):typescript.TextSpan;
	static function createTextSpanFromBounds(start:Float, end:Float):typescript.TextSpan;
	static function textChangeRangeNewSpan(range:typescript.TextChangeRange):typescript.TextSpan;
	static function textChangeRangeIsUnchanged(range:typescript.TextChangeRange):Bool;
	static function createTextChangeRange(span:typescript.TextSpan, newLength:Float):typescript.TextChangeRange;
	/**
		Called to merge all the changes that occurred across several versions of a script snapshot
		into a single change.  i.e. if a user keeps making successive edits to a script we will
		have a text change from V1 to V2, V2 to V3, ..., Vn.
		
		This function will then merge those changes into a single change range valid between V1 and
		Vn.
	**/
	static function collapseTextChangeRangesAcrossMultipleVersions(changes:haxe.ds.ReadOnlyArray<typescript.TextChangeRange>):typescript.TextChangeRange;
	static function getTypeParameterOwner(d:typescript.Declaration):Null<typescript.Declaration>;
	static function isParameterPropertyDeclaration(node:typescript.Node, parent:typescript.Node):Bool;
	static function isEmptyBindingPattern(node:typescript.BindingName):Bool;
	static function isEmptyBindingElement(node:typescript.BindingElement):Bool;
	static function walkUpBindingElementsAndPatterns(binding:typescript.BindingElement):ts.AnyOf2<typescript.VariableDeclaration, typescript.ParameterDeclaration>;
	static function getCombinedModifierFlags(node:typescript.Declaration):typescript.ModifierFlags;
	static function getCombinedNodeFlags(node:typescript.Node):typescript.NodeFlags;
	/**
		Checks to see if the locale is in the appropriate format,
		and if it is, attempts to set the appropriate language.
	**/
	static function validateLocaleAndSetLanguage(locale:String, sys:{ function getExecutingFilePath():String; function resolvePath(path:String):String; function fileExists(fileName:String):Bool; function readFile(fileName:String):Null<String>; }, ?errors:typescript.Push<typescript.Diagnostic>):Void;
	@:overload(function<T>(node:typescript.Node, nodeTest:(node:typescript.Node) -> Bool):T { })
	@:overload(function(node:Null<typescript.Node>):Null<typescript.Node> { })
	@:overload(function<T>(node:Null<typescript.Node>, nodeTest:(node:Null<typescript.Node>) -> Bool):Null<T> { })
	static function getOriginalNode(node:typescript.Node):typescript.Node;
	/**
		Iterates through the parent chain of a node and performs the callback on each parent until the callback
		returns a truthy value, then returns that value.
		If no such value is found, it applies the callback until the parent pointer is undefined or the callback returns "quit"
		At that point findAncestor returns undefined.
	**/
	@:overload(function(node:Null<typescript.Node>, callback:(element:typescript.Node) -> ts.AnyOf2<Bool, String>):Null<typescript.Node> { })
	static function findAncestor<T>(node:Null<typescript.Node>, callback:(element:typescript.Node) -> Bool):Null<T>;
	/**
		Gets a value indicating whether a node originated in the parse tree.
	**/
	static function isParseTreeNode(node:typescript.Node):Bool;
	/**
		Gets the original parse tree node for a node.
		
		Gets the original parse tree node for a node.
	**/
	@:overload(function<T>(node:Null<T>, ?nodeTest:(node:typescript.Node) -> Bool):Null<T> { })
	static function getParseTreeNode(node:Null<typescript.Node>):Null<typescript.Node>;
	/**
		Add an extra underscore to identifiers that start with two underscores to avoid issues with magic names like '__proto__'
	**/
	static function escapeLeadingUnderscores(identifier:String):typescript.__String;
	/**
		Remove extra underscore from escaped identifier text content.
	**/
	static function unescapeLeadingUnderscores(identifier:typescript.__String):String;
	static function idText(identifierOrPrivateName:ts.AnyOf2<typescript.Identifier, typescript.PrivateIdentifier>):String;
	static function symbolName(symbol:typescript.Symbol):String;
	static function getNameOfJSDocTypedef(declaration:typescript.JSDocTypedefTag):Null<ts.AnyOf2<typescript.Identifier, typescript.PrivateIdentifier>>;
	static function getNameOfDeclaration(declaration:ts.AnyOf2<typescript.Declaration, typescript.Expression>):Null<typescript.DeclarationName>;
	/**
		Gets the JSDoc parameter tags for the node if present.
	**/
	static function getJSDocParameterTags(param:typescript.ParameterDeclaration):haxe.ds.ReadOnlyArray<typescript.JSDocParameterTag>;
	/**
		Gets the JSDoc type parameter tags for the node if present.
	**/
	static function getJSDocTypeParameterTags(param:typescript.TypeParameterDeclaration):haxe.ds.ReadOnlyArray<typescript.JSDocTemplateTag>;
	/**
		Return true if the node has JSDoc parameter tags.
	**/
	static function hasJSDocParameterTags(node:typescript.SignatureDeclaration):Bool;
	/**
		Gets the JSDoc augments tag for the node if present
	**/
	static function getJSDocAugmentsTag(node:typescript.Node):Null<typescript.JSDocAugmentsTag>;
	/**
		Gets the JSDoc implements tags for the node if present
	**/
	static function getJSDocImplementsTags(node:typescript.Node):haxe.ds.ReadOnlyArray<typescript.JSDocImplementsTag>;
	/**
		Gets the JSDoc class tag for the node if present
	**/
	static function getJSDocClassTag(node:typescript.Node):Null<typescript.JSDocClassTag>;
	/**
		Gets the JSDoc public tag for the node if present
	**/
	static function getJSDocPublicTag(node:typescript.Node):Null<typescript.JSDocPublicTag>;
	/**
		Gets the JSDoc private tag for the node if present
	**/
	static function getJSDocPrivateTag(node:typescript.Node):Null<typescript.JSDocPrivateTag>;
	/**
		Gets the JSDoc protected tag for the node if present
	**/
	static function getJSDocProtectedTag(node:typescript.Node):Null<typescript.JSDocProtectedTag>;
	/**
		Gets the JSDoc protected tag for the node if present
	**/
	static function getJSDocReadonlyTag(node:typescript.Node):Null<typescript.JSDocReadonlyTag>;
	/**
		Gets the JSDoc deprecated tag for the node if present
	**/
	static function getJSDocDeprecatedTag(node:typescript.Node):Null<typescript.JSDocDeprecatedTag>;
	/**
		Gets the JSDoc enum tag for the node if present
	**/
	static function getJSDocEnumTag(node:typescript.Node):Null<typescript.JSDocEnumTag>;
	/**
		Gets the JSDoc this tag for the node if present
	**/
	static function getJSDocThisTag(node:typescript.Node):Null<typescript.JSDocThisTag>;
	/**
		Gets the JSDoc return tag for the node if present
	**/
	static function getJSDocReturnTag(node:typescript.Node):Null<typescript.JSDocReturnTag>;
	/**
		Gets the JSDoc template tag for the node if present
	**/
	static function getJSDocTemplateTag(node:typescript.Node):Null<typescript.JSDocTemplateTag>;
	/**
		Gets the JSDoc type tag for the node if present and valid
	**/
	static function getJSDocTypeTag(node:typescript.Node):Null<typescript.JSDocTypeTag>;
	/**
		Gets the type node for the node if provided via JSDoc.
	**/
	static function getJSDocType(node:typescript.Node):Null<typescript.TypeNode>;
	/**
		Gets the return type node for the node if provided via JSDoc return tag or type tag.
	**/
	static function getJSDocReturnType(node:typescript.Node):Null<typescript.TypeNode>;
	/**
		Get all JSDoc tags related to a node, including those on parent nodes.
	**/
	static function getJSDocTags(node:typescript.Node):haxe.ds.ReadOnlyArray<typescript.JSDocTag>;
	/**
		Gets all JSDoc tags that match a specified predicate
	**/
	static function getAllJSDocTags<T>(node:typescript.Node, predicate:(tag:typescript.JSDocTag) -> Bool):haxe.ds.ReadOnlyArray<T>;
	/**
		Gets all JSDoc tags of a specified kind
	**/
	static function getAllJSDocTagsOfKind(node:typescript.Node, kind:typescript.SyntaxKind):haxe.ds.ReadOnlyArray<typescript.JSDocTag>;
	/**
		Gets the effective type parameters. If the node was parsed in a
		JavaScript file, gets the type parameters from the `@template` tag from JSDoc.
	**/
	static function getEffectiveTypeParameterDeclarations(node:typescript.DeclarationWithTypeParameters):haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>;
	static function getEffectiveConstraintOfTypeParameter(node:typescript.TypeParameterDeclaration):Null<typescript.TypeNode>;
	static function isIdentifierOrPrivateIdentifier(node:typescript.Node):Bool;
	static function isPropertyAccessChain(node:typescript.Node):Bool;
	static function isElementAccessChain(node:typescript.Node):Bool;
	static function isCallChain(node:typescript.Node):Bool;
	static function isOptionalChain(node:typescript.Node):Bool;
	static function isNullishCoalesce(node:typescript.Node):Bool;
	static function isConstTypeReference(node:typescript.Node):Bool;
	@:overload(function(node:typescript.Node):typescript.Node { })
	static function skipPartiallyEmittedExpressions(node:typescript.Expression):typescript.Expression;
	static function isNonNullChain(node:typescript.Node):Bool;
	static function isBreakOrContinueStatement(node:typescript.Node):Bool;
	static function isNamedExportBindings(node:typescript.Node):Bool;
	static function isUnparsedTextLike(node:typescript.Node):Bool;
	static function isUnparsedNode(node:typescript.Node):Bool;
	static function isJSDocPropertyLikeTag(node:typescript.Node):Bool;
	/**
		True if node is of some token syntax kind.
		For example, this is true for an IfKeyword but not for an IfStatement.
		Literals are considered tokens, except TemplateLiteral, but does include TemplateHead/Middle/Tail.
	**/
	static function isToken(n:typescript.Node):Bool;
	static function isLiteralExpression(node:typescript.Node):Bool;
	static function isTemplateLiteralToken(node:typescript.Node):Bool;
	static function isTemplateMiddleOrTemplateTail(node:typescript.Node):Bool;
	static function isImportOrExportSpecifier(node:typescript.Node):Bool;
	static function isTypeOnlyImportOrExportDeclaration(node:typescript.Node):Bool;
	static function isStringTextContainingNode(node:typescript.Node):Bool;
	static function isModifier(node:typescript.Node):Bool;
	static function isEntityName(node:typescript.Node):Bool;
	static function isPropertyName(node:typescript.Node):Bool;
	static function isBindingName(node:typescript.Node):Bool;
	static function isFunctionLike(node:typescript.Node):Bool;
	static function isClassElement(node:typescript.Node):Bool;
	static function isClassLike(node:typescript.Node):Bool;
	static function isAccessor(node:typescript.Node):Bool;
	static function isTypeElement(node:typescript.Node):Bool;
	static function isClassOrTypeElement(node:typescript.Node):Bool;
	static function isObjectLiteralElementLike(node:typescript.Node):Bool;
	/**
		Node test that determines whether a node is a valid type node.
		This differs from the `isPartOfTypeNode` function which determines whether a node is *part*
		of a TypeNode.
	**/
	static function isTypeNode(node:typescript.Node):Bool;
	static function isFunctionOrConstructorTypeNode(node:typescript.Node):Bool;
	static function isPropertyAccessOrQualifiedName(node:typescript.Node):Bool;
	static function isCallLikeExpression(node:typescript.Node):Bool;
	static function isCallOrNewExpression(node:typescript.Node):Bool;
	static function isTemplateLiteral(node:typescript.Node):Bool;
	static function isAssertionExpression(node:typescript.Node):Bool;
	@:overload(function(node:typescript.Node, lookInLabeledStatements:Bool):Bool { })
	static function isIterationStatement(node:typescript.Node, lookInLabeledStatements:Bool):Bool;
	static function isJsxOpeningLikeElement(node:typescript.Node):Bool;
	static function isCaseOrDefaultClause(node:typescript.Node):Bool;
	/**
		True if node is of a kind that may contain comment text.
	**/
	static function isJSDocCommentContainingNode(node:typescript.Node):Bool;
	static function isSetAccessor(node:typescript.Node):Bool;
	static function isGetAccessor(node:typescript.Node):Bool;
	/**
		True if has initializer node attached to it.
	**/
	static function hasOnlyExpressionInitializer(node:typescript.Node):Bool;
	static function isObjectLiteralElement(node:typescript.Node):Bool;
	static function isStringLiteralLike(node:typescript.Node):Bool;
	static var unchangedTextChangeRange : typescript.TextChangeRange;
	@:overload(function(inputFile:typescript.InputFiles, type:String, ?stripInternal:Bool):typescript.UnparsedSource { })
	@:overload(function(text:String, mapPath:Null<String>, map:Null<String>):typescript.UnparsedSource { })
	static function createUnparsedSourceFile(text:String):typescript.UnparsedSource;
	@:overload(function(readFileText:(path:String) -> Null<String>, javascriptPath:String, javascriptMapPath:Null<String>, declarationPath:String, declarationMapPath:Null<String>, buildInfoPath:Null<String>):typescript.InputFiles { })
	@:overload(function(javascriptText:String, declarationText:String, javascriptMapPath:Null<String>, javascriptMapText:Null<String>, declarationMapPath:Null<String>, declarationMapText:Null<String>):typescript.InputFiles { })
	static function createInputFiles(javascriptText:String, declarationText:String):typescript.InputFiles;
	/**
		Create an external source map source file reference
	**/
	static function createSourceMapSource(fileName:String, text:String, ?skipTrivia:(pos:Float) -> Float):typescript.SourceMapSource;
	static function setOriginalNode<T>(node:T, original:Null<typescript.Node>):T;
	static final factory : typescript.NodeFactory;
	/**
		Clears any `EmitNode` entries from parse-tree nodes.
	**/
	static function disposeEmitNodes(sourceFile:Null<typescript.SourceFile>):Void;
	/**
		Sets flags that control emit behavior of a node.
	**/
	static function setEmitFlags<T>(node:T, emitFlags:typescript.EmitFlags):T;
	/**
		Gets a custom text range to use when emitting source maps.
	**/
	static function getSourceMapRange(node:typescript.Node):typescript.SourceMapRange;
	/**
		Sets a custom text range to use when emitting source maps.
	**/
	static function setSourceMapRange<T>(node:T, range:Null<typescript.SourceMapRange>):T;
	/**
		Gets the TextRange to use for source maps for a token of a node.
	**/
	static function getTokenSourceMapRange(node:typescript.Node, token:typescript.SyntaxKind):Null<typescript.SourceMapRange>;
	/**
		Sets the TextRange to use for source maps for a token of a node.
	**/
	static function setTokenSourceMapRange<T>(node:T, token:typescript.SyntaxKind, range:Null<typescript.SourceMapRange>):T;
	/**
		Gets a custom text range to use when emitting comments.
	**/
	static function getCommentRange(node:typescript.Node):typescript.TextRange;
	/**
		Sets a custom text range to use when emitting comments.
	**/
	static function setCommentRange<T>(node:T, range:typescript.TextRange):T;
	static function getSyntheticLeadingComments(node:typescript.Node):Null<Array<typescript.SynthesizedComment>>;
	static function setSyntheticLeadingComments<T>(node:T, comments:Null<Array<typescript.SynthesizedComment>>):T;
	static function addSyntheticLeadingComment<T>(node:T, kind:typescript.CommentKind, text:String, ?hasTrailingNewLine:Bool):T;
	static function getSyntheticTrailingComments(node:typescript.Node):Null<Array<typescript.SynthesizedComment>>;
	static function setSyntheticTrailingComments<T>(node:T, comments:Null<Array<typescript.SynthesizedComment>>):T;
	static function addSyntheticTrailingComment<T>(node:T, kind:typescript.CommentKind, text:String, ?hasTrailingNewLine:Bool):T;
	static function moveSyntheticComments<T>(node:T, original:typescript.Node):T;
	/**
		Gets the constant value to emit for an expression representing an enum.
	**/
	static function getConstantValue(node:typescript.AccessExpression):Null<ts.AnyOf2<String, Float>>;
	/**
		Sets the constant value to emit for an expression.
	**/
	static function setConstantValue(node:typescript.AccessExpression, value:ts.AnyOf2<String, Float>):typescript.AccessExpression;
	/**
		Adds an EmitHelper to a node.
	**/
	static function addEmitHelper<T>(node:T, helper:typescript.EmitHelper):T;
	/**
		Add EmitHelpers to a node.
	**/
	static function addEmitHelpers<T>(node:T, helpers:Null<Array<typescript.EmitHelper>>):T;
	/**
		Removes an EmitHelper from a node.
	**/
	static function removeEmitHelper(node:typescript.Node, helper:typescript.EmitHelper):Bool;
	/**
		Gets the EmitHelpers of a node.
	**/
	static function getEmitHelpers(node:typescript.Node):Null<Array<typescript.EmitHelper>>;
	/**
		Moves matching emit helpers from a source node to a target node.
	**/
	static function moveEmitHelpers(source:typescript.Node, target:typescript.Node, predicate:(helper:typescript.EmitHelper) -> Bool):Void;
	static function isNumericLiteral(node:typescript.Node):Bool;
	static function isBigIntLiteral(node:typescript.Node):Bool;
	static function isStringLiteral(node:typescript.Node):Bool;
	static function isJsxText(node:typescript.Node):Bool;
	static function isRegularExpressionLiteral(node:typescript.Node):Bool;
	static function isNoSubstitutionTemplateLiteral(node:typescript.Node):Bool;
	static function isTemplateHead(node:typescript.Node):Bool;
	static function isTemplateMiddle(node:typescript.Node):Bool;
	static function isTemplateTail(node:typescript.Node):Bool;
	static function isIdentifier(node:typescript.Node):Bool;
	static function isQualifiedName(node:typescript.Node):Bool;
	static function isComputedPropertyName(node:typescript.Node):Bool;
	static function isPrivateIdentifier(node:typescript.Node):Bool;
	static function isTypeParameterDeclaration(node:typescript.Node):Bool;
	static function isParameter(node:typescript.Node):Bool;
	static function isDecorator(node:typescript.Node):Bool;
	static function isPropertySignature(node:typescript.Node):Bool;
	static function isPropertyDeclaration(node:typescript.Node):Bool;
	static function isMethodSignature(node:typescript.Node):Bool;
	static function isMethodDeclaration(node:typescript.Node):Bool;
	static function isConstructorDeclaration(node:typescript.Node):Bool;
	static function isGetAccessorDeclaration(node:typescript.Node):Bool;
	static function isSetAccessorDeclaration(node:typescript.Node):Bool;
	static function isCallSignatureDeclaration(node:typescript.Node):Bool;
	static function isConstructSignatureDeclaration(node:typescript.Node):Bool;
	static function isIndexSignatureDeclaration(node:typescript.Node):Bool;
	static function isTypePredicateNode(node:typescript.Node):Bool;
	static function isTypeReferenceNode(node:typescript.Node):Bool;
	static function isFunctionTypeNode(node:typescript.Node):Bool;
	static function isConstructorTypeNode(node:typescript.Node):Bool;
	static function isTypeQueryNode(node:typescript.Node):Bool;
	static function isTypeLiteralNode(node:typescript.Node):Bool;
	static function isArrayTypeNode(node:typescript.Node):Bool;
	static function isTupleTypeNode(node:typescript.Node):Bool;
	static function isNamedTupleMember(node:typescript.Node):Bool;
	static function isOptionalTypeNode(node:typescript.Node):Bool;
	static function isRestTypeNode(node:typescript.Node):Bool;
	static function isUnionTypeNode(node:typescript.Node):Bool;
	static function isIntersectionTypeNode(node:typescript.Node):Bool;
	static function isConditionalTypeNode(node:typescript.Node):Bool;
	static function isInferTypeNode(node:typescript.Node):Bool;
	static function isParenthesizedTypeNode(node:typescript.Node):Bool;
	static function isThisTypeNode(node:typescript.Node):Bool;
	static function isTypeOperatorNode(node:typescript.Node):Bool;
	static function isIndexedAccessTypeNode(node:typescript.Node):Bool;
	static function isMappedTypeNode(node:typescript.Node):Bool;
	static function isLiteralTypeNode(node:typescript.Node):Bool;
	static function isImportTypeNode(node:typescript.Node):Bool;
	static function isTemplateLiteralTypeSpan(node:typescript.Node):Bool;
	static function isTemplateLiteralTypeNode(node:typescript.Node):Bool;
	static function isObjectBindingPattern(node:typescript.Node):Bool;
	static function isArrayBindingPattern(node:typescript.Node):Bool;
	static function isBindingElement(node:typescript.Node):Bool;
	static function isArrayLiteralExpression(node:typescript.Node):Bool;
	static function isObjectLiteralExpression(node:typescript.Node):Bool;
	static function isPropertyAccessExpression(node:typescript.Node):Bool;
	static function isElementAccessExpression(node:typescript.Node):Bool;
	static function isCallExpression(node:typescript.Node):Bool;
	static function isNewExpression(node:typescript.Node):Bool;
	static function isTaggedTemplateExpression(node:typescript.Node):Bool;
	static function isTypeAssertionExpression(node:typescript.Node):Bool;
	static function isParenthesizedExpression(node:typescript.Node):Bool;
	static function isFunctionExpression(node:typescript.Node):Bool;
	static function isArrowFunction(node:typescript.Node):Bool;
	static function isDeleteExpression(node:typescript.Node):Bool;
	static function isTypeOfExpression(node:typescript.Node):Bool;
	static function isVoidExpression(node:typescript.Node):Bool;
	static function isAwaitExpression(node:typescript.Node):Bool;
	static function isPrefixUnaryExpression(node:typescript.Node):Bool;
	static function isPostfixUnaryExpression(node:typescript.Node):Bool;
	static function isBinaryExpression(node:typescript.Node):Bool;
	static function isConditionalExpression(node:typescript.Node):Bool;
	static function isTemplateExpression(node:typescript.Node):Bool;
	static function isYieldExpression(node:typescript.Node):Bool;
	static function isSpreadElement(node:typescript.Node):Bool;
	static function isClassExpression(node:typescript.Node):Bool;
	static function isOmittedExpression(node:typescript.Node):Bool;
	static function isExpressionWithTypeArguments(node:typescript.Node):Bool;
	static function isAsExpression(node:typescript.Node):Bool;
	static function isNonNullExpression(node:typescript.Node):Bool;
	static function isMetaProperty(node:typescript.Node):Bool;
	static function isSyntheticExpression(node:typescript.Node):Bool;
	static function isPartiallyEmittedExpression(node:typescript.Node):Bool;
	static function isCommaListExpression(node:typescript.Node):Bool;
	static function isTemplateSpan(node:typescript.Node):Bool;
	static function isSemicolonClassElement(node:typescript.Node):Bool;
	static function isBlock(node:typescript.Node):Bool;
	static function isVariableStatement(node:typescript.Node):Bool;
	static function isEmptyStatement(node:typescript.Node):Bool;
	static function isExpressionStatement(node:typescript.Node):Bool;
	static function isIfStatement(node:typescript.Node):Bool;
	static function isDoStatement(node:typescript.Node):Bool;
	static function isWhileStatement(node:typescript.Node):Bool;
	static function isForStatement(node:typescript.Node):Bool;
	static function isForInStatement(node:typescript.Node):Bool;
	static function isForOfStatement(node:typescript.Node):Bool;
	static function isContinueStatement(node:typescript.Node):Bool;
	static function isBreakStatement(node:typescript.Node):Bool;
	static function isReturnStatement(node:typescript.Node):Bool;
	static function isWithStatement(node:typescript.Node):Bool;
	static function isSwitchStatement(node:typescript.Node):Bool;
	static function isLabeledStatement(node:typescript.Node):Bool;
	static function isThrowStatement(node:typescript.Node):Bool;
	static function isTryStatement(node:typescript.Node):Bool;
	static function isDebuggerStatement(node:typescript.Node):Bool;
	static function isVariableDeclaration(node:typescript.Node):Bool;
	static function isVariableDeclarationList(node:typescript.Node):Bool;
	static function isFunctionDeclaration(node:typescript.Node):Bool;
	static function isClassDeclaration(node:typescript.Node):Bool;
	static function isInterfaceDeclaration(node:typescript.Node):Bool;
	static function isTypeAliasDeclaration(node:typescript.Node):Bool;
	static function isEnumDeclaration(node:typescript.Node):Bool;
	static function isModuleDeclaration(node:typescript.Node):Bool;
	static function isModuleBlock(node:typescript.Node):Bool;
	static function isCaseBlock(node:typescript.Node):Bool;
	static function isNamespaceExportDeclaration(node:typescript.Node):Bool;
	static function isImportEqualsDeclaration(node:typescript.Node):Bool;
	static function isImportDeclaration(node:typescript.Node):Bool;
	static function isImportClause(node:typescript.Node):Bool;
	static function isNamespaceImport(node:typescript.Node):Bool;
	static function isNamespaceExport(node:typescript.Node):Bool;
	static function isNamedImports(node:typescript.Node):Bool;
	static function isImportSpecifier(node:typescript.Node):Bool;
	static function isExportAssignment(node:typescript.Node):Bool;
	static function isExportDeclaration(node:typescript.Node):Bool;
	static function isNamedExports(node:typescript.Node):Bool;
	static function isExportSpecifier(node:typescript.Node):Bool;
	static function isMissingDeclaration(node:typescript.Node):Bool;
	static function isNotEmittedStatement(node:typescript.Node):Bool;
	static function isExternalModuleReference(node:typescript.Node):Bool;
	static function isJsxElement(node:typescript.Node):Bool;
	static function isJsxSelfClosingElement(node:typescript.Node):Bool;
	static function isJsxOpeningElement(node:typescript.Node):Bool;
	static function isJsxClosingElement(node:typescript.Node):Bool;
	static function isJsxFragment(node:typescript.Node):Bool;
	static function isJsxOpeningFragment(node:typescript.Node):Bool;
	static function isJsxClosingFragment(node:typescript.Node):Bool;
	static function isJsxAttribute(node:typescript.Node):Bool;
	static function isJsxAttributes(node:typescript.Node):Bool;
	static function isJsxSpreadAttribute(node:typescript.Node):Bool;
	static function isJsxExpression(node:typescript.Node):Bool;
	static function isCaseClause(node:typescript.Node):Bool;
	static function isDefaultClause(node:typescript.Node):Bool;
	static function isHeritageClause(node:typescript.Node):Bool;
	static function isCatchClause(node:typescript.Node):Bool;
	static function isPropertyAssignment(node:typescript.Node):Bool;
	static function isShorthandPropertyAssignment(node:typescript.Node):Bool;
	static function isSpreadAssignment(node:typescript.Node):Bool;
	static function isEnumMember(node:typescript.Node):Bool;
	static function isUnparsedPrepend(node:typescript.Node):Bool;
	static function isSourceFile(node:typescript.Node):Bool;
	static function isBundle(node:typescript.Node):Bool;
	static function isUnparsedSource(node:typescript.Node):Bool;
	static function isJSDocTypeExpression(node:typescript.Node):Bool;
	static function isJSDocNameReference(node:typescript.Node):Bool;
	static function isJSDocAllType(node:typescript.Node):Bool;
	static function isJSDocUnknownType(node:typescript.Node):Bool;
	static function isJSDocNullableType(node:typescript.Node):Bool;
	static function isJSDocNonNullableType(node:typescript.Node):Bool;
	static function isJSDocOptionalType(node:typescript.Node):Bool;
	static function isJSDocFunctionType(node:typescript.Node):Bool;
	static function isJSDocVariadicType(node:typescript.Node):Bool;
	static function isJSDocNamepathType(node:typescript.Node):Bool;
	static function isJSDoc(node:typescript.Node):Bool;
	static function isJSDocTypeLiteral(node:typescript.Node):Bool;
	static function isJSDocSignature(node:typescript.Node):Bool;
	static function isJSDocAugmentsTag(node:typescript.Node):Bool;
	static function isJSDocAuthorTag(node:typescript.Node):Bool;
	static function isJSDocClassTag(node:typescript.Node):Bool;
	static function isJSDocCallbackTag(node:typescript.Node):Bool;
	static function isJSDocPublicTag(node:typescript.Node):Bool;
	static function isJSDocPrivateTag(node:typescript.Node):Bool;
	static function isJSDocProtectedTag(node:typescript.Node):Bool;
	static function isJSDocReadonlyTag(node:typescript.Node):Bool;
	static function isJSDocDeprecatedTag(node:typescript.Node):Bool;
	static function isJSDocEnumTag(node:typescript.Node):Bool;
	static function isJSDocParameterTag(node:typescript.Node):Bool;
	static function isJSDocReturnTag(node:typescript.Node):Bool;
	static function isJSDocThisTag(node:typescript.Node):Bool;
	static function isJSDocTypeTag(node:typescript.Node):Bool;
	static function isJSDocTemplateTag(node:typescript.Node):Bool;
	static function isJSDocTypedefTag(node:typescript.Node):Bool;
	static function isJSDocUnknownTag(node:typescript.Node):Bool;
	static function isJSDocPropertyTag(node:typescript.Node):Bool;
	static function isJSDocImplementsTag(node:typescript.Node):Bool;
	static function setTextRange<T>(range:T, location:Null<typescript.TextRange>):T;
	/**
		Invokes a callback for each child of the given node. The 'cbNode' callback is invoked for all child nodes
		stored in properties. If a 'cbNodes' callback is specified, it is invoked for embedded arrays; otherwise,
		embedded arrays are flattened and the 'cbNode' callback is invoked for each element. If a callback returns
		a truthy value, iteration stops and that value is returned. Otherwise, undefined is returned.
	**/
	static function forEachChild<T>(node:typescript.Node, cbNode:(node:typescript.Node) -> Null<T>, ?cbNodes:(nodes:typescript.NodeArray<typescript.Node>) -> Null<T>):Null<T>;
	static function createSourceFile(fileName:String, sourceText:String, languageVersion:typescript.ScriptTarget, ?setParentNodes:Bool, ?scriptKind:typescript.ScriptKind):typescript.SourceFile;
	static function parseIsolatedEntityName(text:String, languageVersion:typescript.ScriptTarget):Null<typescript.EntityName>;
	/**
		Parse json text into SyntaxTree and return node and parse errors if any
	**/
	static function parseJsonText(fileName:String, sourceText:String):typescript.JsonSourceFile;
	static function isExternalModule(file:typescript.SourceFile):Bool;
	static function updateSourceFile(sourceFile:typescript.SourceFile, newText:String, textChangeRange:typescript.TextChangeRange, ?aggressiveChecks:Bool):typescript.SourceFile;
	static function parseCommandLine(commandLine:haxe.ds.ReadOnlyArray<String>, ?readFile:(path:String) -> Null<String>):typescript.ParsedCommandLine;
	/**
		Reads the config file, reports errors if any and exits if the config file cannot be found
	**/
	static function getParsedCommandLineOfConfigFile(configFileName:String, optionsToExtend:typescript.CompilerOptions, host:typescript.ParseConfigFileHost, ?extendedConfigCache:typescript.Map_<typescript.ExtendedConfigCacheEntry>, ?watchOptionsToExtend:typescript.WatchOptions, ?extraFileExtensions:haxe.ds.ReadOnlyArray<typescript.FileExtensionInfo>):Null<typescript.ParsedCommandLine>;
	/**
		Read tsconfig.json file
	**/
	static function readConfigFile(fileName:String, readFile:(path:String) -> Null<String>):{
		@:optional
		var config : Dynamic;
		@:optional
		var error : typescript.Diagnostic;
	};
	/**
		Parse the text of the tsconfig.json file
	**/
	static function parseConfigFileTextToJson(fileName:String, jsonText:String):{
		@:optional
		var config : Dynamic;
		@:optional
		var error : typescript.Diagnostic;
	};
	/**
		Read tsconfig.json file
	**/
	static function readJsonConfigFile(fileName:String, readFile:(path:String) -> Null<String>):typescript.TsConfigSourceFile;
	/**
		Convert the json syntax tree into the json value
	**/
	static function convertToObject(sourceFile:typescript.JsonSourceFile, errors:typescript.Push<typescript.Diagnostic>):Dynamic;
	/**
		Parse the contents of a config file (tsconfig.json).
	**/
	static function parseJsonConfigFileContent(json:Dynamic, host:typescript.ParseConfigHost, basePath:String, ?existingOptions:typescript.CompilerOptions, ?configFileName:String, ?resolutionStack:Array<typescript.Path>, ?extraFileExtensions:haxe.ds.ReadOnlyArray<typescript.FileExtensionInfo>, ?extendedConfigCache:typescript.Map_<typescript.ExtendedConfigCacheEntry>, ?existingWatchOptions:typescript.WatchOptions):typescript.ParsedCommandLine;
	/**
		Parse the contents of a config file (tsconfig.json).
	**/
	static function parseJsonSourceFileConfigFileContent(sourceFile:typescript.TsConfigSourceFile, host:typescript.ParseConfigHost, basePath:String, ?existingOptions:typescript.CompilerOptions, ?configFileName:String, ?resolutionStack:Array<typescript.Path>, ?extraFileExtensions:haxe.ds.ReadOnlyArray<typescript.FileExtensionInfo>, ?extendedConfigCache:typescript.Map_<typescript.ExtendedConfigCacheEntry>, ?existingWatchOptions:typescript.WatchOptions):typescript.ParsedCommandLine;
	static function convertCompilerOptionsFromJson(jsonOptions:Dynamic, basePath:String, ?configFileName:String):{
		var options : typescript.CompilerOptions;
		var errors : Array<typescript.Diagnostic>;
	};
	static function convertTypeAcquisitionFromJson(jsonOptions:Dynamic, basePath:String, ?configFileName:String):{
		var options : typescript.TypeAcquisition;
		var errors : Array<typescript.Diagnostic>;
	};
	static function getEffectiveTypeRoots(options:typescript.CompilerOptions, host:typescript.GetEffectiveTypeRootsHost):Null<Array<String>>;
	static function resolveTypeReferenceDirective(typeReferenceDirectiveName:String, containingFile:Null<String>, options:typescript.CompilerOptions, host:typescript.ModuleResolutionHost, ?redirectedReference:typescript.ResolvedProjectReference):typescript.ResolvedTypeReferenceDirectiveWithFailedLookupLocations;
	/**
		Given a set of options, returns the set of type directive names
		   that should be included for this program automatically.
		This list could either come from the config file,
		   or from enumerating the types root + initial secondary types lookup location.
		More type directives might appear in the program later as a result of loading actual source files;
		   this list is only the set of defaults that are implicitly included.
	**/
	static function getAutomaticTypeDirectiveNames(options:typescript.CompilerOptions, host:typescript.ModuleResolutionHost):Array<String>;
	static function createModuleResolutionCache(currentDirectory:String, getCanonicalFileName:(s:String) -> String, ?options:typescript.CompilerOptions):typescript.ModuleResolutionCache;
	static function resolveModuleNameFromCache(moduleName:String, containingFile:String, cache:typescript.ModuleResolutionCache):Null<typescript.ResolvedModuleWithFailedLookupLocations>;
	static function resolveModuleName(moduleName:String, containingFile:String, compilerOptions:typescript.CompilerOptions, host:typescript.ModuleResolutionHost, ?cache:typescript.ModuleResolutionCache, ?redirectedReference:typescript.ResolvedProjectReference):typescript.ResolvedModuleWithFailedLookupLocations;
	static function nodeModuleNameResolver(moduleName:String, containingFile:String, compilerOptions:typescript.CompilerOptions, host:typescript.ModuleResolutionHost, ?cache:typescript.ModuleResolutionCache, ?redirectedReference:typescript.ResolvedProjectReference):typescript.ResolvedModuleWithFailedLookupLocations;
	static function classicNameResolver(moduleName:String, containingFile:String, compilerOptions:typescript.CompilerOptions, host:typescript.ModuleResolutionHost, ?cache:typescript.NonRelativeModuleNameResolutionCache, ?redirectedReference:typescript.ResolvedProjectReference):typescript.ResolvedModuleWithFailedLookupLocations;
	/**
		Visits a Node using the supplied visitor, possibly returning a new Node in its place.
		
		Visits a Node using the supplied visitor, possibly returning a new Node in its place.
	**/
	@:overload(function<T>(node:Null<T>, visitor:Null<typescript.Visitor>, ?test:(node:typescript.Node) -> Bool, ?lift:(node:typescript.NodeArray<typescript.Node>) -> T):Null<T> { })
	static function visitNode<T>(node:T, visitor:Null<typescript.Visitor>, ?test:(node:typescript.Node) -> Bool, ?lift:(node:typescript.NodeArray<typescript.Node>) -> T):T;
	/**
		Visits a NodeArray using the supplied visitor, possibly returning a new NodeArray in its place.
		
		Visits a NodeArray using the supplied visitor, possibly returning a new NodeArray in its place.
	**/
	@:overload(function<T>(nodes:Null<typescript.NodeArray<T>>, visitor:Null<typescript.Visitor>, ?test:(node:typescript.Node) -> Bool, ?start:Float, ?count:Float):Null<typescript.NodeArray<T>> { })
	static function visitNodes<T>(nodes:typescript.NodeArray<T>, visitor:Null<typescript.Visitor>, ?test:(node:typescript.Node) -> Bool, ?start:Float, ?count:Float):typescript.NodeArray<T>;
	/**
		Starts a new lexical environment and visits a statement list, ending the lexical environment
		and merging hoisted declarations upon completion.
	**/
	static function visitLexicalEnvironment(statements:typescript.NodeArray<typescript.Statement>, visitor:typescript.Visitor, context:typescript.TransformationContext, ?start:Float, ?ensureUseStrict:Bool, ?nodesVisitor:typescript.NodesVisitor):typescript.NodeArray<typescript.Statement>;
	/**
		Starts a new lexical environment and visits a parameter list, suspending the lexical
		environment upon completion.
	**/
	@:overload(function(nodes:Null<typescript.NodeArray<typescript.ParameterDeclaration>>, visitor:typescript.Visitor, context:typescript.TransformationContext, ?nodesVisitor:typescript.NodesVisitor):Null<typescript.NodeArray<typescript.ParameterDeclaration>> { })
	static function visitParameterList(nodes:typescript.NodeArray<typescript.ParameterDeclaration>, visitor:typescript.Visitor, context:typescript.TransformationContext, ?nodesVisitor:typescript.NodesVisitor):typescript.NodeArray<typescript.ParameterDeclaration>;
	/**
		Resumes a suspended lexical environment and visits a function body, ending the lexical
		environment and merging hoisted declarations upon completion.
		
		Resumes a suspended lexical environment and visits a function body, ending the lexical
		environment and merging hoisted declarations upon completion.
		
		Resumes a suspended lexical environment and visits a concise body, ending the lexical
		environment and merging hoisted declarations upon completion.
	**/
	@:overload(function(node:Null<typescript.Block>, visitor:typescript.Visitor, context:typescript.TransformationContext):Null<typescript.Block> { })
	@:overload(function(node:typescript.ConciseBody, visitor:typescript.Visitor, context:typescript.TransformationContext):typescript.ConciseBody { })
	static function visitFunctionBody(node:typescript.Block, visitor:typescript.Visitor, context:typescript.TransformationContext):typescript.Block;
	/**
		Visits each child of a Node using the supplied visitor, possibly returning a new Node of the same kind in its place.
		
		Visits each child of a Node using the supplied visitor, possibly returning a new Node of the same kind in its place.
	**/
	@:overload(function<T>(node:Null<T>, visitor:typescript.Visitor, context:typescript.TransformationContext, ?nodesVisitor:{ /** Visits a NodeArray using the supplied visitor, possibly returning a new NodeArray in its place. **/ @:overload(function<T>(nodes:Null<typescript.NodeArray<T>>, visitor:Null<typescript.Visitor>, ?test:(node:typescript.Node) -> Bool, ?start:Float, ?count:Float):Null<typescript.NodeArray<T>> { }) @:selfCall function call<T>(nodes:typescript.NodeArray<T>, visitor:Null<typescript.Visitor>, ?test:(node:typescript.Node) -> Bool, ?start:Float, ?count:Float):typescript.NodeArray<T>; }, ?tokenVisitor:typescript.Visitor):Null<T> { })
	static function visitEachChild<T>(node:T, visitor:typescript.Visitor, context:typescript.TransformationContext):T;
	static function getTsBuildInfoEmitOutputFilePath(options:typescript.CompilerOptions):Null<String>;
	static function getOutputFileNames(commandLine:typescript.ParsedCommandLine, inputFileName:String, ignoreCase:Bool):haxe.ds.ReadOnlyArray<String>;
	static function createPrinter(?printerOptions:typescript.PrinterOptions, ?handlers:typescript.PrintHandlers):typescript.Printer;
	static function findConfigFile(searchPath:String, fileExists:(fileName:String) -> Bool, ?configName:String):Null<String>;
	static function resolveTripleslashReference(moduleName:String, containingFile:String):String;
	static function createCompilerHost(options:typescript.CompilerOptions, ?setParentNodes:Bool):typescript.CompilerHost;
	static function getPreEmitDiagnostics(program:typescript.Program, ?sourceFile:typescript.SourceFile, ?cancellationToken:typescript.CancellationToken):haxe.ds.ReadOnlyArray<typescript.Diagnostic>;
	static function formatDiagnostics(diagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>, host:typescript.FormatDiagnosticsHost):String;
	static function formatDiagnostic(diagnostic:typescript.Diagnostic, host:typescript.FormatDiagnosticsHost):String;
	static function formatDiagnosticsWithColorAndContext(diagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>, host:typescript.FormatDiagnosticsHost):String;
	static function flattenDiagnosticMessageText(diag:Null<ts.AnyOf2<String, typescript.DiagnosticMessageChain>>, newLine:String, ?indent:Float):String;
	static function getConfigFileParsingDiagnostics(configFileParseResult:typescript.ParsedCommandLine):haxe.ds.ReadOnlyArray<typescript.Diagnostic>;
	/**
		Create a new 'Program' instance. A Program is an immutable collection of 'SourceFile's and a 'CompilerOptions'
		that represent a compilation unit.
		
		Creating a program proceeds from a set of root files, expanding the set of inputs by following imports and
		triple-slash-reference-path directives transitively. '@types' and triple-slash-reference-types are also pulled in.
		
		Create a new 'Program' instance. A Program is an immutable collection of 'SourceFile's and a 'CompilerOptions'
		that represent a compilation unit.
		
		Creating a program proceeds from a set of root files, expanding the set of inputs by following imports and
		triple-slash-reference-path directives transitively. '@types' and triple-slash-reference-types are also pulled in.
	**/
	@:overload(function(rootNames:haxe.ds.ReadOnlyArray<String>, options:typescript.CompilerOptions, ?host:typescript.CompilerHost, ?oldProgram:typescript.Program, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>):typescript.Program { })
	static function createProgram(createProgramOptions:typescript.CreateProgramOptions):typescript.Program;
	/**
		Returns the target config filename of a project reference.
		Note: The file might not exist.
	**/
	@:overload(function(host:typescript.ResolveProjectReferencePathHost, ref:typescript.ProjectReference):typescript.ResolvedConfigFileName { })
	static function resolveProjectReferencePath(ref:typescript.ProjectReference):typescript.ResolvedConfigFileName;
	/**
		Create the builder to manage semantic diagnostics and cache them
	**/
	@:overload(function(rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<typescript.CompilerOptions>, ?host:typescript.CompilerHost, ?oldProgram:typescript.SemanticDiagnosticsBuilderProgram, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>, ?projectReferences:haxe.ds.ReadOnlyArray<typescript.ProjectReference>):typescript.SemanticDiagnosticsBuilderProgram { })
	static function createSemanticDiagnosticsBuilderProgram(newProgram:typescript.Program, host:typescript.BuilderProgramHost, ?oldProgram:typescript.SemanticDiagnosticsBuilderProgram, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>):typescript.SemanticDiagnosticsBuilderProgram;
	/**
		Create the builder that can handle the changes in program and iterate through changed files
		to emit the those files and manage semantic diagnostics cache as well
	**/
	@:overload(function(rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<typescript.CompilerOptions>, ?host:typescript.CompilerHost, ?oldProgram:typescript.EmitAndSemanticDiagnosticsBuilderProgram, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>, ?projectReferences:haxe.ds.ReadOnlyArray<typescript.ProjectReference>):typescript.EmitAndSemanticDiagnosticsBuilderProgram { })
	static function createEmitAndSemanticDiagnosticsBuilderProgram(newProgram:typescript.Program, host:typescript.BuilderProgramHost, ?oldProgram:typescript.EmitAndSemanticDiagnosticsBuilderProgram, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>):typescript.EmitAndSemanticDiagnosticsBuilderProgram;
	/**
		Creates a builder thats just abstraction over program and can be used with watch
	**/
	@:overload(function(rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<typescript.CompilerOptions>, ?host:typescript.CompilerHost, ?oldProgram:typescript.BuilderProgram, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>, ?projectReferences:haxe.ds.ReadOnlyArray<typescript.ProjectReference>):typescript.BuilderProgram { })
	static function createAbstractBuilder(newProgram:typescript.Program, host:typescript.BuilderProgramHost, ?oldProgram:typescript.BuilderProgram, ?configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<typescript.Diagnostic>):typescript.BuilderProgram;
	static function readBuilderProgram(compilerOptions:typescript.CompilerOptions, host:typescript.ReadBuildProgramHost):Null<typescript.EmitAndSemanticDiagnosticsBuilderProgram>;
	static function createIncrementalCompilerHost(options:typescript.CompilerOptions, ?system:typescript.System):typescript.CompilerHost;
	static function createIncrementalProgram<T>(__0:typescript.IncrementalProgramOptions<T>):T;
	/**
		Create the watch compiler host for either configFile or fileNames and its options
	**/
	@:overload(function<T>(rootFiles:Array<String>, options:typescript.CompilerOptions, system:typescript.System, ?createProgram:typescript.CreateProgram<T>, ?reportDiagnostic:typescript.DiagnosticReporter, ?reportWatchStatus:typescript.WatchStatusReporter, ?projectReferences:haxe.ds.ReadOnlyArray<typescript.ProjectReference>, ?watchOptions:typescript.WatchOptions):typescript.WatchCompilerHostOfFilesAndCompilerOptions<T> { })
	static function createWatchCompilerHost<T>(configFileName:String, optionsToExtend:Null<typescript.CompilerOptions>, system:typescript.System, ?createProgram:typescript.CreateProgram<T>, ?reportDiagnostic:typescript.DiagnosticReporter, ?reportWatchStatus:typescript.WatchStatusReporter, ?watchOptionsToExtend:typescript.WatchOptions, ?extraFileExtensions:haxe.ds.ReadOnlyArray<typescript.FileExtensionInfo>):typescript.WatchCompilerHostOfConfigFile<T>;
	/**
		Creates the watch from the host for root files and compiler options
		
		Creates the watch from the host for config file
	**/
	@:overload(function<T>(host:typescript.WatchCompilerHostOfConfigFile<T>):typescript.WatchOfConfigFile<T> { })
	static function createWatchProgram<T>(host:typescript.WatchCompilerHostOfFilesAndCompilerOptions<T>):typescript.WatchOfFilesAndCompilerOptions<T>;
	/**
		Create a function that reports watch status by writing to the system and handles the formating of the diagnostic
	**/
	static function createBuilderStatusReporter(system:typescript.System, ?pretty:Bool):typescript.DiagnosticReporter;
	static function createSolutionBuilderHost<T>(?system:typescript.System, ?createProgram:typescript.CreateProgram<T>, ?reportDiagnostic:typescript.DiagnosticReporter, ?reportSolutionBuilderStatus:typescript.DiagnosticReporter, ?reportErrorSummary:typescript.ReportEmitErrorSummary):typescript.SolutionBuilderHost<T>;
	static function createSolutionBuilderWithWatchHost<T>(?system:typescript.System, ?createProgram:typescript.CreateProgram<T>, ?reportDiagnostic:typescript.DiagnosticReporter, ?reportSolutionBuilderStatus:typescript.DiagnosticReporter, ?reportWatchStatus:typescript.WatchStatusReporter):typescript.SolutionBuilderWithWatchHost<T>;
	static function createSolutionBuilder<T>(host:typescript.SolutionBuilderHost<T>, rootNames:haxe.ds.ReadOnlyArray<String>, defaultOptions:typescript.BuildOptions):typescript.SolutionBuilder<T>;
	static function createSolutionBuilderWithWatch<T>(host:typescript.SolutionBuilderWithWatchHost<T>, rootNames:haxe.ds.ReadOnlyArray<String>, defaultOptions:typescript.BuildOptions, ?baseWatchOptions:typescript.WatchOptions):typescript.SolutionBuilder<T>;
	static function getDefaultFormatCodeSettings(?newLineCharacter:String):typescript.FormatCodeSettings;
	/**
		The classifier is used for syntactic highlighting in editors via the TSServer
	**/
	static function createClassifier():typescript.Classifier;
	static function createDocumentRegistry(?useCaseSensitiveFileNames:Bool, ?currentDirectory:String):typescript.DocumentRegistry;
	static function preProcessFile(sourceText:String, ?readImportFiles:Bool, ?detectJavaScriptImports:Bool):typescript.PreProcessedFileInfo;
	static function transpileModule(input:String, transpileOptions:typescript.TranspileOptions):typescript.TranspileOutput;
	static function transpile(input:String, ?compilerOptions:typescript.CompilerOptions, ?fileName:String, ?diagnostics:Array<typescript.Diagnostic>, ?moduleName:String):String;
	static function toEditorSettings(options:ts.AnyOf2<typescript.EditorSettings, typescript.EditorOptions>):typescript.EditorSettings;
	static function displayPartsToString(displayParts:Null<Array<typescript.SymbolDisplayPart>>):String;
	static function getDefaultCompilerOptions():typescript.CompilerOptions;
	static function getSupportedCodeFixes():Array<String>;
	static function createLanguageServiceSourceFile(fileName:String, scriptSnapshot:typescript.IScriptSnapshot, scriptTarget:typescript.ScriptTarget, version:String, setNodeParents:Bool, ?scriptKind:typescript.ScriptKind):typescript.SourceFile;
	static function updateLanguageServiceSourceFile(sourceFile:typescript.SourceFile, scriptSnapshot:typescript.IScriptSnapshot, version:String, textChangeRange:Null<typescript.TextChangeRange>, ?aggressiveChecks:Bool):typescript.SourceFile;
	static function createLanguageService(host:typescript.LanguageServiceHost, ?documentRegistry:typescript.DocumentRegistry, ?syntaxOnlyOrLanguageServiceMode:ts.AnyOf2<Bool, Int>):typescript.LanguageService;
	/**
		Get the path of the default library files (lib.d.ts) as distributed with the typescript
		node package.
		The functionality is not supported if the ts module is consumed outside of a node module.
	**/
	static function getDefaultLibFilePath(options:typescript.CompilerOptions):String;
	/**
		The version of the language service API
	**/
	static final servicesVersion : String;
	/**
		Transform one or more nodes using the supplied transformers.
	**/
	static function transform<T>(source:ts.AnyOf2<Array<T>, T>, transformers:Array<typescript.TransformerFactory<T>>, ?compilerOptions:typescript.CompilerOptions):typescript.TransformationResult<T>;
	static function createNodeArray<T>(?elements:haxe.ds.ReadOnlyArray<T>, ?hasTrailingComma:Bool):typescript.NodeArray<T>;
	static function createNumericLiteral(value:ts.AnyOf2<String, Float>, ?numericLiteralFlags:typescript.TokenFlags):typescript.NumericLiteral;
	static function createBigIntLiteral(value:ts.AnyOf2<String, typescript.PseudoBigInt>):typescript.BigIntLiteral;
	@:overload(function(text:String, ?isSingleQuote:Bool, ?hasExtendedUnicodeEscape:Bool):typescript.StringLiteral { })
	static function createStringLiteral(text:String, ?isSingleQuote:Bool):typescript.StringLiteral;
	static function createStringLiteralFromNode(sourceNode:ts.AnyOf4<typescript.Identifier, typescript.StringLiteral, typescript.NoSubstitutionTemplateLiteral, typescript.NumericLiteral>, ?isSingleQuote:Bool):typescript.StringLiteral;
	static function createRegularExpressionLiteral(text:String):typescript.RegularExpressionLiteral;
	static function createLoopVariable():typescript.Identifier;
	static function createUniqueName(text:String, ?flags:typescript.GeneratedIdentifierFlags):typescript.Identifier;
	static function createPrivateIdentifier(text:String):typescript.PrivateIdentifier;
	static function createSuper():typescript.SuperExpression;
	static function createThis():typescript.ThisExpression;
	static function createNull():typescript.NullLiteral;
	static function createTrue():typescript.TrueLiteral;
	static function createFalse():typescript.FalseLiteral;
	static function createModifier<T>(kind:T):typescript.ModifierToken<T>;
	static function createModifiersFromModifierFlags(flags:typescript.ModifierFlags):Array<typescript.Modifier>;
	static function createQualifiedName(left:typescript.EntityName, right:ts.AnyOf2<String, typescript.Identifier>):typescript.QualifiedName;
	static function updateQualifiedName(node:typescript.QualifiedName, left:typescript.EntityName, right:typescript.Identifier):typescript.QualifiedName;
	static function createComputedPropertyName(expression:typescript.Expression):typescript.ComputedPropertyName;
	static function updateComputedPropertyName(node:typescript.ComputedPropertyName, expression:typescript.Expression):typescript.ComputedPropertyName;
	static function createTypeParameterDeclaration(name:ts.AnyOf2<String, typescript.Identifier>, ?constraint:typescript.TypeNode, ?defaultType:typescript.TypeNode):typescript.TypeParameterDeclaration;
	static function updateTypeParameterDeclaration(node:typescript.TypeParameterDeclaration, name:typescript.Identifier, constraint:Null<typescript.TypeNode>, defaultType:Null<typescript.TypeNode>):typescript.TypeParameterDeclaration;
	static function createParameter(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, dotDotDotToken:Null<typescript.DotDotDotToken>, name:ts.AnyOf4<String, typescript.Identifier, typescript.ObjectBindingPattern, typescript.ArrayBindingPattern>, ?questionToken:typescript.QuestionToken, ?type:typescript.TypeNode, ?initializer:typescript.Expression):typescript.ParameterDeclaration;
	static function updateParameter(node:typescript.ParameterDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, dotDotDotToken:Null<typescript.DotDotDotToken>, name:ts.AnyOf4<String, typescript.Identifier, typescript.ObjectBindingPattern, typescript.ArrayBindingPattern>, questionToken:Null<typescript.QuestionToken>, type:Null<typescript.TypeNode>, initializer:Null<typescript.Expression>):typescript.ParameterDeclaration;
	static function createDecorator(expression:typescript.Expression):typescript.Decorator;
	static function updateDecorator(node:typescript.Decorator, expression:typescript.Expression):typescript.Decorator;
	static function createProperty(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, questionOrExclamationToken:Null<ts.AnyOf2<typescript.QuestionToken, typescript.ExclamationToken>>, type:Null<typescript.TypeNode>, initializer:Null<typescript.Expression>):typescript.PropertyDeclaration;
	static function updateProperty(node:typescript.PropertyDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, questionOrExclamationToken:Null<ts.AnyOf2<typescript.QuestionToken, typescript.ExclamationToken>>, type:Null<typescript.TypeNode>, initializer:Null<typescript.Expression>):typescript.PropertyDeclaration;
	static function createMethod(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, asteriskToken:Null<typescript.AsteriskToken>, name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, questionToken:Null<typescript.QuestionToken>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:Null<typescript.Block>):typescript.MethodDeclaration;
	static function updateMethod(node:typescript.MethodDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, asteriskToken:Null<typescript.AsteriskToken>, name:typescript.PropertyName, questionToken:Null<typescript.QuestionToken>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:Null<typescript.Block>):typescript.MethodDeclaration;
	static function createConstructor(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, body:Null<typescript.Block>):typescript.ConstructorDeclaration;
	static function updateConstructor(node:typescript.ConstructorDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, body:Null<typescript.Block>):typescript.ConstructorDeclaration;
	static function createGetAccessor(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:Null<typescript.Block>):typescript.GetAccessorDeclaration;
	static function updateGetAccessor(node:typescript.GetAccessorDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.PropertyName, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:Null<typescript.Block>):typescript.GetAccessorDeclaration;
	static function createSetAccessor(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, body:Null<typescript.Block>):typescript.SetAccessorDeclaration;
	static function updateSetAccessor(node:typescript.SetAccessorDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.PropertyName, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, body:Null<typescript.Block>):typescript.SetAccessorDeclaration;
	static function createCallSignature(typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>):typescript.CallSignatureDeclaration;
	static function updateCallSignature(node:typescript.CallSignatureDeclaration, typeParameters:Null<typescript.NodeArray<typescript.TypeParameterDeclaration>>, parameters:typescript.NodeArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>):typescript.CallSignatureDeclaration;
	static function createConstructSignature(typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>):typescript.ConstructSignatureDeclaration;
	static function updateConstructSignature(node:typescript.ConstructSignatureDeclaration, typeParameters:Null<typescript.NodeArray<typescript.TypeParameterDeclaration>>, parameters:typescript.NodeArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>):typescript.ConstructSignatureDeclaration;
	static function updateIndexSignature(node:typescript.IndexSignatureDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:typescript.TypeNode):typescript.IndexSignatureDeclaration;
	static function createKeywordTypeNode<TKind>(kind:TKind):typescript.KeywordTypeNode<TKind>;
	static function createTypePredicateNodeWithModifier(assertsModifier:Null<typescript.AssertsKeyword>, parameterName:ts.AnyOf3<String, typescript.Identifier, typescript.ThisTypeNode>, type:Null<typescript.TypeNode>):typescript.TypePredicateNode;
	static function updateTypePredicateNodeWithModifier(node:typescript.TypePredicateNode, assertsModifier:Null<typescript.AssertsKeyword>, parameterName:ts.AnyOf2<typescript.Identifier, typescript.ThisTypeNode>, type:Null<typescript.TypeNode>):typescript.TypePredicateNode;
	static function createTypeReferenceNode(typeName:ts.AnyOf3<String, typescript.Identifier, typescript.QualifiedName>, ?typeArguments:haxe.ds.ReadOnlyArray<typescript.TypeNode>):typescript.TypeReferenceNode;
	static function updateTypeReferenceNode(node:typescript.TypeReferenceNode, typeName:typescript.EntityName, typeArguments:Null<typescript.NodeArray<typescript.TypeNode>>):typescript.TypeReferenceNode;
	static function createFunctionTypeNode(typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:typescript.TypeNode):typescript.FunctionTypeNode;
	static function updateFunctionTypeNode(node:typescript.FunctionTypeNode, typeParameters:Null<typescript.NodeArray<typescript.TypeParameterDeclaration>>, parameters:typescript.NodeArray<typescript.ParameterDeclaration>, type:typescript.TypeNode):typescript.FunctionTypeNode;
	static function createConstructorTypeNode(typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:typescript.TypeNode):typescript.ConstructorTypeNode;
	static function updateConstructorTypeNode(node:typescript.ConstructorTypeNode, typeParameters:Null<typescript.NodeArray<typescript.TypeParameterDeclaration>>, parameters:typescript.NodeArray<typescript.ParameterDeclaration>, type:typescript.TypeNode):typescript.ConstructorTypeNode;
	static function createTypeQueryNode(exprName:typescript.EntityName):typescript.TypeQueryNode;
	static function updateTypeQueryNode(node:typescript.TypeQueryNode, exprName:typescript.EntityName):typescript.TypeQueryNode;
	static function createTypeLiteralNode(members:Null<haxe.ds.ReadOnlyArray<typescript.TypeElement>>):typescript.TypeLiteralNode;
	static function updateTypeLiteralNode(node:typescript.TypeLiteralNode, members:typescript.NodeArray<typescript.TypeElement>):typescript.TypeLiteralNode;
	static function createArrayTypeNode(elementType:typescript.TypeNode):typescript.ArrayTypeNode;
	static function updateArrayTypeNode(node:typescript.ArrayTypeNode, elementType:typescript.TypeNode):typescript.ArrayTypeNode;
	static function createTupleTypeNode(elements:haxe.ds.ReadOnlyArray<ts.AnyOf2<typescript.TypeNode, typescript.NamedTupleMember>>):typescript.TupleTypeNode;
	static function updateTupleTypeNode(node:typescript.TupleTypeNode, elements:haxe.ds.ReadOnlyArray<ts.AnyOf2<typescript.TypeNode, typescript.NamedTupleMember>>):typescript.TupleTypeNode;
	static function createOptionalTypeNode(type:typescript.TypeNode):typescript.OptionalTypeNode;
	static function updateOptionalTypeNode(node:typescript.OptionalTypeNode, type:typescript.TypeNode):typescript.OptionalTypeNode;
	static function createRestTypeNode(type:typescript.TypeNode):typescript.RestTypeNode;
	static function updateRestTypeNode(node:typescript.RestTypeNode, type:typescript.TypeNode):typescript.RestTypeNode;
	static function createUnionTypeNode(types:haxe.ds.ReadOnlyArray<typescript.TypeNode>):typescript.UnionTypeNode;
	static function updateUnionTypeNode(node:typescript.UnionTypeNode, types:typescript.NodeArray<typescript.TypeNode>):typescript.UnionTypeNode;
	static function createIntersectionTypeNode(types:haxe.ds.ReadOnlyArray<typescript.TypeNode>):typescript.IntersectionTypeNode;
	static function updateIntersectionTypeNode(node:typescript.IntersectionTypeNode, types:typescript.NodeArray<typescript.TypeNode>):typescript.IntersectionTypeNode;
	static function createConditionalTypeNode(checkType:typescript.TypeNode, extendsType:typescript.TypeNode, trueType:typescript.TypeNode, falseType:typescript.TypeNode):typescript.ConditionalTypeNode;
	static function updateConditionalTypeNode(node:typescript.ConditionalTypeNode, checkType:typescript.TypeNode, extendsType:typescript.TypeNode, trueType:typescript.TypeNode, falseType:typescript.TypeNode):typescript.ConditionalTypeNode;
	static function createInferTypeNode(typeParameter:typescript.TypeParameterDeclaration):typescript.InferTypeNode;
	static function updateInferTypeNode(node:typescript.InferTypeNode, typeParameter:typescript.TypeParameterDeclaration):typescript.InferTypeNode;
	static function createImportTypeNode(argument:typescript.TypeNode, ?qualifier:typescript.EntityName, ?typeArguments:haxe.ds.ReadOnlyArray<typescript.TypeNode>, ?isTypeOf:Bool):typescript.ImportTypeNode;
	static function updateImportTypeNode(node:typescript.ImportTypeNode, argument:typescript.TypeNode, qualifier:Null<typescript.EntityName>, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, ?isTypeOf:Bool):typescript.ImportTypeNode;
	static function createParenthesizedType(type:typescript.TypeNode):typescript.ParenthesizedTypeNode;
	static function updateParenthesizedType(node:typescript.ParenthesizedTypeNode, type:typescript.TypeNode):typescript.ParenthesizedTypeNode;
	static function createThisTypeNode():typescript.ThisTypeNode;
	static function updateTypeOperatorNode(node:typescript.TypeOperatorNode, type:typescript.TypeNode):typescript.TypeOperatorNode;
	static function createIndexedAccessTypeNode(objectType:typescript.TypeNode, indexType:typescript.TypeNode):typescript.IndexedAccessTypeNode;
	static function updateIndexedAccessTypeNode(node:typescript.IndexedAccessTypeNode, objectType:typescript.TypeNode, indexType:typescript.TypeNode):typescript.IndexedAccessTypeNode;
	static function createMappedTypeNode(readonlyToken:Null<ts.AnyOf3<typescript.ReadonlyKeyword, typescript.PlusToken, typescript.MinusToken>>, typeParameter:typescript.TypeParameterDeclaration, nameType:Null<typescript.TypeNode>, questionToken:Null<ts.AnyOf3<typescript.QuestionToken, typescript.PlusToken, typescript.MinusToken>>, type:Null<typescript.TypeNode>):typescript.MappedTypeNode;
	static function updateMappedTypeNode(node:typescript.MappedTypeNode, readonlyToken:Null<ts.AnyOf3<typescript.ReadonlyKeyword, typescript.PlusToken, typescript.MinusToken>>, typeParameter:typescript.TypeParameterDeclaration, nameType:Null<typescript.TypeNode>, questionToken:Null<ts.AnyOf3<typescript.QuestionToken, typescript.PlusToken, typescript.MinusToken>>, type:Null<typescript.TypeNode>):typescript.MappedTypeNode;
	static function createLiteralTypeNode(literal:ts.AnyOf5<typescript.LiteralExpression, typescript.NullLiteral, typescript.TrueLiteral, typescript.FalseLiteral, typescript.PrefixUnaryExpression>):typescript.LiteralTypeNode;
	static function updateLiteralTypeNode(node:typescript.LiteralTypeNode, literal:ts.AnyOf5<typescript.LiteralExpression, typescript.NullLiteral, typescript.TrueLiteral, typescript.FalseLiteral, typescript.PrefixUnaryExpression>):typescript.LiteralTypeNode;
	static function createObjectBindingPattern(elements:haxe.ds.ReadOnlyArray<typescript.BindingElement>):typescript.ObjectBindingPattern;
	static function updateObjectBindingPattern(node:typescript.ObjectBindingPattern, elements:haxe.ds.ReadOnlyArray<typescript.BindingElement>):typescript.ObjectBindingPattern;
	static function createArrayBindingPattern(elements:haxe.ds.ReadOnlyArray<typescript.ArrayBindingElement>):typescript.ArrayBindingPattern;
	static function updateArrayBindingPattern(node:typescript.ArrayBindingPattern, elements:haxe.ds.ReadOnlyArray<typescript.ArrayBindingElement>):typescript.ArrayBindingPattern;
	static function createBindingElement(dotDotDotToken:Null<typescript.DotDotDotToken>, propertyName:Null<ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>>, name:ts.AnyOf4<String, typescript.Identifier, typescript.ObjectBindingPattern, typescript.ArrayBindingPattern>, ?initializer:typescript.Expression):typescript.BindingElement;
	static function updateBindingElement(node:typescript.BindingElement, dotDotDotToken:Null<typescript.DotDotDotToken>, propertyName:Null<typescript.PropertyName>, name:typescript.BindingName, initializer:Null<typescript.Expression>):typescript.BindingElement;
	static function createArrayLiteral(?elements:haxe.ds.ReadOnlyArray<typescript.Expression>, ?multiLine:Bool):typescript.ArrayLiteralExpression;
	static function updateArrayLiteral(node:typescript.ArrayLiteralExpression, elements:haxe.ds.ReadOnlyArray<typescript.Expression>):typescript.ArrayLiteralExpression;
	static function createObjectLiteral(?properties:haxe.ds.ReadOnlyArray<typescript.ObjectLiteralElementLike>, ?multiLine:Bool):typescript.ObjectLiteralExpression;
	static function updateObjectLiteral(node:typescript.ObjectLiteralExpression, properties:haxe.ds.ReadOnlyArray<typescript.ObjectLiteralElementLike>):typescript.ObjectLiteralExpression;
	static function createPropertyAccess(expression:typescript.Expression, name:ts.AnyOf3<String, typescript.Identifier, typescript.PrivateIdentifier>):typescript.PropertyAccessExpression;
	static function updatePropertyAccess(node:typescript.PropertyAccessExpression, expression:typescript.Expression, name:ts.AnyOf2<typescript.Identifier, typescript.PrivateIdentifier>):typescript.PropertyAccessExpression;
	static function createPropertyAccessChain(expression:typescript.Expression, questionDotToken:Null<typescript.QuestionDotToken>, name:ts.AnyOf3<String, typescript.Identifier, typescript.PrivateIdentifier>):typescript.PropertyAccessChain;
	static function updatePropertyAccessChain(node:typescript.PropertyAccessChain, expression:typescript.Expression, questionDotToken:Null<typescript.QuestionDotToken>, name:ts.AnyOf2<typescript.Identifier, typescript.PrivateIdentifier>):typescript.PropertyAccessChain;
	static function createElementAccess(expression:typescript.Expression, index:ts.AnyOf2<Float, typescript.Expression>):typescript.ElementAccessExpression;
	static function updateElementAccess(node:typescript.ElementAccessExpression, expression:typescript.Expression, argumentExpression:typescript.Expression):typescript.ElementAccessExpression;
	static function createElementAccessChain(expression:typescript.Expression, questionDotToken:Null<typescript.QuestionDotToken>, index:ts.AnyOf2<Float, typescript.Expression>):typescript.ElementAccessChain;
	static function updateElementAccessChain(node:typescript.ElementAccessChain, expression:typescript.Expression, questionDotToken:Null<typescript.QuestionDotToken>, argumentExpression:typescript.Expression):typescript.ElementAccessChain;
	static function createCall(expression:typescript.Expression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, argumentsArray:Null<haxe.ds.ReadOnlyArray<typescript.Expression>>):typescript.CallExpression;
	static function updateCall(node:typescript.CallExpression, expression:typescript.Expression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, argumentsArray:haxe.ds.ReadOnlyArray<typescript.Expression>):typescript.CallExpression;
	static function createCallChain(expression:typescript.Expression, questionDotToken:Null<typescript.QuestionDotToken>, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, argumentsArray:Null<haxe.ds.ReadOnlyArray<typescript.Expression>>):typescript.CallChain;
	static function updateCallChain(node:typescript.CallChain, expression:typescript.Expression, questionDotToken:Null<typescript.QuestionDotToken>, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, argumentsArray:haxe.ds.ReadOnlyArray<typescript.Expression>):typescript.CallChain;
	static function createNew(expression:typescript.Expression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, argumentsArray:Null<haxe.ds.ReadOnlyArray<typescript.Expression>>):typescript.NewExpression;
	static function updateNew(node:typescript.NewExpression, expression:typescript.Expression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, argumentsArray:Null<haxe.ds.ReadOnlyArray<typescript.Expression>>):typescript.NewExpression;
	static function createTypeAssertion(type:typescript.TypeNode, expression:typescript.Expression):typescript.TypeAssertion;
	static function updateTypeAssertion(node:typescript.TypeAssertion, type:typescript.TypeNode, expression:typescript.Expression):typescript.TypeAssertion;
	static function createParen(expression:typescript.Expression):typescript.ParenthesizedExpression;
	static function updateParen(node:typescript.ParenthesizedExpression, expression:typescript.Expression):typescript.ParenthesizedExpression;
	static function createFunctionExpression(modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, asteriskToken:Null<typescript.AsteriskToken>, name:Null<ts.AnyOf2<String, typescript.Identifier>>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:Null<haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>>, type:Null<typescript.TypeNode>, body:typescript.Block):typescript.FunctionExpression;
	static function updateFunctionExpression(node:typescript.FunctionExpression, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, asteriskToken:Null<typescript.AsteriskToken>, name:Null<typescript.Identifier>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:typescript.Block):typescript.FunctionExpression;
	static function createDelete(expression:typescript.Expression):typescript.DeleteExpression;
	static function updateDelete(node:typescript.DeleteExpression, expression:typescript.Expression):typescript.DeleteExpression;
	static function createTypeOf(expression:typescript.Expression):typescript.TypeOfExpression;
	static function updateTypeOf(node:typescript.TypeOfExpression, expression:typescript.Expression):typescript.TypeOfExpression;
	static function createVoid(expression:typescript.Expression):typescript.VoidExpression;
	static function updateVoid(node:typescript.VoidExpression, expression:typescript.Expression):typescript.VoidExpression;
	static function createAwait(expression:typescript.Expression):typescript.AwaitExpression;
	static function updateAwait(node:typescript.AwaitExpression, expression:typescript.Expression):typescript.AwaitExpression;
	static function createPrefix(operator_:typescript.PrefixUnaryOperator, operand:typescript.Expression):typescript.PrefixUnaryExpression;
	static function updatePrefix(node:typescript.PrefixUnaryExpression, operand:typescript.Expression):typescript.PrefixUnaryExpression;
	static function createPostfix(operand:typescript.Expression, operator_:typescript.PostfixUnaryOperator):typescript.PostfixUnaryExpression;
	static function updatePostfix(node:typescript.PostfixUnaryExpression, operand:typescript.Expression):typescript.PostfixUnaryExpression;
	static function createBinary(left:typescript.Expression, operator_:ts.AnyOf2<Int, typescript.BinaryOperatorToken>, right:typescript.Expression):typescript.BinaryExpression;
	static function updateConditional(node:typescript.ConditionalExpression, condition:typescript.Expression, questionToken:typescript.QuestionToken, whenTrue:typescript.Expression, colonToken:typescript.ColonToken, whenFalse:typescript.Expression):typescript.ConditionalExpression;
	static function createTemplateExpression(head:typescript.TemplateHead, templateSpans:haxe.ds.ReadOnlyArray<typescript.TemplateSpan>):typescript.TemplateExpression;
	static function updateTemplateExpression(node:typescript.TemplateExpression, head:typescript.TemplateHead, templateSpans:haxe.ds.ReadOnlyArray<typescript.TemplateSpan>):typescript.TemplateExpression;
	@:overload(function(text:Null<String>, rawText:String, ?templateFlags:typescript.TokenFlags):typescript.TemplateHead { })
	static function createTemplateHead(text:String, ?rawText:String, ?templateFlags:typescript.TokenFlags):typescript.TemplateHead;
	@:overload(function(text:Null<String>, rawText:String, ?templateFlags:typescript.TokenFlags):typescript.TemplateMiddle { })
	static function createTemplateMiddle(text:String, ?rawText:String, ?templateFlags:typescript.TokenFlags):typescript.TemplateMiddle;
	@:overload(function(text:Null<String>, rawText:String, ?templateFlags:typescript.TokenFlags):typescript.TemplateTail { })
	static function createTemplateTail(text:String, ?rawText:String, ?templateFlags:typescript.TokenFlags):typescript.TemplateTail;
	@:overload(function(text:Null<String>, rawText:String):typescript.NoSubstitutionTemplateLiteral { })
	static function createNoSubstitutionTemplateLiteral(text:String, ?rawText:String):typescript.NoSubstitutionTemplateLiteral;
	static function updateYield(node:typescript.YieldExpression, asteriskToken:Null<typescript.AsteriskToken>, expression:Null<typescript.Expression>):typescript.YieldExpression;
	static function createSpread(expression:typescript.Expression):typescript.SpreadElement;
	static function updateSpread(node:typescript.SpreadElement, expression:typescript.Expression):typescript.SpreadElement;
	static function createOmittedExpression():typescript.OmittedExpression;
	static function createAsExpression(expression:typescript.Expression, type:typescript.TypeNode):typescript.AsExpression;
	static function updateAsExpression(node:typescript.AsExpression, expression:typescript.Expression, type:typescript.TypeNode):typescript.AsExpression;
	static function createNonNullExpression(expression:typescript.Expression):typescript.NonNullExpression;
	static function updateNonNullExpression(node:typescript.NonNullExpression, expression:typescript.Expression):typescript.NonNullExpression;
	static function createNonNullChain(expression:typescript.Expression):typescript.NonNullChain;
	static function updateNonNullChain(node:typescript.NonNullChain, expression:typescript.Expression):typescript.NonNullChain;
	static function createMetaProperty(keywordToken:Int, name:typescript.Identifier):typescript.MetaProperty;
	static function updateMetaProperty(node:typescript.MetaProperty, name:typescript.Identifier):typescript.MetaProperty;
	static function createTemplateSpan(expression:typescript.Expression, literal:ts.AnyOf2<typescript.TemplateMiddle, typescript.TemplateTail>):typescript.TemplateSpan;
	static function updateTemplateSpan(node:typescript.TemplateSpan, expression:typescript.Expression, literal:ts.AnyOf2<typescript.TemplateMiddle, typescript.TemplateTail>):typescript.TemplateSpan;
	static function createSemicolonClassElement():typescript.SemicolonClassElement;
	static function createBlock(statements:haxe.ds.ReadOnlyArray<typescript.Statement>, ?multiLine:Bool):typescript.Block;
	static function updateBlock(node:typescript.Block, statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.Block;
	static function createVariableStatement(modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, declarationList:ts.AnyOf2<typescript.VariableDeclarationList, haxe.ds.ReadOnlyArray<typescript.VariableDeclaration>>):typescript.VariableStatement;
	static function updateVariableStatement(node:typescript.VariableStatement, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, declarationList:typescript.VariableDeclarationList):typescript.VariableStatement;
	static function createEmptyStatement():typescript.EmptyStatement;
	static function createExpressionStatement(expression:typescript.Expression):typescript.ExpressionStatement;
	static function updateExpressionStatement(node:typescript.ExpressionStatement, expression:typescript.Expression):typescript.ExpressionStatement;
	static function createStatement(expression:typescript.Expression):typescript.ExpressionStatement;
	static function updateStatement(node:typescript.ExpressionStatement, expression:typescript.Expression):typescript.ExpressionStatement;
	static function createIf(expression:typescript.Expression, thenStatement:typescript.Statement, ?elseStatement:typescript.Statement):typescript.IfStatement;
	static function updateIf(node:typescript.IfStatement, expression:typescript.Expression, thenStatement:typescript.Statement, elseStatement:Null<typescript.Statement>):typescript.IfStatement;
	static function createDo(statement:typescript.Statement, expression:typescript.Expression):typescript.DoStatement;
	static function updateDo(node:typescript.DoStatement, statement:typescript.Statement, expression:typescript.Expression):typescript.DoStatement;
	static function createWhile(expression:typescript.Expression, statement:typescript.Statement):typescript.WhileStatement;
	static function updateWhile(node:typescript.WhileStatement, expression:typescript.Expression, statement:typescript.Statement):typescript.WhileStatement;
	static function createFor(initializer:Null<ts.AnyOf2<typescript.Expression, typescript.VariableDeclarationList>>, condition:Null<typescript.Expression>, incrementor:Null<typescript.Expression>, statement:typescript.Statement):typescript.ForStatement;
	static function updateFor(node:typescript.ForStatement, initializer:Null<ts.AnyOf2<typescript.Expression, typescript.VariableDeclarationList>>, condition:Null<typescript.Expression>, incrementor:Null<typescript.Expression>, statement:typescript.Statement):typescript.ForStatement;
	static function createForIn(initializer:ts.AnyOf2<typescript.Expression, typescript.VariableDeclarationList>, expression:typescript.Expression, statement:typescript.Statement):typescript.ForInStatement;
	static function updateForIn(node:typescript.ForInStatement, initializer:ts.AnyOf2<typescript.Expression, typescript.VariableDeclarationList>, expression:typescript.Expression, statement:typescript.Statement):typescript.ForInStatement;
	static function createForOf(awaitModifier:Null<typescript.AwaitKeyword>, initializer:ts.AnyOf2<typescript.Expression, typescript.VariableDeclarationList>, expression:typescript.Expression, statement:typescript.Statement):typescript.ForOfStatement;
	static function updateForOf(node:typescript.ForOfStatement, awaitModifier:Null<typescript.AwaitKeyword>, initializer:ts.AnyOf2<typescript.Expression, typescript.VariableDeclarationList>, expression:typescript.Expression, statement:typescript.Statement):typescript.ForOfStatement;
	static function createContinue(?label:ts.AnyOf2<String, typescript.Identifier>):typescript.ContinueStatement;
	static function updateContinue(node:typescript.ContinueStatement, label:Null<typescript.Identifier>):typescript.ContinueStatement;
	static function createBreak(?label:ts.AnyOf2<String, typescript.Identifier>):typescript.BreakStatement;
	static function updateBreak(node:typescript.BreakStatement, label:Null<typescript.Identifier>):typescript.BreakStatement;
	static function createReturn(?expression:typescript.Expression):typescript.ReturnStatement;
	static function updateReturn(node:typescript.ReturnStatement, expression:Null<typescript.Expression>):typescript.ReturnStatement;
	static function createWith(expression:typescript.Expression, statement:typescript.Statement):typescript.WithStatement;
	static function updateWith(node:typescript.WithStatement, expression:typescript.Expression, statement:typescript.Statement):typescript.WithStatement;
	static function createSwitch(expression:typescript.Expression, caseBlock:typescript.CaseBlock):typescript.SwitchStatement;
	static function updateSwitch(node:typescript.SwitchStatement, expression:typescript.Expression, caseBlock:typescript.CaseBlock):typescript.SwitchStatement;
	static function createLabel(label:ts.AnyOf2<String, typescript.Identifier>, statement:typescript.Statement):typescript.LabeledStatement;
	static function updateLabel(node:typescript.LabeledStatement, label:typescript.Identifier, statement:typescript.Statement):typescript.LabeledStatement;
	static function createThrow(expression:typescript.Expression):typescript.ThrowStatement;
	static function updateThrow(node:typescript.ThrowStatement, expression:typescript.Expression):typescript.ThrowStatement;
	static function createTry(tryBlock:typescript.Block, catchClause:Null<typescript.CatchClause>, finallyBlock:Null<typescript.Block>):typescript.TryStatement;
	static function updateTry(node:typescript.TryStatement, tryBlock:typescript.Block, catchClause:Null<typescript.CatchClause>, finallyBlock:Null<typescript.Block>):typescript.TryStatement;
	static function createDebuggerStatement():typescript.DebuggerStatement;
	static function createVariableDeclarationList(declarations:haxe.ds.ReadOnlyArray<typescript.VariableDeclaration>, ?flags:typescript.NodeFlags):typescript.VariableDeclarationList;
	static function updateVariableDeclarationList(node:typescript.VariableDeclarationList, declarations:haxe.ds.ReadOnlyArray<typescript.VariableDeclaration>):typescript.VariableDeclarationList;
	static function createFunctionDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, asteriskToken:Null<typescript.AsteriskToken>, name:Null<ts.AnyOf2<String, typescript.Identifier>>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:Null<typescript.Block>):typescript.FunctionDeclaration;
	static function updateFunctionDeclaration(node:typescript.FunctionDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, asteriskToken:Null<typescript.AsteriskToken>, name:Null<typescript.Identifier>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:Null<typescript.Block>):typescript.FunctionDeclaration;
	static function createClassDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:Null<ts.AnyOf2<String, typescript.Identifier>>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, heritageClauses:Null<haxe.ds.ReadOnlyArray<typescript.HeritageClause>>, members:haxe.ds.ReadOnlyArray<typescript.ClassElement>):typescript.ClassDeclaration;
	static function updateClassDeclaration(node:typescript.ClassDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:Null<typescript.Identifier>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, heritageClauses:Null<haxe.ds.ReadOnlyArray<typescript.HeritageClause>>, members:haxe.ds.ReadOnlyArray<typescript.ClassElement>):typescript.ClassDeclaration;
	static function createInterfaceDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf2<String, typescript.Identifier>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, heritageClauses:Null<haxe.ds.ReadOnlyArray<typescript.HeritageClause>>, members:haxe.ds.ReadOnlyArray<typescript.TypeElement>):typescript.InterfaceDeclaration;
	static function updateInterfaceDeclaration(node:typescript.InterfaceDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.Identifier, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, heritageClauses:Null<haxe.ds.ReadOnlyArray<typescript.HeritageClause>>, members:haxe.ds.ReadOnlyArray<typescript.TypeElement>):typescript.InterfaceDeclaration;
	static function createTypeAliasDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf2<String, typescript.Identifier>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, type:typescript.TypeNode):typescript.TypeAliasDeclaration;
	static function updateTypeAliasDeclaration(node:typescript.TypeAliasDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.Identifier, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, type:typescript.TypeNode):typescript.TypeAliasDeclaration;
	static function createEnumDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf2<String, typescript.Identifier>, members:haxe.ds.ReadOnlyArray<typescript.EnumMember>):typescript.EnumDeclaration;
	static function updateEnumDeclaration(node:typescript.EnumDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.Identifier, members:haxe.ds.ReadOnlyArray<typescript.EnumMember>):typescript.EnumDeclaration;
	static function createModuleDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.ModuleName, body:Null<ts.AnyOf4<typescript.Identifier, typescript.ModuleBlock, typescript.NamespaceDeclaration, typescript.JSDocNamespaceDeclaration>>, ?flags:typescript.NodeFlags):typescript.ModuleDeclaration;
	static function updateModuleDeclaration(node:typescript.ModuleDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.ModuleName, body:Null<ts.AnyOf4<typescript.Identifier, typescript.ModuleBlock, typescript.NamespaceDeclaration, typescript.JSDocNamespaceDeclaration>>):typescript.ModuleDeclaration;
	static function createModuleBlock(statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.ModuleBlock;
	static function updateModuleBlock(node:typescript.ModuleBlock, statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.ModuleBlock;
	static function createCaseBlock(clauses:haxe.ds.ReadOnlyArray<typescript.CaseOrDefaultClause>):typescript.CaseBlock;
	static function updateCaseBlock(node:typescript.CaseBlock, clauses:haxe.ds.ReadOnlyArray<typescript.CaseOrDefaultClause>):typescript.CaseBlock;
	static function createNamespaceExportDeclaration(name:ts.AnyOf2<String, typescript.Identifier>):typescript.NamespaceExportDeclaration;
	static function updateNamespaceExportDeclaration(node:typescript.NamespaceExportDeclaration, name:typescript.Identifier):typescript.NamespaceExportDeclaration;
	static function createImportEqualsDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf2<String, typescript.Identifier>, moduleReference:typescript.ModuleReference):typescript.ImportEqualsDeclaration;
	static function updateImportEqualsDeclaration(node:typescript.ImportEqualsDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.Identifier, moduleReference:typescript.ModuleReference):typescript.ImportEqualsDeclaration;
	static function createImportDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, importClause:Null<typescript.ImportClause>, moduleSpecifier:typescript.Expression):typescript.ImportDeclaration;
	static function updateImportDeclaration(node:typescript.ImportDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, importClause:Null<typescript.ImportClause>, moduleSpecifier:typescript.Expression):typescript.ImportDeclaration;
	static function createNamespaceImport(name:typescript.Identifier):typescript.NamespaceImport;
	static function updateNamespaceImport(node:typescript.NamespaceImport, name:typescript.Identifier):typescript.NamespaceImport;
	static function createNamedImports(elements:haxe.ds.ReadOnlyArray<typescript.ImportSpecifier>):typescript.NamedImports;
	static function updateNamedImports(node:typescript.NamedImports, elements:haxe.ds.ReadOnlyArray<typescript.ImportSpecifier>):typescript.NamedImports;
	static function createImportSpecifier(propertyName:Null<typescript.Identifier>, name:typescript.Identifier):typescript.ImportSpecifier;
	static function updateImportSpecifier(node:typescript.ImportSpecifier, propertyName:Null<typescript.Identifier>, name:typescript.Identifier):typescript.ImportSpecifier;
	static function createExportAssignment(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, isExportEquals:Null<Bool>, expression:typescript.Expression):typescript.ExportAssignment;
	static function updateExportAssignment(node:typescript.ExportAssignment, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, expression:typescript.Expression):typescript.ExportAssignment;
	static function createNamedExports(elements:haxe.ds.ReadOnlyArray<typescript.ExportSpecifier>):typescript.NamedExports;
	static function updateNamedExports(node:typescript.NamedExports, elements:haxe.ds.ReadOnlyArray<typescript.ExportSpecifier>):typescript.NamedExports;
	static function createExportSpecifier(propertyName:Null<ts.AnyOf2<String, typescript.Identifier>>, name:ts.AnyOf2<String, typescript.Identifier>):typescript.ExportSpecifier;
	static function updateExportSpecifier(node:typescript.ExportSpecifier, propertyName:Null<typescript.Identifier>, name:typescript.Identifier):typescript.ExportSpecifier;
	static function createExternalModuleReference(expression:typescript.Expression):typescript.ExternalModuleReference;
	static function updateExternalModuleReference(node:typescript.ExternalModuleReference, expression:typescript.Expression):typescript.ExternalModuleReference;
	static function createJSDocTypeExpression(type:typescript.TypeNode):typescript.JSDocTypeExpression;
	static function createJSDocTypeTag(tagName:Null<typescript.Identifier>, typeExpression:typescript.JSDocTypeExpression, ?comment:String):typescript.JSDocTypeTag;
	static function createJSDocReturnTag(tagName:Null<typescript.Identifier>, ?typeExpression:typescript.JSDocTypeExpression, ?comment:String):typescript.JSDocReturnTag;
	static function createJSDocThisTag(tagName:Null<typescript.Identifier>, typeExpression:typescript.JSDocTypeExpression, ?comment:String):typescript.JSDocThisTag;
	static function createJSDocComment(?comment:String, ?tags:haxe.ds.ReadOnlyArray<typescript.JSDocTag>):typescript.JSDoc;
	static function createJSDocParameterTag(tagName:Null<typescript.Identifier>, name:typescript.EntityName, isBracketed:Bool, ?typeExpression:typescript.JSDocTypeExpression, ?isNameFirst:Bool, ?comment:String):typescript.JSDocParameterTag;
	static function createJSDocClassTag(tagName:Null<typescript.Identifier>, ?comment:String):typescript.JSDocClassTag;
	static function createJSDocAugmentsTag(tagName:Null<typescript.Identifier>, className:Dynamic, ?comment:String):typescript.JSDocAugmentsTag;
	static function createJSDocEnumTag(tagName:Null<typescript.Identifier>, typeExpression:typescript.JSDocTypeExpression, ?comment:String):typescript.JSDocEnumTag;
	static function createJSDocTemplateTag(tagName:Null<typescript.Identifier>, constraint:Null<typescript.JSDocTypeExpression>, typeParameters:haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>, ?comment:String):typescript.JSDocTemplateTag;
	static function createJSDocTypedefTag(tagName:Null<typescript.Identifier>, ?typeExpression:ts.AnyOf2<typescript.JSDocTypeExpression, typescript.JSDocTypeLiteral>, ?fullName:ts.AnyOf2<typescript.Identifier, typescript.JSDocNamespaceDeclaration>, ?comment:String):typescript.JSDocTypedefTag;
	static function createJSDocCallbackTag(tagName:Null<typescript.Identifier>, typeExpression:typescript.JSDocSignature, ?fullName:ts.AnyOf2<typescript.Identifier, typescript.JSDocNamespaceDeclaration>, ?comment:String):typescript.JSDocCallbackTag;
	static function createJSDocSignature(typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.JSDocTemplateTag>>, parameters:haxe.ds.ReadOnlyArray<typescript.JSDocParameterTag>, ?type:typescript.JSDocReturnTag):typescript.JSDocSignature;
	static function createJSDocPropertyTag(tagName:Null<typescript.Identifier>, name:typescript.EntityName, isBracketed:Bool, ?typeExpression:typescript.JSDocTypeExpression, ?isNameFirst:Bool, ?comment:String):typescript.JSDocPropertyTag;
	static function createJSDocTypeLiteral(?jsDocPropertyTags:haxe.ds.ReadOnlyArray<typescript.JSDocPropertyLikeTag>, ?isArrayType:Bool):typescript.JSDocTypeLiteral;
	static function createJSDocImplementsTag(tagName:Null<typescript.Identifier>, className:Dynamic, ?comment:String):typescript.JSDocImplementsTag;
	static function createJSDocAuthorTag(tagName:Null<typescript.Identifier>, ?comment:String):typescript.JSDocAuthorTag;
	static function createJSDocPublicTag(tagName:Null<typescript.Identifier>, ?comment:String):typescript.JSDocPublicTag;
	static function createJSDocPrivateTag(tagName:Null<typescript.Identifier>, ?comment:String):typescript.JSDocPrivateTag;
	static function createJSDocProtectedTag(tagName:Null<typescript.Identifier>, ?comment:String):typescript.JSDocProtectedTag;
	static function createJSDocReadonlyTag(tagName:Null<typescript.Identifier>, ?comment:String):typescript.JSDocReadonlyTag;
	static function createJSDocTag(tagName:typescript.Identifier, ?comment:String):typescript.JSDocUnknownTag;
	static function createJsxElement(openingElement:typescript.JsxOpeningElement, children:haxe.ds.ReadOnlyArray<typescript.JsxChild>, closingElement:typescript.JsxClosingElement):typescript.JsxElement;
	static function updateJsxElement(node:typescript.JsxElement, openingElement:typescript.JsxOpeningElement, children:haxe.ds.ReadOnlyArray<typescript.JsxChild>, closingElement:typescript.JsxClosingElement):typescript.JsxElement;
	static function createJsxSelfClosingElement(tagName:typescript.JsxTagNameExpression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, attributes:typescript.JsxAttributes):typescript.JsxSelfClosingElement;
	static function updateJsxSelfClosingElement(node:typescript.JsxSelfClosingElement, tagName:typescript.JsxTagNameExpression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, attributes:typescript.JsxAttributes):typescript.JsxSelfClosingElement;
	static function createJsxOpeningElement(tagName:typescript.JsxTagNameExpression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, attributes:typescript.JsxAttributes):typescript.JsxOpeningElement;
	static function updateJsxOpeningElement(node:typescript.JsxOpeningElement, tagName:typescript.JsxTagNameExpression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, attributes:typescript.JsxAttributes):typescript.JsxOpeningElement;
	static function createJsxClosingElement(tagName:typescript.JsxTagNameExpression):typescript.JsxClosingElement;
	static function updateJsxClosingElement(node:typescript.JsxClosingElement, tagName:typescript.JsxTagNameExpression):typescript.JsxClosingElement;
	static function createJsxFragment(openingFragment:typescript.JsxOpeningFragment, children:haxe.ds.ReadOnlyArray<typescript.JsxChild>, closingFragment:typescript.JsxClosingFragment):typescript.JsxFragment;
	static function createJsxText(text:String, ?containsOnlyTriviaWhiteSpaces:Bool):typescript.JsxText;
	static function updateJsxText(node:typescript.JsxText, text:String, ?containsOnlyTriviaWhiteSpaces:Bool):typescript.JsxText;
	static function createJsxOpeningFragment():typescript.JsxOpeningFragment;
	static function createJsxJsxClosingFragment():typescript.JsxClosingFragment;
	static function updateJsxFragment(node:typescript.JsxFragment, openingFragment:typescript.JsxOpeningFragment, children:haxe.ds.ReadOnlyArray<typescript.JsxChild>, closingFragment:typescript.JsxClosingFragment):typescript.JsxFragment;
	static function createJsxAttribute(name:typescript.Identifier, initializer:Null<ts.AnyOf2<typescript.StringLiteral, typescript.JsxExpression>>):typescript.JsxAttribute;
	static function updateJsxAttribute(node:typescript.JsxAttribute, name:typescript.Identifier, initializer:Null<ts.AnyOf2<typescript.StringLiteral, typescript.JsxExpression>>):typescript.JsxAttribute;
	static function createJsxAttributes(properties:haxe.ds.ReadOnlyArray<typescript.JsxAttributeLike>):typescript.JsxAttributes;
	static function updateJsxAttributes(node:typescript.JsxAttributes, properties:haxe.ds.ReadOnlyArray<typescript.JsxAttributeLike>):typescript.JsxAttributes;
	static function createJsxSpreadAttribute(expression:typescript.Expression):typescript.JsxSpreadAttribute;
	static function updateJsxSpreadAttribute(node:typescript.JsxSpreadAttribute, expression:typescript.Expression):typescript.JsxSpreadAttribute;
	static function createJsxExpression(dotDotDotToken:Null<typescript.DotDotDotToken>, expression:Null<typescript.Expression>):typescript.JsxExpression;
	static function updateJsxExpression(node:typescript.JsxExpression, expression:Null<typescript.Expression>):typescript.JsxExpression;
	static function createCaseClause(expression:typescript.Expression, statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.CaseClause;
	static function updateCaseClause(node:typescript.CaseClause, expression:typescript.Expression, statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.CaseClause;
	static function createDefaultClause(statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.DefaultClause;
	static function updateDefaultClause(node:typescript.DefaultClause, statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.DefaultClause;
	static function createHeritageClause(token:Int, types:haxe.ds.ReadOnlyArray<typescript.ExpressionWithTypeArguments>):typescript.HeritageClause;
	static function updateHeritageClause(node:typescript.HeritageClause, types:haxe.ds.ReadOnlyArray<typescript.ExpressionWithTypeArguments>):typescript.HeritageClause;
	static function createCatchClause(variableDeclaration:Null<ts.AnyOf2<String, typescript.VariableDeclaration>>, block:typescript.Block):typescript.CatchClause;
	static function updateCatchClause(node:typescript.CatchClause, variableDeclaration:Null<typescript.VariableDeclaration>, block:typescript.Block):typescript.CatchClause;
	static function createPropertyAssignment(name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, initializer:typescript.Expression):typescript.PropertyAssignment;
	static function updatePropertyAssignment(node:typescript.PropertyAssignment, name:typescript.PropertyName, initializer:typescript.Expression):typescript.PropertyAssignment;
	static function createShorthandPropertyAssignment(name:ts.AnyOf2<String, typescript.Identifier>, ?objectAssignmentInitializer:typescript.Expression):typescript.ShorthandPropertyAssignment;
	static function updateShorthandPropertyAssignment(node:typescript.ShorthandPropertyAssignment, name:typescript.Identifier, objectAssignmentInitializer:Null<typescript.Expression>):typescript.ShorthandPropertyAssignment;
	static function createSpreadAssignment(expression:typescript.Expression):typescript.SpreadAssignment;
	static function updateSpreadAssignment(node:typescript.SpreadAssignment, expression:typescript.Expression):typescript.SpreadAssignment;
	static function createEnumMember(name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, ?initializer:typescript.Expression):typescript.EnumMember;
	static function updateEnumMember(node:typescript.EnumMember, name:typescript.PropertyName, initializer:Null<typescript.Expression>):typescript.EnumMember;
	static function updateSourceFileNode(node:typescript.SourceFile, statements:haxe.ds.ReadOnlyArray<typescript.Statement>, ?isDeclarationFile:Bool, ?referencedFiles:haxe.ds.ReadOnlyArray<typescript.FileReference>, ?typeReferences:haxe.ds.ReadOnlyArray<typescript.FileReference>, ?hasNoDefaultLib:Bool, ?libReferences:haxe.ds.ReadOnlyArray<typescript.FileReference>):typescript.SourceFile;
	static function createNotEmittedStatement(original:typescript.Node):typescript.NotEmittedStatement;
	static function createPartiallyEmittedExpression(expression:typescript.Expression, ?original:typescript.Node):typescript.PartiallyEmittedExpression;
	static function updatePartiallyEmittedExpression(node:typescript.PartiallyEmittedExpression, expression:typescript.Expression):typescript.PartiallyEmittedExpression;
	static function createCommaList(elements:haxe.ds.ReadOnlyArray<typescript.Expression>):typescript.CommaListExpression;
	static function updateCommaList(node:typescript.CommaListExpression, elements:haxe.ds.ReadOnlyArray<typescript.Expression>):typescript.CommaListExpression;
	static function createBundle(sourceFiles:haxe.ds.ReadOnlyArray<typescript.SourceFile>, ?prepends:haxe.ds.ReadOnlyArray<ts.AnyOf2<typescript.InputFiles, typescript.UnparsedSource>>):typescript.Bundle;
	static function updateBundle(node:typescript.Bundle, sourceFiles:haxe.ds.ReadOnlyArray<typescript.SourceFile>, ?prepends:haxe.ds.ReadOnlyArray<ts.AnyOf2<typescript.InputFiles, typescript.UnparsedSource>>):typescript.Bundle;
	@:overload(function(statements:haxe.ds.ReadOnlyArray<typescript.Statement>, param:typescript.ParameterDeclaration, paramValue:typescript.Expression):typescript.CallExpression { })
	static function createImmediatelyInvokedFunctionExpression(statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.CallExpression;
	@:overload(function(statements:haxe.ds.ReadOnlyArray<typescript.Statement>, param:typescript.ParameterDeclaration, paramValue:typescript.Expression):typescript.CallExpression { })
	static function createImmediatelyInvokedArrowFunction(statements:haxe.ds.ReadOnlyArray<typescript.Statement>):typescript.CallExpression;
	static function createVoidZero():typescript.VoidExpression;
	static function createExportDefault(expression:typescript.Expression):typescript.ExportAssignment;
	static function createExternalModuleExport(exportName:typescript.Identifier):typescript.ExportDeclaration;
	static function createNamespaceExport(name:typescript.Identifier):typescript.NamespaceExport;
	static function updateNamespaceExport(node:typescript.NamespaceExport, name:typescript.Identifier):typescript.NamespaceExport;
	static function createToken<TKind>(kind:TKind):typescript.Token<TKind>;
	static function createIdentifier(text:String):typescript.Identifier;
	static function createTempVariable(recordTempVariable:Null<(node:typescript.Identifier) -> Void>):typescript.Identifier;
	static function getGeneratedNameForNode(node:Null<typescript.Node>):typescript.Identifier;
	static function createOptimisticUniqueName(text:String):typescript.Identifier;
	static function createFileLevelUniqueName(text:String):typescript.Identifier;
	static function createIndexSignature(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:typescript.TypeNode):typescript.IndexSignatureDeclaration;
	static function createTypePredicateNode(parameterName:ts.AnyOf3<String, typescript.Identifier, typescript.ThisTypeNode>, type:typescript.TypeNode):typescript.TypePredicateNode;
	static function updateTypePredicateNode(node:typescript.TypePredicateNode, parameterName:ts.AnyOf2<typescript.Identifier, typescript.ThisTypeNode>, type:typescript.TypeNode):typescript.TypePredicateNode;
	@:overload(function(value:ts.AnyOf2<Float, typescript.PseudoBigInt>):typescript.NumericLiteral { })
	@:overload(function(value:Bool):typescript.BooleanLiteral { })
	@:overload(function(value:ts.AnyOf4<String, Float, Bool, typescript.PseudoBigInt>):typescript.PrimaryExpression { })
	static function createLiteral(value:ts.AnyOf5<String, typescript.Identifier, typescript.StringLiteral, typescript.NoSubstitutionTemplateLiteral, typescript.NumericLiteral>):typescript.StringLiteral;
	static function createMethodSignature(typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, questionToken:Null<typescript.QuestionToken>):typescript.MethodSignature;
	static function updateMethodSignature(node:typescript.MethodSignature, typeParameters:Null<typescript.NodeArray<typescript.TypeParameterDeclaration>>, parameters:typescript.NodeArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, name:typescript.PropertyName, questionToken:Null<typescript.QuestionToken>):typescript.MethodSignature;
	@:overload(function(operator_:Int, type:typescript.TypeNode):typescript.TypeOperatorNode { })
	static function createTypeOperatorNode(type:typescript.TypeNode):typescript.TypeOperatorNode;
	@:overload(function(tag:typescript.Expression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, template:typescript.TemplateLiteral):typescript.TaggedTemplateExpression { })
	static function createTaggedTemplate(tag:typescript.Expression, template:typescript.TemplateLiteral):typescript.TaggedTemplateExpression;
	@:overload(function(node:typescript.TaggedTemplateExpression, tag:typescript.Expression, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, template:typescript.TemplateLiteral):typescript.TaggedTemplateExpression { })
	static function updateTaggedTemplate(node:typescript.TaggedTemplateExpression, tag:typescript.Expression, template:typescript.TemplateLiteral):typescript.TaggedTemplateExpression;
	static function updateBinary(node:typescript.BinaryExpression, left:typescript.Expression, right:typescript.Expression, ?operator_:ts.AnyOf2<Int, typescript.BinaryOperatorToken>):typescript.BinaryExpression;
	@:overload(function(condition:typescript.Expression, questionToken:typescript.QuestionToken, whenTrue:typescript.Expression, colonToken:typescript.ColonToken, whenFalse:typescript.Expression):typescript.ConditionalExpression { })
	static function createConditional(condition:typescript.Expression, whenTrue:typescript.Expression, whenFalse:typescript.Expression):typescript.ConditionalExpression;
	@:overload(function(asteriskToken:Null<typescript.AsteriskToken>, expression:typescript.Expression):typescript.YieldExpression { })
	static function createYield(?expression:typescript.Expression):typescript.YieldExpression;
	static function createClassExpression(modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:Null<ts.AnyOf2<String, typescript.Identifier>>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, heritageClauses:Null<haxe.ds.ReadOnlyArray<typescript.HeritageClause>>, members:haxe.ds.ReadOnlyArray<typescript.ClassElement>):typescript.ClassExpression;
	static function updateClassExpression(node:typescript.ClassExpression, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:Null<typescript.Identifier>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, heritageClauses:Null<haxe.ds.ReadOnlyArray<typescript.HeritageClause>>, members:haxe.ds.ReadOnlyArray<typescript.ClassElement>):typescript.ClassExpression;
	static function createPropertySignature(modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:ts.AnyOf6<String, typescript.Identifier, typescript.PrivateIdentifier, typescript.StringLiteral, typescript.NumericLiteral, typescript.ComputedPropertyName>, questionToken:Null<typescript.QuestionToken>, type:Null<typescript.TypeNode>, ?initializer:typescript.Expression):typescript.PropertySignature;
	static function updatePropertySignature(node:typescript.PropertySignature, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, name:typescript.PropertyName, questionToken:Null<typescript.QuestionToken>, type:Null<typescript.TypeNode>, initializer:Null<typescript.Expression>):typescript.PropertySignature;
	static function createExpressionWithTypeArguments(typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, expression:typescript.Expression):typescript.ExpressionWithTypeArguments;
	static function updateExpressionWithTypeArguments(node:typescript.ExpressionWithTypeArguments, typeArguments:Null<haxe.ds.ReadOnlyArray<typescript.TypeNode>>, expression:typescript.Expression):typescript.ExpressionWithTypeArguments;
	@:overload(function(modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:typescript.ConciseBody):typescript.ArrowFunction { })
	static function createArrowFunction(modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, equalsGreaterThanToken:Null<typescript.EqualsGreaterThanToken>, body:typescript.ConciseBody):typescript.ArrowFunction;
	@:overload(function(node:typescript.ArrowFunction, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, body:typescript.ConciseBody):typescript.ArrowFunction { })
	static function updateArrowFunction(node:typescript.ArrowFunction, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, typeParameters:Null<haxe.ds.ReadOnlyArray<typescript.TypeParameterDeclaration>>, parameters:haxe.ds.ReadOnlyArray<typescript.ParameterDeclaration>, type:Null<typescript.TypeNode>, equalsGreaterThanToken:typescript.EqualsGreaterThanToken, body:typescript.ConciseBody):typescript.ArrowFunction;
	@:overload(function(name:ts.AnyOf4<String, typescript.Identifier, typescript.ObjectBindingPattern, typescript.ArrayBindingPattern>, exclamationToken:Null<typescript.ExclamationToken>, type:Null<typescript.TypeNode>, initializer:Null<typescript.Expression>):typescript.VariableDeclaration { })
	static function createVariableDeclaration(name:ts.AnyOf4<String, typescript.Identifier, typescript.ObjectBindingPattern, typescript.ArrayBindingPattern>, ?type:typescript.TypeNode, ?initializer:typescript.Expression):typescript.VariableDeclaration;
	@:overload(function(node:typescript.VariableDeclaration, name:typescript.BindingName, exclamationToken:Null<typescript.ExclamationToken>, type:Null<typescript.TypeNode>, initializer:Null<typescript.Expression>):typescript.VariableDeclaration { })
	static function updateVariableDeclaration(node:typescript.VariableDeclaration, name:typescript.BindingName, type:Null<typescript.TypeNode>, initializer:Null<typescript.Expression>):typescript.VariableDeclaration;
	static function createImportClause(name:Null<typescript.Identifier>, namedBindings:Null<typescript.NamedImportBindings>, ?isTypeOnly:Dynamic):typescript.ImportClause;
	static function updateImportClause(node:typescript.ImportClause, name:Null<typescript.Identifier>, namedBindings:Null<typescript.NamedImportBindings>, isTypeOnly:Bool):typescript.ImportClause;
	static function createExportDeclaration(decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, exportClause:Null<typescript.NamedExportBindings>, ?moduleSpecifier:typescript.Expression, ?isTypeOnly:Dynamic):typescript.ExportDeclaration;
	static function updateExportDeclaration(node:typescript.ExportDeclaration, decorators:Null<haxe.ds.ReadOnlyArray<typescript.Decorator>>, modifiers:Null<haxe.ds.ReadOnlyArray<typescript.Modifier>>, exportClause:Null<typescript.NamedExportBindings>, moduleSpecifier:Null<typescript.Expression>, isTypeOnly:Bool):typescript.ExportDeclaration;
	static function createJSDocParamTag(name:typescript.EntityName, isBracketed:Bool, ?typeExpression:typescript.JSDocTypeExpression, ?comment:String):typescript.JSDocParameterTag;
	static function createComma(left:typescript.Expression, right:typescript.Expression):typescript.Expression;
	static function createLessThan(left:typescript.Expression, right:typescript.Expression):typescript.Expression;
	static function createAssignment(left:typescript.Expression, right:typescript.Expression):typescript.BinaryExpression;
	static function createStrictEquality(left:typescript.Expression, right:typescript.Expression):typescript.BinaryExpression;
	static function createStrictInequality(left:typescript.Expression, right:typescript.Expression):typescript.BinaryExpression;
	static function createAdd(left:typescript.Expression, right:typescript.Expression):typescript.BinaryExpression;
	static function createSubtract(left:typescript.Expression, right:typescript.Expression):typescript.BinaryExpression;
	static function createLogicalAnd(left:typescript.Expression, right:typescript.Expression):typescript.BinaryExpression;
	static function createLogicalOr(left:typescript.Expression, right:typescript.Expression):typescript.BinaryExpression;
	static function createPostfixIncrement(operand:typescript.Expression):typescript.PostfixUnaryExpression;
	static function createLogicalNot(operand:typescript.Expression):typescript.PrefixUnaryExpression;
	static function createNode(kind:typescript.SyntaxKind, ?pos:Dynamic, ?end:Dynamic):typescript.Node;
	/**
		Creates a shallow, memberwise clone of a node ~for mutation~ with its `pos`, `end`, and `parent` set.
		
		NOTE: It is unsafe to change any properties of a `Node` that relate to its AST children, as those changes won't be
		captured with respect to transformations.
	**/
	static function getMutableClone<T>(node:T):T;
	static function isTypeAssertion(node:typescript.Node):Bool;
}
