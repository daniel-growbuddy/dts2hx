package typescript;

typedef SolutionBuilder<T> = {
	function build(?project:String, ?cancellationToken:CancellationToken):ExitStatus;
	function clean(?project:String):ExitStatus;
	function buildReferences(project:String, ?cancellationToken:CancellationToken):ExitStatus;
	function cleanReferences(?project:String):ExitStatus;
	function getNextInvalidatedProject(?cancellationToken:CancellationToken):Null<InvalidatedProject<T>>;
};