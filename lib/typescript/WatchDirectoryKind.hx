package typescript;

@:jsRequire("typescript", "WatchDirectoryKind") @:enum extern abstract WatchDirectoryKind(Int) from Int to Int {
	var UseFsEvents;
	var FixedPollingInterval;
	var DynamicPriorityPolling;
}