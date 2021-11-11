package typescript;

/**
	ResolvedModule with an explicitly provided `extension` property.
	Prefer this over `ResolvedModule`.
	If changing this, remember to change `moduleResolutionIsEqualTo`.
**/
typedef ResolvedModuleFull = {
	/**
		Extension of resolvedFileName. This must match what's at the end of resolvedFileName.
		This is optional for backwards-compatibility, but will be added if not provided.
	**/
	var extension : Extension;
	@:optional
	var packageId : PackageId;
	/**
		Path of the file the module was resolved to.
	**/
	var resolvedFileName : String;
	/**
		True if `resolvedFileName` comes from `node_modules`.
	**/
	@:optional
	var isExternalLibraryImport : Bool;
};