package typescript;

/**
	Cached module resolutions per containing directory.
	This assumes that any module id will have the same resolution for sibling files located in the same folder.
**/
typedef ModuleResolutionCache = {
	function getOrCreateCacheForDirectory(directoryName:String, ?redirectedReference:ResolvedProjectReference):Map_<ResolvedModuleWithFailedLookupLocations>;
	function getOrCreateCacheForModuleName(nonRelativeModuleName:String, ?redirectedReference:ResolvedProjectReference):PerModuleNameCache;
};