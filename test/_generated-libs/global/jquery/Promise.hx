package global.jquery;
/**
	This object provides a subset of the methods of the Deferred object (then, done, fail, always, pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
**/
extern typedef Promise<TR, TJ, TN> = {
	/**
		Add handlers to be called when the Deferred object is either resolved or rejected.
	**/
	function always(alwaysCallback:ts.AnyOf2<(t:ts.AnyOf2<TR, TJ>, u:ts.AnyOf2<TR, TJ>, v:ts.AnyOf2<TR, TJ>, r:haxe.extern.Rest<ts.AnyOf2<TR, TJ>>) -> Void, std.Array<(t:ts.AnyOf2<TR, TJ>, u:ts.AnyOf2<TR, TJ>, v:ts.AnyOf2<TR, TJ>, r:haxe.extern.Rest<ts.AnyOf2<TR, TJ>>) -> Void>>, alwaysCallbacks:haxe.extern.Rest<ts.AnyOf2<(t:ts.AnyOf2<TR, TJ>, u:ts.AnyOf2<TR, TJ>, v:ts.AnyOf2<TR, TJ>, r:haxe.extern.Rest<ts.AnyOf2<TR, TJ>>) -> Void, std.Array<(t:ts.AnyOf2<TR, TJ>, u:ts.AnyOf2<TR, TJ>, v:ts.AnyOf2<TR, TJ>, r:haxe.extern.Rest<ts.AnyOf2<TR, TJ>>) -> Void>>>):Promise<TR, TJ, TN>;
	/**
		Add handlers to be called when the Deferred object is resolved.
	**/
	function done(doneCallback:ts.AnyOf2<(t:TR, u:TR, v:TR, r:haxe.extern.Rest<TR>) -> Void, std.Array<(t:TR, u:TR, v:TR, r:haxe.extern.Rest<TR>) -> Void>>, doneCallbacks:haxe.extern.Rest<ts.AnyOf2<(t:TR, u:TR, v:TR, r:haxe.extern.Rest<TR>) -> Void, std.Array<(t:TR, u:TR, v:TR, r:haxe.extern.Rest<TR>) -> Void>>>):Promise<TR, TJ, TN>;
	/**
		Add handlers to be called when the Deferred object is rejected.
	**/
	function fail(failCallback:ts.AnyOf2<(t:TJ, u:TJ, v:TJ, r:haxe.extern.Rest<TJ>) -> Void, std.Array<(t:TJ, u:TJ, v:TJ, r:haxe.extern.Rest<TJ>) -> Void>>, failCallbacks:haxe.extern.Rest<ts.AnyOf2<(t:TJ, u:TJ, v:TJ, r:haxe.extern.Rest<TJ>) -> Void, std.Array<(t:TJ, u:TJ, v:TJ, r:haxe.extern.Rest<TJ>) -> Void>>>):Promise<TR, TJ, TN>;
	/**
		Add handlers to be called when the Deferred object generates progress notifications.
	**/
	function progress(progressCallback:ts.AnyOf2<(t:TN, u:TN, v:TN, r:haxe.extern.Rest<TN>) -> Void, std.Array<(t:TN, u:TN, v:TN, r:haxe.extern.Rest<TN>) -> Void>>, progressCallbacks:haxe.extern.Rest<ts.AnyOf2<(t:TN, u:TN, v:TN, r:haxe.extern.Rest<TN>) -> Void, std.Array<(t:TN, u:TN, v:TN, r:haxe.extern.Rest<TN>) -> Void>>>):Promise<TR, TJ, TN>;
	/**
		Return a Deferred's Promise object.
		
		Return a Deferred's Promise object.
	**/
	@:overload(function():Promise<TR, TJ, TN> { })
	function promise<TTarget>(target:TTarget):Any;
	/**
		Determine the current state of a Deferred object.
	**/
	function state():String;
	/**
		Utility method to filter and/or chain Deferreds.
		
		Utility method to filter and/or chain Deferreds.
		
		Utility method to filter and/or chain Deferreds.
		
		Utility method to filter and/or chain Deferreds.
		
		Utility method to filter and/or chain Deferreds.
		
		Utility method to filter and/or chain Deferreds.
		
		Utility method to filter and/or chain Deferreds.
	**/
	@:overload(function<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF, ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>(doneFilter:Any, failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<AJF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<AJF>>, progressFilter:(t:TN, u:TN, v:TN, s:haxe.extern.Rest<TN>) -> ts.AnyOf3<ANP, PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>, Thenable<ANP>>):PromiseBase<ts.AnyOf2<ARF, ARP>, ts.AnyOf2<AJF, AJP>, ts.AnyOf2<ANF, ANP>, ts.AnyOf2<BRF, BRP>, ts.AnyOf2<BJF, BJP>, ts.AnyOf2<BNF, BNP>, ts.AnyOf2<CRF, CRP>, ts.AnyOf2<CJF, CJP>, ts.AnyOf2<CNF, CNP>, ts.AnyOf2<RRF, RRP>, ts.AnyOf2<RJF, RJP>, ts.AnyOf2<RNF, RNP>> { })
	@:overload(function<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND, ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>(doneFilter:(t:TR, u:TR, v:TR, s:haxe.extern.Rest<TR>) -> ts.AnyOf3<ARD, PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>, Thenable<ARD>>, failFilter:Any, progressFilter:(t:TN, u:TN, v:TN, s:haxe.extern.Rest<TN>) -> ts.AnyOf3<ANP, PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>, Thenable<ANP>>):PromiseBase<ts.AnyOf2<ARD, ARP>, ts.AnyOf2<AJD, AJP>, ts.AnyOf2<AND, ANP>, ts.AnyOf2<BRD, BRP>, ts.AnyOf2<BJD, BJP>, ts.AnyOf2<BND, BNP>, ts.AnyOf2<CRD, CRP>, ts.AnyOf2<CJD, CJP>, ts.AnyOf2<CND, CNP>, ts.AnyOf2<RRD, RRP>, ts.AnyOf2<RJD, RJP>, ts.AnyOf2<RND, RNP>> { })
	@:overload(function<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>(doneFilter:Any, failFilter:Any, ?progressFilter:(t:TN, u:TN, v:TN, s:haxe.extern.Rest<TN>) -> ts.AnyOf3<ANP, PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>, Thenable<ANP>>):PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP> { })
	@:overload(function<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND, ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>(doneFilter:(t:TR, u:TR, v:TR, s:haxe.extern.Rest<TR>) -> ts.AnyOf3<ARD, PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>, Thenable<ARD>>, failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<AJF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<AJF>>, ?progressFilter:Any):PromiseBase<ts.AnyOf2<ARD, ARF>, ts.AnyOf2<AJD, AJF>, ts.AnyOf2<AND, ANF>, ts.AnyOf2<BRD, BRF>, ts.AnyOf2<BJD, BJF>, ts.AnyOf2<BND, BNF>, ts.AnyOf2<CRD, CRF>, ts.AnyOf2<CJD, CJF>, ts.AnyOf2<CND, CNF>, ts.AnyOf2<RRD, RRF>, ts.AnyOf2<RJD, RJF>, ts.AnyOf2<RND, RNF>> { })
	@:overload(function<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>(doneFilter:Any, failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<AJF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<AJF>>, ?progressFilter:Any):PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF> { })
	@:overload(function<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>(doneFilter:(t:TR, u:TR, v:TR, s:haxe.extern.Rest<TR>) -> ts.AnyOf3<ARD, PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>, Thenable<ARD>>, ?failFilter:Any, ?progressFilter:Any):PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND> { })
	function pipe<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND, ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF, ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>(doneFilter:(t:TR, u:TR, v:TR, s:haxe.extern.Rest<TR>) -> ts.AnyOf3<ARD, PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>, Thenable<ARD>>, failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<AJF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<AJF>>, progressFilter:(t:TN, u:TN, v:TN, s:haxe.extern.Rest<TN>) -> ts.AnyOf3<ANP, PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>, Thenable<ANP>>):PromiseBase<ts.AnyOf3<ARD, ARF, ARP>, ts.AnyOf3<AJD, AJF, AJP>, ts.AnyOf3<AND, ANF, ANP>, ts.AnyOf3<BRD, BRF, BRP>, ts.AnyOf3<BJD, BJF, BJP>, ts.AnyOf3<BND, BNF, BNP>, ts.AnyOf3<CRD, CRF, CRP>, ts.AnyOf3<CJD, CJF, CJP>, ts.AnyOf3<CND, CNF, CNP>, ts.AnyOf3<RRD, RRF, RRP>, ts.AnyOf3<RJD, RJF, RJP>, ts.AnyOf3<RND, RNF, RNP>>;
	/**
		Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
		
		Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
		
		Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
		
		Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
		
		Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
		
		Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
		
		Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
	**/
	@:overload(function<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF, ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>(doneFilter:Any, failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<ARF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<ARF>>, progressFilter:(t:TN, u:TN, v:TN, s:haxe.extern.Rest<TN>) -> ts.AnyOf3<ANP, PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>, Thenable<ANP>>):PromiseBase<ts.AnyOf2<ARF, ARP>, ts.AnyOf2<AJF, AJP>, ts.AnyOf2<ANF, ANP>, ts.AnyOf2<BRF, BRP>, ts.AnyOf2<BJF, BJP>, ts.AnyOf2<BNF, BNP>, ts.AnyOf2<CRF, CRP>, ts.AnyOf2<CJF, CJP>, ts.AnyOf2<CNF, CNP>, ts.AnyOf2<RRF, RRP>, ts.AnyOf2<RJF, RJP>, ts.AnyOf2<RNF, RNP>> { })
	@:overload(function<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND, ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>(doneFilter:(t:TR, u:TR, v:TR, s:haxe.extern.Rest<TR>) -> ts.AnyOf3<ARD, PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>, Thenable<ARD>>, failFilter:Any, progressFilter:(t:TN, u:TN, v:TN, s:haxe.extern.Rest<TN>) -> ts.AnyOf3<ANP, PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>, Thenable<ANP>>):PromiseBase<ts.AnyOf2<ARD, ARP>, ts.AnyOf2<AJD, AJP>, ts.AnyOf2<AND, ANP>, ts.AnyOf2<BRD, BRP>, ts.AnyOf2<BJD, BJP>, ts.AnyOf2<BND, BNP>, ts.AnyOf2<CRD, CRP>, ts.AnyOf2<CJD, CJP>, ts.AnyOf2<CND, CNP>, ts.AnyOf2<RRD, RRP>, ts.AnyOf2<RJD, RJP>, ts.AnyOf2<RND, RNP>> { })
	@:overload(function<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>(doneFilter:Any, failFilter:Any, ?progressFilter:(t:TN, u:TN, v:TN, s:haxe.extern.Rest<TN>) -> ts.AnyOf3<ANP, PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>, Thenable<ANP>>):PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP> { })
	@:overload(function<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND, ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>(doneFilter:(t:TR, u:TR, v:TR, s:haxe.extern.Rest<TR>) -> ts.AnyOf3<ARD, PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>, Thenable<ARD>>, failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<ARF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<ARF>>, ?progressFilter:Any):PromiseBase<ts.AnyOf2<ARD, ARF>, ts.AnyOf2<AJD, AJF>, ts.AnyOf2<AND, ANF>, ts.AnyOf2<BRD, BRF>, ts.AnyOf2<BJD, BJF>, ts.AnyOf2<BND, BNF>, ts.AnyOf2<CRD, CRF>, ts.AnyOf2<CJD, CJF>, ts.AnyOf2<CND, CNF>, ts.AnyOf2<RRD, RRF>, ts.AnyOf2<RJD, RJF>, ts.AnyOf2<RND, RNF>> { })
	@:overload(function<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>(doneFilter:Any, failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<ARF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<ARF>>, ?progressFilter:Any):PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF> { })
	@:overload(function<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>(doneFilter:(t:TR, u:TR, v:TR, s:haxe.extern.Rest<TR>) -> ts.AnyOf3<ARD, PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>, Thenable<ARD>>, ?failFilter:Any, ?progressFilter:Any):PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND> { })
	function then<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND, ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF, ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>(doneFilter:(t:TR, u:TR, v:TR, s:haxe.extern.Rest<TR>) -> ts.AnyOf3<ARD, PromiseBase<ARD, AJD, AND, BRD, BJD, BND, CRD, CJD, CND, RRD, RJD, RND>, Thenable<ARD>>, failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<ARF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<ARF>>, progressFilter:(t:TN, u:TN, v:TN, s:haxe.extern.Rest<TN>) -> ts.AnyOf3<ANP, PromiseBase<ARP, AJP, ANP, BRP, BJP, BNP, CRP, CJP, CNP, RRP, RJP, RNP>, Thenable<ANP>>):PromiseBase<ts.AnyOf3<ARD, ARF, ARP>, ts.AnyOf3<AJD, AJF, AJP>, ts.AnyOf3<AND, ANF, ANP>, ts.AnyOf3<BRD, BRF, BRP>, ts.AnyOf3<BJD, BJF, BJP>, ts.AnyOf3<BND, BNF, BNP>, ts.AnyOf3<CRD, CRF, CRP>, ts.AnyOf3<CJD, CJF, CJP>, ts.AnyOf3<CND, CNF, CNP>, ts.AnyOf3<RRD, RRF, RRP>, ts.AnyOf3<RJD, RJF, RJP>, ts.AnyOf3<RND, RNF, RNP>>;
	/**
		Add handlers to be called when the Deferred object is rejected.
	**/
	@:native("catch")
	function catch_<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>(?failFilter:(t:TJ, u:TJ, v:TJ, s:haxe.extern.Rest<TJ>) -> ts.AnyOf3<ARF, PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>, Thenable<ARF>>):PromiseBase<ARF, AJF, ANF, BRF, BJF, BNF, CRF, CJF, CNF, RRF, RJF, RNF>;
};