package typescript;

/**
	ES6 Iterator type.
**/
typedef Iterator_<T> = {
	function next():ts.AnyOf2<{
		var value : T;
		@:optional
		var done : Bool;
	}, {
		var value : Any;
		var done : Bool;
	}>;
};