package unit.named_tuple.namedtuple;
extern interface KeyValuePair<K, V> {
	@:native("0")
	var Zero : K;
	@:native("1")
	var One : V;
}