package three;
@:jsRequire("three", "LoaderUtils") extern class LoaderUtils {
	static function decodeText(array:ts.AnyOf9<ts.lib.IInt8Array, ts.lib.IUint8Array, ts.lib.IUint8ClampedArray, ts.lib.IInt16Array, ts.lib.IUint16Array, ts.lib.IInt32Array, ts.lib.IUint32Array, ts.lib.IFloat32Array, ts.lib.IFloat64Array>):String;
	static function extractUrlBase(url:String):String;
}