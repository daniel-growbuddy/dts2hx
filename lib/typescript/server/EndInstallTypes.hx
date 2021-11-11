package typescript.server;

typedef EndInstallTypes = {
	final kind : String;
	final installSuccess : Bool;
	final eventId : Float;
	final typingsInstallerVersion : String;
	final packagesToInstall : haxe.ds.ReadOnlyArray<String>;
	final projectName : String;
};