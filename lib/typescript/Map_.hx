package typescript;

/**
	ES6 Map interface.
**/
typedef Map_<T> = {
	function set(key:String, value:T):Map_<T>;
	function get(key:String):Null<T>;
	function values():Iterator_<T>;
	function entries():Iterator_<ts.Tuple2<String, T>>;
	function forEach(action:(value:T, key:String) -> Void):Void;
	final size : Float;
	function has(key:String):Bool;
	function keys():Iterator_<String>;
	function delete(key:String):Bool;
	function clear():Void;
};