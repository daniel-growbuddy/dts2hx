package three;
@:jsRequire("three", "DiscreteInterpolant") extern class DiscreteInterpolant extends Interpolant {
	function new(parameterPositions:Dynamic, samplesValues:Dynamic, sampleSize:Float, ?resultBuffer:Dynamic);
	function interpolate_(i1:Float, t0:Float, t:Float, t1:Float):Dynamic;
}