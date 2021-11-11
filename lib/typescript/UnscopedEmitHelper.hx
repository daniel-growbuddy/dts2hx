package typescript;

typedef UnscopedEmitHelper = {
	final scoped : Bool;
	final text : String;
	final name : String;
	@:optional
	final priority : Float;
	@:optional
	final dependencies : Array<EmitHelper>;
};