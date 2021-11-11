package typescript;

@:jsRequire("typescript", "WatchDirectoryFlags") @:enum extern abstract WatchDirectoryFlags(Int) from Int to Int {
	var None;
	var Recursive;
}