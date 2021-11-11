package typescript;

typedef ResolvedProjectReference = {
	var commandLine : ParsedCommandLine;
	var sourceFile : SourceFile;
	@:optional
	var references : haxe.ds.ReadOnlyArray<Null<ResolvedProjectReference>>;
};