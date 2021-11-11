package typescript;

typedef Program = {
	function getCurrentDirectory():String;
	/**
		Get a list of root file names that were passed to a 'createProgram'
	**/
	function getRootFileNames():haxe.ds.ReadOnlyArray<String>;
	/**
		Get a list of files in the program
	**/
	function getSourceFiles():haxe.ds.ReadOnlyArray<SourceFile>;
	/**
		Emits the JavaScript and declaration files.  If targetSourceFile is not specified, then
		the JavaScript and declaration files will be produced for all the files in this program.
		If targetSourceFile is specified, then only the JavaScript and declaration for that
		specific file will be generated.
		
		If writeFile is not specified then the writeFile callback from the compiler host will be
		used for writing the JavaScript and declaration files.  Otherwise, the writeFile parameter
		will be invoked when writing the JavaScript and declaration files.
	**/
	function emit(?targetSourceFile:SourceFile, ?writeFile:WriteFileCallback, ?cancellationToken:CancellationToken, ?emitOnlyDtsFiles:Bool, ?customTransformers:CustomTransformers):EmitResult;
	function getOptionsDiagnostics(?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	function getGlobalDiagnostics(?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	function getSyntacticDiagnostics(?sourceFile:SourceFile, ?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<DiagnosticWithLocation>;
	/**
		The first time this is called, it will return global diagnostics (no location).
	**/
	function getSemanticDiagnostics(?sourceFile:SourceFile, ?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	function getDeclarationDiagnostics(?sourceFile:SourceFile, ?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<DiagnosticWithLocation>;
	function getConfigFileParsingDiagnostics():haxe.ds.ReadOnlyArray<Diagnostic>;
	/**
		Gets a type checker that can be used to semantically analyze source files in the program.
	**/
	function getTypeChecker():TypeChecker;
	function getTypeCatalog():haxe.ds.ReadOnlyArray<Type_>;
	function getNodeCount():Float;
	function getIdentifierCount():Float;
	function getSymbolCount():Float;
	function getTypeCount():Float;
	function getInstantiationCount():Float;
	function getRelationCacheSizes():{
		var assignable : Float;
		var identity : Float;
		var subtype : Float;
		var strictSubtype : Float;
	};
	function isSourceFileFromExternalLibrary(file:SourceFile):Bool;
	function isSourceFileDefaultLibrary(file:SourceFile):Bool;
	function getProjectReferences():Null<haxe.ds.ReadOnlyArray<ProjectReference>>;
	function getResolvedProjectReferences():Null<haxe.ds.ReadOnlyArray<Null<ResolvedProjectReference>>>;
	function getCompilerOptions():CompilerOptions;
	function getSourceFile(fileName:String):Null<SourceFile>;
	function getSourceFileByPath(path:Path):Null<SourceFile>;
};