package node.fs.promises;
typedef FileHandle = {
	/**
		Gets the file descriptor for this file handle.
	**/
	final fd : Float;
	/**
		Asynchronously append data to a file, creating the file if it does not exist. The underlying file will _not_ be closed automatically.
		The `FileHandle` must have been opened for appending.
	**/
	function appendFile(data:Dynamic, ?options:ts.AnyOf2<String, { @:optional var encoding : String; @:optional var mode : ts.AnyOf2<String, Float>; @:optional var flag : ts.AnyOf2<String, Float>; }>):ts.lib.Promise<Void>;
	/**
		Asynchronous fchown(2) - Change ownership of a file.
	**/
	function chown(uid:Float, gid:Float):ts.lib.Promise<Void>;
	/**
		Asynchronous fchmod(2) - Change permissions of a file.
	**/
	function chmod(mode:ts.AnyOf2<String, Float>):ts.lib.Promise<Void>;
	/**
		Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.
	**/
	function datasync():ts.lib.Promise<Void>;
	/**
		Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.
	**/
	function sync():ts.lib.Promise<Void>;
	/**
		Asynchronously reads data from the file.
		The `FileHandle` must have been opened for reading.
	**/
	function read<TBuffer>(buffer:TBuffer, ?offset:Float, ?length:Float, ?position:Float):ts.lib.Promise<{
		var bytesRead : Float;
		var buffer : TBuffer;
	}>;
	/**
		Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
		The `FileHandle` must have been opened for reading.
		
		Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
		The `FileHandle` must have been opened for reading.
		
		Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
		The `FileHandle` must have been opened for reading.
	**/
	@:overload(function(options:ts.AnyOf2<String, { var encoding : global.BufferEncoding; @:optional var flag : ts.AnyOf2<String, Float>; }>):ts.lib.Promise<String> { })
	@:overload(function(?options:ts.AnyOf2<String, { @:optional var encoding : String; @:optional var flag : ts.AnyOf2<String, Float>; }>):ts.lib.Promise<ts.AnyOf2<String, global.Buffer>> { })
	function readFile(?options:{ @:optional var encoding : Dynamic; @:optional var flag : ts.AnyOf2<String, Float>; }):ts.lib.Promise<global.Buffer>;
	/**
		Asynchronous fstat(2) - Get file status.
	**/
	function stat():ts.lib.Promise<node.fs.Stats>;
	/**
		Asynchronous ftruncate(2) - Truncate a file to a specified length.
	**/
	function truncate(?len:Float):ts.lib.Promise<Void>;
	/**
		Asynchronously change file timestamps of the file.
	**/
	function utimes(atime:ts.AnyOf3<String, Float, ts.lib.Date_>, mtime:ts.AnyOf3<String, Float, ts.lib.Date_>):ts.lib.Promise<Void>;
	/**
		Asynchronously writes `buffer` to the file.
		The `FileHandle` must have been opened for writing.
		
		Asynchronously writes `string` to the file.
		The `FileHandle` must have been opened for writing.
		It is unsafe to call `write()` multiple times on the same file without waiting for the `Promise`
		to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.
	**/
	@:overload(function(data:Dynamic, ?position:Float, ?encoding:String):ts.lib.Promise<{
		var bytesWritten : Float;
		var buffer : String;
	}> { })
	function write<TBuffer>(buffer:TBuffer, ?offset:Float, ?length:Float, ?position:Float):ts.lib.Promise<{
		var bytesWritten : Float;
		var buffer : TBuffer;
	}>;
	/**
		Asynchronously writes data to a file, replacing the file if it already exists. The underlying file will _not_ be closed automatically.
		The `FileHandle` must have been opened for writing.
		It is unsafe to call `writeFile()` multiple times on the same file without waiting for the `Promise` to be resolved (or rejected).
	**/
	function writeFile(data:Dynamic, ?options:ts.AnyOf2<String, { @:optional var encoding : String; @:optional var mode : ts.AnyOf2<String, Float>; @:optional var flag : ts.AnyOf2<String, Float>; }>):ts.lib.Promise<Void>;
	/**
		Asynchronous close(2) - close a `FileHandle`.
	**/
	function close():ts.lib.Promise<Void>;
};