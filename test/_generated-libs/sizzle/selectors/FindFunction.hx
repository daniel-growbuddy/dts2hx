package sizzle.selectors;
extern typedef FindFunction = {
	@:selfCall
	function call(match:ts.lib.RegExpMatchArray, context:ts.AnyOf2<ts.html.IDocument, ts.html.IElement>, isXML:Bool):ts.AnyOf2<Void, std.Array<ts.html.IElement>>;
};