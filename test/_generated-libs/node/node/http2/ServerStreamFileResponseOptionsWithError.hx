package node.http2;

typedef ServerStreamFileResponseOptionsWithError = {
	@:optional
	dynamic function onError(err:global.nodejs.ErrnoException):Void;
	@:optional
	dynamic function statCheck(stats:node.fs.Stats, headers:node.http.OutgoingHttpHeaders, statOptions:StatOptions):ts.AnyOf2<Bool, ts.Undefined>;
	@:optional
	dynamic function getTrailers(trailers:node.http.OutgoingHttpHeaders):Void;
	@:optional
	var offset : Float;
	@:optional
	var length : Float;
};