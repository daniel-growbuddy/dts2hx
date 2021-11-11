package typescript.server;

typedef PackageInstalledResponse = {
	final kind : String;
	final success : Bool;
	final message : String;
	final projectName : String;
};