package typescript.ts;


/**
Represents a set of signature help items, and the preferred item that should be selected.

Generated from: test-definitions/typescript/typescript-extended.d.ts:5515:5
**/
@:native('ts.SignatureHelpItems')
extern interface SignatureHelpItems {
	var items: Array<typescript.ts.SignatureHelpItem>;
	var applicableSpan: typescript.ts.TextSpan;
	var selectedItemIndex: Float;
	var argumentIndex: Float;
	var argumentCount: Float;
}

