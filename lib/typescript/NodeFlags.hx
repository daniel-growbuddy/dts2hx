package typescript;

@:jsRequire("typescript", "NodeFlags") @:enum extern abstract NodeFlags(Int) from Int to Int {
	var None;
	var Let;
	var Const;
	var NestedNamespace;
	var Synthesized;
	var Namespace;
	var OptionalChain;
	var ExportContext;
	var ContainsThis;
	var HasImplicitReturn;
	var HasExplicitReturn;
	var GlobalAugmentation;
	var HasAsyncFunctions;
	var DisallowInContext;
	var YieldContext;
	var DecoratorContext;
	var AwaitContext;
	var ThisNodeHasError;
	var JavaScriptFile;
	var ThisNodeOrAnySubNodesHasError;
	var HasAggregatedChildData;
	var JSDoc;
	var JsonFile;
	var BlockScoped;
	var ReachabilityCheckFlags;
	var ReachabilityAndEmitFlags;
	var ContextFlags;
	var TypeExcludesFlags;
}