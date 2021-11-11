package typescript;

typedef UpdateBundleProject<T> = {
	final kind : Int;
	function emit(?writeFile:WriteFileCallback, ?customTransformers:CustomTransformers):Null<ts.AnyOf2<EmitResult, BuildInvalidedProject<T>>>;
	final project : ResolvedConfigFileName;
	/**
		To dispose this project and ensure that all the necessary actions are taken and state is updated accordingly
	**/
	function done(?cancellationToken:CancellationToken, ?writeFile:WriteFileCallback, ?customTransformers:CustomTransformers):ExitStatus;
	function getCompilerOptions():CompilerOptions;
	function getCurrentDirectory():String;
};