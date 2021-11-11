package typescript;

/**
	ES6 Set interface.
**/
typedef Set<T> = {
	function add(value:T):Set<T>;
	function delete(value:T):Bool;
	function has(value:T):Bool;
	function values():Iterator_<T>;
	function entries():Iterator_<ts.Tuple2<T, T>>;
	function forEach(action:(value:T, key:T) -> Void):Void;
	final size : Float;
	function keys():Iterator_<T>;
	function clear():Void;
};