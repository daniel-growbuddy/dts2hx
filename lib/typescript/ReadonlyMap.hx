package typescript;

/**
	ES6 Map interface, only read methods included.
**/
typedef ReadonlyMap<T> = {
	function get(key:String):Null<T>;
	function values():Iterator_<T>;
	function entries():Iterator_<ts.Tuple2<String, T>>;
	function forEach(action:(value:T, key:String) -> Void):Void;
	final size : Float;
	function has(key:String):Bool;
	function keys():Iterator_<String>;
};