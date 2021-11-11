package typescript;

/**
	ES6 Map interface, only read methods included.
**/
typedef ReadonlyESMap<K, V> = {
	function get(key:K):Null<V>;
	function values():Iterator_<V>;
	function entries():Iterator_<ts.Tuple2<K, V>>;
	function forEach(action:(value:V, key:K) -> Void):Void;
	final size : Float;
	function has(key:K):Bool;
	function keys():Iterator_<K>;
};