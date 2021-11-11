package typescript.server;

typedef SetTypings = {
	final typeAcquisition : typescript.TypeAcquisition;
	final compilerOptions : typescript.CompilerOptions;
	final typings : Array<String>;
	final unresolvedImports : typescript.SortedReadonlyArray<String>;
	final kind : String;
	final projectName : String;
};