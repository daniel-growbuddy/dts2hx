package ts.html;
/**
	This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database. It is the same as the IDBCursor, except that it includes the value property.
**/
@:native("IDBCursorWithValue") extern class IDBCursorWithValue {
	function new();
	/**
		Returns the cursor's current value.
	**/
	final value : Dynamic;
	/**
		Returns the direction ("next", "nextunique", "prev" or "prevunique") of the cursor.
	**/
	final direction : String;
	/**
		Returns the key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
	**/
	final key : ts.AnyOf6<String, Float, ts.lib.IArrayBuffer, ts.lib.IDate, ts.lib.ArrayBufferView, IDBArrayKey>;
	/**
		Returns the effective key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
	**/
	final primaryKey : ts.AnyOf6<String, Float, ts.lib.IArrayBuffer, ts.lib.IDate, ts.lib.ArrayBufferView, IDBArrayKey>;
	/**
		Returns the IDBObjectStore or IDBIndex the cursor was opened from.
	**/
	final source : ts.AnyOf2<IIDBIndex, ts.lib.IIDBObjectStore>;
	/**
		Advances the cursor through the next count records in range.
	**/
	function advance(count:Float):Void;
	/**
		Advances the cursor to the next record in range.
	**/
	@:native("continue")
	function continue_(?key:ts.AnyOf6<String, Float, ts.lib.IArrayBuffer, ts.lib.IDate, ts.lib.ArrayBufferView, IDBArrayKey>):Void;
	/**
		Advances the cursor to the next record in range matching or after key and primaryKey. Throws an "InvalidAccessError" DOMException if the source is not an index.
	**/
	function continuePrimaryKey(key:ts.AnyOf6<String, Float, ts.lib.IArrayBuffer, ts.lib.IDate, ts.lib.ArrayBufferView, IDBArrayKey>, primaryKey:ts.AnyOf6<String, Float, ts.lib.IArrayBuffer, ts.lib.IDate, ts.lib.ArrayBufferView, IDBArrayKey>):Void;
	/**
		Delete the record pointed at by the cursor with a new value.
		
		If successful, request's result will be undefined.
	**/
	function delete():IIDBRequest<Null<(TPath({ pack : [], name : "Any", params : [] }) : haxe.macro.Expr.ComplexType)>>;
	/**
		Updated the record pointed at by the cursor with a new value.
		
		Throws a "DataError" DOMException if the effective object store uses in-line keys and the key would have changed.
		
		If successful, request's result will be the record's key.
	**/
	function update(value:Dynamic):IIDBRequest<ts.AnyOf6<String, Float, ts.lib.IArrayBuffer, ts.lib.IDate, ts.lib.ArrayBufferView, IDBArrayKey>>;
	static var prototype : IIDBCursorWithValue;
}