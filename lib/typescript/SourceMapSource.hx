package typescript;

typedef SourceMapSource = {
	var fileName : String;
	var text : String;
	@:optional
	dynamic function skipTrivia(pos:Float):Float;
	function getLineAndCharacterOfPosition(pos:Float):LineAndCharacter;
};