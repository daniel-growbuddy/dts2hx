package typescript.server;

typedef DiscoverTypings = {
	final fileNames : Array<String>;
	final projectRootPath : typescript.Path;
	final compilerOptions : typescript.CompilerOptions;
	@:optional
	final watchOptions : typescript.WatchOptions;
	final typeAcquisition : typescript.TypeAcquisition;
	final unresolvedImports : typescript.SortedReadonlyArray<String>;
	@:optional
	final cachePath : String;
	final kind : String;
	final projectName : String;
};