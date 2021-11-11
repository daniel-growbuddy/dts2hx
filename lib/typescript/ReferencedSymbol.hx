package typescript;

typedef ReferencedSymbol = {
	var definition : ReferencedSymbolDefinitionInfo;
	var references : Array<ReferenceEntry>;
};