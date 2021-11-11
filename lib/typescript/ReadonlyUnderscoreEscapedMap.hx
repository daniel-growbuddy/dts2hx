package typescript;

/**
	ReadonlyMap where keys are `__String`s.
**/
typedef ReadonlyUnderscoreEscapedMap<T> = {
	function get(key:__String):Null<T>;
	function values():Iterator_<T>;
	function entries():Iterator_<ts.Tuple2<__String, T>>;
	function forEach(action:(value:T, key:__String) -> Void):Void;
	final size : Float;
	function has(key:__String):Bool;
	function keys():Iterator_<__String>;
};