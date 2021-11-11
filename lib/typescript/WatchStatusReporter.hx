package typescript;

typedef WatchStatusReporter = ts.AnyOf2<(diagnostic:Diagnostic, newLine:String, options:CompilerOptions) -> Void, (diagnostic:Diagnostic, newLine:String, options:CompilerOptions, errorCount:Float) -> Void>;