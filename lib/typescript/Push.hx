package typescript;

/**
	Array that is only intended to be pushed to, never read.
**/
typedef Push<T> = {
	function push(values:haxe.extern.Rest<T>):Void;
};