package typescript;

typedef CombinedCodeActions = {
	var changes : haxe.ds.ReadOnlyArray<FileTextChanges>;
	@:optional
	var commands : haxe.ds.ReadOnlyArray<InstallPackageAction>;
};