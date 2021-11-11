package typescript;

typedef CompilerOptions = {
	@:optional
	var allowJs : Bool;
	@:optional
	var allowSyntheticDefaultImports : Bool;
	@:optional
	var allowUmdGlobalAccess : Bool;
	@:optional
	var allowUnreachableCode : Bool;
	@:optional
	var allowUnusedLabels : Bool;
	@:optional
	var alwaysStrict : Bool;
	@:optional
	var baseUrl : String;
	@:optional
	var charset : String;
	@:optional
	var checkJs : Bool;
	@:optional
	var declaration : Bool;
	@:optional
	var declarationMap : Bool;
	@:optional
	var emitDeclarationOnly : Bool;
	@:optional
	var declarationDir : String;
	@:optional
	var disableSizeLimit : Bool;
	@:optional
	var disableSourceOfProjectReferenceRedirect : Bool;
	@:optional
	var disableSolutionSearching : Bool;
	@:optional
	var disableReferencedProjectLoad : Bool;
	@:optional
	var downlevelIteration : Bool;
	@:optional
	var emitBOM : Bool;
	@:optional
	var emitDecoratorMetadata : Bool;
	@:optional
	var experimentalDecorators : Bool;
	@:optional
	var forceConsistentCasingInFileNames : Bool;
	@:optional
	var importHelpers : Bool;
	@:optional
	var importsNotUsedAsValues : ImportsNotUsedAsValues;
	@:optional
	var inlineSourceMap : Bool;
	@:optional
	var inlineSources : Bool;
	@:optional
	var isolatedModules : Bool;
	@:optional
	var jsx : JsxEmit;
	@:optional
	var keyofStringsOnly : Bool;
	@:optional
	var lib : Array<String>;
	@:optional
	var locale : String;
	@:optional
	var mapRoot : String;
	@:optional
	var maxNodeModuleJsDepth : Float;
	@:optional
	var module : ModuleKind;
	@:optional
	var moduleResolution : ModuleResolutionKind;
	@:optional
	var newLine : NewLineKind;
	@:optional
	var noEmit : Bool;
	@:optional
	var noEmitHelpers : Bool;
	@:optional
	var noEmitOnError : Bool;
	@:optional
	var noErrorTruncation : Bool;
	@:optional
	var noFallthroughCasesInSwitch : Bool;
	@:optional
	var noImplicitAny : Bool;
	@:optional
	var noImplicitReturns : Bool;
	@:optional
	var noImplicitThis : Bool;
	@:optional
	var noStrictGenericChecks : Bool;
	@:optional
	var noUnusedLocals : Bool;
	@:optional
	var noUnusedParameters : Bool;
	@:optional
	var noImplicitUseStrict : Bool;
	@:optional
	var assumeChangesOnlyAffectDirectDependencies : Bool;
	@:optional
	var noLib : Bool;
	@:optional
	var noResolve : Bool;
	@:optional
	var noUncheckedIndexedAccess : Bool;
	@:optional
	var out : String;
	@:optional
	var outDir : String;
	@:optional
	var outFile : String;
	@:optional
	var paths : MapLike<Array<String>>;
	@:optional
	var preserveConstEnums : Bool;
	@:optional
	var preserveSymlinks : Bool;
	@:optional
	var project : String;
	@:optional
	var reactNamespace : String;
	@:optional
	var jsxFactory : String;
	@:optional
	var jsxFragmentFactory : String;
	@:optional
	var jsxImportSource : String;
	@:optional
	var composite : Bool;
	@:optional
	var incremental : Bool;
	@:optional
	var tsBuildInfoFile : String;
	@:optional
	var removeComments : Bool;
	@:optional
	var rootDir : String;
	@:optional
	var rootDirs : Array<String>;
	@:optional
	var skipLibCheck : Bool;
	@:optional
	var skipDefaultLibCheck : Bool;
	@:optional
	var sourceMap : Bool;
	@:optional
	var sourceRoot : String;
	@:optional
	var strict : Bool;
	@:optional
	var strictFunctionTypes : Bool;
	@:optional
	var strictBindCallApply : Bool;
	@:optional
	var strictNullChecks : Bool;
	@:optional
	var strictPropertyInitialization : Bool;
	@:optional
	var stripInternal : Bool;
	@:optional
	var suppressExcessPropertyErrors : Bool;
	@:optional
	var suppressImplicitAnyIndexErrors : Bool;
	@:optional
	var target : ScriptTarget;
	@:optional
	var traceResolution : Bool;
	@:optional
	var resolveJsonModule : Bool;
	@:optional
	var types : Array<String>;
	/**
		Paths used to compute primary types search locations
	**/
	@:optional
	var typeRoots : Array<String>;
	@:optional
	var esModuleInterop : Bool;
	@:optional
	var useDefineForClassFields : Bool;
};