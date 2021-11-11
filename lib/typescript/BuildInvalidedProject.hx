package typescript;

typedef BuildInvalidedProject<T> = {
	final kind : Int;
	function getBuilderProgram():Null<T>;
	function getProgram():Null<Program>;
	function getSourceFile(fileName:String):Null<SourceFile>;
	function getSourceFiles():haxe.ds.ReadOnlyArray<SourceFile>;
	function getOptionsDiagnostics(?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	function getGlobalDiagnostics(?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	function getConfigFileParsingDiagnostics():haxe.ds.ReadOnlyArray<Diagnostic>;
	function getSyntacticDiagnostics(?sourceFile:SourceFile, ?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	function getAllDependencies(sourceFile:SourceFile):haxe.ds.ReadOnlyArray<String>;
	function getSemanticDiagnostics(?sourceFile:SourceFile, ?cancellationToken:CancellationToken):haxe.ds.ReadOnlyArray<Diagnostic>;
	function getSemanticDiagnosticsOfNextAffectedFile(?cancellationToken:CancellationToken, ?ignoreSourceFile:(sourceFile:SourceFile) -> Bool):AffectedFileResult<haxe.ds.ReadOnlyArray<Diagnostic>>;
	function emit(?targetSourceFile:SourceFile, ?writeFile:WriteFileCallback, ?cancellationToken:CancellationToken, ?emitOnlyDtsFiles:Bool, ?customTransformers:CustomTransformers):Null<EmitResult>;
	final project : ResolvedConfigFileName;
	/**
		To dispose this project and ensure that all the necessary actions are taken and state is updated accordingly
	**/
	function done(?cancellationToken:CancellationToken, ?writeFile:WriteFileCallback, ?customTransformers:CustomTransformers):ExitStatus;
	function getCompilerOptions():CompilerOptions;
	function getCurrentDirectory():String;
};