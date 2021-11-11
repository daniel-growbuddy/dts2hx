typedef HaxeModule = ConvertedTypeDefinition;

typedef ConvertedTypeDefinition = haxe.macro.Expr.TypeDefinition & {
	tsSymbol: Null<typescript.Symbol>,
	tsSymbolAccess: Null<SymbolAccess>,
}
