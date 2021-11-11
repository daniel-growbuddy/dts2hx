package typescript;

@:jsRequire("typescript", "WatchFileKind") @:enum extern abstract WatchFileKind(Int) from Int to Int {
	var FixedPollingInterval;
	var PriorityPollingInterval;
	var DynamicPriorityPolling;
	var UseFsEvents;
	var UseFsEventsOnParentDirectory;
}