package typescript;

typedef TransformationContext = {
	/**
		Records a request for a non-scoped emit helper in the current context.
	**/
	function requestEmitHelper(helper:EmitHelper):Void;
	/**
		Gets and resets the requested non-scoped emit helpers.
	**/
	function readEmitHelpers():Null<Array<EmitHelper>>;
	/**
		Enables expression substitutions in the pretty printer for the provided SyntaxKind.
	**/
	function enableSubstitution(kind:SyntaxKind):Void;
	/**
		Determines whether expression substitutions are enabled for the provided node.
	**/
	function isSubstitutionEnabled(node:Node):Bool;
	/**
		Hook used by transformers to substitute expressions just before they
		are emitted by the pretty printer.
		
		NOTE: Transformation hooks should only be modified during `Transformer` initialization,
		before returning the `NodeTransformer` callback.
	**/
	dynamic function onSubstituteNode(hint:EmitHint, node:Node):Node;
	/**
		Enables before/after emit notifications in the pretty printer for the provided
		SyntaxKind.
	**/
	function enableEmitNotification(kind:SyntaxKind):Void;
	/**
		Determines whether before/after emit notifications should be raised in the pretty
		printer when it emits a node.
	**/
	function isEmitNotificationEnabled(node:Node):Bool;
	/**
		Hook used to allow transformers to capture state before or after
		the printer emits a node.
		
		NOTE: Transformation hooks should only be modified during `Transformer` initialization,
		before returning the `NodeTransformer` callback.
	**/
	dynamic function onEmitNode(hint:EmitHint, node:Node, emitCallback:(hint:EmitHint, node:Node) -> Void):Void;
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