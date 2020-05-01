package ts.lib;
/**
	An object that is a CSS declaration block, and exposes style information and various style-related methods and properties.
**/
extern typedef ICSSStyleDeclaration = {
	var alignContent : String;
	var alignItems : String;
	var alignSelf : String;
	var alignmentBaseline : String;
	var animation : String;
	var animationDelay : String;
	var animationDirection : String;
	var animationDuration : String;
	var animationFillMode : String;
	var animationIterationCount : String;
	var animationName : String;
	var animationPlayState : String;
	var animationTimingFunction : String;
	var backfaceVisibility : String;
	var background : String;
	var backgroundAttachment : String;
	var backgroundClip : String;
	var backgroundColor : String;
	var backgroundImage : String;
	var backgroundOrigin : String;
	var backgroundPosition : String;
	var backgroundPositionX : String;
	var backgroundPositionY : String;
	var backgroundRepeat : String;
	var backgroundSize : String;
	var baselineShift : String;
	var blockSize : String;
	var border : String;
	var borderBlockEnd : String;
	var borderBlockEndColor : String;
	var borderBlockEndStyle : String;
	var borderBlockEndWidth : String;
	var borderBlockStart : String;
	var borderBlockStartColor : String;
	var borderBlockStartStyle : String;
	var borderBlockStartWidth : String;
	var borderBottom : String;
	var borderBottomColor : String;
	var borderBottomLeftRadius : String;
	var borderBottomRightRadius : String;
	var borderBottomStyle : String;
	var borderBottomWidth : String;
	var borderCollapse : String;
	var borderColor : String;
	var borderImage : String;
	var borderImageOutset : String;
	var borderImageRepeat : String;
	var borderImageSlice : String;
	var borderImageSource : String;
	var borderImageWidth : String;
	var borderInlineEnd : String;
	var borderInlineEndColor : String;
	var borderInlineEndStyle : String;
	var borderInlineEndWidth : String;
	var borderInlineStart : String;
	var borderInlineStartColor : String;
	var borderInlineStartStyle : String;
	var borderInlineStartWidth : String;
	var borderLeft : String;
	var borderLeftColor : String;
	var borderLeftStyle : String;
	var borderLeftWidth : String;
	var borderRadius : String;
	var borderRight : String;
	var borderRightColor : String;
	var borderRightStyle : String;
	var borderRightWidth : String;
	var borderSpacing : String;
	var borderStyle : String;
	var borderTop : String;
	var borderTopColor : String;
	var borderTopLeftRadius : String;
	var borderTopRightRadius : String;
	var borderTopStyle : String;
	var borderTopWidth : String;
	var borderWidth : String;
	var bottom : String;
	var boxShadow : String;
	var boxSizing : String;
	var breakAfter : String;
	var breakBefore : String;
	var breakInside : String;
	var captionSide : String;
	var caretColor : String;
	var clear : String;
	var clip : String;
	var clipPath : String;
	var clipRule : String;
	var color : Null<String>;
	var colorInterpolation : String;
	var colorInterpolationFilters : String;
	var columnCount : String;
	var columnFill : String;
	var columnGap : String;
	var columnRule : String;
	var columnRuleColor : String;
	var columnRuleStyle : String;
	var columnRuleWidth : String;
	var columnSpan : String;
	var columnWidth : String;
	var columns : String;
	var content : String;
	var counterIncrement : String;
	var counterReset : String;
	var cssFloat : Null<String>;
	var cssText : String;
	var cursor : String;
	var direction : String;
	var display : String;
	var dominantBaseline : String;
	var emptyCells : String;
	var enableBackground : Null<String>;
	var fill : String;
	var fillOpacity : String;
	var fillRule : String;
	var filter : String;
	var flex : String;
	var flexBasis : String;
	var flexDirection : String;
	var flexFlow : String;
	var flexGrow : String;
	var flexShrink : String;
	var flexWrap : String;
	var float : String;
	var floodColor : String;
	var floodOpacity : String;
	var font : String;
	var fontFamily : String;
	var fontFeatureSettings : String;
	var fontKerning : String;
	var fontSize : String;
	var fontSizeAdjust : String;
	var fontStretch : String;
	var fontStyle : String;
	var fontSynthesis : String;
	var fontVariant : String;
	var fontVariantCaps : String;
	var fontVariantEastAsian : String;
	var fontVariantLigatures : String;
	var fontVariantNumeric : String;
	var fontVariantPosition : String;
	var fontWeight : String;
	var gap : String;
	var glyphOrientationHorizontal : Null<String>;
	var glyphOrientationVertical : String;
	var grid : String;
	var gridArea : String;
	var gridAutoColumns : String;
	var gridAutoFlow : String;
	var gridAutoRows : String;
	var gridColumn : String;
	var gridColumnEnd : String;
	var gridColumnGap : String;
	var gridColumnStart : String;
	var gridGap : String;
	var gridRow : String;
	var gridRowEnd : String;
	var gridRowGap : String;
	var gridRowStart : String;
	var gridTemplate : String;
	var gridTemplateAreas : String;
	var gridTemplateColumns : String;
	var gridTemplateRows : String;
	var height : String;
	var hyphens : String;
	var imageOrientation : String;
	var imageRendering : String;
	var imeMode : Null<String>;
	var inlineSize : String;
	var justifyContent : String;
	var justifyItems : String;
	var justifySelf : String;
	var kerning : Null<String>;
	var layoutGrid : Null<String>;
	var layoutGridChar : Null<String>;
	var layoutGridLine : Null<String>;
	var layoutGridMode : Null<String>;
	var layoutGridType : Null<String>;
	var left : String;
	final length : Float;
	var letterSpacing : String;
	var lightingColor : String;
	var lineBreak : String;
	var lineHeight : String;
	var listStyle : String;
	var listStyleImage : String;
	var listStylePosition : String;
	var listStyleType : String;
	var margin : String;
	var marginBlockEnd : String;
	var marginBlockStart : String;
	var marginBottom : String;
	var marginInlineEnd : String;
	var marginInlineStart : String;
	var marginLeft : String;
	var marginRight : String;
	var marginTop : String;
	var marker : String;
	var markerEnd : String;
	var markerMid : String;
	var markerStart : String;
	var mask : String;
	var maskComposite : String;
	var maskImage : String;
	var maskPosition : String;
	var maskRepeat : String;
	var maskSize : String;
	var maskType : String;
	var maxBlockSize : String;
	var maxHeight : String;
	var maxInlineSize : String;
	var maxWidth : String;
	var minBlockSize : String;
	var minHeight : String;
	var minInlineSize : String;
	var minWidth : String;
	var msContentZoomChaining : Null<String>;
	var msContentZoomLimit : Null<String>;
	var msContentZoomLimitMax : Dynamic;
	var msContentZoomLimitMin : Dynamic;
	var msContentZoomSnap : Null<String>;
	var msContentZoomSnapPoints : Null<String>;
	var msContentZoomSnapType : Null<String>;
	var msContentZooming : Null<String>;
	var msFlowFrom : Null<String>;
	var msFlowInto : Null<String>;
	var msFontFeatureSettings : Null<String>;
	var msGridColumn : Dynamic;
	var msGridColumnAlign : Null<String>;
	var msGridColumnSpan : Dynamic;
	var msGridColumns : Null<String>;
	var msGridRow : Dynamic;
	var msGridRowAlign : Null<String>;
	var msGridRowSpan : Dynamic;
	var msGridRows : Null<String>;
	var msHighContrastAdjust : Null<String>;
	var msHyphenateLimitChars : Null<String>;
	var msHyphenateLimitLines : Dynamic;
	var msHyphenateLimitZone : Dynamic;
	var msHyphens : Null<String>;
	var msImeAlign : Null<String>;
	var msOverflowStyle : Null<String>;
	var msScrollChaining : Null<String>;
	var msScrollLimit : Null<String>;
	var msScrollLimitXMax : Dynamic;
	var msScrollLimitXMin : Dynamic;
	var msScrollLimitYMax : Dynamic;
	var msScrollLimitYMin : Dynamic;
	var msScrollRails : Null<String>;
	var msScrollSnapPointsX : Null<String>;
	var msScrollSnapPointsY : Null<String>;
	var msScrollSnapType : Null<String>;
	var msScrollSnapX : Null<String>;
	var msScrollSnapY : Null<String>;
	var msScrollTranslation : Null<String>;
	var msTextCombineHorizontal : Null<String>;
	var msTextSizeAdjust : Dynamic;
	var msTouchAction : Null<String>;
	var msTouchSelect : Null<String>;
	var msUserSelect : Null<String>;
	var msWrapFlow : String;
	var msWrapMargin : Dynamic;
	var msWrapThrough : String;
	var objectFit : String;
	var objectPosition : String;
	var opacity : Null<String>;
	var order : String;
	var orphans : String;
	var outline : String;
	var outlineColor : String;
	var outlineOffset : String;
	var outlineStyle : String;
	var outlineWidth : String;
	var overflow : String;
	var overflowAnchor : String;
	var overflowWrap : String;
	var overflowX : String;
	var overflowY : String;
	var padding : String;
	var paddingBlockEnd : String;
	var paddingBlockStart : String;
	var paddingBottom : String;
	var paddingInlineEnd : String;
	var paddingInlineStart : String;
	var paddingLeft : String;
	var paddingRight : String;
	var paddingTop : String;
	var pageBreakAfter : String;
	var pageBreakBefore : String;
	var pageBreakInside : String;
	var paintOrder : String;
	final parentRule : ts.html.ICSSRule;
	var penAction : Null<String>;
	var perspective : String;
	var perspectiveOrigin : String;
	var placeContent : String;
	var placeItems : String;
	var placeSelf : String;
	var pointerEvents : Null<String>;
	var position : String;
	var quotes : String;
	var resize : String;
	var right : String;
	var rotate : String;
	var rowGap : String;
	var rubyAlign : Null<String>;
	var rubyOverhang : Null<String>;
	var rubyPosition : Null<String>;
	var scale : String;
	var scrollBehavior : String;
	var shapeRendering : String;
	var stopColor : Null<String>;
	var stopOpacity : Null<String>;
	var stroke : String;
	var strokeDasharray : String;
	var strokeDashoffset : String;
	var strokeLinecap : String;
	var strokeLinejoin : String;
	var strokeMiterlimit : String;
	var strokeOpacity : String;
	var strokeWidth : String;
	var tabSize : String;
	var tableLayout : String;
	var textAlign : String;
	var textAlignLast : String;
	var textAnchor : Null<String>;
	var textCombineUpright : String;
	var textDecoration : String;
	var textDecorationColor : String;
	var textDecorationLine : String;
	var textDecorationStyle : String;
	var textEmphasis : String;
	var textEmphasisColor : String;
	var textEmphasisPosition : String;
	var textEmphasisStyle : String;
	var textIndent : String;
	var textJustify : String;
	var textKashida : Null<String>;
	var textKashidaSpace : Null<String>;
	var textOrientation : String;
	var textOverflow : String;
	var textRendering : String;
	var textShadow : String;
	var textTransform : String;
	var textUnderlinePosition : String;
	var top : String;
	var touchAction : String;
	var transform : String;
	var transformBox : String;
	var transformOrigin : String;
	var transformStyle : String;
	var transition : String;
	var transitionDelay : String;
	var transitionDuration : String;
	var transitionProperty : String;
	var transitionTimingFunction : String;
	var translate : String;
	var unicodeBidi : String;
	var userSelect : String;
	var verticalAlign : String;
	var visibility : String;
	var webkitAlignContent : String;
	var webkitAlignItems : String;
	var webkitAlignSelf : String;
	var webkitAnimation : String;
	var webkitAnimationDelay : String;
	var webkitAnimationDirection : String;
	var webkitAnimationDuration : String;
	var webkitAnimationFillMode : String;
	var webkitAnimationIterationCount : String;
	var webkitAnimationName : String;
	var webkitAnimationPlayState : String;
	var webkitAnimationTimingFunction : String;
	var webkitAppearance : String;
	var webkitBackfaceVisibility : String;
	var webkitBackgroundClip : String;
	var webkitBackgroundOrigin : String;
	var webkitBackgroundSize : String;
	var webkitBorderBottomLeftRadius : String;
	var webkitBorderBottomRightRadius : String;
	var webkitBorderImage : Null<String>;
	var webkitBorderRadius : String;
	var webkitBorderTopLeftRadius : String;
	var webkitBorderTopRightRadius : String;
	var webkitBoxAlign : String;
	var webkitBoxDirection : Null<String>;
	var webkitBoxFlex : String;
	var webkitBoxOrdinalGroup : String;
	var webkitBoxOrient : Null<String>;
	var webkitBoxPack : String;
	var webkitBoxShadow : String;
	var webkitBoxSizing : String;
	var webkitColumnBreakAfter : Null<String>;
	var webkitColumnBreakBefore : Null<String>;
	var webkitColumnBreakInside : Null<String>;
	var webkitColumnCount : Dynamic;
	var webkitColumnGap : Dynamic;
	var webkitColumnRule : Null<String>;
	var webkitColumnRuleColor : Dynamic;
	var webkitColumnRuleStyle : Null<String>;
	var webkitColumnRuleWidth : Dynamic;
	var webkitColumnSpan : Null<String>;
	var webkitColumnWidth : Dynamic;
	var webkitColumns : Null<String>;
	var webkitFilter : String;
	var webkitFlex : String;
	var webkitFlexBasis : String;
	var webkitFlexDirection : String;
	var webkitFlexFlow : String;
	var webkitFlexGrow : String;
	var webkitFlexShrink : String;
	var webkitFlexWrap : String;
	var webkitJustifyContent : String;
	var webkitLineClamp : String;
	var webkitMask : String;
	var webkitMaskBoxImage : String;
	var webkitMaskBoxImageOutset : String;
	var webkitMaskBoxImageRepeat : String;
	var webkitMaskBoxImageSlice : String;
	var webkitMaskBoxImageSource : String;
	var webkitMaskBoxImageWidth : String;
	var webkitMaskClip : String;
	var webkitMaskComposite : String;
	var webkitMaskImage : String;
	var webkitMaskOrigin : String;
	var webkitMaskPosition : String;
	var webkitMaskRepeat : String;
	var webkitMaskSize : String;
	var webkitOrder : String;
	var webkitPerspective : String;
	var webkitPerspectiveOrigin : String;
	var webkitTapHighlightColor : Null<String>;
	var webkitTextFillColor : String;
	var webkitTextSizeAdjust : String;
	var webkitTextStroke : String;
	var webkitTextStrokeColor : String;
	var webkitTextStrokeWidth : String;
	var webkitTransform : String;
	var webkitTransformOrigin : String;
	var webkitTransformStyle : String;
	var webkitTransition : String;
	var webkitTransitionDelay : String;
	var webkitTransitionDuration : String;
	var webkitTransitionProperty : String;
	var webkitTransitionTimingFunction : String;
	var webkitUserModify : Null<String>;
	var webkitUserSelect : Null<String>;
	var webkitWritingMode : Null<String>;
	var whiteSpace : String;
	var widows : String;
	var width : String;
	var willChange : String;
	var wordBreak : String;
	var wordSpacing : String;
	var wordWrap : String;
	var writingMode : String;
	var zIndex : String;
	var zoom : Null<String>;
	function getPropertyPriority(propertyName:String):String;
	function getPropertyValue(propertyName:String):String;
	function item(index:Float):String;
	function removeProperty(propertyName:String):String;
	function setProperty(propertyName:String, value:Null<String>, ?priority:String):Void;
};