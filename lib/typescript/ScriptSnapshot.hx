package typescript;

@:jsRequire("typescript", "ScriptSnapshot") @valueModuleOnly extern class ScriptSnapshot {
	static function fromString(text:String):IScriptSnapshot;
}