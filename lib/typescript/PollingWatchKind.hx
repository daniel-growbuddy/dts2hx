package typescript;

@:jsRequire("typescript", "PollingWatchKind") @:enum extern abstract PollingWatchKind(Int) from Int to Int {
	var FixedInterval;
	var PriorityInterval;
	var DynamicPriority;
}