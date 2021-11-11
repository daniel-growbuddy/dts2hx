package typescript;

/**
	Common write methods for ES6 Map/Set.
**/
typedef Collection<K> = {
	function delete(key:K):Bool;
	function clear():Void;
	final size : Float;
	function has(key:K):Bool;
	function keys():Iterator_<K>;
};