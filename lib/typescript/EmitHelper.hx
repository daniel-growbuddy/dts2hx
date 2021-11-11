package typescript;

typedef EmitHelper = {
	final name : String;
	final scoped : Bool;
	final text : ts.AnyOf2<String, (node:EmitHelperUniqueNameCallback) -> String>;
	@:optional
	final priority : Float;
	@:optional
	final dependencies : Array<EmitHelper>;
};