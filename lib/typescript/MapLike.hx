package typescript;

/**
	Type of objects whose values are all of the same type.
	The `in` and `for-in` operators can *not* be safely used,
	since `Object.prototype` may be modified by outside code.
**/
typedef MapLike<T> = { };