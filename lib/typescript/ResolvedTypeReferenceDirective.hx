package typescript;

typedef ResolvedTypeReferenceDirective = {
	var primary : Bool;
	var resolvedFileName : Null<String>;
	@:optional
	var packageId : PackageId;
	/**
		True if `resolvedFileName` comes from `node_modules`.
	**/
	@:optional
	var isExternalLibraryImport : Bool;
};