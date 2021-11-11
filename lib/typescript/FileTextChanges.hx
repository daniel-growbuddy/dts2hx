package typescript;

typedef FileTextChanges = {
	var fileName : String;
	var textChanges : haxe.ds.ReadOnlyArray<TextChange>;
	@:optional
	var isNewFile : Bool;
};