package typescript.server;

typedef BeginInstallTypes = {
	final kind : String;
	final eventId : Float;
	final typingsInstallerVersion : String;
	final packagesToInstall : haxe.ds.ReadOnlyArray<String>;
	final projectName : String;
};