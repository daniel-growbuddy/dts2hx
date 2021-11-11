package typescript;

@:jsRequire("typescript", "EndOfLineState") @:enum extern abstract EndOfLineState(Int) from Int to Int {
	var None;
	var InMultiLineCommentTrivia;
	var InSingleQuoteStringLiteral;
	var InDoubleQuoteStringLiteral;
	var InTemplateHeadOrNoSubstitutionTemplate;
	var InTemplateMiddleOrTail;
	var InTemplateSubstitutionPosition;
}