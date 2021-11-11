package typescript;

/**
	ES6 Set interface, only read methods included.
**/
typedef ReadonlySet<T> = {
	function has(value:T):Bool;
	function values():Iterator_<T>;
	function entries():Iterator_<ts.Tuple2<T, T>>;
	function forEach(action:(value:T, key:T) -> Void):Void;
	final size : Float;
	function keys():Iterator_<T>;
};