package ts.html;
extern typedef ParentNode = {
	final childElementCount : Float;
	/**
		Returns the child elements.
	**/
	final children : IHTMLCollection;
	/**
		Returns the first child that is an element, and null otherwise.
	**/
	final firstElementChild : Null<IElement>;
	/**
		Returns the last child that is an element, and null otherwise.
	**/
	final lastElementChild : Null<IElement>;
	/**
		Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
		
		Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
	**/
	function append(nodes:haxe.extern.Rest<ts.AnyOf2<String, INode>>):Void;
	/**
		Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.
		
		Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
	**/
	function prepend(nodes:haxe.extern.Rest<ts.AnyOf2<String, INode>>):Void;
	/**
		Returns the first element that is a descendant of node that matches selectors.
	**/
	@:overload(function<K>(selectors:K):Null<Any> { })
	@:overload(function<E>(selectors:String):Null<E> { })
	function querySelector<K>(selectors:K):Null<Any>;
	/**
		Returns all element descendants of node that match selectors.
	**/
	@:overload(function<K>(selectors:K):ts.lib.NodeListOf<Any> { })
	@:overload(function<E>(selectors:String):ts.lib.NodeListOf<E> { })
	function querySelectorAll<K>(selectors:K):ts.lib.NodeListOf<Any>;
};