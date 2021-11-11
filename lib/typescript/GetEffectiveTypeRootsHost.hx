package typescript;

typedef GetEffectiveTypeRootsHost = {
	@:optional
	function directoryExists(directoryName:String):Bool;
	@:optional
	function getCurrentDirectory():String;
};