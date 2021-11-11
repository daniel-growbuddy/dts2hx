package typescript;

/**
	Common read methods for ES6 Map/Set.
**/
typedef ReadonlyCollection<K> = {
	final size : Float;
	function has(key:K):Bool;
	function keys():Iterator_<K>;
};