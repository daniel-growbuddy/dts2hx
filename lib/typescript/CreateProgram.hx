package typescript;

/**
	Create the program with rootNames and options, if they are undefined, oldProgram and new configFile diagnostics create new program
**/
typedef CreateProgram<T> = ts.AnyOf5<(rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<CompilerOptions>) -> T, (rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<CompilerOptions>, host:CompilerHost) -> T, (rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<CompilerOptions>, host:CompilerHost, oldProgram:T) -> T, (rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<CompilerOptions>, host:CompilerHost, oldProgram:T, configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<Diagnostic>) -> T, (rootNames:Null<haxe.ds.ReadOnlyArray<String>>, options:Null<CompilerOptions>, host:CompilerHost, oldProgram:T, configFileParsingDiagnostics:haxe.ds.ReadOnlyArray<Diagnostic>, projectReferences:haxe.ds.ReadOnlyArray<ProjectReference>) -> T>;