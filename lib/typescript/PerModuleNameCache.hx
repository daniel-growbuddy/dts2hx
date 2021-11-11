package typescript;

typedef PerModuleNameCache = {
	function get(directory:String):Null<ResolvedModuleWithFailedLookupLocations>;
	function set(directory:String, result:ResolvedModuleWithFailedLookupLocations):Void;
};