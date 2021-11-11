package typescript;

typedef UpdateOutputFileStampsProject = {
	final kind : Int;
	function updateOutputFileStatmps():Void;
	final project : ResolvedConfigFileName;
	/**
		To dispose this project and ensure that all the necessary actions are taken and state is updated accordingly
	**/
	function done(?cancellationToken:CancellationToken, ?writeFile:WriteFileCallback, ?customTransformers:CustomTransformers):ExitStatus;
	function getCompilerOptions():CompilerOptions;
	function getCurrentDirectory():String;
};