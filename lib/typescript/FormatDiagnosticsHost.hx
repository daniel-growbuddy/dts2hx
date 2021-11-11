package typescript;

typedef FormatDiagnosticsHost = {
	function getCurrentDirectory():String;
	function getCanonicalFileName(fileName:String):String;
	function getNewLine():String;
};