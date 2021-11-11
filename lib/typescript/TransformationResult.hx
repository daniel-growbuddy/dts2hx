package typescript;

typedef TransformationResult<T> = {
	/**
		Gets the transformed source files.
	**/
	var transformed : Array<T>;
	/**
		Gets diagnostics for the transformation.
	**/
	@:optional
	var diagnostics : Array<DiagnosticWithLocation>;
	/**
		Gets a substitute for a node, if one is available; otherwise, returns the original node.
	**/
	function substituteNode(hint:EmitHint, node:Node):Node;
	/**
		Emits a node with possible notification.
	**/
	function emitNodeWithNotification(hint:EmitHint, node:Node, emitCallback:(hint:EmitHint, node:Node) -> Void):Void;
	/**
		Indicates if a given node needs an emit notification
	**/
	@:optional
	function isEmitNotificationEnabled(node:Node):Bool;
	/**
		Clean up EmitNode entries on any parse-tree nodes.
	**/
	function dispose():Void;
};