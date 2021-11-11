package typescript;

/**
	Represents a bigint literal value without requiring bigint support
**/
typedef PseudoBigInt = {
	var negative : Bool;
	var base10Value : String;
};