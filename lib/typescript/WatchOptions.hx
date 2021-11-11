package typescript;

typedef WatchOptions = {
	@:optional
	var watchFile : WatchFileKind;
	@:optional
	var watchDirectory : WatchDirectoryKind;
	@:optional
	var fallbackPolling : PollingWatchKind;
	@:optional
	var synchronousWatchDirectory : Bool;
};