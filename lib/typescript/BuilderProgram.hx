package typescript;

/**
	Builder to manage the program state changes
**/
typedef BuilderProgram = {
	/**
		Returns current program
	**/
	function getProgram():Program;
	/**
		Get compiler options of the program
	**/
	function getCompilerOptions():CompilerOptions;
	/**
		Get the source file in the program with file name
	**/
	function getSourceFile(fileName:String):Null<SourceFile>;
	/**
		Get a list of files in the program
	**/
	function getSourceFiles():haxe.ds.ReadOnlyArray<SourceFile>;
	/**
		Get the diagnostics for compiler options
	**/
	function getOptionsDiagnostics(?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	/**
		Get the diagnostics that dont belong to any file
	**/
	function getGlobalDiagnostics(?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	/**
		Get the diagnostics from config file parsing
	**/
	function getConfigFileParsingDiagnostics():haxe.ds.ReadOnlyArray<Diagnostic>;
	/**
		Get the syntax diagnostics, for all source files if source file is not supplied
	**/
	function getSyntacticDiagnostics(?sourceFile:SourceFile, ?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	/**
		Get the declaration diagnostics, for all source files if source file is not supplied
	**/
	function getDeclarationDiagnostics(?sourceFile:SourceFile, ?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<DiagnosticWithLocation>;
	/**
		Get all the dependencies of the file
	**/
	function getAllDependencies(sourceFile:SourceFile):haxe.ds.ReadOnlyArray<String>;
	/**
		Gets the semantic diagnostics from the program corresponding to this state of file (if provided) or whole program
		The semantic diagnostics are cached and managed here
		Note that it is assumed that when asked about semantic diagnostics through this API,
		the file has been taken out of affected files so it is safe to use cache or get from program and cache the diagnostics
		In case of SemanticDiagnosticsBuilderProgram if the source file is not provided,
		it will iterate through all the affected files, to ensure that cache stays valid and yet provide a way to get all semantic diagnostics
	**/
	function getSemanticDiagnostics(?sourceFile:SourceFile, ?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	/**
		Emits the JavaScript and declaration files.
		When targetSource file is specified, emits the files corresponding to that source file,
		otherwise for the whole program.
		In case of EmitAndSemanticDiagnosticsBuilderProgram, when targetSourceFile is specified,
		it is assumed that that file is handled from affected file list. If targetSourceFile is not specified,
		it will only emit all the affected files instead of whole program
		
		The first of writeFile if provided, writeFile of BuilderProgramHost if provided, writeFile of compiler host
		in that order would be used to write the files
	**/
	function emit(?targetSourceFile:SourceFile, ?writeFile:WriteFileCallback, ?cancellationToken:CancellationToken, ?emitOnlyDtsFiles:Bool, ?customTransformers:CustomTransformers):EmitResult;
	/**
		Get the current directory of the program
	**/
	function getCurrentDirectory():String;
};