package typescript.server;

typedef InitializationFailedResponse = {
	final kind : String;
	final message : String;
	@:optional
	final stack : String;
};