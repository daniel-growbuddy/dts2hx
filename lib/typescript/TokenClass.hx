package typescript;

@:jsRequire("typescript", "TokenClass") @:enum extern abstract TokenClass(Int) from Int to Int {
	var Punctuation;
	var Keyword;
	var Operator;
	var Comment;
	var Whitespace;
	var Identifier;
	var NumberLiteral;
	var BigIntLiteral;
	var StringLiteral;
	var RegExpLiteral;
}