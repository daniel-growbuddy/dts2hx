package typescript;

/**
	Reports config file diagnostics
**/
typedef ConfigFileDiagnosticsReporter = {
	/**
		Reports unrecoverable error when parsing config file
	**/
	dynamic function onUnRecoverableConfigFileDiagnostic(diagnostic:Diagnostic):Void;
};