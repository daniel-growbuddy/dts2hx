package typescript;

@:jsRequire("typescript", "FileWatcherEventKind") @:enum extern abstract FileWatcherEventKind(Int) from Int to Int {
	var Created;
	var Changed;
	var Deleted;
}