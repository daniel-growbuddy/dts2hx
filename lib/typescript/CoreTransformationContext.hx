package typescript;

typedef CoreTransformationContext = {
	final factory : NodeFactory;
	/**
		Gets the compiler options supplied to the transformer.
	**/
	function getCompilerOptions():CompilerOptions;
	/**
		Starts a new lexical environment.
	**/
	function startLexicalEnvironment():Void;
	/**
		Suspends the current lexical environment, usually after visiting a parameter list.
	**/
	function suspendLexicalEnvironment():Void;
	/**
		Resumes a suspended lexical environment, usually before visiting a function body.
	**/
	function resumeLexicalEnvironment():Void;
	/**
		Ends a lexical environment, returning any declarations.
	**/
	function endLexicalEnvironment():Null<Array<Statement>>;
	/**
		Hoists a function declaration to the containing scope.
	**/
	function hoistFunctionDeclaration(node:FunctionDeclaration):Void;
	/**
		Hoists a variable declaration to the containing scope.
	**/
	function hoistVariableDeclaration(node:Identifier):Void;
};