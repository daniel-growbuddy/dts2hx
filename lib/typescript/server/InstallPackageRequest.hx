package typescript.server;

typedef InstallPackageRequest = {
	final kind : String;
	final fileName : typescript.Path;
	final packageName : String;
	final projectRootPath : typescript.Path;
	final projectName : String;
};