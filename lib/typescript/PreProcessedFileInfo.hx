package typescript;

typedef PreProcessedFileInfo = {
	var referencedFiles : Array<FileReference>;
	var typeReferenceDirectives : Array<FileReference>;
	var libReferenceDirectives : Array<FileReference>;
	var importedFiles : Array<FileReference>;
	@:optional
	var ambientExternalModules : Array<String>;
	var isLibFile : Bool;
};