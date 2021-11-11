package typescript;

/**
	Creates the watch that generates program using the root files and compiler options
**/
typedef WatchOfFilesAndCompilerOptions<T> = {
	/**
		Updates the root files in the program, only if this is not config file compilation
	**/
	function updateRootFileNames(fileNames:Array<String>):Void;
	/**
		Synchronize with host and get updated program
	**/
	function getProgram():T;
	/**
		Closes the watch
	**/
	function close():Void;
};