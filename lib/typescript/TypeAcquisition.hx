package typescript;

typedef TypeAcquisition = {
	@:optional
	var enableAutoDiscovery : Bool;
	@:optional
	var enable : Bool;
	@:optional
	var include : Array<String>;
	@:optional
	var exclude : Array<String>;
	@:optional
	var disableFilenameBasedTypeAcquisition : Bool;
};