package node.zlib;
extern typedef Gunzip = {
	function _transform(chunk:Any, encoding:String, callback:(?error:ts.lib.IError, ?data:Any) -> Void):Void;
	function _flush(callback:(?error:ts.lib.IError, ?data:Any) -> Void):Void;
	var writable : Bool;
	final writableHighWaterMark : Float;
	final writableLength : Float;
	function _write(chunk:Any, encoding:String, callback:(?error:ts.lib.IError) -> Void):Void;
	@:optional
	function _writev(chunks:std.Array<{ var chunk : Any; var encoding : String; }>, callback:(?error:ts.lib.IError) -> Void):Void;
	function _destroy(error:Null<ts.lib.IError>, callback:(error:Null<ts.lib.IError>) -> Void):Void;
	function _final(callback:(?error:ts.lib.IError) -> Void):Void;
	@:overload(function(chunk:Any, ?cb:(error:Null<ts.lib.IError>) -> Void):Bool { })
	function write(chunk:Any, ?encoding:String, ?cb:(error:Null<ts.lib.IError>) -> Void):Bool;
	function setDefaultEncoding(encoding:String):Gunzip;
	@:overload(function(chunk:Any, ?cb:() -> Void):Void { })
	@:overload(function(chunk:Any, ?encoding:String, ?cb:() -> Void):Void { })
	function end(?cb:() -> Void):Void;
	function cork():Void;
	function uncork():Void;
	var readable : Bool;
	final readableHighWaterMark : Float;
	final readableLength : Float;
	function _read(size:Float):Void;
	function read(?size:Float):Any;
	function setEncoding(encoding:String):Gunzip;
	function pause():Gunzip;
	function resume():Gunzip;
	function isPaused():Bool;
	function unpipe(?destination:global.nodejs.WritableStream):Gunzip;
	function unshift(chunk:Any):Void;
	function wrap(oldStream:global.nodejs.ReadableStream):Gunzip;
	function push(chunk:Any, ?encoding:String):Bool;
	function destroy(?error:ts.lib.IError):Void;
	/**
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. readable
		5. error
	**/
	@:overload(function(event:String, listener:(chunk:Any) -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:(err:ts.lib.IError) -> Void):Gunzip { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Any>) -> Void):Gunzip { })
	function addListener(event:String, listener:() -> Void):Gunzip;
	@:overload(function(event:String, chunk:Any):Bool { })
	@:overload(function(event:String):Bool { })
	@:overload(function(event:String):Bool { })
	@:overload(function(event:String, err:ts.lib.IError):Bool { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, args:haxe.extern.Rest<Any>):Bool { })
	function emit(event:String):Bool;
	@:overload(function(event:String, listener:(chunk:Any) -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:(err:ts.lib.IError) -> Void):Gunzip { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Any>) -> Void):Gunzip { })
	function on(event:String, listener:() -> Void):Gunzip;
	@:overload(function(event:String, listener:(chunk:Any) -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:(err:ts.lib.IError) -> Void):Gunzip { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Any>) -> Void):Gunzip { })
	function once(event:String, listener:() -> Void):Gunzip;
	@:overload(function(event:String, listener:(chunk:Any) -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:(err:ts.lib.IError) -> Void):Gunzip { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Any>) -> Void):Gunzip { })
	function prependListener(event:String, listener:() -> Void):Gunzip;
	@:overload(function(event:String, listener:(chunk:Any) -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:(err:ts.lib.IError) -> Void):Gunzip { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Any>) -> Void):Gunzip { })
	function prependOnceListener(event:String, listener:() -> Void):Gunzip;
	@:overload(function(event:String, listener:(chunk:Any) -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:() -> Void):Gunzip { })
	@:overload(function(event:String, listener:(err:ts.lib.IError) -> Void):Gunzip { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Any>) -> Void):Gunzip { })
	function removeListener(event:String, listener:() -> Void):Gunzip;
	function pipe<T>(destination:T, ?options:{ @:optional var end : Bool; }):T;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Any>) -> Void):Gunzip;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):Gunzip;
	function setMaxListeners(n:Float):Gunzip;
	function getMaxListeners():Float;
	function listeners(event:ts.AnyOf2<String, js.lib.Symbol>):std.Array<ts.lib.IFunction>;
	function rawListeners(event:ts.AnyOf2<String, js.lib.Symbol>):std.Array<ts.lib.IFunction>;
	function eventNames():std.Array<ts.AnyOf2<String, js.lib.Symbol>>;
	function listenerCount(type:ts.AnyOf2<String, js.lib.Symbol>):Float;
	final bytesRead : Float;
	final bytesWritten : Float;
	@:optional
	var shell : ts.AnyOf2<String, Bool>;
	function close(?callback:() -> Void):Void;
	function flush(?kind:ts.AnyOf2<Float, () -> Void>, ?callback:() -> Void):Void;
};