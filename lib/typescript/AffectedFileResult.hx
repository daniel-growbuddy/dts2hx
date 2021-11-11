package typescript;

typedef AffectedFileResult<T> = Null<{
	var result : T;
	var affected : ts.AnyOf2<SourceFile, Program>;
}>;