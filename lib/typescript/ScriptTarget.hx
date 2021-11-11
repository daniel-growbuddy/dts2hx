package typescript;

@:jsRequire("typescript", "ScriptTarget") @:enum extern abstract ScriptTarget(Int) from Int to Int {
	var ES3;
	var ES5;
	var ES2015;
	var ES2016;
	var ES2017;
	var ES2018;
	var ES2019;
	var ES2020;
	var ESNext;
	var JSON;
	var Latest;
}