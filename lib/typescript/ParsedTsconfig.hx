package typescript;

typedef ParsedTsconfig = {
	var raw : Dynamic;
	@:optional
	var options : CompilerOptions;
	@:optional
	var watchOptions : WatchOptions;
	@:optional
	var typeAcquisition : TypeAcquisition;
	/**
		Note that the case of the config path has not yet been normalized, as no files have been imported into the project yet
	**/
	@:optional
	var extendedConfigPath : String;
};