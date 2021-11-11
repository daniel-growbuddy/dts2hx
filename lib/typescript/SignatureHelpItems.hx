package typescript;

/**
	Represents a set of signature help items, and the preferred item that should be selected.
**/
typedef SignatureHelpItems = {
	var items : Array<SignatureHelpItem>;
	var applicableSpan : TextSpan;
	var selectedItemIndex : Float;
	var argumentIndex : Float;
	var argumentCount : Float;
};