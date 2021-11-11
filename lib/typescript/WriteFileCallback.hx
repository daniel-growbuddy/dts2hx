package typescript;

typedef WriteFileCallback = ts.AnyOf3<(fileName:String, data:String, writeByteOrderMark:Bool) -> Void, (fileName:String, data:String, writeByteOrderMark:Bool, onError:(message:String) -> Void) -> Void, (fileName:String, data:String, writeByteOrderMark:Bool, onError:(message:String) -> Void, sourceFiles:haxe.ds.ReadOnlyArray<SourceFile>) -> Void>;