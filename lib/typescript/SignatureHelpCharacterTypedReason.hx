package typescript;

/**
	Signals that the signature help request came from a user typing a character.
	Depending on the character and the syntactic context, the request may or may not be served a result.
**/
typedef SignatureHelpCharacterTypedReason = {
	var kind : String;
	/**
		Character that was responsible for triggering signature help.
	**/
	var triggerCharacter : SignatureHelpTriggerCharacter;
};