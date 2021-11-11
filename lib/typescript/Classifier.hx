package typescript;

typedef Classifier = {
	/**
		Gives lexical classifications of tokens on a line without any syntactic context.
		For instance, a token consisting of the text 'string' can be either an identifier
		named 'string' or the keyword 'string', however, because this classifier is not aware,
		it relies on certain heuristics to give acceptable results. For classifications where
		speed trumps accuracy, this function is preferable; however, for true accuracy, the
		syntactic classifier is ideal. In fact, in certain editing scenarios, combining the
		lexical, syntactic, and semantic classifiers may issue the best user experience.
	**/
	function getClassificationsForLine(text:String, lexState:EndOfLineState, syntacticClassifierAbsent:Bool):ClassificationResult;
	function getEncodedLexicalClassifications(text:String, endOfLineState:EndOfLineState, syntacticClassifierAbsent:Bool):Classifications;
};