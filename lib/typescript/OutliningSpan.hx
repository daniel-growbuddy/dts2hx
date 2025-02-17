package typescript;

typedef OutliningSpan = {
	/**
		The span of the document to actually collapse.
	**/
	var textSpan : TextSpan;
	/**
		The span of the document to display when the user hovers over the collapsed span.
	**/
	var hintSpan : TextSpan;
	/**
		The text to display in the editor for the collapsed region.
	**/
	var bannerText : String;
	/**
		Whether or not this region should be automatically collapsed when
		the 'Collapse to Definitions' command is invoked.
	**/
	var autoCollapse : Bool;
	/**
		Classification of the contents of the span
	**/
	var kind : OutliningSpanKind;
};