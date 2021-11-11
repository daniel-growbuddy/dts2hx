package typescript;

typedef CancellationToken = {
	function isCancellationRequested():Bool;
	function throwIfCancellationRequested():Void;
};