package ts.html;
extern typedef IDOMMatrix = {
	var a : Float;
	var b : Float;
	var c : Float;
	var d : Float;
	var e : Float;
	var f : Float;
	var m11 : Float;
	var m12 : Float;
	var m13 : Float;
	var m14 : Float;
	var m21 : Float;
	var m22 : Float;
	var m23 : Float;
	var m24 : Float;
	var m31 : Float;
	var m32 : Float;
	var m33 : Float;
	var m34 : Float;
	var m41 : Float;
	var m42 : Float;
	var m43 : Float;
	var m44 : Float;
	function invertSelf():IDOMMatrix;
	function multiplySelf(?other:DOMMatrixInit):IDOMMatrix;
	function preMultiplySelf(?other:DOMMatrixInit):IDOMMatrix;
	function rotateAxisAngleSelf(?x:Float, ?y:Float, ?z:Float, ?angle:Float):IDOMMatrix;
	function rotateFromVectorSelf(?x:Float, ?y:Float):IDOMMatrix;
	function rotateSelf(?rotX:Float, ?rotY:Float, ?rotZ:Float):IDOMMatrix;
	function scale3dSelf(?scale:Float, ?originX:Float, ?originY:Float, ?originZ:Float):IDOMMatrix;
	function scaleSelf(?scaleX:Float, ?scaleY:Float, ?scaleZ:Float, ?originX:Float, ?originY:Float, ?originZ:Float):IDOMMatrix;
	function setMatrixValue(transformList:String):IDOMMatrix;
	function skewXSelf(?sx:Float):IDOMMatrix;
	function skewYSelf(?sy:Float):IDOMMatrix;
	function translateSelf(?tx:Float, ?ty:Float, ?tz:Float):IDOMMatrix;
	final is2D : Bool;
	final isIdentity : Bool;
	function flipX():IDOMMatrix;
	function flipY():IDOMMatrix;
	function inverse():IDOMMatrix;
	function multiply(?other:DOMMatrixInit):IDOMMatrix;
	function rotate(?rotX:Float, ?rotY:Float, ?rotZ:Float):IDOMMatrix;
	function rotateAxisAngle(?x:Float, ?y:Float, ?z:Float, ?angle:Float):IDOMMatrix;
	function rotateFromVector(?x:Float, ?y:Float):IDOMMatrix;
	function scale(?scaleX:Float, ?scaleY:Float, ?scaleZ:Float, ?originX:Float, ?originY:Float, ?originZ:Float):IDOMMatrix;
	function scale3d(?scale:Float, ?originX:Float, ?originY:Float, ?originZ:Float):IDOMMatrix;
	function scaleNonUniform(?scaleX:Float, ?scaleY:Float):IDOMMatrix;
	function skewX(?sx:Float):IDOMMatrix;
	function skewY(?sy:Float):IDOMMatrix;
	function toFloat32Array():ts.lib.IFloat32Array;
	function toFloat64Array():ts.lib.IFloat64Array;
	function toJSON():Dynamic;
	function transformPoint(?point:DOMPointInit):IDOMPoint;
	function translate(?tx:Float, ?ty:Float, ?tz:Float):IDOMMatrix;
};