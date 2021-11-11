package typescript;

typedef Watch<T> = {
	/**
		Synchronize with host and get updated program
	**/
	function getProgram():T;
	/**
		Closes the watch
	**/
	function close():Void;
};