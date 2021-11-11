package typescript;

/**
	The document registry represents a store of SourceFile objects that can be shared between
	multiple LanguageService instances. A LanguageService instance holds on the SourceFile (AST)
	of files in the context.
	SourceFile objects account for most of the memory usage by the language service. Sharing
	the same DocumentRegistry instance between different instances of LanguageService allow
	for more efficient memory utilization since all projects will share at least the library
	file (lib.d.ts).
	
	A more advanced use of the document registry is to serialize sourceFile objects to disk
	and re-hydrate them when needed.
	
	To create a default DocumentRegistry, use createDocumentRegistry to create one, and pass it
	to all subsequent createLanguageService calls.
**/
typedef DocumentRegistry = {
	/**
		Request a stored SourceFile with a given fileName and compilationSettings.
		The first call to acquire will call createLanguageServiceSourceFile to generate
		the SourceFile if was not found in the registry.
	**/
	function acquireDocument(fileName:String, compilationSettings:CompilerOptions, scriptSnapshot:IScriptSnapshot, version:String, ?scriptKind:ScriptKind):SourceFile;
	function acquireDocumentWithKey(fileName:String, path:Path, compilationSettings:CompilerOptions, key:DocumentRegistryBucketKey, scriptSnapshot:IScriptSnapshot, version:String, ?scriptKind:ScriptKind):SourceFile;
	/**
		Request an updated version of an already existing SourceFile with a given fileName
		and compilationSettings. The update will in-turn call updateLanguageServiceSourceFile
		to get an updated SourceFile.
	**/
	function updateDocument(fileName:String, compilationSettings:CompilerOptions, scriptSnapshot:IScriptSnapshot, version:String, ?scriptKind:ScriptKind):SourceFile;
	function updateDocumentWithKey(fileName:String, path:Path, compilationSettings:CompilerOptions, key:DocumentRegistryBucketKey, scriptSnapshot:IScriptSnapshot, version:String, ?scriptKind:ScriptKind):SourceFile;
	function getKeyForCompilationSettings(settings:CompilerOptions):DocumentRegistryBucketKey;
	/**
		Informs the DocumentRegistry that a file is not needed any longer.
		
		Note: It is not allowed to call release on a SourceFile that was not acquired from
		this registry originally.
	**/
	function releaseDocument(fileName:String, compilationSettings:CompilerOptions):Void;
	function releaseDocumentWithKey(path:Path, key:DocumentRegistryBucketKey):Void;
	function reportStats():String;
};