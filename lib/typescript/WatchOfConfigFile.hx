package typescript;

/**
	Creates the watch what generates program using the config file
**/
typedef WatchOfConfigFile<T> = {
	/**
		Synchronize with host and get updated program
	**/
	function getProgram():T;
	/**
		Closes the watch
	**/
	function close():Void;
};