package typescript;

typedef CustomTransformer = {
	function transformSourceFile(node:SourceFile):SourceFile;
	function transformBundle(node:Bundle):Bundle;
};