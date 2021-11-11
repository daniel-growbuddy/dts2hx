package typescript;

/**
	ES6 Map interface.
**/
typedef ESMap<K, V> = {
	function set(key:K, value:V):ESMap<K, V>;
	function get(key:K):Null<V>;
	function values():Iterator_<V>;
	function entries():Iterator_<ts.Tuple2<K, V>>;
	function forEach(action:(value:V, key:K) -> Void):Void;
	final size : Float;
	function has(key:K):Bool;
	function keys():Iterator_<K>;
	function delete(key:K):Bool;
	function clear():Void;
};