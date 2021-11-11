package typescript;

/**
	Host that has watch functionality used in --watch mode
**/
typedef WatchHost = {
	/**
		If provided, called with Diagnostic message that informs about change in watch status
	**/
	@:optional
	function onWatchStatusChange(diagnostic:Diagnostic, newLine:String, options:CompilerOptions, ?errorCount:Float):Void;
	/**
		Used to watch changes in source files, missing files needed to update the program or config file
	**/
	function watchFile(path:String, callback:FileWatcherCallback, ?pollingInterval:Float, ?options:CompilerOptions):FileWatcher;
	/**
		Used to watch resolved module's failed lookup locations, config file specs, type roots where auto type reference directives are added
	**/
	function watchDirectory(path:String, callback:DirectoryWatcherCallback, ?recursive:Bool, ?options:CompilerOptions):FileWatcher;
	/**
		If provided, will be used to set delayed compilation, so that multiple changes in short span are compiled together
	**/
	@:optional
	function setTimeout(callback:(args:haxe.extern.Rest<Dynamic>) -> Void, ms:Float, args:haxe.extern.Rest<Dynamic>):Dynamic;
	/**
		If provided, will be used to reset existing delayed compilation
	**/
	@:optional
	function clearTimeout(timeoutId:Dynamic):Void;
};