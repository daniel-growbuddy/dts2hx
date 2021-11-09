(function ($hx_exports, $global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var js_node_ChildProcess = require("child_process");
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
var Sys = function() { };
Sys.__name__ = true;
Sys.environment = function() {
	var m = new haxe_ds_StringMap();
	var _g = 0;
	var _g1 = Reflect.fields(process.env);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		var v = process.env[key];
		m.h[key] = v;
	}
	return m;
};
Sys.systemName = function() {
	var _g = process.platform;
	switch(_g) {
	case "darwin":
		return "Mac";
	case "freebsd":
		return "BSD";
	case "linux":
		return "Linux";
	case "win32":
		return "Windows";
	default:
		var other = _g;
		return other;
	}
};
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	,matchedLeft: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		return HxOverrides.substr(this.r.s,0,this.r.m.index);
	}
	,matchedRight: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		var sz = this.r.m.index + this.r.m[0].length;
		return HxOverrides.substr(this.r.s,sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) {
			len = -1;
		}
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0 ? s : HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) {
				this.r.s = s;
			}
			return b;
		} else {
			var b = this.match(len < 0 ? HxOverrides.substr(s,pos,null) : HxOverrides.substr(s,pos,len));
			if(b) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b;
		}
	}
	,map: function(s,f) {
		var offset = 0;
		var buf_b = "";
		while(true) {
			if(offset >= s.length) {
				break;
			} else if(!this.matchSub(s,offset)) {
				buf_b += Std.string(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf_b += Std.string(HxOverrides.substr(s,offset,p.pos - offset));
			buf_b += Std.string(f(this));
			if(p.len == 0) {
				buf_b += Std.string(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else {
				offset = p.pos + p.len;
			}
			if(!this.r.global) {
				break;
			}
		}
		if(!this.r.global && offset > 0 && offset < s.length) {
			buf_b += Std.string(HxOverrides.substr(s,offset,null));
		}
		return buf_b;
	}
};
var Console = function() { };
Console.__name__ = true;
Console.format = function(s,formatMode) {
	s += "<//>";
	var activeFormatFlagStack = [];
	var groupedProceedingTags = [];
	var browserFormatArguments = [];
	var result = Console.formatTagPattern.map(s,function(e) {
		var escaped = e.matched(1) != null;
		if(escaped) {
			return e.matched(0);
		}
		var open = e.matched(2) == null;
		var tags = e.matched(3).split(",");
		if(!open && tags.length == 1) {
			if(tags[0] == "") {
				var last = activeFormatFlagStack[activeFormatFlagStack.length - 1];
				var i = activeFormatFlagStack.indexOf(last);
				if(i != -1) {
					var proceedingTags = groupedProceedingTags[i];
					activeFormatFlagStack.splice(i - proceedingTags,proceedingTags + 1);
					groupedProceedingTags.splice(i - proceedingTags,proceedingTags + 1);
				}
			} else if(FormatFlag.fromString(tags[0]) == "reset") {
				activeFormatFlagStack = [];
				groupedProceedingTags = [];
			} else {
				var flag = FormatFlag.fromString(tags[0]);
				if(flag != null) {
					var i = activeFormatFlagStack.indexOf(flag);
					if(i != -1) {
						var proceedingTags = groupedProceedingTags[i];
						activeFormatFlagStack.splice(i - proceedingTags,proceedingTags + 1);
						groupedProceedingTags.splice(i - proceedingTags,proceedingTags + 1);
					}
				}
			}
		} else {
			var proceedingTags = 0;
			var _g = 0;
			while(_g < tags.length) {
				var tag = tags[_g];
				++_g;
				var flag = FormatFlag.fromString(tag);
				if(flag == null) {
					return e.matched(0);
				}
				if(open) {
					activeFormatFlagStack.push(flag);
					groupedProceedingTags.push(proceedingTags);
					++proceedingTags;
				} else {
					var i = activeFormatFlagStack.indexOf(flag);
					if(i != -1) {
						var proceedingTags1 = groupedProceedingTags[i];
						activeFormatFlagStack.splice(i - proceedingTags1,proceedingTags1 + 1);
						groupedProceedingTags.splice(i - proceedingTags1,proceedingTags1 + 1);
					}
				}
			}
		}
		switch(formatMode) {
		case 0:
			if(open) {
				if(activeFormatFlagStack.length > 0) {
					var lastFlagCount = groupedProceedingTags[groupedProceedingTags.length - 1] + 1;
					var asciiFormatString = "";
					var _g = 0;
					var _g1 = lastFlagCount;
					while(_g < _g1) {
						var i = _g++;
						var idx = groupedProceedingTags.length - 1 - i;
						asciiFormatString += Console.getAsciiFormat(activeFormatFlagStack[idx]);
					}
					return asciiFormatString;
				} else {
					return "";
				}
			} else {
				var result = Console.getAsciiFormat("reset");
				var result1 = new Array(activeFormatFlagStack.length);
				var _g = 0;
				var _g1 = activeFormatFlagStack.length;
				while(_g < _g1) {
					var i = _g++;
					result1[i] = Console.getAsciiFormat(activeFormatFlagStack[i]);
				}
				var _g = [];
				var _g1 = 0;
				var _g2 = result1;
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(v != null) {
						_g.push(v);
					}
				}
				return result + _g.join("");
			}
			break;
		case 1:
			var browserFormatArguments1 = browserFormatArguments;
			var result = new Array(activeFormatFlagStack.length);
			var _g = 0;
			var _g1 = activeFormatFlagStack.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = Console.getBrowserFormat(activeFormatFlagStack[i]);
			}
			var _g = [];
			var _g1 = 0;
			var _g2 = result;
			while(_g1 < _g2.length) {
				var v = _g2[_g1];
				++_g1;
				if(v != null) {
					_g.push(v);
				}
			}
			browserFormatArguments1.push(_g.join(";"));
			return "%c";
		case 2:
			return "";
		}
	});
	return { formatted : result, browserFormatArguments : browserFormatArguments};
};
Console.stripFormatting = function(s) {
	return Console.format(s,2).formatted;
};
Console.printFormatted = function(s,outputStream) {
	if(outputStream == null) {
		outputStream = 0;
	}
	if(s == null) {
		s = "";
	}
	var result = Console.format(s,Console.formatMode);
	if(Console.formatMode == 1) {
		var logArgs = [result.formatted].concat(result.browserFormatArguments);
		switch(outputStream) {
		case 1:
			console.warn.apply(console, logArgs);
			break;
		case 2:
			console.error.apply(console, logArgs);
			break;
		case 0:case 3:
			console.log.apply(console, logArgs);
			break;
		}
		return;
	}
	Console.print(result.formatted,outputStream);
};
Console.print = function(s,outputStream) {
	if(outputStream == null) {
		outputStream = 0;
	}
	if(s == null) {
		s = "";
	}
	if(Console.printIntercept != null) {
		var allowDefaultPrint = Console.printIntercept(s,outputStream);
		if(!allowDefaultPrint) {
			return;
		}
	}
	if(Console.unicodeCompatibilityMode == 1 && !Console.unicodeCompatibilityEnabled) {
		Console.exec("chcp 65001");
		Console.unicodeCompatibilityEnabled = true;
	}
	switch(outputStream) {
	case 1:case 2:
		new _$Sys_FileOutput(2).writeString(s);
		break;
	case 0:case 3:
		new _$Sys_FileOutput(1).writeString(s);
		break;
	}
};
Console.getAsciiFormat = function(flag) {
	if(flag.charAt(0) == "#") {
		var hex = HxOverrides.substr(flag,1,null);
		var r = Std.parseInt("0x" + HxOverrides.substr(hex,0,2));
		var g = Std.parseInt("0x" + HxOverrides.substr(hex,2,2));
		var b = Std.parseInt("0x" + HxOverrides.substr(hex,4,2));
		return "\x1B[38;5;" + Console.rgbToAscii256(r,g,b) + "m";
	}
	if(HxOverrides.substr(flag,0,3) == "bg#") {
		var hex = HxOverrides.substr(flag,3,null);
		var r = Std.parseInt("0x" + HxOverrides.substr(hex,0,2));
		var g = Std.parseInt("0x" + HxOverrides.substr(hex,2,2));
		var b = Std.parseInt("0x" + HxOverrides.substr(hex,4,2));
		return "\x1B[48;5;" + Console.rgbToAscii256(r,g,b) + "m";
	}
	switch(flag) {
	case "bg_black":
		return "\x1B[48;5;" + 0 + "m";
	case "bg_blue":
		return "\x1B[48;5;" + 4 + "m";
	case "bg_cyan":
		return "\x1B[48;5;" + 6 + "m";
	case "bg_green":
		return "\x1B[48;5;" + 2 + "m";
	case "bg_light_black":
		return "\x1B[48;5;" + 8 + "m";
	case "bg_light_blue":
		return "\x1B[48;5;" + 12 + "m";
	case "bg_light_cyan":
		return "\x1B[48;5;" + 14 + "m";
	case "bg_light_green":
		return "\x1B[48;5;" + 10 + "m";
	case "bg_light_magenta":
		return "\x1B[48;5;" + 13 + "m";
	case "bg_light_red":
		return "\x1B[48;5;" + 9 + "m";
	case "bg_light_white":
		return "\x1B[48;5;" + 15 + "m";
	case "bg_light_yellow":
		return "\x1B[48;5;" + 11 + "m";
	case "bg_magenta":
		return "\x1B[48;5;" + 5 + "m";
	case "bg_red":
		return "\x1B[48;5;" + 1 + "m";
	case "bg_white":
		return "\x1B[48;5;" + 7 + "m";
	case "bg_yellow":
		return "\x1B[48;5;" + 3 + "m";
	case "black":
		return "\x1B[38;5;" + 0 + "m";
	case "blink":
		return "\x1B[5m";
	case "blue":
		return "\x1B[38;5;" + 4 + "m";
	case "bold":
		return "\x1B[1m";
	case "cyan":
		return "\x1B[38;5;" + 6 + "m";
	case "dim":
		return "\x1B[2m";
	case "green":
		return "\x1B[38;5;" + 2 + "m";
	case "hidden":
		return "\x1B[8m";
	case "invert":
		return "\x1B[7m";
	case "italic":
		return "\x1B[3m";
	case "light_black":
		return "\x1B[38;5;" + 8 + "m";
	case "light_blue":
		return "\x1B[38;5;" + 12 + "m";
	case "light_cyan":
		return "\x1B[38;5;" + 14 + "m";
	case "light_green":
		return "\x1B[38;5;" + 10 + "m";
	case "light_magenta":
		return "\x1B[38;5;" + 13 + "m";
	case "light_red":
		return "\x1B[38;5;" + 9 + "m";
	case "light_white":
		return "\x1B[38;5;" + 15 + "m";
	case "light_yellow":
		return "\x1B[38;5;" + 11 + "m";
	case "magenta":
		return "\x1B[38;5;" + 5 + "m";
	case "red":
		return "\x1B[38;5;" + 1 + "m";
	case "reset":
		return "\x1B[m";
	case "underline":
		return "\x1B[4m";
	case "white":
		return "\x1B[38;5;" + 7 + "m";
	case "yellow":
		return "\x1B[38;5;" + 3 + "m";
	default:
		return "";
	}
};
Console.rgbToAscii256 = function(r,g,b) {
	var nearIdx = function(c,set) {
		var delta = Infinity;
		var index = -1;
		var _g = 0;
		var _g1 = set.length;
		while(_g < _g1) {
			var i = _g++;
			var d = Math.abs(c - set[i]);
			if(d < delta) {
				delta = d;
				index = i;
			}
		}
		return index;
	};
	var colorSteps = [0,95,135,175,215,255];
	var ir = nearIdx(r,colorSteps);
	var ig = nearIdx(g,colorSteps);
	var ib = nearIdx(b,colorSteps);
	var ier = Math.abs(r - colorSteps[ir]);
	var ieg = Math.abs(g - colorSteps[ig]);
	var ieb = Math.abs(b - colorSteps[ib]);
	var averageColorError = ier + ieg + ieb;
	var jr = Math.round((r - 8) / 10);
	var jg = Math.round((g - 8) / 10);
	var jb = Math.round((b - 8) / 10);
	var jer = Math.abs(r - Math.max(Math.min(jr * 10 + 8,238),8));
	var jeg = Math.abs(g - Math.max(Math.min(jg * 10 + 8,238),8));
	var jeb = Math.abs(b - Math.max(Math.min(jb * 10 + 8,238),8));
	var averageGrayError = jer + jeg + jeb;
	if(averageGrayError < averageColorError && r == g && g == b) {
		var grayIndex = jr + 232;
		return grayIndex;
	} else {
		var colorIndex = 16 + ir * 36 + ig * 6 + ib;
		return colorIndex;
	}
};
Console.getBrowserFormat = function(flag) {
	if(flag.charAt(0) == "#") {
		return "color: " + flag;
	}
	if(HxOverrides.substr(flag,0,3) == "bg#") {
		return "background-color: " + HxOverrides.substr(flag,2,null);
	}
	if(flag.charAt(0) == "{") {
		return HxOverrides.substr(flag,1,flag.length - 2);
	}
	switch(flag) {
	case "bg_black":
		return "background-color: black";
	case "bg_blue":
		return "background-color: blue";
	case "bg_cyan":
		return "background-color: cyan";
	case "bg_green":
		return "background-color: green";
	case "bg_light_black":
		return "background-color: gray";
	case "bg_light_blue":
		return "background-color: lightBlue";
	case "bg_light_cyan":
		return "background-color: lightCyan";
	case "bg_light_green":
		return "background-color: lightGreen";
	case "bg_light_magenta":
		return "background-color: lightPink";
	case "bg_light_red":
		return "background-color: salmon";
	case "bg_light_white":
		return "background-color: white";
	case "bg_light_yellow":
		return "background-color: lightYellow";
	case "bg_magenta":
		return "background-color: magenta";
	case "bg_red":
		return "background-color: red";
	case "bg_white":
		return "background-color: whiteSmoke";
	case "bg_yellow":
		return "background-color: gold";
	case "black":
		return "color: black";
	case "blink":
		return "text-decoration: blink";
	case "blue":
		return "color: blue";
	case "bold":
		return "font-weight: bold";
	case "cyan":
		return "color: cyan";
	case "dim":
		return "color: gray";
	case "green":
		return "color: green";
	case "hidden":
		return "visibility: hidden; color: white";
	case "invert":
		return "-webkit-filter: invert(100%); filter: invert(100%)";
	case "italic":
		return "font-style: italic";
	case "light_black":
		return "color: gray";
	case "light_blue":
		return "color: lightBlue";
	case "light_cyan":
		return "color: lightCyan";
	case "light_green":
		return "color: lightGreen";
	case "light_magenta":
		return "color: lightPink";
	case "light_red":
		return "color: salmon";
	case "light_white":
		return "color: white";
	case "light_yellow":
		return "color: #ffed88";
	case "magenta":
		return "color: magenta";
	case "red":
		return "color: red";
	case "reset":
		return "";
	case "underline":
		return "text-decoration: underline";
	case "white":
		return "color: whiteSmoke";
	case "yellow":
		return "color: #f5ba00";
	default:
		return "";
	}
};
Console.determineConsoleFormatMode = function() {
	var hasWindowObject = typeof(window) != "undefined";
	if(hasWindowObject) {
		return 1;
	}
	var tputColors = Console.exec("tput colors");
	if(tputColors.exit == 0) {
		var tputResult = Std.parseInt(tputColors.stdout);
		if(tputResult != null && tputResult > 2) {
			return 0;
		}
	}
	var termEnv = Sys.environment().h["TERM"];
	if(termEnv != null && new EReg("cygwin|xterm|vt100","").match(termEnv)) {
		return 0;
	}
	return 2;
};
Console.exec = function(cmd,args) {
	var p = js_node_ChildProcess.spawnSync(cmd,args != null ? args : [],{ });
	var stdout = p.stdout == null ? "" : p.stdout.toString();
	if(stdout == null) {
		stdout = "";
	}
	return { exit : p.status, stdout : stdout};
};
var FormatFlag = {};
FormatFlag.fromString = function(str) {
	str = str.toLowerCase();
	if(str.charAt(0) == "#" || HxOverrides.substr(str,0,3) == "bg#") {
		var hIdx = str.indexOf("#");
		var hex = HxOverrides.substr(str,hIdx + 1,null);
		if(hex.length == 3) {
			var a = hex.split("");
			hex = [a[0],a[0],a[1],a[1],a[2],a[2]].join("");
		}
		if(new EReg("[^0-9a-f]","i").match(hex) || hex.length < 6) {
			return "";
		}
		var normalized = str.substring(0,hIdx) + "#" + hex;
		return normalized;
	}
	switch(str) {
	case "!":
		return "invert";
	case "/":
		return "reset";
	case "b":
		return "bold";
	case "bg_gray":
		return "bg_light_black";
	case "gray":
		return "light_black";
	case "i":
		return "italic";
	case "u":
		return "underline";
	default:
		return str;
	}
};
var ConverterContext = $hx_exports["ConverterContext"] = function(inputModuleName,moduleSearchPath,compilerOptions,stdLibMap,options) {
	this._rasterizeMappedTypes = true;
	this._currentTypeStack = [];
	this.unionizedFunctionTypes = true;
	this.anyUnionCollapse = false;
	this.typeStackLimit = 25;
	this.shortenTypePaths = true;
	this.processedDeclarationSymbols = [];
	this.declarationSymbolQueue = new ds_OnceOnlySymbolQueue();
	this.generatedModules = new haxe_ds_StringMap();
	var _gthis = this;
	this.options = options;
	moduleSearchPath = js_node_Path.resolve(moduleSearchPath);
	this.moduleSearchPath = moduleSearchPath;
	this.host = ts.createCompilerHost(compilerOptions);
	var moduleName = inputModuleName;
	var isRelativePath = moduleName.charAt(0) == ".";
	if(tool_TsProgramTools.isDirectPathReferenceModule(moduleName)) {
		moduleName = tool_FileTools.cwdRelativeFilePath(moduleName);
	}
	moduleName = haxe_io_Path.normalize(moduleName);
	var moduleNameParts = moduleName.split("/");
	if(moduleNameParts[0] == "@types" && moduleNameParts.length > 1) {
		moduleNameParts.shift();
	}
	var normalized = moduleNameParts.join("/");
	this.normalizedInputModuleName = isRelativePath ? "./" + normalized : normalized;
	var s = Console.logPrefix + ("" + ("Converting module <b>" + inputModuleName + "</b>"));
	var outputStream = 0;
	if(outputStream == null) {
		outputStream = 0;
	}
	if(s == null) {
		s = "";
	}
	Console.printFormatted(s + "\n",outputStream);
	Log.log("moduleSearchPath: <b>\"" + this.moduleSearchPath + "\"</>");
	var result = ts.resolveModuleName(inputModuleName,moduleSearchPath + "/.",compilerOptions,this.host);
	if(result.resolvedModule == null) {
		var failedLookupLocations = Reflect.field(result,"failedLookupLocations");
		Log.error("Failed to find typescript for module <b>\"" + inputModuleName + "\"</b>. Searched the following paths:<dim>\n\t" + failedLookupLocations.join("\n\t") + "</>");
		throw haxe_Exception.thrown("Input module not resolved");
	}
	this.inputModule = result.resolvedModule;
	var packageRootModule;
	if(this.inputModule.packageId != null) {
		var moduleName = this.inputModule.packageId.name;
		var isRelativePath = moduleName.charAt(0) == ".";
		if(tool_TsProgramTools.isDirectPathReferenceModule(moduleName)) {
			moduleName = tool_FileTools.cwdRelativeFilePath(moduleName);
		}
		moduleName = haxe_io_Path.normalize(moduleName);
		var moduleNameParts = moduleName.split("/");
		if(moduleNameParts[0] == "@types" && moduleNameParts.length > 1) {
			moduleNameParts.shift();
		}
		var normalized = moduleNameParts.join("/");
		this.packageName = isRelativePath ? "./" + normalized : normalized;
		if(this.inputModule.packageId.name != inputModuleName) {
			var result = ts.resolveModuleName(this.packageName,moduleSearchPath + "/.",compilerOptions,this.host);
			if(result.resolvedModule == null) {
				var failedLookupLocations = Reflect.field(result,"failedLookupLocations");
				Log.error("Root package for <b>" + inputModuleName + "</> was <b>" + this.packageName + "</> but this module could not be resolved. Searched the following paths:<dim>\n\t" + failedLookupLocations.join("\n\t") + "</>");
			}
			packageRootModule = result.resolvedModule;
		} else {
			packageRootModule = this.inputModule;
		}
	} else {
		packageRootModule = null;
	}
	var inputSourcePaths = [this.inputModule.resolvedFileName];
	if(packageRootModule != null) {
		inputSourcePaths.unshift(packageRootModule.resolvedFileName);
	}
	this.program = ts.createProgram(inputSourcePaths,compilerOptions,this.host);
	this.tc = this.program.getTypeChecker();
	Log.diagnostics(null,tool_TsProgramTools.getAllDiagnostics(this.program));
	var entryPointSourceFile = this.program.getSourceFile(this.inputModule.resolvedFileName);
	if(entryPointSourceFile == null) {
		throw haxe_Exception.thrown("Types not found – try installing external types with:\n\t<bg_black,white>npm install @types/" + inputModuleName + "</>");
	}
	var inputModuleSourceFiles = [];
	tool_TsProgramTools.walkReferencedSourceFiles(this.program,entryPointSourceFile,this.host,true,function(s) {
		inputModuleSourceFiles.push(s);
	});
	tool_TsProgramTools.assignModuleNames(this.program,moduleSearchPath,this.host);
	this.moduleDependencies = tool_TsProgramTools.getDependencies(this.program,inputModuleSourceFiles,this.normalizedInputModuleName,this.host);
	this.symbolAccessMap = new SymbolAccessMap(this.program);
	this.haxeTypePathMap = new HaxeTypePathMap(this.packageName != null ? this.packageName : this.normalizedInputModuleName,options.globalPackageName,this.program,this.symbolAccessMap,stdLibMap);
	tool_TsProgramTools.walkReferencedSourceFiles(this.program,entryPointSourceFile,this.host,true,function(sourceFile) {
		var _g = 0;
		var _g1 = tool_TsProgramTools.getExposedSymbolsOfSourceFile(_gthis.program,sourceFile);
		while(_g < _g1.length) {
			var symbol = _g1[_g];
			++_g;
			tool_TsSymbolTools.walkDeclarationSymbols(_gthis.tc,symbol,function(symbol,access) {
				_gthis.declarationSymbolQueue.tryEnqueue(symbol);
			});
		}
	});
	while(!this.declarationSymbolQueue.empty()) {
		var symbol = this.declarationSymbolQueue.dequeue();
		var _g = 0;
		var _g1 = this.symbolAccessMap.getAccess(symbol);
		while(_g < _g1.length) {
			var access = _g1[_g];
			++_g;
			if(ConverterContext.isHaxeModuleSource(this.tc,symbol,access)) {
				this.generateHaxeModulesFromSymbol(symbol,access);
			}
			if(ConverterContext.isGlobalField(this.tc,symbol,access)) {
				var globalModule = SupportTypes.getGlobalModuleForFieldSymbol(this,symbol,access);
				var field = this.fieldFromSymbol(symbol.name,symbol,symbol,SymbolAccess.Global([]),null);
				tool_HaxeTools.enableAccess(field,haxe_macro_Access.AStatic);
				globalModule.fields.push(field);
			}
		}
		this.processedDeclarationSymbols.push(symbol);
	}
	PostProcess.run(this);
};
ConverterContext.__name__ = true;
ConverterContext.isHaxeModuleSource = function(tc,symbol,access) {
	if(!((symbol.flags & (ts.SymbolFlags.Type | ts.SymbolFlags.ValueModule)) != 0 || tool_TsSymbolTools.isConstructorTypeVariableSymbol(tc,symbol))) {
		if((symbol.flags & (ts.SymbolFlags.Function | ts.SymbolFlags.Variable)) != 0) {
			if(access._hx_index == 1) {
				var _g = access.moduleName;
				var _g = access.sourceFileSymbol;
				if(access.symbolChain.length == 0) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return true;
	}
};
ConverterContext.requiresHxClass = function(tc,symbol) {
	if((symbol.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.ValueModule | ts.SymbolFlags.Value)) == 0) {
		return tool_TsSymbolTools.isConstructorTypeVariableSymbol(tc,symbol);
	} else {
		return true;
	}
};
ConverterContext.requiresAdditionalStructureType = function(tc,symbol) {
	if((symbol.flags & ts.SymbolFlags.Interface) != 0) {
		return ConverterContext.requiresHxClass(tc,symbol);
	} else {
		return false;
	}
};
ConverterContext.isGlobalField = function(tc,symbol,access) {
	if(access._hx_index == 2) {
		var _g = access.symbolChain;
		if(_g.length == 1) {
			var _g1 = _g[0];
			if((symbol.flags & (ts.SymbolFlags.Variable | ts.SymbolFlags.Function)) != 0 && !tool_TsSymbolTools.isConstructorTypeVariableSymbol(tc,symbol)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
};
ConverterContext.prototype = {
	getReferencedHaxeTypePath: function(symbol,moduleSymbol,accessContext,preferInterfaceStructure) {
		var _gthis = this;
		var hxTypePath = this.haxeTypePathMap.getTypePath(symbol,accessContext,preferInterfaceStructure);
		if(!hxTypePath.isExistingStdLibType) {
			if(Lambda.exists(tool_TsSymbolTools.getDeclarationsArray(symbol),function(d) {
				return d.getSourceFile().hasNoDefaultLib;
			})) {
				this.declarationSymbolQueue.tryEnqueue(symbol);
			} else if(!this.declarationSymbolQueue.has(symbol)) {
				var declaredInModules = tool_TsSymbolTools.getParentModuleNames(symbol);
				var declaredWithinInputModule = Lambda.exists(declaredInModules,function(name) {
					return name == _gthis.normalizedInputModuleName;
				});
				if(declaredWithinInputModule) {
					Log.log("Discovered symbol through reference",null,symbol);
					this.declarationSymbolQueue.tryEnqueue(symbol);
				} else if(this.options.queueExternalSymbols) {
					Log.log("Queuing external symbol",null,symbol);
					this.declarationSymbolQueue.tryEnqueue(symbol);
				}
			}
		}
		var noPack;
		if(this.shortenTypePaths && !hxTypePath.isExistingStdLibType) {
			if(moduleSymbol != null) {
				var contextTypePath = this.haxeTypePathMap.getTypePath(moduleSymbol,accessContext,false);
				noPack = contextTypePath.pack.join(".") == hxTypePath.pack.join(".");
			} else {
				noPack = false;
			}
		} else {
			noPack = false;
		}
		return { name : hxTypePath.moduleName, sub : hxTypePath.moduleName != hxTypePath.name ? hxTypePath.name : null, pack : noPack ? [] : hxTypePath.pack};
	}
	,getGeneratedModule: function(typePath) {
		var this1 = this.generatedModules;
		var key = this.getHaxeModuleKey(typePath.pack,typePath.name);
		return this1.h[key];
	}
	,generateHaxeModulesFromSymbol: function(symbol,access) {
		var _gthis = this;
		var pos = tool_TsSymbolTools.getPosition(symbol);
		var isConstructorTypeVariable = tool_TsSymbolTools.isConstructorTypeVariableSymbol(this.tc,symbol);
		var isValueModuleOnlySymbol = (symbol.flags & ts.SymbolFlags.ValueModule) != 0 && (symbol.flags & ts.SymbolFlags.Type) == 0 && !isConstructorTypeVariable;
		var fundamentalTypePath = this.haxeTypePathMap.getTypePath(symbol,access,false);
		if(!fundamentalTypePath.isExistingStdLibType) {
			var hxModule;
			if((symbol.flags & ts.SymbolFlags.Enum) != 0) {
				var isCompileTimeEnum = (symbol.flags & ts.SymbolFlags.ConstEnum) != 0;
				var hxEnumType = this.complexTypeBaseOfEnumSymbol(symbol);
				var _g = [];
				var _g1 = 0;
				var _g2 = this.tc.getExportsOfModule(symbol);
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if((v.flags & ts.SymbolFlags.EnumMember) != 0) {
						_g.push(v);
					}
				}
				var enumMembers = _g;
				var _g = [];
				var _g1 = 0;
				while(_g1 < enumMembers.length) {
					var enumMember = enumMembers[_g1];
					++_g1;
					_g.push(this.fieldFromSymbol(enumMember.name,enumMember,symbol,access,null));
				}
				var hxEnumFields = _g;
				hxModule = { pack : fundamentalTypePath.pack, name : fundamentalTypePath.name, kind : haxe_macro_TypeDefKind.TDAbstract(hxEnumType,[hxEnumType],[hxEnumType]), params : [], isExtern : true, fields : hxEnumFields, doc : this.getDoc(symbol), meta : (isCompileTimeEnum ? [] : [tool_SymbolAccessTools.toAccessMetadata(access)]).concat([{ name : ":enum", pos : pos}]), pos : pos, tsSymbol : symbol, tsSymbolAccess : access};
			} else if((symbol.flags & ts.SymbolFlags.TypeAlias) != 0) {
				var _g = [];
				var _g1 = 0;
				var _g2 = tool_TsSymbolTools.getDeclarationsArray(symbol);
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(v.kind == ts.SyntaxKind.TypeAliasDeclaration) {
						_g.push(v);
					}
				}
				var typeAliasDeclaration = _g[0];
				if(typeAliasDeclaration == null) {
					Log.warn("TypeAlias symbol did not have a TypeAliasDeclaration",null,symbol);
				}
				if(symbol.name == "AsyncComponent") {
					debugger;
				}
				var tsType = this.tc.getDeclaredTypeOfSymbol(symbol);
				var hxAliasType = this.complexTypeFromTsType(tsType,symbol,access,typeAliasDeclaration,symbol,false);
				var forceAbstractKind = (symbol.flags & ts.SymbolFlags.ValueModule) != 0 || isConstructorTypeVariable;
				var hxTypeDef = forceAbstractKind ? { pack : fundamentalTypePath.pack, name : fundamentalTypePath.name, fields : [], kind : haxe_macro_TypeDefKind.TDAbstract(hxAliasType,[hxAliasType],[hxAliasType]), params : this.typeParamDeclFromTypeDeclarationSymbol(symbol,access,typeAliasDeclaration), doc : this.getDoc(symbol), isExtern : true, meta : [tool_SymbolAccessTools.toAccessMetadata(access),{ name : ":forward", pos : pos},{ name : ":forwardStatics", pos : pos}], pos : pos, tsSymbol : symbol, tsSymbolAccess : access} : { pack : fundamentalTypePath.pack, name : fundamentalTypePath.name, fields : [], kind : haxe_macro_TypeDefKind.TDAlias(hxAliasType), params : this.typeParamDeclFromTypeDeclarationSymbol(symbol,access,typeAliasDeclaration), doc : this.getDoc(symbol), pos : pos, tsSymbol : symbol, tsSymbolAccess : access};
				hxModule = hxTypeDef;
			} else if(ConverterContext.requiresHxClass(this.tc,symbol)) {
				var classDeclaration = Lambda.find(symbol.declarations,function(d) {
					return d.kind == ts.SyntaxKind.ClassDeclaration;
				});
				var declaration;
				if(classDeclaration != null) {
					declaration = classDeclaration;
				} else if(symbol.valueDeclaration != null) {
					declaration = symbol.valueDeclaration;
				} else {
					Log.error("Expected valueDeclaration for a symbol that requires a class in haxe",null,symbol);
					declaration = null;
				}
				var declaredType = this.tc.getDeclaredTypeOfSymbol(symbol);
				var meta = [tool_SymbolAccessTools.toAccessMetadata(access)];
				var superClassPath = null;
				if(isValueModuleOnlySymbol) {
					meta.push({ name : "valueModuleOnly", pos : pos});
				}
				var callSignatures = this.tc.getSignaturesOfType(declaredType,ts.SignatureKind.Call);
				var indexSignatures = tool_TsTypeTools.getIndexSignaturesOfType(this.tc,declaredType);
				var _g = [];
				var _g1 = 0;
				var _g2 = this.tc.getPropertiesOfType(declaredType);
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(tool_TsSymbolTools.isAccessibleField(v)) {
						_g.push(v);
					}
				}
				var classMembers = _g;
				var classSuperType = tool_TsSymbolTools.getClassExtendsType(this.tc,symbol);
				if(classSuperType != null) {
					var hxSuperType = this.complexTypeFromObjectType(classSuperType,symbol,access,false,declaration);
					if(hxSuperType._hx_index == 0) {
						var p = hxSuperType.p;
						if(!this.isHxAny(hxSuperType)) {
							superClassPath = p;
						} else {
							Log.warn("Class super-type did not translate to a class-path (instead it was: <b>" + new Printer().printComplexType(hxSuperType) + "</>)",null,symbol);
							superClassPath = null;
						}
					} else {
						Log.warn("Class super-type did not translate to a class-path (instead it was: <b>" + new Printer().printComplexType(hxSuperType) + "</>)",null,symbol);
						superClassPath = null;
					}
					var _g = [];
					var _g1 = 0;
					var _g2 = this.tc.getPropertiesOfType(classSuperType);
					while(_g1 < _g2.length) {
						var v = _g2[_g1];
						++_g1;
						if(tool_TsSymbolTools.isAccessibleField(v)) {
							_g.push(v);
						}
					}
					var classSuperMembers = _g;
					var _g = [];
					var _g1 = 0;
					var _g2 = classMembers;
					while(_g1 < _g2.length) {
						var v = _g2[_g1];
						++_g1;
						var m = [v];
						var classSuperMatch = Lambda.find(classSuperMembers,(function(m) {
							return function(sm) {
								return sm.name == m[0].name;
							};
						})(m));
						var classMembers1;
						if(classSuperMatch != null) {
							if((m[0].flags & ts.SymbolFlags.Method) != 0) {
								var format = ts.TypeFormatFlags.NoTruncation;
								classMembers1 = _gthis.tc.typeToString(_gthis.getTsTypeOfField(m[0]),m[0].valueDeclaration,format) != _gthis.tc.typeToString(_gthis.getTsTypeOfField(classSuperMatch),classSuperMatch.valueDeclaration,format);
							} else {
								classMembers1 = false;
							}
						} else {
							classMembers1 = true;
						}
						if(classMembers1) {
							_g.push(v);
						}
					}
					classMembers = _g;
				}
				var fields = this.generateTypeFields(symbol,access,declaration,tool_TsSymbolTools.getConstructorSignatures(symbol,this.tc),callSignatures,indexSignatures,classMembers,fundamentalTypePath.name);
				if(classDeclaration != null) {
					if(!Lambda.exists(fields,function(f) {
						return f.name == "new";
					})) {
						var inlobj_name = "";
						var inlobj_pos_file = "src/ConverterContext.hx";
						var inlobj_pos_min = 20416;
						var inlobj_pos_max = 20441;
						var inlobj_isExtern = false;
						var inlobj_kind = haxe_macro_TypeDefKind.TDClass(null,[],false,false,false);
						var inlobj_fields_0 = { name : "new", kind : haxe_macro_FieldType.FFun({ args : [], ret : null, expr : null, params : []}), pos : { file : "src/ConverterContext.hx", min : 20424, max : 20439}};
						fields.unshift(inlobj_fields_0);
					}
				}
				tool_HaxeTools.resolveNameCollisions(fields);
				hxModule = { pack : fundamentalTypePath.pack, name : fundamentalTypePath.name, fields : fields, kind : haxe_macro_TypeDefKind.TDClass(superClassPath,[],false,false), params : this.typeParamDeclFromTypeDeclarationSymbol(symbol,access,declaration), isExtern : true, doc : this.getDoc(symbol), meta : meta, pos : pos, tsSymbol : symbol, tsSymbolAccess : access};
			} else if((symbol.flags & ts.SymbolFlags.Interface) != 0) {
				hxModule = this.createInterfaceModule(symbol,access,false);
			} else {
				Log.error("generateHaxeModulesFromSymbol(): Unhandled symbol, no flags were recognized",null,symbol);
				var fundamentalTypePath1 = fundamentalTypePath.pack;
				var fundamentalTypePath2 = fundamentalTypePath.name;
				var hxModule1 = this.getDoc(symbol);
				hxModule = { pack : fundamentalTypePath1, name : fundamentalTypePath2, fields : [], kind : haxe_macro_TypeDefKind.TDAbstract(haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []}),[haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []})],[haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []})]), doc : hxModule1, isExtern : true, pos : pos, tsSymbol : symbol, tsSymbolAccess : access};
			}
			if(isConstructorTypeVariable) {
				var constructorTypeDeclaration = symbol.valueDeclaration;
				if(constructorTypeDeclaration != null) {
					var constructorType = this.tc.getTypeOfSymbolAtLocation(symbol,constructorTypeDeclaration);
					var constructSignatures = this.tc.getSignaturesOfType(constructorType,ts.SignatureKind.Construct);
					var callSignatures = this.tc.getSignaturesOfType(constructorType,ts.SignatureKind.Call);
					var indexSignatures = tool_TsTypeTools.getIndexSignaturesOfType(this.tc,constructorType);
					var _g = [];
					var _g1 = 0;
					var _g2 = this.tc.getPropertiesOfType(constructorType);
					while(_g1 < _g2.length) {
						var v = _g2[_g1];
						++_g1;
						if(tool_TsSymbolTools.isAccessibleField(v)) {
							_g.push(v);
						}
					}
					var fields = _g;
					if(indexSignatures.length > 0) {
						Log.warn("Index signatures are not yet supported",null,symbol);
					}
					var newField = this.newFieldFromSignatures(constructSignatures,symbol,access,constructorTypeDeclaration);
					hxModule.fields.unshift(newField);
					if(callSignatures.length > 0) {
						var callField = this.functionFieldFromCallSignatures(ConverterContext.selfCallFunctionName,callSignatures,symbol,access,constructorTypeDeclaration);
						tool_HaxeTools.enableAccess(callField,haxe_macro_Access.AStatic);
						hxModule.fields.push(callField);
					}
					var _g = 0;
					while(_g < fields.length) {
						var field = fields[_g];
						++_g;
						var hxField = this.fieldFromSymbol(field.name,field,symbol,access,constructorTypeDeclaration);
						tool_HaxeTools.enableAccess(hxField,haxe_macro_Access.AStatic);
						hxModule.fields.push(hxField);
					}
				} else {
					Log.error("A symbol with a constructor type variable declaration should have a valueDeclaration",null,symbol);
				}
			}
			var _g = 0;
			var _g1 = [];
			var _g2 = 0;
			var _g3 = tool_TsSymbolTools.getExports(symbol);
			while(_g2 < _g3.length) {
				var v = _g3[_g2];
				++_g2;
				if((v.flags & ts.SymbolFlags.ClassMember) != 0 && tool_TsSymbolTools.isAccessibleField(v)) {
					_g1.push(v);
				}
			}
			var _g2 = _g1;
			while(_g < _g2.length) {
				var staticClassMember = _g2[_g];
				++_g;
				var field = this.fieldFromSymbol(staticClassMember.name,staticClassMember,symbol,access,null);
				tool_HaxeTools.enableAccess(field,haxe_macro_Access.AStatic);
				hxModule.fields.push(field);
			}
			if((symbol.flags & ts.SymbolFlags.Module) != 0) {
				var _g = [];
				var _g1 = 0;
				var _g2 = this.tc.getExportsOfModule(symbol);
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if((v.flags & ts.SymbolFlags.ModuleMember) != 0 && (tool_TsSymbolTools.isAccessibleField(v) || (v.flags & ts.SymbolFlags.Alias) != 0)) {
						_g.push(v);
					}
				}
				var moduleMemberFields = _g;
				var _g = 0;
				while(_g < moduleMemberFields.length) {
					var moduleMember = moduleMemberFields[_g];
					++_g;
					var nativeFieldName = moduleMember.name;
					if((moduleMember.flags & ts.SymbolFlags.Alias) != 0) {
						moduleMember = this.tc.getAliasedSymbol(moduleMember);
						if(!tool_TsSymbolTools.isAccessibleField(moduleMember)) {
							continue;
						}
					}
					if(tool_TsSymbolTools.isConstructorTypeVariableSymbol(this.tc,moduleMember)) {
						continue;
					}
					var field = this.fieldFromSymbol(nativeFieldName,moduleMember,symbol,access,null);
					tool_HaxeTools.enableAccess(field,haxe_macro_Access.AStatic);
					hxModule.fields.push(field);
				}
			}
			this.saveHaxeModule(hxModule);
		}
		if(ConverterContext.requiresAdditionalStructureType(this.tc,symbol)) {
			this.saveHaxeModule(this.createInterfaceModule(symbol,access,true));
		}
	}
	,createInterfaceModule: function(symbol,access,preferInterfaceStructure) {
		var _gthis = this;
		var pos = tool_TsSymbolTools.getPosition(symbol);
		var typePath = this.haxeTypePathMap.getTypePath(symbol,access,preferInterfaceStructure);
		var declaration = Lambda.find(symbol.declarations,function(d) {
			return d.kind == ts.SyntaxKind.InterfaceDeclaration;
		});
		var declaredType = this.tc.getDeclaredTypeOfSymbol(symbol);
		var _g = [];
		var _g1 = 0;
		var _g2 = this.tc.getPropertiesOfType(declaredType);
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(tool_TsSymbolTools.isAccessibleField(v)) {
				_g.push(v);
			}
		}
		var declaredMembers = _g;
		var callSignatures = this.tc.getSignaturesOfType(declaredType,ts.SignatureKind.Call);
		var kind;
		if(callSignatures.length > 0 && declaredMembers.length == 0 && preferInterfaceStructure == false) {
			var result = new Array(callSignatures.length);
			var _g = 0;
			var _g1 = callSignatures.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _gthis.complexTypeFromCallSignature(callSignatures[i],symbol,access,declaration);
			}
			var functionSignature = SupportTypes.getUnionType(this,result);
			kind = haxe_macro_TypeDefKind.TDAlias(functionSignature);
		} else {
			var fields = this.generateTypeFields(symbol,access,declaration,[],callSignatures,tool_TsTypeTools.getIndexSignaturesOfType(this.tc,declaredType),declaredMembers,typePath.name);
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				if(field.access != null) {
					var _g1 = [];
					var _g2 = 0;
					var _g3 = field.access;
					while(_g2 < _g3.length) {
						var v = _g3[_g2];
						++_g2;
						var kind1;
						switch(v._hx_index) {
						case 4:case 7:
							kind1 = true;
							break;
						default:
							kind1 = false;
						}
						if(kind1) {
							_g1.push(v);
						}
					}
					field.access = _g1;
				}
			}
			tool_HaxeTools.resolveNameCollisions(fields);
			kind = haxe_macro_TypeDefKind.TDAlias(haxe_macro_ComplexType.TAnonymous(fields));
		}
		return { pack : typePath.pack, name : typePath.name, fields : [], kind : kind, params : this.typeParamDeclFromTypeDeclarationSymbol(symbol,access,declaration), isExtern : false, doc : this.getDoc(symbol), meta : [], pos : pos, tsSymbol : symbol, tsSymbolAccess : access};
	}
	,generateTypeFields: function(symbol,access,declaration,constructorSignatures,callSignatures,indexSignatures,classMembers,haxeClassName) {
		var fields = [];
		if(constructorSignatures.length > 0) {
			fields.push(this.newFieldFromSignatures(constructorSignatures,symbol,access,declaration));
		}
		if(callSignatures.length > 0) {
			fields.push(this.functionFieldFromCallSignatures(ConverterContext.selfCallFunctionName,callSignatures,symbol,access,declaration));
		}
		if((symbol.flags & ts.SymbolFlags.Function) != 0) {
			var tsType = this.getTsTypeOfField(symbol);
			var signatures = this.tc.getSignaturesOfType(this.tc.getNonNullableType(tsType),ts.SignatureKind.Call);
			var selfCallStatic = this.functionFieldFromCallSignatures("call",signatures,symbol,access,declaration);
			tool_HaxeTools.enableAccess(selfCallStatic,haxe_macro_Access.AStatic);
			fields.push(selfCallStatic);
		} else {
			var tmp;
			if((symbol.flags & ts.SymbolFlags.Variable) != 0) {
				if(access._hx_index == 1) {
					var _g = access.moduleName;
					var _g = access.sourceFileSymbol;
					tmp = access.symbolChain.length == 0;
				} else {
					tmp = false;
				}
			} else {
				tmp = false;
			}
			if(tmp) {
				var field = this.fieldFromSymbol("value",symbol,symbol,access,declaration);
				var _g = field.kind;
				switch(_g._hx_index) {
				case 0:
					var _g1 = _g.e;
					var type = _g.t;
					field.kind = haxe_macro_FieldType.FProp("get","never",type);
					field.access = [haxe_macro_Access.AStatic];
					fields.push(field);
					var inlobj_name = "";
					var inlobj_pos_file = "src/ConverterContext.hx";
					var inlobj_pos_min = 30054;
					var inlobj_pos_max = 30146;
					var inlobj_isExtern = false;
					var inlobj_kind = haxe_macro_TypeDefKind.TDClass(null,[],false,false,false);
					var inlobj_fields_0 = { name : "get_value", access : [haxe_macro_Access.AStatic,haxe_macro_Access.AInline], kind : haxe_macro_FieldType.FFun({ args : [], ret : type, expr : { expr : haxe_macro_ExprDef.EReturn({ expr : haxe_macro_ExprDef.ECast({ expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent(haxeClassName)), pos : { file : "src/ConverterContext.hx", min : 30123, max : 30138}},null), pos : { file : "src/ConverterContext.hx", min : 30116, max : 30138}}), pos : { file : "src/ConverterContext.hx", min : 30109, max : 30138}}, params : []}), pos : { file : "src/ConverterContext.hx", min : 30068, max : 30138}};
					fields.push(inlobj_fields_0);
					break;
				case 1:
					var f = _g.f;
					var tsType = this.getTsTypeOfField(symbol);
					var signatures = this.tc.getSignaturesOfType(this.tc.getNonNullableType(tsType),ts.SignatureKind.Call);
					var selfCallStatic = this.functionFieldFromCallSignatures("call",signatures,symbol,access,declaration);
					tool_HaxeTools.enableAccess(selfCallStatic,haxe_macro_Access.AStatic);
					fields.push(selfCallStatic);
					break;
				case 2:
					var _g1 = _g.get;
					var _g1 = _g.set;
					var _g1 = _g.e;
					var type = _g.t;
					field.kind = haxe_macro_FieldType.FProp("get","never",type);
					field.access = [haxe_macro_Access.AStatic];
					fields.push(field);
					var inlobj_name = "";
					var inlobj_pos_file = "src/ConverterContext.hx";
					var inlobj_pos_min = 30054;
					var inlobj_pos_max = 30146;
					var inlobj_isExtern = false;
					var inlobj_kind = haxe_macro_TypeDefKind.TDClass(null,[],false,false,false);
					var inlobj_fields_0 = { name : "get_value", access : [haxe_macro_Access.AStatic,haxe_macro_Access.AInline], kind : haxe_macro_FieldType.FFun({ args : [], ret : type, expr : { expr : haxe_macro_ExprDef.EReturn({ expr : haxe_macro_ExprDef.ECast({ expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent(haxeClassName)), pos : { file : "src/ConverterContext.hx", min : 30123, max : 30138}},null), pos : { file : "src/ConverterContext.hx", min : 30116, max : 30138}}), pos : { file : "src/ConverterContext.hx", min : 30109, max : 30138}}, params : []}), pos : { file : "src/ConverterContext.hx", min : 30068, max : 30138}};
					fields.push(inlobj_fields_0);
					break;
				}
			}
		}
		if(indexSignatures.length > 0) {
			Log.warn("Index signatures are not yet supported",null,symbol);
		}
		var _g = 0;
		while(_g < classMembers.length) {
			var classMember = classMembers[_g];
			++_g;
			fields.push(this.fieldFromSymbol(classMember.name,classMember,symbol,access,declaration));
		}
		return fields;
	}
	,isTypeStructureInHaxe: function(type,moduleSymbol,accessContext,enclosingDeclaration) {
		if((type.flags & ts.TypeFlags.Object) != 0) {
			if(this.isHxAny(this.complexTypeFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration))) {
				return false;
			}
			var objectType = type;
			var isAnonType = (objectType.objectFlags & ts.ObjectFlags.Anonymous) != 0;
			var isInterface = type.symbol != null && (type.symbol.flags & ts.SymbolFlags.Interface) != 0;
			var isValueModule = type.symbol != null && (type.symbol.flags & ts.SymbolFlags.ValueModule) != 0;
			var isConstructorType = tool_TsTypeTools.isConstructorType(this.tc,objectType);
			var appearsToBeStructure = !isConstructorType && !isValueModule && (isAnonType || isInterface);
			var appearsToBeStructure1 = appearsToBeStructure;
			return appearsToBeStructure;
		} else {
			return false;
		}
	}
	,getHaxeModuleKey: function(pack,name) {
		var _this = pack.concat([name]);
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = _this[i].toLowerCase();
		}
		return result.join("/");
	}
	,saveHaxeModule: function($module) {
		var isBuiltIn = $module.tsSymbol != null && tool_TsSymbolTools.isBuiltIn($module.tsSymbol);
		var skipModule = false;
		if(!this.options.globalTypes) {
			if(!skipModule) {
				if(!isBuiltIn) {
					var _g = $module.tsSymbolAccess;
					if(_g == null) {
						skipModule = false;
					} else if(_g._hx_index == 2) {
						var _g1 = _g.symbolChain;
						skipModule = true;
					} else {
						skipModule = false;
					}
				} else {
					skipModule = false;
				}
			} else {
				skipModule = true;
			}
		}
		if(!this.options.modularTypes) {
			if(!skipModule) {
				if(!isBuiltIn) {
					var _g = $module.tsSymbolAccess;
					if(_g == null) {
						skipModule = false;
					} else {
						switch(_g._hx_index) {
						case 0:
							var _g1 = _g.modulePath;
							var _g1 = _g.moduleSymbol;
							var _g1 = _g.symbolChain;
							skipModule = true;
							break;
						case 1:
							var _g1 = _g.moduleName;
							var _g1 = _g.sourceFileSymbol;
							var _g1 = _g.symbolChain;
							skipModule = true;
							break;
						default:
							skipModule = false;
						}
					}
				} else {
					skipModule = false;
				}
			} else {
				skipModule = true;
			}
		}
		if(skipModule) {
			return;
		}
		var path = this.getHaxeModuleKey($module.pack,$module.name);
		var existingModule = this.generatedModules.h[path];
		if(existingModule != null) {
			Log.warn("<red><b>saveHaxeModule():</> Module <b>\"" + path + "\"</> has already been generated once and will be overwritten</>");
		}
		if(Object.prototype.hasOwnProperty.call(this.generatedModules.h,path)) {
			debugger;
		}
		this.generatedModules.h[path] = $module;
	}
	,getDoc: function(symbol) {
		var sourceLocationInfo = [];
		if(this.options.locationComments) {
			var node = symbol.valueDeclaration != null ? symbol.valueDeclaration : tool_TsSymbolTools.getDeclarationsArray(symbol)[0];
			if(node != null) {
				var sourceFile = node.getSourceFile();
				if(sourceFile != null) {
					var start = node.getStart();
					var lineAndCharacter = sourceFile.getLineAndCharacterOfPosition(start);
					var line = lineAndCharacter.line;
					var character = lineAndCharacter.character;
					sourceLocationInfo.push("" + tool_FileTools.cwdRelativeFilePath(sourceFile.fileName) + ":" + (line + 1) + (character > 0 ? ":" + (character + 1) : ""));
				}
			}
		}
		var _this = symbol.getDocumentationComment(this.tc);
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = StringTools.trim(_this[i].text);
		}
		return result.concat(sourceLocationInfo).join("\n");
	}
	,complexTypeFromTsType: function(type,moduleSymbol,accessContext,enclosingDeclaration,disallowAliasTarget,preferInterfaceStructure) {
		if(preferInterfaceStructure == null) {
			preferInterfaceStructure = false;
		}
		var _gthis = this;
		if(tool_TsTypeTools.isThisType(type)) {
			var thisTarget = tool_TsTypeTools.getThisTypeTarget(type);
			if(thisTarget != null) {
				type = thisTarget;
			}
		}
		if(this._currentTypeStack.length >= this.typeStackLimit) {
			Log.error("Internal error: Reached type-depth limit, stopping further type conversions. This indicates unbound recursive type conversion");
			debugger;
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
		}
		var stackHasType = Lambda.has(this._currentTypeStack,type);
		if(type.aliasSymbol != null && disallowAliasTarget != type.aliasSymbol) {
			this._currentTypeStack.push(type);
			var isAliasToMappedType = (type.flags & ts.TypeFlags.Object) != 0 && (type.objectFlags & ts.ObjectFlags.Mapped) != 0;
			var argsLength = type.aliasTypeArguments != null ? type.aliasTypeArguments.length : -1;
			var hxType;
			var _g_name = type.aliasSymbol.name;
			var _g_args = type.aliasTypeArguments;
			var _g_isMappedType = isAliasToMappedType;
			var _g_isBuiltIn = tool_TsSymbolTools.isBuiltIn(type.aliasSymbol);
			var _g = _g_args;
			var _g1 = _g_isBuiltIn;
			var _g2 = _g_isMappedType;
			var _g3 = _g_name;
			if(_g == null) {
				if(_g2 == true) {
					var args = _g;
					if(this._rasterizeMappedTypes && !stackHasType) {
						this._rasterizeMappedTypes = false;
						var t = this.complexTypeAnonFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration);
						this._rasterizeMappedTypes = true;
						hxType = t;
					} else {
						var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
						var params;
						if(type.aliasTypeArguments != null) {
							var _this = type.aliasTypeArguments;
							var result = new Array(_this.length);
							var _g4 = 0;
							var _g5 = _this.length;
							while(_g4 < _g5) {
								var i = _g4++;
								result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
							}
							params = result;
						} else {
							params = [];
						}
						hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
					}
				} else {
					var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
					var params;
					if(type.aliasTypeArguments != null) {
						var _this = type.aliasTypeArguments;
						var result = new Array(_this.length);
						var _g4 = 0;
						var _g5 = _this.length;
						while(_g4 < _g5) {
							var i = _g4++;
							result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
						}
						params = result;
					} else {
						params = [];
					}
					hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
				}
			} else {
				switch(_g.length) {
				case 1:
					var _g4 = _g[0];
					if(_g1 == true) {
						switch(_g3) {
						case "NonNullable":
							var t = _g4;
							hxType = t.isUnion() ? tool_HaxeTools.unwrapNull(this.complexTypeFromUnionType(t,moduleSymbol,accessContext,enclosingDeclaration)) : this.complexTypeFromTsType(t,moduleSymbol,accessContext,enclosingDeclaration);
							break;
						case "Partial":case "Readonly":
							var t = _g4;
							hxType = this.tc.getPropertiesOfType(t).length > 0 ? this.complexTypeAnonFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration) : this.complexTypeFromTsType(t,moduleSymbol,accessContext,enclosingDeclaration);
							break;
						default:
							if(_g2 == true) {
								var args = _g;
								if(this._rasterizeMappedTypes && !stackHasType) {
									this._rasterizeMappedTypes = false;
									var t = this.complexTypeAnonFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration);
									this._rasterizeMappedTypes = true;
									hxType = t;
								} else {
									var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
									var params;
									if(type.aliasTypeArguments != null) {
										var _this = type.aliasTypeArguments;
										var result = new Array(_this.length);
										var _g4 = 0;
										var _g5 = _this.length;
										while(_g4 < _g5) {
											var i = _g4++;
											result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
										}
										params = result;
									} else {
										params = [];
									}
									hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
								}
							} else {
								var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
								var params;
								if(type.aliasTypeArguments != null) {
									var _this = type.aliasTypeArguments;
									var result = new Array(_this.length);
									var _g4 = 0;
									var _g5 = _this.length;
									while(_g4 < _g5) {
										var i = _g4++;
										result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
									}
									params = result;
								} else {
									params = [];
								}
								hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
							}
						}
					} else if(_g2 == true) {
						var args = _g;
						if(this._rasterizeMappedTypes && !stackHasType) {
							this._rasterizeMappedTypes = false;
							var t = this.complexTypeAnonFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration);
							this._rasterizeMappedTypes = true;
							hxType = t;
						} else {
							var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
							var params;
							if(type.aliasTypeArguments != null) {
								var _this = type.aliasTypeArguments;
								var result = new Array(_this.length);
								var _g4 = 0;
								var _g5 = _this.length;
								while(_g4 < _g5) {
									var i = _g4++;
									result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
								}
								params = result;
							} else {
								params = [];
							}
							hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
						}
					} else {
						var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
						var params;
						if(type.aliasTypeArguments != null) {
							var _this = type.aliasTypeArguments;
							var result = new Array(_this.length);
							var _g4 = 0;
							var _g5 = _this.length;
							while(_g4 < _g5) {
								var i = _g4++;
								result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
							}
							params = result;
						} else {
							params = [];
						}
						hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
					}
					break;
				case 2:
					var _g4 = _g[0];
					var _g5 = _g[1];
					if(_g1 == true) {
						switch(_g3) {
						case "Exclude":case "Extract":case "Omit":case "Pick":case "Record":
							var k = _g4;
							var t = _g5;
							hxType = this.complexTypeAnonFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration);
							break;
						default:
							if(_g2 == true) {
								var args = _g;
								if(this._rasterizeMappedTypes && !stackHasType) {
									this._rasterizeMappedTypes = false;
									var t = this.complexTypeAnonFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration);
									this._rasterizeMappedTypes = true;
									hxType = t;
								} else {
									var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
									var params;
									if(type.aliasTypeArguments != null) {
										var _this = type.aliasTypeArguments;
										var result = new Array(_this.length);
										var _g1 = 0;
										var _g3 = _this.length;
										while(_g1 < _g3) {
											var i = _g1++;
											result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
										}
										params = result;
									} else {
										params = [];
									}
									hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
								}
							} else {
								var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
								var params;
								if(type.aliasTypeArguments != null) {
									var _this = type.aliasTypeArguments;
									var result = new Array(_this.length);
									var _g1 = 0;
									var _g3 = _this.length;
									while(_g1 < _g3) {
										var i = _g1++;
										result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
									}
									params = result;
								} else {
									params = [];
								}
								hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
							}
						}
					} else if(_g2 == true) {
						var args = _g;
						if(this._rasterizeMappedTypes && !stackHasType) {
							this._rasterizeMappedTypes = false;
							var t = this.complexTypeAnonFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration);
							this._rasterizeMappedTypes = true;
							hxType = t;
						} else {
							var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
							var params;
							if(type.aliasTypeArguments != null) {
								var _this = type.aliasTypeArguments;
								var result = new Array(_this.length);
								var _g1 = 0;
								var _g3 = _this.length;
								while(_g1 < _g3) {
									var i = _g1++;
									result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
								}
								params = result;
							} else {
								params = [];
							}
							hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
						}
					} else {
						var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
						var params;
						if(type.aliasTypeArguments != null) {
							var _this = type.aliasTypeArguments;
							var result = new Array(_this.length);
							var _g1 = 0;
							var _g3 = _this.length;
							while(_g1 < _g3) {
								var i = _g1++;
								result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
							}
							params = result;
						} else {
							params = [];
						}
						hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
					}
					break;
				default:
					if(_g2 == true) {
						var args = _g;
						if(this._rasterizeMappedTypes && !stackHasType) {
							this._rasterizeMappedTypes = false;
							var t = this.complexTypeAnonFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration);
							this._rasterizeMappedTypes = true;
							hxType = t;
						} else {
							var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
							var params;
							if(type.aliasTypeArguments != null) {
								var _this = type.aliasTypeArguments;
								var result = new Array(_this.length);
								var _g = 0;
								var _g1 = _this.length;
								while(_g < _g1) {
									var i = _g++;
									result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
								}
								params = result;
							} else {
								params = [];
							}
							hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
						}
					} else {
						var haxeTypePath = this.getReferencedHaxeTypePath(type.aliasSymbol,moduleSymbol,accessContext,preferInterfaceStructure);
						var params;
						if(type.aliasTypeArguments != null) {
							var _this = type.aliasTypeArguments;
							var result = new Array(_this.length);
							var _g = 0;
							var _g1 = _this.length;
							while(_g < _g1) {
								var i = _g++;
								result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
							}
							params = result;
						} else {
							params = [];
						}
						hxType = haxe_macro_ComplexType.TPath({ pack : haxeTypePath.pack, name : haxeTypePath.name, params : params});
					}
				}
			}
			this._currentTypeStack.pop();
			return hxType;
		}
		if(stackHasType) {
			Log.log("Breaking recursive type conversion",null,null,type);
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
		}
		this._currentTypeStack.push(type);
		var complexType;
		try {
			if((type.flags & ts.TypeFlags.Any) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
			} else if((type.flags & (ts.TypeFlags.Unknown | ts.TypeFlags.Never)) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []});
			} else if((type.flags & ts.TypeFlags.String) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "String", params : []});
			} else if((type.flags & ts.TypeFlags.Number) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "Float", params : []});
			} else if((type.flags & ts.TypeFlags.Boolean) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "Bool", params : []});
			} else if((type.flags & ts.TypeFlags.Undefined) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "Null", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
			} else if((type.flags & ts.TypeFlags.Void) != 0) {
				complexType = SupportTypes.getUndefinedType(this);
			} else if((type.flags & ts.TypeFlags.Enum) != 0) {
				var hxTypePath = this.getReferencedHaxeTypePath(type.symbol,moduleSymbol,accessContext,false);
				complexType = haxe_macro_ComplexType.TPath(hxTypePath);
			} else if((type.flags & ts.TypeFlags.Union) != 0) {
				complexType = this.complexTypeFromUnionType(type,moduleSymbol,accessContext,enclosingDeclaration);
			} else if((type.flags & ts.TypeFlags.Intersection) != 0) {
				complexType = this.complexTypeFromIntersectionType(type,moduleSymbol,accessContext,enclosingDeclaration);
			} else if((type.flags & ts.TypeFlags.StringLiteral) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "String", params : []});
			} else if((type.flags & ts.TypeFlags.NumberLiteral) != 0) {
				var numberLiteral = type;
				var value = numberLiteral.value;
				var isInt = (value | 0) == value;
				complexType = isInt ? haxe_macro_ComplexType.TPath({ pack : [], name : "Int", params : []}) : haxe_macro_ComplexType.TPath({ pack : [], name : "Float", params : []});
			} else if((type.flags & ts.TypeFlags.BooleanLiteral) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "Bool", params : []});
			} else if((type.flags & ts.TypeFlags.TypeParameter) != 0) {
				complexType = this.complexTypeFromTypeParameter(type,moduleSymbol,accessContext,enclosingDeclaration);
			} else if((type.flags & ts.TypeFlags.Object) != 0) {
				complexType = this.complexTypeFromObjectType(type,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration);
			} else if((type.flags & ts.TypeFlags.ESSymbolLike) != 0) {
				complexType = haxe_macro_ComplexType.TPath({ pack : ["js","lib"], name : "Symbol", params : []});
			} else if((type.flags & ts.TypeFlags.BigInt) != 0) {
				complexType = this.complexTypeFromTsType(this.tc.getApparentType(type),moduleSymbol,accessContext,enclosingDeclaration);
			} else {
				Log.warn("Type not yet supported",null,null,type);
				complexType = haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
			}
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			debugger;
			this._currentTypeStack.pop();
			throw haxe_Exception.thrown(e);
		}
		this._currentTypeStack.pop();
		return complexType;
	}
	,complexTypeFromUnionType: function(unionType,moduleSymbol,accessContext,enclosingDeclaration) {
		var _gthis = this;
		var nullable = tool_TsTypeTools.isNullishUnion(unionType);
		var nullFreeTsType = this.tc.getNonNullableType(unionType);
		var hxTypes;
		if(nullFreeTsType.aliasSymbol != null && nullFreeTsType.aliasSymbol != moduleSymbol) {
			hxTypes = [this.complexTypeFromTsType(nullFreeTsType,moduleSymbol,accessContext,enclosingDeclaration)];
		} else if(nullFreeTsType.isUnion()) {
			var _this = nullFreeTsType.types;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration);
			}
			hxTypes = tool_HaxeTools.deduplicateTypes(result);
		} else {
			hxTypes = [this.complexTypeFromTsType(nullFreeTsType,moduleSymbol,accessContext,enclosingDeclaration)];
		}
		if(this.anyUnionCollapse && !nullable && Lambda.exists(hxTypes,function(t) {
			return _gthis.isHxAny(t);
		})) {
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
		}
		var hxUnionType;
		switch(hxTypes.length) {
		case 0:
			hxUnionType = haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
			break;
		case 1:
			hxUnionType = hxTypes[0];
			break;
		default:
			hxUnionType = SupportTypes.getUnionType(this,hxTypes);
		}
		if(nullable) {
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Null", params : [haxe_macro_TypeParam.TPType(hxUnionType)]});
		} else {
			return hxUnionType;
		}
	}
	,complexTypeFromIntersectionType: function(intersectionType,moduleSymbol,accessContext,enclosingDeclaration) {
		var _gthis = this;
		var _g = [];
		var _g1 = 0;
		var _g2 = intersectionType.types;
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if((v.flags & ts.TypeFlags.NonPrimitive) == 0) {
				_g.push(v);
			}
		}
		var types = _g;
		var hasNonStructureType = Lambda.exists(types,function(t) {
			return !_gthis.isTypeStructureInHaxe(t,moduleSymbol,accessContext,enclosingDeclaration);
		});
		var nativelyIntersectable = !hasNonStructureType;
		if(nativelyIntersectable) {
			var result = new Array(types.length);
			var _g = 0;
			var _g1 = types.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _gthis.complexTypeAnonFromTsType(types[i],moduleSymbol,accessContext,enclosingDeclaration);
			}
			var hxAnonTypes = tool_HaxeTools.deduplicateTypes(result);
			var seenFieldNames_h = Object.create(null);
			var selfCallFields = 0;
			var _g = 0;
			while(_g < hxAnonTypes.length) {
				var hxAnonType = hxAnonTypes[_g];
				++_g;
				if(nativelyIntersectable) {
					if(hxAnonType._hx_index == 2) {
						var fields = hxAnonType.fields;
						var nameClash = false;
						var _g1 = 0;
						while(_g1 < fields.length) {
							var field = fields[_g1];
							++_g1;
							if(tool_HaxeTools.getMeta(field,":selfCall") != null) {
								++selfCallFields;
							} else {
								var nativeName = tool_HaxeTools.getNativeName(field);
								if(Object.prototype.hasOwnProperty.call(seenFieldNames_h,nativeName)) {
									nameClash = true;
									break;
								}
								seenFieldNames_h[nativeName] = true;
							}
						}
						nativelyIntersectable = !nameClash;
					} else {
						nativelyIntersectable = false;
					}
				} else {
					nativelyIntersectable = false;
				}
				if(selfCallFields > 1) {
					nativelyIntersectable = false;
				}
				if(!nativelyIntersectable) {
					break;
				}
			}
		}
		if(nativelyIntersectable) {
			var selfReferencedType = moduleSymbol != null ? Lambda.find(types,function(t) {
				if(t.symbol != moduleSymbol) {
					return t.aliasSymbol == moduleSymbol;
				} else {
					return true;
				}
			}) : null;
			if(selfReferencedType != null) {
				Log.warn("Recursive intersections are not supported (haxe issue #9397); some type information will be lost",null,null,intersectionType);
				return this.complexTypeFromTsType(selfReferencedType,moduleSymbol,accessContext,enclosingDeclaration);
			} else {
				var result = new Array(types.length);
				var _g = 0;
				var _g1 = types.length;
				while(_g < _g1) {
					var i = _g++;
					result[i] = _gthis.complexTypeFromTsType(types[i],moduleSymbol,accessContext,enclosingDeclaration,null,true);
				}
				var hxTypes = tool_HaxeTools.deduplicateTypes(result);
				return haxe_macro_ComplexType.TIntersection(hxTypes);
			}
		} else if(this.options.allowIntersectionRasterization) {
			return this.complexTypeAnonFromTsType(intersectionType,moduleSymbol,accessContext,enclosingDeclaration);
		} else {
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
		}
	}
	,complexTypeFromTypeParameter: function(typeParameter,moduleSymbol,accessContext,enclosingDeclaration) {
		if(typeParameter.symbol != null) {
			var thisTarget = tool_TsTypeTools.getThisTypeTarget(typeParameter);
			if(tool_TsTypeTools.isThisType(typeParameter) && thisTarget != null) {
				return this.complexTypeFromTsType(thisTarget,moduleSymbol,accessContext,enclosingDeclaration);
			} else {
				return haxe_macro_ComplexType.TPath({ name : tool_HaxeTools.toSafeTypeName(typeParameter.symbol.name), pack : []});
			}
		} else {
			Log.error("Internal error: Failed to determine type parameter name, using `T`",null,null,typeParameter);
			return haxe_macro_ComplexType.TPath({ pack : [], name : "T", params : []});
		}
	}
	,complexTypeFromObjectType: function(objectType,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration) {
		if((objectType.objectFlags & ts.ObjectFlags.Reference) != 0) {
			return this.complexTypeFromTypeReference(objectType,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration);
		} else if((objectType.objectFlags & ts.ObjectFlags.ClassOrInterface) != 0) {
			return this.complexTypeFromInterfaceType(objectType,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration);
		} else if((objectType.objectFlags & ts.ObjectFlags.Anonymous) != 0) {
			return this.complexTypeAnonFromTsType(objectType,moduleSymbol,accessContext,enclosingDeclaration);
		} else {
			Log.warn("Could not convert object type <b>" + Std.string(tool_TsTypeTools.getObjectFlagsInfo(objectType)) + "</b> " + objectType.objectFlags,null,null,objectType);
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
		}
	}
	,complexTypeAnonFromTsType: function(tsType,moduleSymbol,accessContext,enclosingDeclaration) {
		var _gthis = this;
		if((tsType.flags & ts.TypeFlags.TypeParameter) != 0) {
			Log.warn("Cannot get anon type from type parameter",null,null,tsType);
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
		}
		var _g = [];
		var _g1 = 0;
		var _g2 = this.tc.getPropertiesOfType(tsType);
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(tool_TsSymbolTools.isAccessibleField(v)) {
				_g.push(v);
			}
		}
		var typeFields = _g;
		var callSignatures = tsType.getCallSignatures();
		var constructSignatures = tsType.getConstructSignatures();
		if(tsType.getConstructSignatures().length > 0) {
			Log.warn("Type has construct signature but this is currently unhandled",null,null,tsType);
		}
		if(callSignatures.length == 1 && constructSignatures.length == 0 && typeFields.length == 0) {
			return this.complexTypeFromCallSignature(callSignatures[0],moduleSymbol,accessContext,enclosingDeclaration);
		} else {
			var fields = [];
			if(callSignatures.length > 0) {
				fields.push(this.functionFieldFromCallSignatures(ConverterContext.selfCallFunctionName,callSignatures,moduleSymbol,accessContext,enclosingDeclaration));
			}
			var result = new Array(typeFields.length);
			var _g = 0;
			var _g1 = typeFields.length;
			while(_g < _g1) {
				var i = _g++;
				var p = typeFields[i];
				result[i] = _gthis.fieldFromSymbol(p.name,p,moduleSymbol,accessContext,enclosingDeclaration);
			}
			fields = fields.concat(result);
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				if(field.access != null) {
					var _g1 = [];
					var _g2 = 0;
					var _g3 = field.access;
					while(_g2 < _g3.length) {
						var v = _g3[_g2];
						++_g2;
						var tmp;
						switch(v._hx_index) {
						case 4:case 7:
							tmp = true;
							break;
						default:
							tmp = false;
						}
						if(tmp) {
							_g1.push(v);
						}
					}
					field.access = _g1;
				}
			}
			tool_HaxeTools.resolveNameCollisions(fields);
			return haxe_macro_ComplexType.TAnonymous(fields);
		}
	}
	,functionFieldFromCallSignatures: function(fieldName,callSignatures,moduleSymbol,accessContext,enclosingDeclaration) {
		var field = this.functionFieldFromSignatures(fieldName,callSignatures,moduleSymbol,accessContext,enclosingDeclaration);
		tool_HaxeTools.setMeta(field,":selfCall");
		return field;
	}
	,functionFieldFromSignatures: function(fieldName,signatures,moduleSymbol,accessContext,enclosingDeclaration) {
		var _gthis = this;
		var baseSignature = signatures[0];
		var overloadSignatures = signatures.slice(1);
		var result = new Array(overloadSignatures.length);
		var _g = 0;
		var _g1 = overloadSignatures.length;
		while(_g < _g1) {
			var i = _g++;
			var fun = _gthis.functionFromSignature(overloadSignatures[i],moduleSymbol,accessContext,enclosingDeclaration);
			fun.expr = { expr : haxe_macro_ExprDef.EBlock([]), pos : { file : "src/ConverterContext.hx", min : 53480, max : 53482}};
			result[i] = { name : ":overload", params : [{ expr : haxe_macro_ExprDef.EFunction(haxe_macro_FunctionKind.FAnonymous,fun), pos : null}], pos : null};
		}
		var overloadMetas = result;
		var _this = baseSignature.getDocumentationComment(this.tc);
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = _this[i].text;
		}
		var baseDoc = result.join("\n");
		var baseDeclaration = baseSignature.getDeclaration();
		var hxAccessModifiers;
		if(baseDeclaration != null) {
			var tsModifiers = TsInternal.getSignatureDeclarationModifiers(baseDeclaration);
			if(tsModifiers != null) {
				hxAccessModifiers = this.accessFromModifiers(tsModifiers);
			} else {
				var input = null;
				var this1 = [];
				if(input != null) {
					var _g = 0;
					while(_g < input.length) {
						var item = input[_g];
						++_g;
						if(this1.indexOf(item) == -1) {
							this1.push(item);
						}
					}
				}
				hxAccessModifiers = this1;
			}
		} else {
			var input = null;
			var this1 = [];
			if(input != null) {
				var _g = 0;
				while(_g < input.length) {
					var item = input[_g];
					++_g;
					if(this1.indexOf(item) == -1) {
						this1.push(item);
					}
				}
			}
			hxAccessModifiers = this1;
		}
		return { name : fieldName, meta : overloadMetas, kind : haxe_macro_FieldType.FFun(this.functionFromSignature(baseSignature,moduleSymbol,accessContext,enclosingDeclaration)), doc : baseDoc, access : hxAccessModifiers.slice(), pos : null};
	}
	,newFieldFromSignatures: function(signatures,moduleSymbol,accessContext,enclosingDeclaration) {
		var field = this.functionFieldFromSignatures("new",signatures,moduleSymbol,accessContext,enclosingDeclaration);
		var _g = field.kind;
		if(_g._hx_index == 1) {
			var fun = _g.f;
			fun.ret = null;
		}
		return field;
	}
	,complexTypeFromCallSignature: function(callSignature,moduleSymbol,accessContext,enclosingDeclaration) {
		var fun = this.functionFromSignature(callSignature,moduleSymbol,accessContext,enclosingDeclaration);
		if(fun.params != null && fun.params.length > 0) {
			fun = tool_ComplexTypeTools.mapFunction(fun,function(t) {
				if(t._hx_index == 0) {
					var _g = t.p;
					var _g1 = _g.params;
					var _g1 = _g.sub;
					if(_g.pack.length == 0) {
						var name = _g.name;
						if(Lambda.exists(fun.params,function(tp) {
							return tp.name == name;
						})) {
							return haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []});
						} else {
							return t;
						}
					} else {
						return t;
					}
				} else {
					return t;
				}
			});
			fun.params = null;
		}
		if(this.unionizedFunctionTypes) {
			var _this = fun.args;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				var arg = _this[i];
				result[i] = haxe_macro_ComplexType.TNamed(arg.name,arg.type != null ? arg.type : haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}));
			}
			var hxArgs = result;
			var hxReturnType = fun.ret != null ? fun.ret : haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
			var functionSignatures = [];
			var hxNonOptionalArgs = [];
			var _g = 0;
			var _g1 = fun.args.length;
			while(_g < _g1) {
				var i = _g++;
				var arg = fun.args[i];
				if(arg.opt == true) {
					break;
				}
				hxNonOptionalArgs.push(hxArgs[i]);
			}
			functionSignatures.push(haxe_macro_ComplexType.TFunction(hxNonOptionalArgs,hxReturnType));
			var _g = 0;
			var _g1 = fun.args.length;
			while(_g < _g1) {
				var i = _g++;
				var arg = fun.args[i];
				if(arg.opt == true) {
					functionSignatures.push(haxe_macro_ComplexType.TFunction(hxArgs.slice(0,i + 1),hxReturnType));
				}
			}
			return SupportTypes.getUnionType(this,functionSignatures);
		} else {
			var _this = fun.args;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				var arg = _this[i];
				var param = haxe_macro_ComplexType.TNamed(arg.name,arg.type != null ? arg.type : haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}));
				result[i] = arg.opt != null && arg.opt ? haxe_macro_ComplexType.TOptional(param) : param;
			}
			return haxe_macro_ComplexType.TFunction(result,fun.ret != null ? fun.ret : haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []}));
		}
	}
	,complexTypeFromTypeReference: function(typeReference,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration) {
		var _gthis = this;
		if((typeReference.objectFlags & ts.ObjectFlags.ClassOrInterface) != 0) {
			return this.complexTypeFromGenericType(typeReference,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration);
		} else if((typeReference.target.objectFlags & ts.ObjectFlags.Tuple) != 0) {
			return this.complexTypeFromTupleTypeReference(typeReference,moduleSymbol,accessContext,enclosingDeclaration);
		} else {
			if(typeReference.target == typeReference) {
				Log.error("Internal error: recursive type reference");
				return haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
			}
			var hxTarget = this.complexTypeFromTsType(typeReference.target,moduleSymbol,accessContext,enclosingDeclaration,null,preferInterfaceStructure);
			var hxTypeArguments;
			if(typeReference.typeArguments != null) {
				var _this = typeReference.typeArguments;
				var result = new Array(_this.length);
				var _g = 0;
				var _g1 = _this.length;
				while(_g < _g1) {
					var i = _g++;
					result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
				}
				hxTypeArguments = result;
			} else {
				hxTypeArguments = [];
			}
			if(hxTarget._hx_index == 0) {
				var p = hxTarget.p;
				var argumentCount = hxTypeArguments.length;
				var paramCount = p.params != null ? p.params.length : 0;
				if(paramCount != argumentCount) {
					Log.warn("TypeReference has <b>" + argumentCount + "</> arguments but target has <b>" + paramCount + "</> parameters",null,null,typeReference);
				}
				p.params = hxTypeArguments;
			} else {
				Log.error("Internal error: Expected TPath from TypeReference",null,null,typeReference);
			}
			return hxTarget;
		}
	}
	,complexTypeFromTupleTypeReference: function(tupleTypeReference,moduleSymbol,accessContext,enclosingDeclaration) {
		var _gthis = this;
		var _this = tupleTypeReference.typeArguments;
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = _gthis.complexTypeFromTsType(_this[i],moduleSymbol,accessContext,enclosingDeclaration);
		}
		var hxElementTypes = result;
		return SupportTypes.getTupleType(this,hxElementTypes);
	}
	,complexTypeFromGenericType: function(genericType,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration) {
		if((genericType.objectFlags & ts.ObjectFlags.Tuple) != 0) {
			return this.complexTypeFromTupleType(genericType,moduleSymbol,accessContext,enclosingDeclaration);
		} else {
			return this.complexTypeFromInterfaceType(genericType,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration);
		}
	}
	,complexTypeFromTupleType: function(tupleType,moduleSymbol,accessContext,enclosingDeclaration) {
		Log.warn("Todo: TupleType",null,null,tupleType);
		debugger;
		return haxe_macro_ComplexType.TPath({ pack : ["std"], name : "Array", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
	}
	,complexTypeFromInterfaceType: function(classOrInterfaceType,moduleSymbol,accessContext,preferInterfaceStructure,enclosingDeclaration) {
		var _gthis = this;
		if(classOrInterfaceType.symbol != null) {
			var hxTypePath = this.getReferencedHaxeTypePath(classOrInterfaceType.symbol,moduleSymbol,accessContext,preferInterfaceStructure);
			var tmp;
			if(classOrInterfaceType.typeParameters != null) {
				var _this = classOrInterfaceType.typeParameters;
				var result = new Array(_this.length);
				var _g = 0;
				var _g1 = _this.length;
				while(_g < _g1) {
					var i = _g++;
					result[i] = haxe_macro_TypeParam.TPType(_gthis.complexTypeFromTypeParameter(_this[i],moduleSymbol,accessContext,enclosingDeclaration));
				}
				tmp = result;
			} else {
				tmp = null;
			}
			hxTypePath.params = tmp;
			return haxe_macro_ComplexType.TPath(hxTypePath);
		} else {
			Log.error("Internal error: no symbol for ClassOrInterface type",null,null,classOrInterfaceType);
			debugger;
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
		}
	}
	,complexTypeBaseOfEnumSymbol: function(symbol) {
		var hxEnumTypeName = null;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.tc.getExportsOfModule(symbol);
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if((v.flags & ts.SymbolFlags.EnumMember) != 0) {
				_g.push(v);
			}
		}
		var enumMembers = _g;
		if(enumMembers.length > 0) {
			var _g = 0;
			while(_g < enumMembers.length) {
				var member = enumMembers[_g];
				++_g;
				var enumMemberNode = member.valueDeclaration;
				var runtimeValue = this.tc.getConstantValue(enumMemberNode);
				var hxMemberTypeName;
				switch(typeof(runtimeValue)) {
				case "number":
					hxMemberTypeName = Math.floor(runtimeValue) == runtimeValue ? "Int" : "Float";
					break;
				case "string":
					hxMemberTypeName = "String";
					break;
				case "undefined":
					hxMemberTypeName = "Int";
					break;
				default:
					hxMemberTypeName = "Any";
				}
				if(hxEnumTypeName != hxMemberTypeName) {
					if(hxEnumTypeName == null) {
						hxEnumTypeName = hxMemberTypeName;
					} else {
						switch(hxEnumTypeName) {
						case "Float":
							hxEnumTypeName = hxMemberTypeName == "Int" ? "Float" : "Any";
							break;
						case "Int":
							hxEnumTypeName = hxMemberTypeName == "Float" ? "Float" : "Any";
							break;
						default:
							hxEnumTypeName = "Any";
						}
					}
				}
			}
		} else {
			hxEnumTypeName = "Int";
		}
		if(hxEnumTypeName != null) {
			return haxe_macro_ComplexType.TPath({ pack : [], name : hxEnumTypeName});
		} else {
			return haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []});
		}
	}
	,complexTypeFromTypeNode: function(node,moduleSymbol,accessContext,enclosingDeclaration) {
		var type = this.tc.getTypeFromTypeNode(node);
		if(type.intrinsicName == "error") {
			debugger;
			Log.error("Internal error: Error getting type from type node",node);
		}
		return this.complexTypeFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration);
	}
	,getTsTypeOfField: function(symbol) {
		if(symbol.valueDeclaration != null) {
			return this.tc.getTypeOfSymbolAtLocation(symbol,symbol.valueDeclaration);
		} else {
			var parentSymbol = tool_TsSymbolTools.getSymbolParent(symbol);
			if((symbol.flags & ts.SymbolFlags.Prototype) != 0 && parentSymbol != null) {
				return this.tc.getTypeOfSymbolAtLocation(symbol,parentSymbol.valueDeclaration);
			} else if(Reflect.field(symbol,"type") != null) {
				return Reflect.field(symbol,"type");
			} else {
				return this.tc.getDeclaredTypeOfSymbol(symbol);
			}
		}
	}
	,fieldFromSymbol: function(nativeFieldName,symbol,moduleSymbol,accessContext,enclosingDeclaration) {
		var _gthis = this;
		var pos = tool_TsSymbolTools.getPosition(symbol);
		var meta = [];
		var safeName = tool_HaxeTools.toSafeIdent(nativeFieldName);
		var nameChanged = safeName != nativeFieldName;
		if(nameChanged) {
			meta.push({ name : ":native", pos : pos, params : [tool_HaxeTools.toStringExpr(nativeFieldName,pos)]});
		}
		var isOptional = (symbol.flags & ts.SymbolFlags.Optional) != 0;
		var baseDeclaration;
		if(symbol.valueDeclaration != null) {
			baseDeclaration = symbol.valueDeclaration;
		} else if((symbol.flags & ts.SymbolFlags.Prototype) == 0) {
			Log.warn("Missing valueDeclaration for field symbol",null,symbol);
			baseDeclaration = null;
		} else {
			baseDeclaration = null;
		}
		var hxAccessModifiers;
		if(baseDeclaration != null && baseDeclaration.modifiers != null) {
			hxAccessModifiers = this.accessFromModifiers(baseDeclaration.modifiers,symbol);
		} else {
			var input = null;
			var this1 = [];
			if(input != null) {
				var _g = 0;
				while(_g < input.length) {
					var item = input[_g];
					++_g;
					if(this1.indexOf(item) == -1) {
						this1.push(item);
					}
				}
			}
			hxAccessModifiers = this1;
		}
		if(baseDeclaration != null && tool_TsSyntaxTools.isVarConst(baseDeclaration)) {
			var item = haxe_macro_Access.AFinal;
			if(hxAccessModifiers.indexOf(item) == -1) {
				hxAccessModifiers.push(item);
			}
		}
		var userDoc = this.getDoc(symbol);
		var docParts = userDoc != "" ? [userDoc] : [];
		var tsType = this.getTsTypeOfField(symbol);
		var onError = function(message) {
			Log.error("fieldFromSymbol(): " + message,null,symbol);
			docParts.push("@DTS2HX-ERROR: " + Console.stripFormatting(message));
		};
		var kindFromFunctionSignatures = function(signatures) {
			if(signatures.length > 0) {
				var functionField = _gthis.functionFieldFromSignatures(safeName,signatures,moduleSymbol,accessContext,enclosingDeclaration);
				if(functionField.meta != null) {
					meta = meta.concat(functionField.meta);
				}
				return functionField.kind;
			} else {
				onError("Internal error: failed to get function signatures from type (type is probably wrapped in another)");
				return haxe_macro_FieldType.FFun({ args : [], ret : haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []}), params : [], expr : null});
			}
		};
		var kind;
		if((symbol.flags & (ts.SymbolFlags.PropertyOrAccessor | ts.SymbolFlags.Variable)) != 0) {
			var nullFreeTsType = this.tc.getNonNullableType(tsType);
			var isNullable = tool_TsTypeTools.isNullishUnion(tsType);
			var callSignatures = this.tc.getSignaturesOfType(nullFreeTsType,ts.SignatureKind.Call);
			var constructSignatures = this.tc.getSignaturesOfType(nullFreeTsType,ts.SignatureKind.Construct);
			var _g = [];
			var _g1 = 0;
			var _g2 = this.tc.getPropertiesOfType(nullFreeTsType);
			while(_g1 < _g2.length) {
				var v = _g2[_g1];
				++_g1;
				if(tool_TsSymbolTools.isAccessibleField(v)) {
					_g.push(v);
				}
			}
			var typeFields = _g;
			if(callSignatures.length > 0 && constructSignatures.length == 0 && typeFields.length == 0) {
				if(hxAccessModifiers.indexOf(haxe_macro_Access.AFinal) == -1) {
					var item = haxe_macro_Access.ADynamic;
					if(hxAccessModifiers.indexOf(item) == -1) {
						hxAccessModifiers.push(item);
					}
				}
				HxOverrides.remove(hxAccessModifiers,haxe_macro_Access.AFinal);
				if(isNullable) {
					isOptional = true;
				}
				kind = kindFromFunctionSignatures(callSignatures);
			} else {
				if(baseDeclaration != null) {
					switch(baseDeclaration.kind) {
					case ts.SyntaxKind.PropertyDeclaration:case ts.SyntaxKind.PropertySignature:case ts.SyntaxKind.VariableDeclaration:
						break;
					case ts.SyntaxKind.GetAccessor:case ts.SyntaxKind.SetAccessor:
						break;
					default:
						onError("Unhandled declaration kind <b>" + tool_TsSyntaxTools.getSyntaxKindName(baseDeclaration.kind) + "</>");
					}
				}
				var hxType = this.complexTypeFromTsType(tsType,moduleSymbol,accessContext,enclosingDeclaration);
				if(isOptional) {
					hxType = tool_HaxeTools.unwrapNull(hxType);
				}
				if((symbol.flags & ts.SymbolFlags.GetAccessor) != 0 && (symbol.flags & ts.SymbolFlags.SetAccessor) == 0) {
					var item = haxe_macro_Access.AFinal;
					if(hxAccessModifiers.indexOf(item) == -1) {
						hxAccessModifiers.push(item);
					}
				}
				kind = haxe_macro_FieldType.FVar(hxType,null);
			}
		} else if((symbol.flags & (ts.SymbolFlags.Method | ts.SymbolFlags.Function)) != 0) {
			if(baseDeclaration != null) {
				switch(baseDeclaration.kind) {
				case ts.SyntaxKind.FunctionDeclaration:case ts.SyntaxKind.MethodDeclaration:case ts.SyntaxKind.MethodSignature:
					break;
				default:
					onError("Unhandled declaration kind <b>" + tool_TsSyntaxTools.getSyntaxKindName(baseDeclaration.kind) + "</>");
				}
			}
			var nullFreeTsType = this.tc.getNonNullableType(tsType);
			var signatures = this.tc.getSignaturesOfType(nullFreeTsType,ts.SignatureKind.Call);
			kind = kindFromFunctionSignatures(signatures);
		} else if((symbol.flags & ts.SymbolFlags.EnumMember) != 0) {
			var parent = tool_TsSymbolTools.getSymbolParent(symbol);
			var isConstEnum;
			if(parent != null) {
				isConstEnum = (parent.flags & ts.SymbolFlags.ConstEnum) != 0;
			} else {
				Log.error("EnumMember did not have a parent",null,symbol);
				isConstEnum = true;
			}
			kind = haxe_macro_FieldType.FVar(null,isConstEnum ? tool_HaxeTools.primitiveValueToExpr(this.tc.getConstantValue(symbol.valueDeclaration)) : null);
		} else {
			onError("Unhandled symbol flags");
			var type = this.tc.getTypeOfSymbolAtLocation(symbol,symbol.valueDeclaration);
			debugger;
			kind = haxe_macro_FieldType.FVar(this.complexTypeFromTsType(type,moduleSymbol,accessContext,enclosingDeclaration),null);
		}
		if(isOptional) {
			meta.unshift({ name : ":optional", pos : pos});
		}
		var field = { name : safeName, meta : meta, pos : pos, kind : kind, doc : docParts.join("\n\n"), access : hxAccessModifiers.slice()};
		return field;
	}
	,functionFromSignature: function(signature,moduleSymbol,accessContext,enclosingDeclaration) {
		var _gthis = this;
		var signatureDeclarationNode = signature.getDeclaration();
		var isConstructorDeclaration = signatureDeclarationNode != null && ts.isConstructorDeclaration(signatureDeclarationNode);
		var hxTypeParams;
		if(signature.typeParameters != null && !isConstructorDeclaration) {
			var _this = signature.typeParameters;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _gthis.typeParamDeclFromTsTypeParameter(_this[i],moduleSymbol,accessContext,enclosingDeclaration);
			}
			hxTypeParams = result;
		} else {
			hxTypeParams = [];
		}
		var hxParameters;
		if(signature.parameters != null) {
			var _this = TsInternal.getExpandedParameters(this.tc,signature);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				var s = _this[i];
				var parameterDeclaration = s.valueDeclaration;
				var isOptional = parameterDeclaration != null && _gthis.tc.isOptionalParameter(parameterDeclaration);
				var isRest = parameterDeclaration != null && parameterDeclaration.dotDotDotToken != null;
				var tsType = parameterDeclaration != null ? _gthis.tc.getTypeOfSymbolAtLocation(s,parameterDeclaration) : s.type;
				var hxType = _gthis.complexTypeFromTsType(tsType,moduleSymbol,accessContext,parameterDeclaration);
				if(isRest) {
					if(hxType._hx_index == 0) {
						var _g2 = hxType.p;
						var _g3 = _g2.pack;
						var _g4 = _g2.params;
						var _g5 = _g2.sub;
						if(_g2.name == "Array") {
							if(_g4 == null) {
								Log.warn("Unsupported rest type",null,s);
								hxType = haxe_macro_ComplexType.TPath({ pack : ["haxe","extern"], name : "Rest", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
							} else if(_g4.length == 1) {
								var _g6 = _g4[0];
								if(_g6._hx_index == 0) {
									var param = _g6.t;
									hxType = haxe_macro_ComplexType.TPath({ pack : ["haxe","extern"], name : "Rest", params : [haxe_macro_TypeParam.TPType(param)]});
								} else {
									Log.warn("Unsupported rest type",null,s);
									hxType = haxe_macro_ComplexType.TPath({ pack : ["haxe","extern"], name : "Rest", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
								}
							} else {
								Log.warn("Unsupported rest type",null,s);
								hxType = haxe_macro_ComplexType.TPath({ pack : ["haxe","extern"], name : "Rest", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
							}
						} else {
							Log.warn("Unsupported rest type",null,s);
							hxType = haxe_macro_ComplexType.TPath({ pack : ["haxe","extern"], name : "Rest", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
						}
					} else {
						Log.warn("Unsupported rest type",null,s);
						hxType = haxe_macro_ComplexType.TPath({ pack : ["haxe","extern"], name : "Rest", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
					}
				}
				if(isOptional) {
					hxType = tool_HaxeTools.unwrapNull(hxType);
				}
				var value = parameterDeclaration != null ? tool_HaxeTools.primitiveValueToExpr(_gthis.tc.getConstantValue(parameterDeclaration)) : null;
				result[i] = { name : tool_HaxeTools.toSafeIdent(s.name), type : hxType, opt : isOptional, value : value};
			}
			hxParameters = result;
		} else {
			hxParameters = [];
		}
		var tsRet = this.tc.getReturnTypeOfSignature(signature);
		var hxRet = (tsRet.flags & ts.TypeFlags.Void) != 0 ? haxe_macro_ComplexType.TPath({ pack : [], name : "Void", params : []}) : this.complexTypeFromTsType(tsRet,moduleSymbol,accessContext,signature.declaration);
		return { args : hxParameters, ret : hxRet, params : hxTypeParams, expr : null};
	}
	,typeParamDeclFromTypeDeclarationSymbol: function(symbol,accessContext,enclosingDeclaration) {
		var _g = [];
		var _g1 = 0;
		var _g2 = tool_TsSymbolTools.getDeclarationTypeParameters(symbol);
		while(_g1 < _g2.length) {
			var t = _g2[_g1];
			++_g1;
			_g.push({ name : tool_TsSyntaxTools.typeParameterDeclarationName(t), constraints : this.options.enableTypeParameterConstraints && t.constraint != null ? [this.complexTypeFromTypeNode(t.constraint,symbol,accessContext,enclosingDeclaration)] : null});
		}
		return _g;
	}
	,typeParamDeclFromTsTypeParameter: function(typeParameter,moduleSymbol,accessContext,enclosingDeclaration) {
		var typeParamNode = Lambda.find(typeParameter.symbol.declarations,function(d) {
			return d.kind == ts.SyntaxKind.TypeParameter;
		});
		var hxConstraint = this.options.enableTypeParameterConstraints && typeParamNode != null && typeParamNode.constraint != null ? this.complexTypeFromTypeNode(typeParamNode.constraint,moduleSymbol,accessContext,enclosingDeclaration) : null;
		return { name : tool_HaxeTools.toSafeTypeName(typeParameter.symbol.name), constraints : hxConstraint != null ? [hxConstraint] : null};
	}
	,accessFromModifiers: function(modifiers,logSymbol) {
		var access = [];
		var _g = 0;
		var _g1 = modifiers;
		while(_g < _g1.length) {
			var modifier = _g1[_g];
			++_g;
			switch(modifier.kind) {
			case ts.SyntaxKind.AbstractKeyword:
				Log.warn("`abstract` modifier not handled",null,logSymbol);
				break;
			case ts.SyntaxKind.AsyncKeyword:
				Log.warn("`async` modifier not handled",null,logSymbol);
				break;
			case ts.SyntaxKind.ConstKeyword:
				access.push(haxe_macro_Access.AFinal);
				break;
			case ts.SyntaxKind.DeclareKeyword:
				break;
			case ts.SyntaxKind.DefaultKeyword:
				break;
			case ts.SyntaxKind.ExportKeyword:
				break;
			case ts.SyntaxKind.PrivateKeyword:
				access.push(haxe_macro_Access.APrivate);
				break;
			case ts.SyntaxKind.ProtectedKeyword:
				access.push(haxe_macro_Access.APrivate);
				break;
			case ts.SyntaxKind.PublicKeyword:
				access.push(haxe_macro_Access.APublic);
				break;
			case ts.SyntaxKind.ReadonlyKeyword:
				access.push(haxe_macro_Access.AFinal);
				break;
			case ts.SyntaxKind.StaticKeyword:
				access.push(haxe_macro_Access.AStatic);
				break;
			default:
				Log.warn("Unhandled modifier kind <b>" + tool_TsSyntaxTools.getSyntaxKindName(modifier.kind) + "</b>",null,logSymbol);
			}
		}
		var this1 = [];
		if(access != null) {
			var _g = 0;
			while(_g < access.length) {
				var item = access[_g];
				++_g;
				if(this1.indexOf(item) == -1) {
					this1.push(item);
				}
			}
		}
		return this1;
	}
	,isHxAny: function(t) {
		if(t._hx_index == 0) {
			var _g = t.p;
			var _g1 = _g.pack;
			var _g2 = _g.params;
			var _g2 = _g.sub;
			switch(_g.name) {
			case "Any":
				switch(_g1.length) {
				case 0:
					return true;
				case 1:
					if(_g1[0] == "std") {
						return true;
					} else {
						return false;
					}
					break;
				default:
					return false;
				}
				break;
			case "Dynamic":
				switch(_g1.length) {
				case 0:
					return true;
				case 1:
					if(_g1[0] == "std") {
						return true;
					} else {
						return false;
					}
					break;
				default:
					return false;
				}
				break;
			default:
				return false;
			}
		} else {
			return false;
		}
	}
};
var HaxeTypePathMap = function(inputParentModuleName,globalPackageName,program,symbolAccessMap,stdLibMap) {
	this.defaultDisallowedNames = ["Any","Array","Class","Date","DateTools","EReg","Enum","EnumValue","HxOverrides","IntIterator","Lambda","List","Map","IMap","Math","Reflect","String","Std","Void","Float","Int","Null","Bool","Dynamic","Iterator","Iterable","KeyValueIterator","KeyValueIterable","ArrayAccess","StringBuf","StringTools","Sys","ValueType","Type","UInt","UnicodeString","XmlType","Xml"];
	this.inputParentModuleName = inputParentModuleName;
	this.globalPackageName = globalPackageName;
	this.program = program;
	this.symbolAccessMap = symbolAccessMap;
	this.stdLibMap = stdLibMap;
	this.tc = program.getTypeChecker();
	this.symbolTypePathMap = this.buildHaxeTypePathMap();
};
HaxeTypePathMap.__name__ = true;
HaxeTypePathMap.prototype = {
	getTypePath: function(symbol,accessContext,preferInterfaceStructure) {
		if((symbol.flags & ts.SymbolFlags.Alias) != 0) {
			symbol = this.tc.getAliasedSymbol(symbol);
		}
		var this1 = this.symbolTypePathMap;
		var key = tool_TsSymbolTools.getId(symbol);
		var modules = this1.h[key];
		if(modules != null) {
			var _g = [];
			var _g1 = 0;
			var _g2 = modules;
			while(_g1 < _g2.length) {
				var v = _g2[_g1];
				++_g1;
				if(v.isInterfaceStructure == preferInterfaceStructure) {
					_g.push(v);
				}
			}
			var interfaceStructureFilteredModules = _g;
			if(interfaceStructureFilteredModules.length > 0) {
				modules = interfaceStructureFilteredModules;
			}
			var matchingModule = Lambda.find(modules,function(m) {
				return m.access._hx_index == accessContext._hx_index;
			});
			if(matchingModule == null) {
				matchingModule = Lambda.find(modules,function(m) {
					return m.access._hx_index != 3;
				});
			}
			if(matchingModule == null) {
				matchingModule = modules[0];
			}
			if(matchingModule != null) {
				return matchingModule;
			} else {
				Log.warn("Internal error: Could not find a type path for symbol with the supplied access context <b>" + tool_SymbolAccessTools.toString(accessContext) + "</>",null,symbol);
			}
		} else {
			Log.warn("Internal error: No type paths were generated for this symbol",null,symbol);
		}
		if(!ConverterContext.isHaxeModuleSource(this.tc,symbol,accessContext)) {
			Log.warn("Internal error: unexpected symbol passed into `getTypePath()`",null,symbol);
		}
		debugger;
		return this.generateTypePath(symbol,accessContext,preferInterfaceStructure);
	}
	,getGlobalModuleTypePath: function(symbol,access) {
		var typePath = this.generateTypePath(symbol,access,false);
		var tmp;
		if(tool_TsSymbolTools.isBuiltIn(symbol)) {
			tmp = "Global";
		} else {
			var declaringModuleName = this.getDeclaringModuleName(symbol);
			var moduleName = tool_TsProgramTools.normalizeModuleName(declaringModuleName).split("/").pop();
			tmp = "" + tool_HaxeTools.toSafeTypeName(moduleName) + "Global";
		}
		return { name : tmp, pack : typePath.pack};
	}
	,buildHaxeTypePathMap: function() {
		var _gthis = this;
		var packageMap_h = Object.create(null);
		var getModules = function(pack) {
			var packageKey = pack.join("/");
			var modules = packageMap_h[packageKey];
			if(modules == null) {
				modules = [];
				packageMap_h[packageKey] = modules;
			}
			return modules;
		};
		var _g = 0;
		var _g1 = tool_TsProgramTools.getTopLevelDeclarationSymbols(this.program);
		while(_g < _g1.length) {
			var topLevelSymbol = _g1[_g];
			++_g;
			tool_TsSymbolTools.walkDeclarationSymbols(this.tc,topLevelSymbol,(function() {
				return function(symbol,_) {
					var _g = 0;
					var _g1 = _gthis.symbolAccessMap.getAccess(symbol);
					while(_g < _g1.length) {
						var access = _g1[_g];
						++_g;
						if(ConverterContext.isHaxeModuleSource(_gthis.tc,symbol,access)) {
							var typePath = _gthis.generateTypePath(symbol,access,false);
							var modules = getModules(typePath.pack);
							if(Lambda.find(modules,(function() {
								return function(m) {
									if(m.symbol == symbol) {
										return m.isInterfaceStructure == false;
									} else {
										return false;
									}
								};
							})()) == null) {
								modules.push({ name : typePath.name, pack : typePath.pack, moduleName : typePath.moduleName, isExistingStdLibType : typePath.isExistingStdLibType, symbol : symbol, access : access, renameable : true, isInterfaceStructure : false});
							}
							if(ConverterContext.requiresAdditionalStructureType(_gthis.tc,symbol)) {
								var typePath1 = _gthis.generateTypePath(symbol,access,true);
								var modules1 = getModules(typePath1.pack);
								if(Lambda.find(modules1,(function() {
									return function(m) {
										if(m.symbol == symbol) {
											return m.isInterfaceStructure == true;
										} else {
											return false;
										}
									};
								})()) == null) {
									modules1.push({ name : typePath1.name, pack : typePath1.pack, moduleName : typePath1.moduleName, isExistingStdLibType : typePath1.isExistingStdLibType, symbol : symbol, access : access, renameable : true, isInterfaceStructure : true});
								}
							}
						}
						if(ConverterContext.isGlobalField(_gthis.tc,symbol,access)) {
							var typePath2 = [_gthis.getGlobalModuleTypePath(symbol,access)];
							var modules2 = getModules(typePath2[0].pack);
							if(Lambda.find(modules2,(function(typePath) {
								return function(m) {
									if(m.name == typePath[0].name) {
										return m.renameable == false;
									} else {
										return false;
									}
								};
							})(typePath2)) == null) {
								modules2.push({ name : typePath2[0].name, pack : typePath2[0].pack, moduleName : typePath2[0].name, isExistingStdLibType : false, symbol : null, access : SymbolAccess.Global([]), renameable : false, isInterfaceStructure : false});
							}
						}
					}
				};
			})());
		}
		var h = packageMap_h;
		var _g2_h = h;
		var _g2_keys = Object.keys(h);
		var _g2_length = _g2_keys.length;
		var _g2_current = 0;
		while(_g2_current < _g2_length) {
			var key = _g2_keys[_g2_current++];
			var _g3_key = key;
			var _g3_value = _g2_h[key];
			var _ = _g3_key;
			var modules = _g3_value;
			while(true) {
				var degenerateNameMap_h = Object.create(null);
				var _g = 0;
				while(_g < modules.length) {
					var $module = modules[_g];
					++_g;
					var lowercaseName = $module.name.toLowerCase();
					var matches = degenerateNameMap_h[lowercaseName];
					if(matches == null) {
						matches = [];
						degenerateNameMap_h[lowercaseName] = matches;
					}
					matches.push($module);
				}
				var hasNameOverlap = false;
				var h = degenerateNameMap_h;
				var _g5_h = h;
				var _g5_keys = Object.keys(h);
				var _g5_length = _g5_keys.length;
				var _g5_current = 0;
				while(_g5_current < _g5_length) {
					var key1 = _g5_keys[_g5_current++];
					var _g6_key = key1;
					var _g6_value = _g5_h[key1];
					var degenerateName = _g6_key;
					var matches1 = _g6_value;
					if(matches1.length > 1) {
						hasNameOverlap = true;
						haxe_ds_ArraySort.sort(matches1,function(a,b) {
							var renameabilityA = (a.renameable ? 1 : 0) << 7 | (!a.isExistingStdLibType ? 1 : 0) << 6 | (a.access._hx_index == 3 ? 1 : 0) << 5 | ((a.symbol.flags & ts.SymbolFlags.Class) == 0 ? 1 : 0) << 4 | ((a.symbol.flags & ts.SymbolFlags.Enum) == 0 ? 1 : 0) << 3 | ((a.symbol.flags & ts.SymbolFlags.Interface) == 0 ? 1 : 0) << 2 | ((a.symbol.flags & ts.SymbolFlags.TypeAlias) == 0 ? 1 : 0) << 1 | ((a.symbol.flags & ts.SymbolFlags.ValueModule) == 0 ? 1 : 0);
							var renameabilityB = (b.renameable ? 1 : 0) << 7 | (!b.isExistingStdLibType ? 1 : 0) << 6 | (b.access._hx_index == 3 ? 1 : 0) << 5 | ((b.symbol.flags & ts.SymbolFlags.Class) == 0 ? 1 : 0) << 4 | ((b.symbol.flags & ts.SymbolFlags.Enum) == 0 ? 1 : 0) << 3 | ((b.symbol.flags & ts.SymbolFlags.Interface) == 0 ? 1 : 0) << 2 | ((b.symbol.flags & ts.SymbolFlags.TypeAlias) == 0 ? 1 : 0) << 1 | ((b.symbol.flags & ts.SymbolFlags.ValueModule) == 0 ? 1 : 0);
							if(renameabilityA > renameabilityB) {
								return -1;
							} else if(renameabilityA < renameabilityB) {
								return 1;
							} else if(a.symbol.name > b.symbol.name) {
								return -1;
							} else {
								return 1;
							}
						});
						var moduleToRename = matches1[0];
						var alsoRenameModule = moduleToRename.name == moduleToRename.moduleName;
						moduleToRename.name += "_";
						if(alsoRenameModule) {
							moduleToRename.moduleName = moduleToRename.name;
						}
						var tmp = "Resolved name overlap for <b>" + matches1[0].pack.concat([degenerateName]).join("/") + ".hx</>: ";
						var result = new Array(matches1.length);
						var _g1 = 0;
						var _g2 = matches1.length;
						while(_g1 < _g2) {
							var i = _g1++;
							result[i] = matches1[i].name;
						}
						Log.log(tmp + result.join(", "));
					}
				}
				if(!hasNameOverlap) {
					break;
				}
			}
		}
		var typePathMap = new haxe_ds_IntMap();
		var h = packageMap_h;
		var _g2_h = h;
		var _g2_keys = Object.keys(h);
		var _g2_length = _g2_keys.length;
		var _g2_current = 0;
		while(_g2_current < _g2_length) {
			var key = _g2_keys[_g2_current++];
			var _g3_key = key;
			var _g3_value = _g2_h[key];
			var _ = _g3_key;
			var modules = _g3_value;
			var _g = 0;
			while(_g < modules.length) {
				var $module = modules[_g];
				++_g;
				if($module.symbol == null) {
					continue;
				}
				var key1 = tool_TsSymbolTools.getId($module.symbol);
				var array = typePathMap.h[key1];
				if(array == null) {
					array = [];
					var key2 = tool_TsSymbolTools.getId($module.symbol);
					typePathMap.h[key2] = array;
				}
				array.push($module);
			}
		}
		return typePathMap;
	}
	,generateTypePath: function(symbol,access,asInterfaceStructure) {
		var isBuiltIn = tool_TsSymbolTools.isBuiltIn(symbol);
		var clashesWithBuiltIn = false;
		if(isBuiltIn && !asInterfaceStructure) {
			var specialTypeMap_h = Object.create(null);
			specialTypeMap_h["Array"] = { name : "Array", moduleName : "Array", pack : []};
			specialTypeMap_h["ReadonlyArray"] = { name : "ReadOnlyArray", moduleName : "ReadOnlyArray", pack : ["haxe","ds"]};
			specialTypeMap_h["String"] = { name : "String", moduleName : "String", pack : []};
			specialTypeMap_h["Symbol"] = { name : "Symbol", moduleName : "Symbol", pack : ["js","lib"]};
			specialTypeMap_h["Iterable"] = { name : "Iterable", moduleName : "Iterable", pack : []};
			specialTypeMap_h["Function"] = { name : "Function", moduleName : "Constraints", pack : ["haxe"]};
			specialTypeMap_h["Object"] = { name : "Dynamic", moduleName : "Dynamic", pack : []};
			if(access._hx_index == 2) {
				var _g = access.symbolChain;
				if(_g.length == 1) {
					var _g1 = _g[0];
					var _g = _g1.declarations;
					var _g = _g1.escapedName;
					var _g = _g1.exports;
					var _g = _g1.flags;
					var _g = _g1.globalExports;
					var _g = _g1.members;
					var _g = _g1.valueDeclaration;
					var name = _g1.name;
					if(Object.prototype.hasOwnProperty.call(specialTypeMap_h,name)) {
						var tp = specialTypeMap_h[name];
						return { name : tp.name, moduleName : tp.moduleName, pack : tp.pack, isExistingStdLibType : true};
					} else if(this.stdLibMap != null) {
						var nativeAccessPath = tool_SymbolAccessTools.getIdentifierChain(access).join(".");
						var stdLibType = this.stdLibMap.js[nativeAccessPath];
						if(typeof(stdLibType) == "object") {
							var tsTypeParamDeclarations = tool_TsSymbolTools.getDeclarationTypeParameters(symbol);
							if(stdLibType.typeParameters.length == tsTypeParamDeclarations.length) {
								return { name : stdLibType.name, moduleName : stdLibType.moduleName, pack : stdLibType.pack, isExistingStdLibType : true};
							} else {
								Log.warn("Type parameter mismatch between haxe standard lib type (<b>" + stdLibType.typeParameters.length + "</>) and ts default type (<b>" + tsTypeParamDeclarations.length + "</>). Generating replacement.",null,symbol);
								clashesWithBuiltIn = true;
							}
						}
					}
				} else if(this.stdLibMap != null) {
					var nativeAccessPath = tool_SymbolAccessTools.getIdentifierChain(access).join(".");
					var stdLibType = this.stdLibMap.js[nativeAccessPath];
					if(typeof(stdLibType) == "object") {
						var tsTypeParamDeclarations = tool_TsSymbolTools.getDeclarationTypeParameters(symbol);
						if(stdLibType.typeParameters.length == tsTypeParamDeclarations.length) {
							return { name : stdLibType.name, moduleName : stdLibType.moduleName, pack : stdLibType.pack, isExistingStdLibType : true};
						} else {
							Log.warn("Type parameter mismatch between haxe standard lib type (<b>" + stdLibType.typeParameters.length + "</>) and ts default type (<b>" + tsTypeParamDeclarations.length + "</>). Generating replacement.",null,symbol);
							clashesWithBuiltIn = true;
						}
					}
				}
			}
		}
		var hasDeclarationInLib = function(symbol,filename) {
			var _g = 0;
			var _g1 = tool_TsSymbolTools.getDeclarationsArray(symbol);
			while(_g < _g1.length) {
				var declaration = _g1[_g];
				++_g;
				var sourceFile = declaration.getSourceFile();
				if(sourceFile.hasNoDefaultLib && haxe_io_Path.withoutDirectory(sourceFile.fileName).toLowerCase() == filename) {
					return true;
				}
			}
			return false;
		};
		var pack = isBuiltIn ? hasDeclarationInLib(symbol,"lib.dom.d.ts") ? ["js","html"] : ["js","lib"] : [];
		var identifierChain = tool_SymbolAccessTools.getIdentifierChain(access);
		switch(access._hx_index) {
		case 0:
			var _g = access.moduleSymbol;
			var _g = access.symbolChain;
			var modulePath = access.modulePath;
			var moduleNamePack = this.splitModulePath(this.getDeclaringModuleName(symbol));
			var modulePack = this.splitModulePath(modulePath);
			if(tool_HaxeTools.toSafePackageName(moduleNamePack[moduleNamePack.length - 1]) == tool_HaxeTools.toSafePackageName(modulePack[0])) {
				modulePack.shift();
			}
			pack = pack.concat(moduleNamePack).concat(modulePack).concat(identifierChain);
			pack.pop();
			break;
		case 1:
			var _g = access.sourceFileSymbol;
			var _g = access.symbolChain;
			var moduleName = access.moduleName;
			pack = pack.concat(this.splitModulePath(moduleName)).concat(identifierChain);
			pack.pop();
			break;
		case 2:
			var _g = access.symbolChain;
			pack = pack.concat(isBuiltIn || this.globalPackageName == null ? [] : [this.globalPackageName]).concat(identifierChain);
			pack.pop();
			break;
		case 3:
			var moduleNamePack = this.splitModulePath(this.getDeclaringModuleName(symbol));
			var pack1 = pack.concat(moduleNamePack);
			var _g = [];
			var _g1 = 0;
			var _g2 = tool_TsSymbolTools.getSymbolParents(symbol);
			while(_g1 < _g2.length) {
				var v = _g2[_g1];
				++_g1;
				if(!new EReg("^__\\w","").match(v.name)) {
					_g.push(v);
				}
			}
			var _g1 = [];
			var _g2 = 0;
			var _g3 = _g;
			while(_g2 < _g3.length) {
				var v = _g3[_g2];
				++_g2;
				if(!tool_TsSymbolTools.isSourceFileSymbol(v)) {
					_g1.push(v);
				}
			}
			var _this = _g1;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _this[i].name;
			}
			pack = pack1.concat(result);
			break;
		}
		var result = new Array(pack.length);
		var _g = 0;
		var _g1 = pack.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = tool_HaxeTools.toSafePackageName(pack[i]);
		}
		pack = result;
		var typeIdentifier;
		switch(access._hx_index) {
		case 0:
			var _g = access.moduleSymbol;
			var path = access.modulePath;
			var symbolChain = access.symbolChain;
			var lastSymbol = symbolChain[symbolChain.length - 1];
			typeIdentifier = lastSymbol != null ? tool_TsSymbolTools.isInternalSymbolName(lastSymbol.escapedName) ? symbol.name : lastSymbol.name : this.splitModulePath(path).pop();
			break;
		case 1:
			var _g = access.sourceFileSymbol;
			var path = access.moduleName;
			var symbolChain = access.symbolChain;
			var lastSymbol = symbolChain[symbolChain.length - 1];
			typeIdentifier = lastSymbol != null ? tool_TsSymbolTools.isInternalSymbolName(lastSymbol.escapedName) ? symbol.name : lastSymbol.name : this.splitModulePath(path).pop();
			break;
		case 2:
			var symbolChain = access.symbolChain;
			var lastSymbol = symbolChain[symbolChain.length - 1];
			typeIdentifier = lastSymbol != null ? tool_TsSymbolTools.isInternalSymbolName(lastSymbol.escapedName) ? symbol.name : lastSymbol.name : symbol.name;
			break;
		case 3:
			typeIdentifier = symbol.name;
			break;
		}
		var name = tool_HaxeTools.toSafeTypeName(typeIdentifier);
		if(asInterfaceStructure) {
			name = "I" + name;
		}
		var disallowedNames = this.stdLibMap != null ? this.stdLibMap.topLevelNames : this.defaultDisallowedNames;
		if(disallowedNames.indexOf(name) != -1 || clashesWithBuiltIn) {
			name += "_";
		}
		return { moduleName : name, name : name, pack : pack, isExistingStdLibType : false};
	}
	,splitModulePath: function(path) {
		var _g = [];
		var _g1 = 0;
		var _g2 = haxe_io_Path.normalize(path).split("/");
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(v != "") {
				_g.push(v);
			}
		}
		return _g;
	}
	,getDeclaringModuleName: function(symbol) {
		var declaredInModules = tool_TsSymbolTools.getParentModuleNames(symbol);
		if(Lambda.has(declaredInModules,this.inputParentModuleName) || declaredInModules.length == 0) {
			return this.inputParentModuleName;
		} else {
			declaredInModules.sort(function(a,b) {
				return ((StringTools.startsWith(a,"/") ? 1 : 0) << 2 | (StringTools.startsWith(a,"./") ? 1 : 0) << 1) - ((StringTools.startsWith(b,"/") ? 1 : 0) << 2 | (StringTools.startsWith(b,"./") ? 1 : 0) << 1);
			});
			return declaredInModules[0];
		}
	}
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.has = function(it,elt) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(x1 == elt) {
			return true;
		}
	}
	return false;
};
Lambda.exists = function(it,f) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(f(x1)) {
			return true;
		}
	}
	return false;
};
Lambda.find = function(it,f) {
	var v = $getIterator(it);
	while(v.hasNext()) {
		var v1 = v.next();
		if(f(v1)) {
			return v1;
		}
	}
	return null;
};
var Log = function() { };
Log.__name__ = true;
Log.setPrintLogLevel = function(level) {
	Log.printLogs = level >= 3;
	Log.printWarnings = level >= 2;
	Log.printErrors = level >= 1;
};
Log.log = function(message,node,symbol,type,diagnostic) {
	var str = Log.createMessage(message,node,symbol,type,diagnostic);
	if(Log.printLogs) {
		var s = Console.logPrefix + ("" + str);
		var outputStream = 0;
		if(outputStream == null) {
			outputStream = 0;
		}
		if(s == null) {
			s = "";
		}
		Console.printFormatted(s + "\n",outputStream);
	}
	Log.logs.push(str);
};
Log.warn = function(message,node,symbol,type,diagnostic) {
	var str = Log.createMessage(message,node,symbol,type,diagnostic);
	if(Log.printWarnings) {
		var s = Console.warnPrefix + ("" + str);
		var outputStream = 1;
		if(outputStream == null) {
			outputStream = 0;
		}
		if(s == null) {
			s = "";
		}
		Console.printFormatted(s + "\n",outputStream);
	}
	Log.warnings.push(str);
};
Log.error = function(message,node,symbol,type,diagnostic) {
	var str = Log.createMessage(message,node,symbol,type,diagnostic);
	if(Log.printErrors) {
		var s = Console.errorPrefix + ("" + str);
		var outputStream = 2;
		if(outputStream == null) {
			outputStream = 0;
		}
		if(s == null) {
			s = "";
		}
		Console.printFormatted(s + "\n",outputStream);
	}
	Log.errors.push(str);
};
Log.diagnostics = function(message,array) {
	if(array == null) {
		array = [];
	}
	var _g = 0;
	while(_g < array.length) {
		var diagnostic = array[_g];
		++_g;
		switch(diagnostic.category) {
		case ts.DiagnosticCategory.Error:
			Log.error(message,null,null,null,diagnostic);
			break;
		case ts.DiagnosticCategory.Message:
			Log.log(message,null,null,null,diagnostic);
			break;
		case ts.DiagnosticCategory.Suggestion:
			Log.log(message,null,null,null,diagnostic);
			break;
		case ts.DiagnosticCategory.Warning:
			Log.warn(message,null,null,null,diagnostic);
			break;
		}
	}
};
Log.formatLocation = function(location) {
	if(location.start != null) {
		var lineAndCharacter = location.sourceFile.getLineAndCharacterOfPosition(location.start);
		var line = lineAndCharacter.line;
		var character = lineAndCharacter.character;
		return "" + location.sourceFile.fileName + ":" + (line + 1) + (character > 0 ? ":" + (character + 1) : "");
	} else {
		return "" + location.sourceFile.fileName;
	}
};
Log.symbolInfo = function(symbol) {
	var str = "<b,cyan>" + symbol.name + " " + Std.string(tool_TsSymbolTools.getFlagsInfo(symbol)) + "</>";
	if(symbol.valueDeclaration != null) {
		str += " " + Log.nodeInfo(symbol.valueDeclaration);
	} else if(symbol.declarations != null && symbol.declarations[0] != null) {
		str += " " + Log.nodeInfo(symbol.declarations[0]);
	}
	return str;
};
Log.nodeInfo = function(node) {
	var tmp = "<magenta>" + tool_TsSyntaxTools.getSyntaxKindName(node.kind) + "</>";
	var tmp1;
	try {
		tmp1 = " " + Log.formatLocation({ sourceFile : node.getSourceFile(), start : node.getStart()});
	} catch( _g ) {
		tmp1 = "";
	}
	return tmp + tmp1;
};
Log.typeInfo = function(type) {
	return "<blue>" + Std.string(tool_TsTypeTools.getFlagsInfo(type)) + "</>" + (type.symbol != null ? " " + Log.symbolInfo(type.symbol) : "");
};
Log.createMessage = function(arg,node,symbol,type,diagnostic) {
	var parts = [];
	if(arg != null) {
		parts.push(Std.string(arg));
	}
	if(node != null) {
		parts.push("<dim>(" + Log.nodeInfo(node) + ")</>");
	}
	if(symbol != null) {
		parts.push("<dim>(" + Log.symbolInfo(symbol) + ")</>");
	}
	if(type != null) {
		parts.push("<dim>(" + Log.typeInfo(type) + ")</>");
	}
	if(diagnostic != null) {
		var message = "<b>[TypeScript " + ts.versionMajorMinor + "]</> " + diagnostic.messageText;
		if(diagnostic.file != null) {
			message += " <dim>(" + Log.formatLocation({ sourceFile : diagnostic.file, start : diagnostic.start}) + ")</>";
		}
		parts.push(message);
	}
	return parts.join(" ");
};
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	Console.warnPrefix = "<b,yellow>> Warning:</b> ";
	Console.errorPrefix = "<b,red>> Error:</b> ";
	var userArgs = process.argv.slice(2);
	var cliOptions = { cwd : null, outputPath : null, tsConfigFilePath : null, tsCompilerOptions : [], moduleNames : [], moduleSearchPath : ".", allDependencies : false, noOutput : false, locationComments : false, libWrapper : true, logLevel : 1, stdLibMode : StdLibMode.SystemHaxe, globalTypes : true, modularTypes : true, globalPackageName : "global", allowIntersectionRasterization : false, queueExternalSymbols : false, skipDependencies : false, enableTypeParameterConstraints : false};
	var help = false;
	var noColor = false;
	var silent = false;
	var defaultValueFormatting = "yellow";
	var explicitGlobalPackageName = false;
	var argHandler = { options : [{ flags : ["--output","-o"], args : [{ name : "path", opt : false, type : "String", value : null}], doc : "Set output directory for generated externs (default <" + defaultValueFormatting + ">\".haxelib\"</>)"},{ flags : ["--global","-g"], args : [], doc : "Generate externs <b>only</> for global / ambient types into top-level package"},{ flags : ["--modular","-m"], args : [], doc : "Generate externs <b>only</> for modular types (i.e. things you'd import or require() in js) into top-level package"},{ flags : ["--all"], args : [], doc : "Convert all dependencies referenced in package.json (those that have type definitions)"},{ flags : ["--tsconfig"], args : [{ name : "path", opt : false, type : "String", value : null}], doc : "Set path to tsconfig file to use when processing the .d.ts files"},{ flags : ["--target"], args : [{ name : "scriptTarget", opt : false, type : "String", value : null}], doc : "Set ts compiler option `--target`, takes precedent over options provided by --tsconfig (default <" + defaultValueFormatting + ">\"ES6\"</>)"},{ flags : ["--moduleResolution"], args : [{ name : "kind", opt : false, type : "String", value : null}], doc : "Set ts compiler option `--moduleResolution`, takes precedent over options provided by --tsconfig (default <" + defaultValueFormatting + ">\"Node\"</>)"},{ flags : ["--moduleSearchPath","-p"], args : [{ name : "path", opt : false, type : "String", value : null}], doc : "Path to use when searching for modules"},{ flags : ["--sourceLocation"], args : [], doc : "Enables printing the corresponding source file and line number for each declaration"},{ flags : ["--skipDependencies"], args : [], doc : "Disables converting dependencies of a module (using this may mean the generated haxe references external types that will not be generated)"},{ flags : ["--constraints"], args : [], doc : "Enables generating type parameter constraints. This will often work fine for many modules but it is a WIP feature"},{ flags : ["--globalPackageName"], args : [{ name : "name", opt : false, type : "String", value : null}], doc : "Set the name of the package for global modules (default <" + defaultValueFormatting + ">\"" + cliOptions.globalPackageName + "\"</>)"},{ flags : ["--noStdLib"], args : [], doc : "Disables mapping types to the haxe standard library – this means externs will be generated for built-in types"},{ flags : ["--noLibWrap"], args : [], doc : "Disables wrapping the generated externs in a haxelib-style library. Use this option if you intend to use the externs via a class-path rather than as a library"},{ flags : ["--noOutput"], args : [], doc : "Runs conversion but doesn't save files"},{ flags : ["--noColor"], args : [], doc : "Disable terminal colors"},{ flags : ["--no-color"], args : [], doc : null},{ flags : ["--help"], args : [], doc : "Show this help"},{ flags : ["--silent"], args : [], doc : "Disable command-line output"},{ flags : ["--noWarn"], args : [], doc : "Disable printing warnings"},{ flags : ["--verbose"], args : [], doc : "Print all logs"},{ flags : ["--allowIntersectionRasterization"], args : [], doc : null},{ flags : ["--includeExternal"], args : [], doc : null},{ flags : ["--noDts2hxVersion"], args : [], doc : null},{ flags : ["--noGlobal"], args : [], doc : null},{ flags : ["--noModular"], args : [], doc : null},{ flags : ["--useSystemHaxe"], args : [], doc : null}], parse : function(__args) {
		var __index = 0;
		while(__index < __args.length) {
			var _g = __args[__index++];
			switch(_g) {
			case "--all":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.allDependencies = true;
				__index += 0;
				break;
			case "--allowIntersectionRasterization":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.allowIntersectionRasterization = true;
				__index += 0;
				break;
			case "--constraints":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.enableTypeParameterConstraints = true;
				__index += 0;
				break;
			case "--global":case "-g":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.globalTypes = true;
				cliOptions.modularTypes = false;
				__index += 0;
				break;
			case "--globalPackageName":
				if(__index + 1 > __args.length) {
					if(![false][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 1);
					}
				}
				var name = __args[__index];
				name = StringTools.trim(name);
				cliOptions.globalPackageName = name == "" ? null : name;
				explicitGlobalPackageName = true;
				++__index;
				break;
			case "--help":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				help = true;
				__index += 0;
				break;
			case "--includeExternal":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.queueExternalSymbols = true;
				__index += 0;
				break;
			case "--moduleResolution":
				if(__index + 1 > __args.length) {
					if(![false][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 1);
					}
				}
				cliOptions.tsCompilerOptions.push("--moduleResolution");
				cliOptions.tsCompilerOptions.push(__args[__index]);
				++__index;
				break;
			case "--no-color":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				noColor = true;
				__index += 0;
				break;
			case "--noColor":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				noColor = true;
				__index += 0;
				break;
			case "--noDts2hxVersion":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				Main.dts2hxPackageJson.version = "x.x.x";
				__index += 0;
				break;
			case "--noGlobal":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.globalTypes = false;
				__index += 0;
				break;
			case "--noLibWrap":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.libWrapper = false;
				__index += 0;
				break;
			case "--noModular":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.modularTypes = false;
				__index += 0;
				break;
			case "--noOutput":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.noOutput = true;
				__index += 0;
				break;
			case "--noStdLib":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.stdLibMode = StdLibMode.None;
				__index += 0;
				break;
			case "--noWarn":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.logLevel = 1;
				__index += 0;
				break;
			case "--output":case "-o":
				if(__index + 1 > __args.length) {
					if(![false][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 1);
					}
				}
				cliOptions.outputPath = __args[__index];
				++__index;
				break;
			case "--silent":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				silent = true;
				__index += 0;
				break;
			case "--skipDependencies":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.skipDependencies = true;
				__index += 0;
				break;
			case "--sourceLocation":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.locationComments = true;
				__index += 0;
				break;
			case "--target":
				if(__index + 1 > __args.length) {
					if(![false][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 1);
					}
				}
				cliOptions.tsCompilerOptions.push("--target");
				cliOptions.tsCompilerOptions.push(__args[__index]);
				++__index;
				break;
			case "--tsconfig":
				if(__index + 1 > __args.length) {
					if(![false][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 1);
					}
				}
				cliOptions.tsConfigFilePath = __args[__index];
				++__index;
				break;
			case "--useSystemHaxe":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.stdLibMode = StdLibMode.SystemHaxe;
				__index += 0;
				break;
			case "--verbose":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.logLevel = 4;
				__index += 0;
				break;
			case "--modular":case "-m":
				if(__index > __args.length) {
					if(![][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 0);
					}
				}
				cliOptions.globalTypes = false;
				cliOptions.modularTypes = true;
				__index += 0;
				break;
			case "--moduleSearchPath":case "-p":
				if(__index + 1 > __args.length) {
					if(![false][__args.length - 1]) {
						throw haxe_Exception.thrown("Not enough arguments: " + Std.string(__args[__index - 1]) + " expects " + 1);
					}
				}
				cliOptions.moduleSearchPath = __args[__index];
				++__index;
				break;
			default:
				var arg = _g;
				var arg1 = arg;
				if(arg1.charAt(0) == "-") {
					throw haxe_Exception.thrown("Unknown argument \"" + arg1 + "\"");
				}
				var moduleName = HxOverrides.substr(arg1,arg1.length - 5,null).toLowerCase() == ".d.ts" ? HxOverrides.substr(arg1,0,arg1.length - 5) : arg1;
				cliOptions.moduleNames.push(moduleName);
			}
		}
	}};
	if(userArgs.length == 0) {
		Main.printDoc(argHandler);
		process.exit(1);
		return;
	} else {
		try {
			argHandler.parse(userArgs);
		} catch( _g ) {
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(typeof(_g1) == "string") {
				var e = _g1;
				var s = Console.errorPrefix + ("" + e);
				var outputStream = 2;
				if(outputStream == null) {
					outputStream = 0;
				}
				if(s == null) {
					s = "";
				}
				Console.printFormatted(s + "\n",outputStream);
				Console.print("\n");
				Main.printDoc(argHandler);
				process.exit(1);
			} else {
				throw _g;
			}
		}
	}
	if(silent) {
		Console.printIntercept = function(s,o) {
			return false;
		};
		haxe_Log.trace = function(v,info) {
		};
	}
	if(noColor) {
		Console.formatMode = 2;
	}
	if(help) {
		Main.printDoc(argHandler);
		process.exit(0);
		return;
	}
	Log.setPrintLogLevel(cliOptions.logLevel);
	if(cliOptions.globalTypes && !cliOptions.modularTypes && !explicitGlobalPackageName) {
		cliOptions.globalPackageName = null;
	}
	var defaultCompilerOptions = ts.getDefaultCompilerOptions();
	defaultCompilerOptions.target = ts.ScriptTarget.ES2015;
	defaultCompilerOptions.types = [];
	defaultCompilerOptions.moduleResolution = ts.ModuleResolutionKind.NodeJs;
	defaultCompilerOptions.strictNullChecks = true;
	var compilerOptions = defaultCompilerOptions;
	if(cliOptions.tsConfigFilePath != null) {
		var readResult = ts.readConfigFile(cliOptions.tsConfigFilePath,function(path) {
			return ts.sys.readFile(path,"utf8");
		});
		if(readResult.config != null) {
			var compilerOptionsObj = Reflect.field(readResult.config,"compilerOptions");
			var result = ts.convertCompilerOptionsFromJson(compilerOptionsObj,process.cwd(),cliOptions.tsConfigFilePath);
			Log.diagnostics(null,result.errors);
			compilerOptions = Main.extend(compilerOptions,result.options);
		} else if(readResult.error != null) {
			Log.diagnostics(null,[readResult.error]);
		}
	}
	if(cliOptions.tsCompilerOptions.length > 0) {
		var result = ts.parseCommandLine(cliOptions.tsCompilerOptions);
		Log.diagnostics(null,result.errors);
		compilerOptions = Main.extend(compilerOptions,result.options);
	}
	var host = ts.createCompilerHost(compilerOptions);
	if(cliOptions.allDependencies) {
		try {
			var packageJson = host.readFile("package.json");
			if(packageJson == null) {
				var absPath = haxe_io_Path.join([host.getCurrentDirectory(),"package.json"]);
				throw haxe_Exception.thrown("<b>\"" + absPath + "\"</> does not exist; could not determine dependencies");
			}
			var packageObj = JSON.parse(packageJson);
			var dependencies = packageObj.dependencies != null ? packageObj.dependencies : { };
			var devDependencies = packageObj.devDependencies != null ? packageObj.devDependencies : { };
			var allDependencies = Reflect.fields(dependencies).concat(Reflect.fields(devDependencies));
			var _g = 0;
			while(_g < allDependencies.length) {
				var moduleName = allDependencies[_g];
				++_g;
				var result = ts.resolveModuleName(moduleName,cliOptions.moduleSearchPath + "/.",compilerOptions,host);
				if(result.resolvedModule != null) {
					switch(result.resolvedModule.extension) {
					case ts.Extension.Js:case ts.Extension.Json:case ts.Extension.Jsx:case ts.Extension.TsBuildInfo:
						break;
					case ts.Extension.Dts:case ts.Extension.Ts:case ts.Extension.Tsx:
						var normalizedName = tool_TsProgramTools.normalizeModuleName(moduleName);
						if(!Lambda.has(cliOptions.moduleNames,normalizedName)) {
							cliOptions.moduleNames.push(normalizedName);
						}
						break;
					}
					continue;
				}
				Log.warn("No type definitions found for <b>\"" + moduleName + "\"</b>");
			}
		} catch( _g ) {
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(typeof(_g1) == "string") {
				var e = _g1;
				Log.error(e);
			} else {
				throw _g;
			}
		}
	}
	var moduleQueue = new ds_OnceOnlyQueue();
	var _g = 0;
	var _g1 = cliOptions.moduleNames;
	while(_g < _g1.length) {
		var moduleName = _g1[_g];
		++_g;
		moduleQueue.tryEnqueue(moduleName);
	}
	var _g = 0;
	var _g1 = ts.getAutomaticTypeDirectiveNames(compilerOptions,host);
	while(_g < _g1.length) {
		var moduleName = _g1[_g];
		++_g;
		moduleQueue.tryEnqueue(moduleName);
	}
	var stdLibTypeMap;
	switch(cliOptions.stdLibMode._hx_index) {
	case 0:
		stdLibTypeMap = null;
		break;
	case 1:
		stdLibTypeMap = Main.defaultStdLibTypeMap;
		break;
	case 2:
		try {
			var str = js_node_ChildProcess.execSync("haxe --version");
			var s = Console.logPrefix + ("" + ("Using standard library of system haxe version <b>" + str + "</>"));
			var outputStream = 0;
			if(outputStream == null) {
				outputStream = 0;
			}
			if(s == null) {
				s = "";
			}
			Console.printFormatted(s + "\n",outputStream);
			var typemapPath = haxe_io_Path.join([__dirname,"../","src/typemap"]);
			var stdLibJsonStr = js_node_ChildProcess.execSync("haxe -D StdLibMacro --macro \"StdLibMacro.getMap(true)\" --js not-real.js --no-output",{ cwd : typemapPath});
			stdLibTypeMap = JSON.parse(stdLibJsonStr);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			Log.error("Failed to generate standard library type map (using <b>" + Main.defaultStdLibTypeMap.haxeVersion + "</> instead): " + (e == null ? "null" : Std.string(e)));
			stdLibTypeMap = Main.defaultStdLibTypeMap;
		}
		break;
	}
	if(moduleQueue.empty()) {
		Log.error("No modules queued");
	}
	while(true) {
		var moduleName = moduleQueue.dequeue();
		if(moduleName == null) {
			break;
		}
		var converterContext = Main.convertTsModule(moduleName,cliOptions.moduleSearchPath,compilerOptions,stdLibTypeMap,cliOptions);
		if(converterContext == null) {
			continue;
		}
		var moduleDependencies = converterContext.moduleDependencies;
		if(moduleDependencies.length > 0) {
			Log.log("<magenta>Module <b>" + moduleName + "</> depends on <b>" + Std.string(moduleDependencies) + "</></>");
		}
		if(!cliOptions.skipDependencies) {
			var _g = 0;
			var _g1 = moduleDependencies;
			while(_g < _g1.length) {
				var moduleDependency = _g1[_g];
				++_g;
				moduleQueue.tryEnqueue(moduleDependency.normalizedModuleName);
			}
		}
	}
};
Main.convertTsModule = function(moduleName,moduleSearchPath,compilerOptions,stdLibTypeMap,cliOptions) {
	var converter;
	try {
		converter = new ConverterContext(moduleName,moduleSearchPath,compilerOptions,stdLibTypeMap,cliOptions);
	} catch( _g ) {
		var e = haxe_Exception.caught(_g).unwrap();
		Log.error(e);
		return null;
	}
	var generateLibraryWrapper = cliOptions.libWrapper && converter.inputModule.packageId != null;
	var outputPath = cliOptions.outputPath != null ? cliOptions.outputPath : generateLibraryWrapper ? ".haxelib" : "externs";
	var haxelibMode = haxe_io_Path.withoutDirectory(haxe_io_Path.removeTrailingSlashes(outputPath.toLowerCase())) == ".haxelib";
	if(!cliOptions.noOutput) {
		var printer = new Printer();
		var libraryName = Main.haxelibLibraryName(converter.packageName != null ? converter.packageName : converter.normalizedInputModuleName);
		var libraryVersion = converter.inputModule.packageId != null && converter.inputModule.packageId.version != null ? converter.inputModule.packageId.version : "default";
		var outputLibraryPath = generateLibraryWrapper ? haxelibMode ? haxe_io_Path.join([outputPath,StringTools.replace(libraryName,".",","),StringTools.replace(libraryVersion,".",",")]) : haxe_io_Path.join([outputPath,libraryName]) : outputPath;
		if(haxelibMode) {
			var libRoot = haxe_io_Path.directory(outputLibraryPath);
			tool_FileTools.touchDirectoryPath(libRoot);
			js_node_Fs.writeFileSync(haxe_io_Path.join([libRoot,".current"]),libraryVersion);
		}
		tool_FileTools.touchDirectoryPath(outputLibraryPath);
		var h = converter.generatedModules.h;
		var _g_h = h;
		var _g_keys = Object.keys(h);
		var _g_length = _g_keys.length;
		var _g_current = 0;
		while(_g_current < _g_length) {
			var key = _g_keys[_g_current++];
			var _g1_key = key;
			var _g1_value = _g_h[key];
			var _ = _g1_key;
			var haxeModule = _g1_value;
			var skipModule = false;
			if(haxeModule.meta != null) {
				var isValueModuleOnly = Lambda.find(haxeModule.meta,function(m) {
					return m.name == "valueModuleOnly";
				}) != null;
				skipModule = skipModule || isValueModuleOnly && haxeModule.fields.length == 0;
			}
			if(skipModule) {
				continue;
			}
			var filePath = "" + haxeModule.name + ".hx";
			var filePath1 = haxe_io_Path.join([outputLibraryPath].concat(haxeModule.pack).concat([filePath]));
			var printPackage = true;
			var moduleHaxeStr = printer.printTypeDefinition(haxeModule,printPackage);
			tool_FileTools.touchDirectoryPath(haxe_io_Path.directory(filePath1));
			js_node_Fs.writeFileSync(filePath1,moduleHaxeStr);
		}
		if(generateLibraryWrapper) {
			var packageJson = Main.getModulePackageJson(moduleName,moduleSearchPath,converter.inputModule);
			var readmeStr = Main.generateReadme(moduleName,moduleSearchPath,converter,packageJson,stdLibTypeMap);
			js_node_Fs.writeFileSync(haxe_io_Path.join([outputLibraryPath,"README.md"]),readmeStr);
			var haxelibJsonStr = Main.generateHaxelibJson(moduleName,moduleSearchPath,converter,packageJson);
			js_node_Fs.writeFileSync(haxe_io_Path.join([outputLibraryPath,"haxelib.json"]),haxelibJsonStr);
		}
		var s = Console.successPrefix + ("" + ("<green>Saved externs for <b>" + moduleName + "</> into <b>" + outputLibraryPath + "/</></>"));
		var outputStream = 0;
		if(outputStream == null) {
			outputStream = 0;
		}
		if(s == null) {
			s = "";
		}
		Console.printFormatted(s + "\n",outputStream);
	}
	return converter;
};
Main.generateReadme = function(inputModuleName,moduleSearchPath,converter,modulePackageJson,stdLibTypeMap) {
	var resolvedModule = converter.inputModule;
	var dts2hxRepoUrl = Main.dts2hxPackageJson.repository.url;
	var dts2hxRef = dts2hxRepoUrl != null ? "[dts2hx](" + dts2hxRepoUrl + ")" : "dts2hx";
	var typesModuleVersion = resolvedModule.packageId != null ? resolvedModule.packageId.version : null;
	var typesModuleName = resolvedModule.packageId != null ? resolvedModule.packageId.name : inputModuleName;
	var typesModuleUrl = modulePackageJson != null ? modulePackageJson.homepage != null ? modulePackageJson.homepage : modulePackageJson.bugs != null && modulePackageJson.bugs.url != null ? modulePackageJson.bugs.url : null : null;
	var typesModuleIdMarkdown = "" + typesModuleName + (typesModuleVersion != null ? " v" + typesModuleVersion : "");
	if(typesModuleUrl != null) {
		typesModuleIdMarkdown = "[" + typesModuleIdMarkdown + "](" + typesModuleUrl + ")";
	}
	var sections = [];
	sections.push("# Haxe Externs for " + (converter.packageName != null ? converter.packageName : converter.normalizedInputModuleName));
	sections.push("\n\t\t\tGenerated from **" + typesModuleIdMarkdown + "** by **" + dts2hxRef + " " + Main.dts2hxPackageJson.version + "** using **TypeScript " + ts.version + "** with arguments:\n\n\t\t\t\tdts2hx " + process.argv.slice(2).join(" ") + "\n\t\t");
	if(converter.moduleDependencies.length > 0) {
		var _this = converter.moduleDependencies;
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = "- " + _this[i].normalizedModuleName;
		}
		sections.push(["## Dependencies"].concat(result).join("\n"));
	}
	if(modulePackageJson != null) {
		try {
			if(modulePackageJson.contributors != null && modulePackageJson.contributors.length > 0) {
				var tmp = "## Contributors to " + typesModuleName;
				var _this = modulePackageJson.contributors;
				var result = new Array(_this.length);
				var _g = 0;
				var _g1 = _this.length;
				while(_g < _g1) {
					var i = _g++;
					var c = _this[i];
					result[i] = c.url != null ? "- [" + c.name + "](" + c.url + ")" : c.name;
				}
				sections.push([tmp].concat(result).join("\n"));
			}
		} catch( _g ) {
		}
	}
	var result = new Array(sections.length);
	var _g = 0;
	var _g1 = sections.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = StringTools.trim(tool_StringTools.removeIndentation(sections[i]));
	}
	return result.join("\n\n");
};
Main.haxelibLibraryName = function(moduleName) {
	var safeName = StringTools.replace(StringTools.replace(moduleName,"/","-"),"\\","-");
	var _this_r = new RegExp("\\s+","".split("u").join(""));
	safeName = safeName.replace(_this_r,"-");
	var _this_r = new RegExp("[^\\w.-]","ig".split("u").join(""));
	safeName = safeName.replace(_this_r,"");
	if(safeName == "") {
		Log.error("Module name " + moduleName + " cannot be converted to a safe haxelib library name");
		return moduleName;
	}
	return safeName;
};
Main.generateHaxelibJson = function(inputModuleName,moduleSearchPath,converter,modulePackageJson) {
	var resolvedModule = converter.inputModule;
	var moduleName = converter.packageName != null ? converter.packageName : converter.normalizedInputModuleName;
	var moduleVersion = resolvedModule.packageId != null ? resolvedModule.packageId.version : null;
	var haxelib = { name : moduleName, tags : [moduleName,"externs","typescript","javascript","dts2hx"], description : "Externs for " + moduleName + (moduleVersion != null ? " v" + moduleVersion : "") + " automatically generated by dts2hx", contributors : ["haxiomic"], dependencies : { }};
	if(moduleVersion != null) {
		haxelib.version = moduleVersion;
	}
	var _g = 0;
	var _g1 = converter.moduleDependencies;
	while(_g < _g1.length) {
		var moduleDependency = _g1[_g];
		++_g;
		var dependencyVersion = moduleDependency.packageInfo.version;
		var dependencyName = Main.haxelibLibraryName(moduleDependency.normalizedModuleName);
		haxelib.dependencies[dependencyName] = dependencyVersion != null ? dependencyVersion : "";
	}
	return JSON.stringify(haxelib,null,"\t");
};
Main.getModulePackageJson = function(moduleName,moduleSearchPath,resolvedModule) {
	var typesModuleName = resolvedModule.packageId != null ? resolvedModule.packageId.name : moduleName;
	try {
		var packageJsonPath = require.resolve(("" + typesModuleName + "/package.json"), {paths: [moduleSearchPath]});
		return JSON.parse(js_node_Fs.readFileSync(packageJsonPath,{ encoding : "utf8"}));
	} catch( _g ) {
		return null;
	}
};
Main.extend = function(base,extendWidth) {
	var extended = { };
	var _g = 0;
	var _g1 = Reflect.fields(base);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		extended[field] = Reflect.field(base,field);
	}
	var _g = 0;
	var _g1 = Reflect.fields(extendWidth);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		extended[field] = Reflect.field(extendWidth,field);
	}
	return extended;
};
Main.printDoc = function(argHandler) {
	var s = "<b>dts2hx</b> <b>" + Main.dts2hxPackageJson.version + "</> <red>alpha</> using <b>TypeScript " + ts.version + "</>";
	if(s == null) {
		s = "";
	}
	Console.printFormatted(s + "\n",0);
	var s = "TypeScript definition to haxe extern converter";
	if(s == null) {
		s = "";
	}
	Console.print(s + "\n",0);
	var s = "";
	if(s == null) {
		s = "";
	}
	Console.print(s + "\n",0);
	var s = "<b>Usage:</b>";
	if(s == null) {
		s = "";
	}
	Console.printFormatted(s + "\n",0);
	var s = "\tdts2hx <i,cyan>{moduleName}</> <i,cyan>{options}</>";
	if(s == null) {
		s = "";
	}
	Console.printFormatted(s + "\n",0);
	var s = "";
	if(s == null) {
		s = "";
	}
	Console.print(s + "\n",0);
	var s = "<b>Examples:</b>";
	if(s == null) {
		s = "";
	}
	Console.printFormatted(s + "\n",0);
	var s = "\tdts2hx three";
	if(s == null) {
		s = "";
	}
	Console.printFormatted(s + "\n",0);
	var s = "\tdts2hx --all";
	if(s == null) {
		s = "";
	}
	Console.printFormatted(s + "\n",0);
	var s = "\tdts2hx ./src/index --tsconfig ./tsconfig.json --verbose";
	if(s == null) {
		s = "";
	}
	Console.printFormatted(s + "\n",0);
	var s = "";
	if(s == null) {
		s = "";
	}
	Console.print(s + "\n",0);
	Console.printFormatted("<b>Options:</>\n");
	var usageStringMaxLength = 0;
	var formattedOptions = [];
	var _g = 0;
	var _g1 = argHandler.options;
	while(_g < _g1.length) {
		var item = _g1[_g];
		++_g;
		if(item.doc == null) {
			continue;
		}
		var usageString = "" + item.flags.join(", ");
		if(item.args.length > 0) {
			var _this = item.args;
			var result = new Array(_this.length);
			var _g2 = 0;
			var _g3 = _this.length;
			while(_g2 < _g3) {
				var i = _g2++;
				var a = _this[i];
				result[i] = "{" + (a.opt ? "?" : "") + a.name + "}";
			}
			usageString += " <i,light_cyan>" + result.join(", ") + "</>";
		}
		usageString = "<bg_black,light_white>" + usageString + "</>";
		var unformattedLength = Console.stripFormatting(usageString).length;
		formattedOptions.push({ usageString : usageString, unformattedLength : unformattedLength, doc : item.doc});
		usageStringMaxLength = Math.max(usageStringMaxLength,unformattedLength) | 0;
	}
	var result = new Array(formattedOptions.length);
	var _g = 0;
	var _g1 = formattedOptions.length;
	while(_g < _g1) {
		var i = _g++;
		var f = formattedOptions[i];
		var _g2 = [];
		var _g3 = 0;
		var _g4 = usageStringMaxLength - f.unformattedLength;
		while(_g3 < _g4) {
			var i1 = _g3++;
			_g2.push(" ");
		}
		var rPadding = _g2.join("");
		result[i] = "" + f.usageString + rPadding + " " + f.doc + "\n";
	}
	var lines = result;
	Console.printFormatted(lines.join("\n") + "\n");
};
var StdLibMode = $hxEnums["StdLibMode"] = { __ename__:true,__constructs__:null
	,None: {_hx_name:"None",_hx_index:0,__enum__:"StdLibMode",toString:$estr}
	,DefaultTypeMap: {_hx_name:"DefaultTypeMap",_hx_index:1,__enum__:"StdLibMode",toString:$estr}
	,SystemHaxe: {_hx_name:"SystemHaxe",_hx_index:2,__enum__:"StdLibMode",toString:$estr}
};
StdLibMode.__constructs__ = [StdLibMode.None,StdLibMode.DefaultTypeMap,StdLibMode.SystemHaxe];
Math.__name__ = true;
var PostProcess = function() { };
PostProcess.__name__ = true;
PostProcess.run = function(ctx) {
	var tc = ctx.tc;
	var _g = 0;
	var _g1 = ctx.processedDeclarationSymbols;
	while(_g < _g1.length) {
		var symbol = _g1[_g];
		++_g;
		var _g2 = 0;
		var _g3 = ctx.symbolAccessMap.getAccess(symbol);
		while(_g2 < _g3.length) {
			var access = [_g3[_g2]];
			++_g2;
			if(tool_TsSymbolTools.isAccessibleField(symbol)) {
				var fieldType = ctx.getTsTypeOfField(symbol);
				if(fieldType.symbol != null && (fieldType.symbol.flags & ts.SymbolFlags.Enum) != 0) {
					var enumTypeSymbol = fieldType.symbol;
					var enumTypeSymbolAccess = Lambda.find(ctx.symbolAccessMap.getAccess(enumTypeSymbol),(function(access) {
						return function(enumTypeAccess) {
							return enumTypeAccess._hx_index == access[0]._hx_index;
						};
					})(access));
					var enumTypePath = ctx.haxeTypePathMap.getTypePath(enumTypeSymbol,access[0],false);
					var _g4 = [];
					var _g5 = 0;
					var _g6 = tc.getExportsOfModule(enumTypeSymbol);
					while(_g5 < _g6.length) {
						var v = _g6[_g5];
						++_g5;
						if((v.flags & ts.SymbolFlags.EnumMember) != 0) {
							_g4.push(v);
						}
					}
					var enumMembers = _g4;
					var this1 = ctx.generatedModules;
					var key = ctx.getHaxeModuleKey(enumTypePath.pack,enumTypePath.name);
					var hxEnumModule = this1.h[key];
					if(hxEnumModule != null && enumTypeSymbolAccess != null && enumMembers.length == 0) {
						var enumTypeChain = tool_SymbolAccessTools.getIdentifierChain(enumTypeSymbolAccess).slice();
						var fieldChain = tool_SymbolAccessTools.getIdentifierChain(access[0]).slice();
						enumTypeChain.pop();
						fieldChain.pop();
						if(enumTypeChain.join(".") == fieldChain.join(".")) {
							var enumField = ctx.fieldFromSymbol(symbol.name,symbol,enumTypeSymbol,enumTypeSymbolAccess,null);
							hxEnumModule.fields.push(enumField);
						}
						var parentAccess;
						switch(access[0]._hx_index) {
						case 0:
							var modulePath = access[0].modulePath;
							var moduleSymbol = access[0].moduleSymbol;
							var symbolChain = access[0].symbolChain;
							parentAccess = SymbolAccess.AmbientModule(modulePath,moduleSymbol,symbolChain.slice(0,symbolChain.length - 1));
							break;
						case 1:
							var moduleName = access[0].moduleName;
							var sourceFileSymbol = access[0].sourceFileSymbol;
							var symbolChain1 = access[0].symbolChain;
							parentAccess = SymbolAccess.ExportModule(moduleName,sourceFileSymbol,symbolChain1.slice(0,symbolChain1.length - 1));
							break;
						case 2:
							var symbolChain2 = access[0].symbolChain;
							parentAccess = SymbolAccess.Global(symbolChain2.slice(0,symbolChain2.length - 1));
							break;
						case 3:
							parentAccess = SymbolAccess.Inaccessible;
							break;
						}
						tool_HaxeTools.removeMeta(hxEnumModule,":native");
						tool_HaxeTools.removeMeta(hxEnumModule,":jsRequire");
						var metas = hxEnumModule.meta == null ? hxEnumModule.meta = [] : hxEnumModule.meta;
						metas.push(tool_SymbolAccessTools.toAccessMetadata(parentAccess));
					}
				}
			}
		}
	}
	var h = ctx.generatedModules.h;
	var _g2_h = h;
	var _g2_keys = Object.keys(h);
	var _g2_length = _g2_keys.length;
	var _g2_current = 0;
	while(_g2_current < _g2_length) {
		var key = _g2_keys[_g2_current++];
		var _g3_key = key;
		var _g3_value = _g2_h[key];
		var _ = _g3_key;
		var hxModule = _g3_value;
		tool_HaxeTools.resolveNameCollisions(hxModule.fields);
	}
};
var haxe_macro_Printer = function(tabString) {
	if(tabString == null) {
		tabString = "\t";
	}
	this.tabs = "";
	this.tabString = tabString;
};
haxe_macro_Printer.__name__ = true;
haxe_macro_Printer.prototype = {
	printUnop: function(op) {
		switch(op._hx_index) {
		case 0:
			return "++";
		case 1:
			return "--";
		case 2:
			return "!";
		case 3:
			return "-";
		case 4:
			return "~";
		case 5:
			return "...";
		}
	}
	,printBinop: function(op) {
		switch(op._hx_index) {
		case 0:
			return "+";
		case 1:
			return "*";
		case 2:
			return "/";
		case 3:
			return "-";
		case 4:
			return "=";
		case 5:
			return "==";
		case 6:
			return "!=";
		case 7:
			return ">";
		case 8:
			return ">=";
		case 9:
			return "<";
		case 10:
			return "<=";
		case 11:
			return "&";
		case 12:
			return "|";
		case 13:
			return "^";
		case 14:
			return "&&";
		case 15:
			return "||";
		case 16:
			return "<<";
		case 17:
			return ">>";
		case 18:
			return ">>>";
		case 19:
			return "%";
		case 20:
			var op1 = op.op;
			return this.printBinop(op1) + "=";
		case 21:
			return "...";
		case 22:
			return "=>";
		case 23:
			return "in";
		}
	}
	,escapeString: function(s,delim) {
		return delim + StringTools.replace(StringTools.replace(StringTools.replace(StringTools.replace(StringTools.replace(s,"\n","\\n"),"\t","\\t"),"\r","\\r"),"'","\\'"),"\"","\\\"") + delim;
	}
	,printFormatString: function(s) {
		return this.escapeString(s,"'");
	}
	,printString: function(s) {
		return this.escapeString(s,"\"");
	}
	,printConstant: function(c) {
		switch(c._hx_index) {
		case 0:
			var s = c.v;
			return s;
		case 1:
			var s = c.f;
			return s;
		case 2:
			var _g = c.s;
			var _g1 = c.kind;
			if(_g1 == null) {
				var s = _g;
				return this.printString(s);
			} else if(_g1._hx_index == 1) {
				var s = _g;
				return this.printFormatString(s);
			} else {
				var s = _g;
				return this.printString(s);
			}
			break;
		case 3:
			var s = c.s;
			return s;
		case 4:
			var s = c.r;
			var opt = c.opt;
			return "~/" + s + "/" + opt;
		}
	}
	,printTypeParam: function(param) {
		switch(param._hx_index) {
		case 0:
			var ct = param.t;
			return this.printComplexType(ct);
		case 1:
			var e = param.e;
			return this.printExpr(e);
		}
	}
	,printTypePath: function(tp) {
		var tmp = (tp.pack.length > 0 ? tp.pack.join(".") + "." : "") + tp.name + (tp.sub != null ? "." + tp.sub : "");
		var tmp1;
		if(tp.params == null) {
			tmp1 = "";
		} else if(tp.params.length > 0) {
			var _this = tp.params;
			var f = $bind(this,this.printTypeParam);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp1 = "<" + result.join(", ") + ">";
		} else {
			tmp1 = "";
		}
		return tmp + tmp1;
	}
	,printComplexType: function(ct) {
		switch(ct._hx_index) {
		case 0:
			var tp = ct.p;
			return this.printTypePath(tp);
		case 1:
			var args = ct.args;
			var ret = ct.ret;
			var wrapArgumentsInParentheses;
			if(args.length == 1) {
				var _g = args[0];
				switch(_g._hx_index) {
				case 0:
					var _g1 = _g.p;
					wrapArgumentsInParentheses = false;
					break;
				case 3:
					var t = _g.t;
					wrapArgumentsInParentheses = false;
					break;
				case 5:
					var _g1 = _g.t;
					if(_g1._hx_index == 0) {
						var _g = _g1.p;
						wrapArgumentsInParentheses = false;
					} else {
						wrapArgumentsInParentheses = true;
					}
					break;
				default:
					wrapArgumentsInParentheses = true;
				}
			} else {
				wrapArgumentsInParentheses = true;
			}
			var f = $bind(this,this.printComplexType);
			var result = new Array(args.length);
			var _g = 0;
			var _g1 = args.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(args[i]);
			}
			var argStr = result.join(", ");
			var tmp;
			if(ret._hx_index == 1) {
				var _g = ret.args;
				var _g = ret.ret;
				tmp = "(" + this.printComplexType(ret) + ")";
			} else {
				tmp = this.printComplexType(ret);
			}
			return (wrapArgumentsInParentheses ? "(" + argStr + ")" : argStr) + " -> " + tmp;
		case 2:
			var fields = ct.fields;
			var _g = [];
			var _g1 = 0;
			while(_g1 < fields.length) {
				var f = fields[_g1];
				++_g1;
				_g.push(this.printField(f) + "; ");
			}
			return "{ " + _g.join("") + "}";
		case 3:
			var ct1 = ct.t;
			return "(" + this.printComplexType(ct1) + ")";
		case 4:
			var tpl = ct.p;
			var fields = ct.fields;
			var _g = [];
			var _g1 = 0;
			while(_g1 < tpl.length) {
				var t = tpl[_g1];
				++_g1;
				_g.push("> " + this.printTypePath(t) + ", ");
			}
			var types = _g.join("");
			var _g = [];
			var _g1 = 0;
			while(_g1 < fields.length) {
				var f = fields[_g1];
				++_g1;
				_g.push(this.printField(f) + "; ");
			}
			var fields = _g.join("");
			return "{" + types + fields + "}";
		case 5:
			var ct1 = ct.t;
			return "?" + this.printComplexType(ct1);
		case 6:
			var n = ct.n;
			var ct1 = ct.t;
			return n + ":" + this.printComplexType(ct1);
		case 7:
			var tl = ct.tl;
			var f = $bind(this,this.printComplexType);
			var result = new Array(tl.length);
			var _g = 0;
			var _g1 = tl.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(tl[i]);
			}
			return result.join(" & ");
		}
	}
	,printMetadata: function(meta) {
		return "@" + meta.name + (meta.params != null && meta.params.length > 0 ? "(" + this.printExprs(meta.params,", ") + ")" : "");
	}
	,printAccess: function(access) {
		switch(access._hx_index) {
		case 0:
			return "public";
		case 1:
			return "private";
		case 2:
			return "static";
		case 3:
			return "override";
		case 4:
			return "dynamic";
		case 5:
			return "inline";
		case 6:
			return "macro";
		case 7:
			return "final";
		case 8:
			return "extern";
		case 9:
			return "abstract";
		case 10:
			return "overload";
		}
	}
	,printField: function(field) {
		var tmp = field.doc != null && field.doc != "" ? "/**\n" + this.tabs + this.tabString + StringTools.replace(field.doc,"\n","\n" + this.tabs + this.tabString) + "\n" + this.tabs + "**/\n" + this.tabs : "";
		var tmp1;
		if(field.meta != null && field.meta.length > 0) {
			var _this = field.meta;
			var f = $bind(this,this.printMetadata);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp1 = result.join("\n" + this.tabs) + ("\n" + this.tabs);
		} else {
			tmp1 = "";
		}
		var tmp2 = tmp + tmp1;
		var tmp;
		if(field.access != null && field.access.length > 0) {
			var access = field.access;
			var _this;
			if(Lambda.has(access,haxe_macro_Access.AFinal)) {
				var _g = [];
				var _g1 = 0;
				var _g2 = access;
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(v._hx_index != 7) {
						_g.push(v);
					}
				}
				_this = _g.concat([haxe_macro_Access.AFinal]);
			} else {
				_this = access;
			}
			var f = $bind(this,this.printAccess);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = result.join(" ") + " ";
		} else {
			tmp = "";
		}
		var tmp1 = tmp2 + tmp;
		var _g = field.kind;
		var tmp;
		switch(_g._hx_index) {
		case 0:
			var t = _g.t;
			var eo = _g.e;
			tmp = (field.access != null && Lambda.has(field.access,haxe_macro_Access.AFinal) ? "" : "var ") + ("" + field.name) + this.opt(t,$bind(this,this.printComplexType)," : ") + this.opt(eo,$bind(this,this.printExpr)," = ");
			break;
		case 1:
			var func = _g.f;
			tmp = "function " + field.name + this.printFunction(func);
			break;
		case 2:
			var get = _g.get;
			var set = _g.set;
			var t = _g.t;
			var eo = _g.e;
			tmp = "var " + field.name + "(" + get + ", " + set + ")" + this.opt(t,$bind(this,this.printComplexType)," : ") + this.opt(eo,$bind(this,this.printExpr)," = ");
			break;
		}
		return tmp1 + tmp;
	}
	,printTypeParamDecl: function(tpd) {
		var tmp;
		if(tpd.meta != null && tpd.meta.length > 0) {
			var _this = tpd.meta;
			var f = $bind(this,this.printMetadata);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = result.join(" ") + " ";
		} else {
			tmp = "";
		}
		var tmp1 = tmp + tpd.name;
		var tmp;
		if(tpd.params != null && tpd.params.length > 0) {
			var _this = tpd.params;
			var f = $bind(this,this.printTypeParamDecl);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = "<" + result.join(", ") + ">";
		} else {
			tmp = "";
		}
		var tmp2 = tmp1 + tmp;
		var tmp;
		if(tpd.constraints != null && tpd.constraints.length > 0) {
			var _this = tpd.constraints;
			var f = $bind(this,this.printComplexType);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = ":(" + result.join(", ") + ")";
		} else {
			tmp = "";
		}
		return tmp2 + tmp;
	}
	,printFunctionArg: function(arg) {
		return (arg.opt ? "?" : "") + arg.name + this.opt(arg.type,$bind(this,this.printComplexType),":") + this.opt(arg.value,$bind(this,this.printExpr)," = ");
	}
	,printFunction: function(func,kind) {
		var skipParentheses;
		var _g = func.args;
		if(_g.length == 1) {
			var _g1 = _g[0];
			var _g = _g1.meta;
			var _g = _g1.name;
			var _g = _g1.opt;
			var _g = _g1.value;
			skipParentheses = _g1.type == null && kind == haxe_macro_FunctionKind.FArrow;
		} else {
			skipParentheses = false;
		}
		var tmp;
		if(func.params == null) {
			tmp = "";
		} else if(func.params.length > 0) {
			var _this = func.params;
			var f = $bind(this,this.printTypeParamDecl);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = "<" + result.join(", ") + ">";
		} else {
			tmp = "";
		}
		var tmp1 = tmp + (skipParentheses ? "" : "(");
		var _this = func.args;
		var f = $bind(this,this.printFunctionArg);
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = f(_this[i]);
		}
		return tmp1 + result.join(", ") + (skipParentheses ? "" : ")") + (kind == haxe_macro_FunctionKind.FArrow ? " ->" : "") + this.opt(func.ret,$bind(this,this.printComplexType),":") + this.opt(func.expr,$bind(this,this.printExpr)," ");
	}
	,printVar: function(v) {
		var s = v.name + this.opt(v.type,$bind(this,this.printComplexType),":") + this.opt(v.expr,$bind(this,this.printExpr)," = ");
		var _g = v.meta;
		if(_g == null) {
			return s;
		} else if(_g.length == 0) {
			return s;
		} else {
			var meta = _g;
			var f = $bind(this,this.printMetadata);
			var result = new Array(meta.length);
			var _g = 0;
			var _g1 = meta.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(meta[i]);
			}
			return result.join(" ") + " " + s;
		}
	}
	,printObjectFieldKey: function(of) {
		var _g = of.quotes;
		if(_g == null) {
			return of.field;
		} else {
			switch(_g._hx_index) {
			case 0:
				return of.field;
			case 1:
				return "\"" + of.field + "\"";
			}
		}
	}
	,printObjectField: function(of) {
		return "" + this.printObjectFieldKey(of) + " : " + this.printExpr(of.expr);
	}
	,printExpr: function(e) {
		var _gthis = this;
		if(e == null) {
			return "#NULL";
		} else {
			var _g = e.expr;
			switch(_g._hx_index) {
			case 0:
				var c = _g.c;
				return this.printConstant(c);
			case 1:
				var e1 = _g.e1;
				var e2 = _g.e2;
				return "" + this.printExpr(e1) + "[" + this.printExpr(e2) + "]";
			case 2:
				var op = _g.op;
				var e1 = _g.e1;
				var e2 = _g.e2;
				return "" + this.printExpr(e1) + " " + this.printBinop(op) + " " + this.printExpr(e2);
			case 3:
				var e1 = _g.e;
				var n = _g.field;
				return "" + this.printExpr(e1) + "." + n;
			case 4:
				var e1 = _g.e;
				return "(" + this.printExpr(e1) + ")";
			case 5:
				var fl = _g.fields;
				var result = new Array(fl.length);
				var _g1 = 0;
				var _g2 = fl.length;
				while(_g1 < _g2) {
					var i = _g1++;
					result[i] = _gthis.printObjectField(fl[i]);
				}
				return "{ " + result.join(", ") + " }";
			case 6:
				var el = _g.values;
				return "[" + this.printExprs(el,", ") + "]";
			case 7:
				var e1 = _g.e;
				var el = _g.params;
				return "" + this.printExpr(e1) + "(" + this.printExprs(el,", ") + ")";
			case 8:
				var tp = _g.t;
				var el = _g.params;
				return "new " + this.printTypePath(tp) + "(" + this.printExprs(el,", ") + ")";
			case 9:
				var _g1 = _g.op;
				var _g2 = _g.e;
				if(_g.postFix) {
					var op = _g1;
					var e1 = _g2;
					return this.printExpr(e1) + this.printUnop(op);
				} else {
					var op = _g1;
					var e1 = _g2;
					return this.printUnop(op) + this.printExpr(e1);
				}
				break;
			case 10:
				var vl = _g.vars;
				var f = $bind(this,this.printVar);
				var result = new Array(vl.length);
				var _g1 = 0;
				var _g2 = vl.length;
				while(_g1 < _g2) {
					var i = _g1++;
					result[i] = f(vl[i]);
				}
				return "var " + result.join(", ");
			case 11:
				var _g1 = _g.kind;
				var _g2 = _g.f;
				if(_g1 == null) {
					var kind = _g1;
					var func = _g2;
					return (kind != haxe_macro_FunctionKind.FArrow ? "function" : "") + this.printFunction(func,kind);
				} else if(_g1._hx_index == 1) {
					var no = _g1.name;
					var inlined = _g1.inlined;
					var func = _g2;
					return (inlined ? "inline " : "") + ("function " + no) + this.printFunction(func);
				} else {
					var kind = _g1;
					var func = _g2;
					return (kind != haxe_macro_FunctionKind.FArrow ? "function" : "") + this.printFunction(func,kind);
				}
				break;
			case 12:
				var _g1 = _g.exprs;
				if(_g1.length == 0) {
					return "{ }";
				} else {
					var el = _g1;
					var old = this.tabs;
					this.tabs += this.tabString;
					var s = "{\n" + this.tabs + this.printExprs(el,";\n" + this.tabs);
					this.tabs = old;
					return s + (";\n" + this.tabs + "}");
				}
				break;
			case 13:
				var e1 = _g.it;
				var e2 = _g.expr;
				return "for (" + this.printExpr(e1) + ") " + this.printExpr(e2);
			case 14:
				var _g1 = _g.econd;
				var _g2 = _g.eif;
				var _g3 = _g.eelse;
				if(_g3 == null) {
					var eif = _g2;
					var econd = _g1;
					return "if (" + this.printExpr(econd) + ") " + this.printExpr(eif);
				} else {
					var eelse = _g3;
					var eif = _g2;
					var econd = _g1;
					return "if (" + this.printExpr(econd) + ") " + this.printExpr(eif) + " else " + this.printExpr(eelse);
				}
				break;
			case 15:
				var _g1 = _g.econd;
				var _g2 = _g.e;
				if(_g.normalWhile) {
					var e1 = _g2;
					var econd = _g1;
					return "while (" + this.printExpr(econd) + ") " + this.printExpr(e1);
				} else {
					var e1 = _g2;
					var econd = _g1;
					return "do " + this.printExpr(e1) + " while (" + this.printExpr(econd) + ")";
				}
				break;
			case 16:
				var e1 = _g.e;
				var cl = _g.cases;
				var edef = _g.edef;
				var old = this.tabs;
				this.tabs += this.tabString;
				var s = "switch " + this.printExpr(e1) + " {\n" + this.tabs;
				var result = new Array(cl.length);
				var _g1 = 0;
				var _g2 = cl.length;
				while(_g1 < _g2) {
					var i = _g1++;
					var c = cl[i];
					result[i] = "case " + _gthis.printExprs(c.values,", ") + (c.guard != null ? " if (" + _gthis.printExpr(c.guard) + "):" : ":") + (c.expr != null ? _gthis.opt(c.expr,$bind(_gthis,_gthis.printExpr)) + ";" : "");
				}
				var s1 = s + result.join("\n" + this.tabs);
				if(edef != null) {
					s1 += "\n" + this.tabs + "default:" + (edef.expr == null ? "" : this.printExpr(edef) + ";");
				}
				this.tabs = old;
				return s1 + ("\n" + this.tabs + "}");
			case 17:
				var e1 = _g.e;
				var cl = _g.catches;
				var tmp = "try " + this.printExpr(e1);
				var result = new Array(cl.length);
				var _g1 = 0;
				var _g2 = cl.length;
				while(_g1 < _g2) {
					var i = _g1++;
					var c = cl[i];
					result[i] = " catch(" + c.name + (c.type == null ? "" : ":" + _gthis.printComplexType(c.type)) + ") " + _gthis.printExpr(c.expr);
				}
				return tmp + result.join("");
			case 18:
				var eo = _g.e;
				return "return" + this.opt(eo,$bind(this,this.printExpr)," ");
			case 19:
				return "break";
			case 20:
				return "continue";
			case 21:
				var e1 = _g.e;
				return "untyped " + this.printExpr(e1);
			case 22:
				var e1 = _g.e;
				return "throw " + this.printExpr(e1);
			case 23:
				var _g1 = _g.e;
				var e1 = _g1;
				var cto = _g.t;
				if(cto != null) {
					return "cast(" + this.printExpr(e1) + ", " + this.printComplexType(cto) + ")";
				} else {
					var e1 = _g1;
					return "cast " + this.printExpr(e1);
				}
				break;
			case 24:
				var _g1 = _g.displayKind;
				var e1 = _g.e;
				return "#DISPLAY(" + this.printExpr(e1) + ")";
			case 25:
				var tp = _g.t;
				return "#DISPLAY(" + this.printTypePath(tp) + ")";
			case 26:
				var econd = _g.econd;
				var eif = _g.eif;
				var eelse = _g.eelse;
				return "" + this.printExpr(econd) + " ? " + this.printExpr(eif) + " : " + this.printExpr(eelse);
			case 27:
				var e1 = _g.e;
				var ct = _g.t;
				return "(" + this.printExpr(e1) + " : " + this.printComplexType(ct) + ")";
			case 28:
				var _g1 = _g.s;
				var _g2 = _g.e;
				var _g3 = _g1.params;
				var _g3 = _g1.pos;
				if(_g1.name == ":implicitReturn") {
					var _g3 = _g2.expr;
					var _g4 = _g2.pos;
					if(_g3._hx_index == 18) {
						var e1 = _g3.e;
						return this.printExpr(e1);
					} else {
						var meta = _g1;
						var e1 = _g2;
						return this.printMetadata(meta) + " " + this.printExpr(e1);
					}
				} else {
					var meta = _g1;
					var e1 = _g2;
					return this.printMetadata(meta) + " " + this.printExpr(e1);
				}
				break;
			case 29:
				var e1 = _g.e;
				var ct = _g.t;
				return "" + this.printExpr(e1) + " is " + this.printComplexType(ct);
			}
		}
	}
	,printExprs: function(el,sep) {
		var f = $bind(this,this.printExpr);
		var result = new Array(el.length);
		var _g = 0;
		var _g1 = el.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = f(el[i]);
		}
		return result.join(sep);
	}
	,printFieldWithDelimiter: function(f) {
		var tmp = this.printField(f);
		var _g = f.kind;
		var tmp1;
		switch(_g._hx_index) {
		case 0:
			var _g1 = _g.t;
			var _g1 = _g.e;
			tmp1 = ";";
			break;
		case 1:
			var _g1 = _g.f;
			var _g2 = _g1.args;
			var _g2 = _g1.expr;
			var _g3 = _g1.params;
			var _g3 = _g1.ret;
			if(_g2 == null) {
				tmp1 = ";";
			} else {
				var _g1 = _g2.expr;
				var _g3 = _g2.pos;
				if(_g1._hx_index == 12) {
					var _g2 = _g1.exprs;
					tmp1 = "";
				} else {
					tmp1 = ";";
				}
			}
			break;
		case 2:
			var _g1 = _g.get;
			var _g1 = _g.set;
			var _g1 = _g.t;
			var _g1 = _g.e;
			tmp1 = ";";
			break;
		}
		return tmp + tmp1;
	}
	,opt: function(v,f,prefix) {
		if(prefix == null) {
			prefix = "";
		}
		if(v == null) {
			return "";
		} else {
			return prefix + f(v);
		}
	}
};
var Printer = function(tabString) {
	this._multiLineStructuresStack = [];
	this._multiLineStructures = false;
	haxe_macro_Printer.call(this,tabString);
};
Printer.__name__ = true;
Printer.__super__ = haxe_macro_Printer;
Printer.prototype = $extend(haxe_macro_Printer.prototype,{
	printExtension: function(tpl,fields) {
		var _gthis = this;
		if(tpl.length == 0 && fields.length == 0) {
			return "{ }";
		}
		var printFields = function(fields) {
			if(_gthis._multiLineStructures) {
				var _g = [];
				var _g1 = 0;
				while(_g1 < fields.length) {
					var f = fields[_g1];
					++_g1;
					_g.push(_gthis.tabs + _gthis.printFieldWithDelimiter(f) + "\n");
				}
				return _g.join("");
			} else {
				var _g = [];
				var _g1 = 0;
				while(_g1 < fields.length) {
					var f = fields[_g1];
					++_g1;
					_g.push(_gthis.printField(f) + "; ");
				}
				return _g.join("");
			}
		};
		var printExtends = function(tpl) {
			var _g = [];
			var _g1 = 0;
			while(_g1 < tpl.length) {
				var tp = tpl[_g1];
				++_g1;
				_g.push("> " + _gthis.printTypePath(tp) + ",");
			}
			var e = _g;
			if(_gthis._multiLineStructures) {
				var result = new Array(e.length);
				var _g = 0;
				var _g1 = e.length;
				while(_g < _g1) {
					var i = _g++;
					result[i] = _gthis.tabs + e[i] + "\n";
				}
				return result.join("");
			} else {
				var result = new Array(e.length);
				var _g = 0;
				var _g1 = e.length;
				while(_g < _g1) {
					var i = _g++;
					result[i] = e[i] + " ";
				}
				return result.join("");
			}
		};
		if(this._multiLineStructures) {
			var str = "{\n";
			this.tabsIndent();
			str += printExtends(tpl);
			str += printFields(fields);
			this.tabsOutdent();
			str += this.tabs + "}";
			return str;
		} else {
			return "{ " + printExtends(tpl) + printFields(fields) + "}";
		}
	}
	,printComplexType: function(ct) {
		switch(ct._hx_index) {
		case 0:
			var tp = ct.p;
			return this.printTypePath(tp);
		case 1:
			var args = ct.args;
			var ret = ct.ret;
			this._multiLineStructuresStack.push(this._multiLineStructures);
			this._multiLineStructures = false;
			var wrapArgumentsInParentheses;
			if(args.length == 1) {
				var _g = args[0];
				switch(_g._hx_index) {
				case 0:
					var _g1 = _g.p;
					wrapArgumentsInParentheses = false;
					break;
				case 3:
					var t = _g.t;
					wrapArgumentsInParentheses = false;
					break;
				case 5:
					var _g1 = _g.t;
					if(_g1._hx_index == 0) {
						var _g = _g1.p;
						wrapArgumentsInParentheses = false;
					} else {
						wrapArgumentsInParentheses = true;
					}
					break;
				default:
					wrapArgumentsInParentheses = true;
				}
			} else {
				wrapArgumentsInParentheses = true;
			}
			var f = $bind(this,this.printComplexType);
			var result = new Array(args.length);
			var _g = 0;
			var _g1 = args.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(args[i]);
			}
			var argStr = result.join(", ");
			var ret1;
			if(ret._hx_index == 1) {
				var _g = ret.args;
				var _g = ret.ret;
				ret1 = "(" + this.printComplexType(ret) + ")";
			} else {
				ret1 = this.printComplexType(ret);
			}
			var ret = (wrapArgumentsInParentheses ? "(" + argStr + ")" : argStr) + " -> " + ret1;
			this._multiLineStructures = this._multiLineStructuresStack.pop();
			return ret;
		case 2:
			var fields = ct.fields;
			return this.printExtension([],fields);
		case 3:
			var ct1 = ct.t;
			return "(" + this.printComplexType(ct1) + ")";
		case 4:
			var tpl = ct.p;
			var fields = ct.fields;
			return this.printExtension(tpl,fields);
		case 5:
			var ct1 = ct.t;
			return "?" + this.printComplexType(ct1);
		case 6:
			var n = ct.n;
			var ct1 = ct.t;
			return n + ":" + this.printComplexType(ct1);
		case 7:
			var tl = ct.tl;
			var f = $bind(this,this.printComplexType);
			var result = new Array(tl.length);
			var _g = 0;
			var _g1 = tl.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(tl[i]);
			}
			return result.join(" & ");
		}
	}
	,printField: function(field) {
		var metaSeparator = this._multiLineStructures ? "\n" + this.tabs : " ";
		var tmp = field.doc != null && field.doc != "" ? "/**" + (this._multiLineStructures ? "\n" + this.tabs + this.tabString : " ") + StringTools.replace(field.doc,"\n",this._multiLineStructures ? "\n" + this.tabs + this.tabString : "") + (this._multiLineStructures ? "\n" + this.tabs : " ") + "**/" + (this._multiLineStructures ? "\n" + this.tabs : " ") : "";
		var tmp1;
		if(field.meta != null && field.meta.length > 0) {
			var _this = field.meta;
			var f = $bind(this,this.printMetadata);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp1 = result.join(metaSeparator) + metaSeparator;
		} else {
			tmp1 = "";
		}
		var tmp2 = tmp + tmp1;
		var tmp;
		if(field.access != null && field.access.length > 0) {
			var access = field.access;
			var _this;
			if(Lambda.has(access,haxe_macro_Access.AFinal)) {
				var _g = [];
				var _g1 = 0;
				var _g2 = access;
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(v._hx_index != 7) {
						_g.push(v);
					}
				}
				_this = _g.concat([haxe_macro_Access.AFinal]);
			} else {
				_this = access;
			}
			var f = $bind(this,this.printAccess);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = result.join(" ") + " ";
		} else {
			tmp = "";
		}
		var tmp1 = tmp2 + tmp;
		var _g = field.kind;
		var tmp;
		switch(_g._hx_index) {
		case 0:
			var t = _g.t;
			var eo = _g.e;
			tmp = (field.access != null && Lambda.has(field.access,haxe_macro_Access.AFinal) ? "" : "var ") + ("" + field.name) + this.opt(t,$bind(this,this.printComplexType)," : ") + this.opt(eo,$bind(this,this.printExpr)," = ");
			break;
		case 1:
			var func = _g.f;
			tmp = "function " + field.name + this.printFunction(func);
			break;
		case 2:
			var get = _g.get;
			var set = _g.set;
			var t = _g.t;
			var eo = _g.e;
			tmp = "var " + field.name + "(" + get + ", " + set + ")" + this.opt(t,$bind(this,this.printComplexType)," : ") + this.opt(eo,$bind(this,this.printExpr)," = ");
			break;
		}
		return tmp1 + tmp;
	}
	,printTypeDefinition: function(t,printPackage) {
		if(printPackage == null) {
			printPackage = true;
		}
		var str;
		if(t == null) {
			str = "#NULL";
		} else {
			var str1 = (printPackage && t.pack.length > 0 && t.pack[0] != "" ? "package " + t.pack.join(".") + ";\n\n" : "") + (t.doc != null && t.doc != "" ? "/**\n" + this.tabString + StringTools.replace(t.doc,"\n","\n" + this.tabString) + "\n**/\n" : "");
			var str2;
			if(t.meta != null && t.meta.length > 0) {
				var _this = t.meta;
				var f = $bind(this,this.printMetadata);
				var result = new Array(_this.length);
				var _g = 0;
				var _g1 = _this.length;
				while(_g < _g1) {
					var i = _g++;
					result[i] = f(_this[i]);
				}
				str2 = result.join(" ") + " ";
			} else {
				str2 = "";
			}
			var str3 = str1 + str2 + (t.isExtern ? "extern " : "");
			var _g = t.kind;
			var str1;
			switch(_g._hx_index) {
			case 0:
				var str2 = "enum " + t.name;
				var str4;
				if(t.params != null && t.params.length > 0) {
					var _this = t.params;
					var f = $bind(this,this.printTypeParamDecl);
					var result = new Array(_this.length);
					var _g1 = 0;
					var _g2 = _this.length;
					while(_g1 < _g2) {
						var i = _g1++;
						result[i] = f(_this[i]);
					}
					str4 = "<" + result.join(", ") + ">";
				} else {
					str4 = "";
				}
				this._multiLineStructuresStack.push(this._multiLineStructures);
				this._multiLineStructures = true;
				var ret = this.printExtension([],t.fields);
				this._multiLineStructures = this._multiLineStructuresStack.pop();
				str1 = str2 + str4 + " " + ret;
				break;
			case 1:
				var str2 = "typedef " + t.name;
				var str4;
				if(t.params != null && t.params.length > 0) {
					var _this = t.params;
					var f = $bind(this,this.printTypeParamDecl);
					var result = new Array(_this.length);
					var _g1 = 0;
					var _g2 = _this.length;
					while(_g1 < _g2) {
						var i = _g1++;
						result[i] = f(_this[i]);
					}
					str4 = "<" + result.join(", ") + ">";
				} else {
					str4 = "";
				}
				this._multiLineStructuresStack.push(this._multiLineStructures);
				this._multiLineStructures = true;
				var ret = this.printExtension([],t.fields);
				this._multiLineStructures = this._multiLineStructuresStack.pop();
				str1 = str2 + str4 + " = " + ret;
				break;
			case 2:
				var _g1 = _g.isAbstract;
				var superClass = _g.superClass;
				var interfaces = _g.interfaces;
				var isInterface = _g.isInterface;
				var isFinal = _g.isFinal;
				var str2 = (isFinal ? "final " : "") + (isInterface ? "interface " : "class ") + t.name;
				var str4;
				if(t.params != null && t.params.length > 0) {
					var _this = t.params;
					var f = $bind(this,this.printTypeParamDecl);
					var result = new Array(_this.length);
					var _g1 = 0;
					var _g2 = _this.length;
					while(_g1 < _g2) {
						var i = _g1++;
						result[i] = f(_this[i]);
					}
					str4 = "<" + result.join(", ") + ">";
				} else {
					str4 = "";
				}
				var str5 = str2 + str4 + (superClass != null ? " extends " + this.printTypePath(superClass) : "");
				var str2;
				if(interfaces != null) {
					var str4;
					if(isInterface) {
						var _g1 = [];
						var _g2 = 0;
						while(_g2 < interfaces.length) {
							var tp = interfaces[_g2];
							++_g2;
							_g1.push(" extends " + this.printTypePath(tp));
						}
						str4 = _g1;
					} else {
						var _g1 = [];
						var _g2 = 0;
						while(_g2 < interfaces.length) {
							var tp = interfaces[_g2];
							++_g2;
							_g1.push(" implements " + this.printTypePath(tp));
						}
						str4 = _g1;
					}
					str2 = str4.join("");
				} else {
					str2 = "";
				}
				this._multiLineStructuresStack.push(this._multiLineStructures);
				this._multiLineStructures = true;
				var ret = this.printExtension([],t.fields);
				this._multiLineStructures = this._multiLineStructuresStack.pop();
				str1 = str5 + str2 + " " + ret;
				break;
			case 3:
				var ct = _g.t;
				var str2 = "typedef " + t.name;
				var str4;
				if(t.params != null && t.params.length > 0) {
					var _this = t.params;
					var f = $bind(this,this.printTypeParamDecl);
					var result = new Array(_this.length);
					var _g1 = 0;
					var _g2 = _this.length;
					while(_g1 < _g2) {
						var i = _g1++;
						result[i] = f(_this[i]);
					}
					str4 = "<" + result.join(", ") + ">";
				} else {
					str4 = "";
				}
				var str5 = str2 + str4 + " = ";
				this._multiLineStructuresStack.push(this._multiLineStructures);
				this._multiLineStructures = true;
				var ret;
				switch(ct._hx_index) {
				case 2:
					var fields = ct.fields;
					ret = this.printExtension([],fields);
					break;
				case 4:
					var tpl = ct.p;
					var fields = ct.fields;
					ret = this.printExtension(tpl,fields);
					break;
				default:
					ret = this.printComplexType(ct);
				}
				this._multiLineStructures = this._multiLineStructuresStack.pop();
				str1 = str5 + ret + ";";
				break;
			case 4:
				var tthis = _g.tthis;
				var from = _g.from;
				var to = _g.to;
				var str2 = "abstract " + t.name;
				var str4;
				if(t.params != null && t.params.length > 0) {
					var _this = t.params;
					var f = $bind(this,this.printTypeParamDecl);
					var result = new Array(_this.length);
					var _g1 = 0;
					var _g2 = _this.length;
					while(_g1 < _g2) {
						var i = _g1++;
						result[i] = f(_this[i]);
					}
					str4 = "<" + result.join(", ") + ">";
				} else {
					str4 = "";
				}
				var str5 = str2 + str4 + (tthis == null ? "" : "(" + this.printComplexType(tthis) + ")");
				var str2;
				if(from == null) {
					str2 = "";
				} else {
					var _g1 = [];
					var _g2 = 0;
					while(_g2 < from.length) {
						var f = from[_g2];
						++_g2;
						_g1.push(" from " + this.printComplexType(f));
					}
					str2 = _g1.join("");
				}
				var str4 = str5 + str2;
				var str2;
				if(to == null) {
					str2 = "";
				} else {
					var _g1 = [];
					var _g2 = 0;
					while(_g2 < to.length) {
						var t1 = to[_g2];
						++_g2;
						_g1.push(" to " + this.printComplexType(t1));
					}
					str2 = _g1.join("");
				}
				this._multiLineStructuresStack.push(this._multiLineStructures);
				this._multiLineStructures = true;
				var ret = this.printExtension([],t.fields);
				this._multiLineStructures = this._multiLineStructuresStack.pop();
				str1 = str4 + str2 + " " + ret;
				break;
			case 5:
				var kind = _g.kind;
				var access = _g.access;
				var str2;
				if(access != null && access.length > 0) {
					var f = $bind(this,this.printAccess);
					var result = new Array(access.length);
					var _g = 0;
					var _g1 = access.length;
					while(_g < _g1) {
						var i = _g++;
						result[i] = f(access[i]);
					}
					str2 = result.join(" ") + " ";
				} else {
					str2 = "";
				}
				var str4;
				switch(kind._hx_index) {
				case 0:
					var type = kind.t;
					var eo = kind.e;
					str4 = (access != null && Lambda.has(access,haxe_macro_Access.AFinal) ? "" : "var ") + ("" + t.name) + this.opt(type,$bind(this,this.printComplexType)," : ") + this.opt(eo,$bind(this,this.printExpr)," = ") + ";";
					break;
				case 1:
					var func = kind.f;
					var str5 = "function " + t.name + this.printFunction(func);
					var _g = func.expr;
					var str6;
					if(_g == null) {
						str6 = ";";
					} else {
						var _g1 = _g.expr;
						var _g2 = _g.pos;
						if(_g1._hx_index == 12) {
							var _g = _g1.exprs;
							str6 = "";
						} else {
							str6 = ";";
						}
					}
					str4 = str5 + str6;
					break;
				case 2:
					var get = kind.get;
					var set = kind.set;
					var type = kind.t;
					var eo = kind.e;
					str4 = "var " + t.name + "(" + get + ", " + set + ")" + this.opt(type,$bind(this,this.printComplexType)," : ") + this.opt(eo,$bind(this,this.printExpr)," = ") + ";";
					break;
				}
				str1 = str2 + str4;
				break;
			}
			str = str3 + str1;
		}
		return str;
	}
	,printFunctionArg: function(func) {
		this._multiLineStructuresStack.push(this._multiLineStructures);
		this._multiLineStructures = false;
		var ret = haxe_macro_Printer.prototype.printFunctionArg.call(this,func);
		this._multiLineStructures = this._multiLineStructuresStack.pop();
		return ret;
	}
	,tabsIndent: function() {
		this.tabs += this.tabString;
	}
	,tabsOutdent: function() {
		this.tabs = HxOverrides.substr(this.tabs,0,this.tabs.length - 1);
	}
});
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var SupportTypes = function() { };
SupportTypes.__name__ = true;
SupportTypes.getTupleType = function(ctx,elementTypes) {
	if(elementTypes.length == 0) {
		return haxe_macro_ComplexType.TPath({ pack : ["std"], name : "Array", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
	}
	var typePath = "Tuple" + elementTypes.length;
	var result = new Array(elementTypes.length);
	var _g = 0;
	var _g1 = elementTypes.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = haxe_macro_TypeParam.TPType(elementTypes[i]);
	}
	var typePath1 = { pack : ["ts"], name : typePath, params : result};
	var existingModule = ctx.getGeneratedModule(typePath1);
	if(existingModule == null) {
		var fields = [];
		var _g = 0;
		var _g1 = elementTypes.length;
		while(_g < _g1) {
			var i = _g++;
			var name = "element" + i;
			var type = haxe_macro_ComplexType.TPath({ name : "T" + i, pack : []});
			var get = "get_" + name;
			var set = "set_" + name;
			var indexExpr = tool_HaxeTools.toIntExpr(i);
			var inlobj_name = "";
			var inlobj_pos_file = "src/SupportTypes.hx";
			var inlobj_pos_min = 1039;
			var inlobj_pos_max = 1239;
			var inlobj_isExtern = false;
			var inlobj_kind = haxe_macro_TypeDefKind.TDClass(null,[],false,false,false);
			var inlobj_fields = [{ name : name, access : [haxe_macro_Access.APublic], kind : haxe_macro_FieldType.FProp("get","set",type,null), pos : { file : "src/SupportTypes.hx", min : 1052, max : 1086}},{ name : get, access : [haxe_macro_Access.AInline], kind : haxe_macro_FieldType.FFun({ args : [], ret : type, expr : { expr : haxe_macro_ExprDef.EReturn({ expr : haxe_macro_ExprDef.ECast({ expr : haxe_macro_ExprDef.EArray({ expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent("this")), pos : { file : "src/SupportTypes.hx", min : 1134, max : 1138}},indexExpr), pos : { file : "src/SupportTypes.hx", min : 1134, max : 1150}},null), pos : { file : "src/SupportTypes.hx", min : 1129, max : 1150}}), pos : { file : "src/SupportTypes.hx", min : 1122, max : 1150}}, params : []}), pos : { file : "src/SupportTypes.hx", min : 1092, max : 1150}},{ name : set, access : [haxe_macro_Access.AInline], kind : haxe_macro_FieldType.FFun({ args : [{ name : "v", opt : false, type : type}], ret : type, expr : { expr : haxe_macro_ExprDef.EReturn({ expr : haxe_macro_ExprDef.ECast({ expr : haxe_macro_ExprDef.EBinop(haxe_macro_Binop.OpAssign,{ expr : haxe_macro_ExprDef.EArray({ expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent("this")), pos : { file : "src/SupportTypes.hx", min : 1207, max : 1211}},indexExpr), pos : { file : "src/SupportTypes.hx", min : 1207, max : 1223}},{ expr : haxe_macro_ExprDef.ECast({ expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent("v")), pos : { file : "src/SupportTypes.hx", min : 1231, max : 1232}},null), pos : { file : "src/SupportTypes.hx", min : 1226, max : 1232}}), pos : { file : "src/SupportTypes.hx", min : 1207, max : 1232}},null), pos : { file : "src/SupportTypes.hx", min : 1202, max : 1232}}), pos : { file : "src/SupportTypes.hx", min : 1195, max : 1232}}, params : []}), pos : { file : "src/SupportTypes.hx", min : 1157, max : 1232}}];
			fields = fields.concat(inlobj_fields);
		}
		var _g = [];
		var _g1 = 0;
		var _g2 = elementTypes.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push("element" + i + ":T" + i);
		}
		var newParams = _g.join(", ");
		var _g = [];
		var _g1 = 0;
		var _g2 = elementTypes.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push({ expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent("element" + i)), pos : { file : "src/SupportTypes.hx", min : 1436, max : 1449}});
		}
		var elementInitializerArray = _g;
		var inlobj_name = "";
		var inlobj_pos_file = "src/SupportTypes.hx";
		var inlobj_pos_min = 1477;
		var inlobj_pos_max = 1581;
		var inlobj_isExtern = false;
		var inlobj_kind = haxe_macro_TypeDefKind.TDClass(null,[],false,false,false);
		var inlobj_fields_0 = { name : "new", access : [haxe_macro_Access.APublic,haxe_macro_Access.AInline], kind : haxe_macro_FieldType.FFun({ args : [{ name : newParams, opt : false, type : null}], ret : null, expr : { expr : haxe_macro_ExprDef.EBlock([{ expr : haxe_macro_ExprDef.EBinop(haxe_macro_Binop.OpAssign,{ expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent("this")), pos : { file : "src/SupportTypes.hx", min : 1535, max : 1539}},{ expr : haxe_macro_ExprDef.EArrayDecl(elementInitializerArray), pos : { file : "src/SupportTypes.hx", min : 1544, max : 1569}}), pos : { file : "src/SupportTypes.hx", min : 1535, max : 1569}}]), pos : { file : "src/SupportTypes.hx", min : 1528, max : 1576}}, params : []}), pos : { file : "src/SupportTypes.hx", min : 1489, max : 1576}};
		fields.unshift(inlobj_fields_0);
		var abstractType = haxe_macro_ComplexType.TPath({ pack : ["std"], name : "Array", params : [haxe_macro_TypeParam.TPType(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []}))]});
		var typePath = typePath1.pack;
		var typePath2 = typePath1.name;
		var tupleTypeDefinition = haxe_macro_TypeDefKind.TDAbstract(abstractType,[abstractType],[abstractType]);
		var _g = [];
		var _g1 = 0;
		var _g2 = elementTypes.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push({ name : "T" + i});
		}
		var tupleTypeDefinition1 = { pack : typePath, name : typePath2, kind : tupleTypeDefinition, params : _g, fields : fields, isExtern : true, doc : "Tuple type implementation generated by dts2hx", meta : [{ name : ":forward", pos : null},{ name : ":forwardStatics", pos : null}], pos : null, tsSymbol : null, tsSymbolAccess : null};
		ctx.saveHaxeModule(tupleTypeDefinition1);
	}
	return haxe_macro_ComplexType.TPath(typePath1);
};
SupportTypes.getUnionType = function(ctx,types) {
	if(types.length == 0) {
		Log.error("getSupportUnionType(): no types provided");
		debugger;
		return haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []});
	}
	if(types.length == 1) {
		return types[0];
	}
	var _g = [];
	var _g_current = 0;
	var _g_array = types;
	while(_g_current < _g_array.length) {
		var x = _g_array[_g_current++];
		var types1;
		if(x._hx_index == 0) {
			var _g1 = x.p;
			var _g2 = _g1.pack;
			var _g3 = _g1.sub;
			if(_g2.length == 1) {
				if(_g2[0] == "ts") {
					var name = _g1.name;
					var params = _g1.params;
					if(StringTools.startsWith(name,"AnyOf")) {
						var result = new Array(params.length);
						var _g4 = 0;
						var _g5 = params.length;
						while(_g4 < _g5) {
							var i = _g4++;
							var p = params[i];
							var types2;
							switch(p._hx_index) {
							case 0:
								var t = p.t;
								types2 = t;
								break;
							case 1:
								var e = p.e;
								throw haxe_Exception.thrown("Expected ComplexType but got Expr");
							}
							result[i] = types2;
						}
						types1 = result;
					} else {
						types1 = [x];
					}
				} else {
					types1 = [x];
				}
			} else {
				types1 = [x];
			}
		} else {
			types1 = [x];
		}
		_g.push(types1);
	}
	var _g1 = [];
	var e = $getIterator(_g);
	while(e.hasNext()) {
		var e1 = e.next();
		var x = $getIterator(e1);
		while(x.hasNext()) {
			var x1 = x.next();
			_g1.push(x1);
		}
	}
	types = _g1;
	var typePath = "AnyOf" + types.length;
	var result = new Array(types.length);
	var _g = 0;
	var _g1 = types.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = haxe_macro_TypeParam.TPType(types[i]);
	}
	var typePath1 = { pack : ["ts"], name : typePath, params : result};
	var existingModule = ctx.getGeneratedModule(typePath1);
	if(existingModule == null) {
		var abstractType = haxe_macro_ComplexType.TPath({ pack : [], name : "Dynamic", params : []});
		var _g = [];
		var _g1 = 0;
		var _g2 = types.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push(haxe_macro_ComplexType.TPath({ pack : [], name : "T" + i}));
		}
		var typeParams = _g;
		var typePath = typePath1.pack;
		var typePath2 = typePath1.name;
		var anyOfTypeDefinition = haxe_macro_TypeDefKind.TDAbstract(abstractType,typeParams,typeParams);
		var _g = [];
		var _g1 = 0;
		var _g2 = types.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push({ name : "T" + i});
		}
		var anyOfTypeDefinition1 = _g;
		var _g = [];
		var _g1 = 0;
		var _g2 = types.length;
		while(_g1 < _g2) {
			var i = _g1++;
			var varName = "asType" + i;
			var getterName = "get_asType" + i;
			var typeParam = typeParams[i];
			var inlobj_name = "";
			var inlobj_pos_file = "src/SupportTypes.hx";
			var inlobj_pos_min = 3569;
			var inlobj_pos_max = 3697;
			var inlobj_isExtern = false;
			var inlobj_kind = haxe_macro_TypeDefKind.TDClass(null,[],false,false,false);
			var inlobj_fields = [{ name : varName, kind : haxe_macro_FieldType.FProp("get","never",typeParam,null), pos : { file : "src/SupportTypes.hx", min : 3583, max : 3620}},{ name : getterName, access : [haxe_macro_Access.APrivate,haxe_macro_Access.AInline], kind : haxe_macro_FieldType.FFun({ args : [], ret : typeParam, expr : { expr : haxe_macro_ExprDef.EReturn({ expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent("this")), pos : { file : "src/SupportTypes.hx", min : 3685, max : 3689}}), pos : { file : "src/SupportTypes.hx", min : 3678, max : 3689}}, params : []}), pos : { file : "src/SupportTypes.hx", min : 3627, max : 3689}}];
			_g.push(inlobj_fields);
		}
		var _g1 = [];
		var e = $getIterator(_g);
		while(e.hasNext()) {
			var e1 = e.next();
			var x = $getIterator(e1);
			while(x.hasNext()) {
				var x1 = x.next();
				_g1.push(x1);
			}
		}
		var anyOfTypeDefinition2 = { pack : typePath, name : typePath2, kind : anyOfTypeDefinition, params : anyOfTypeDefinition1, fields : _g1, isExtern : true, doc : "AnyOf implementation generated by dts2hx", meta : [{ name : ":transitive", pos : null}], pos : null, tsSymbol : null, tsSymbolAccess : null};
		ctx.saveHaxeModule(anyOfTypeDefinition2);
	}
	return haxe_macro_ComplexType.TPath(typePath1);
};
SupportTypes.getUndefinedType = function(ctx) {
	var typePath = { pack : ["ts"], name : "Undefined"};
	var existingModule = ctx.getGeneratedModule(typePath);
	if(existingModule == null) {
		var nothingDefinition = { pack : typePath.pack, name : typePath.name, doc : "`Undefined` corresponds to `void` in TypeScript; in haxe `Void` cannot be used as a field type (only function return) so we must use `Any` instead. This alias serves as documentation that the type is `void` and therefore value is `undefined`", kind : haxe_macro_TypeDefKind.TDAlias(haxe_macro_ComplexType.TPath({ pack : [], name : "Any", params : []})), pos : null, fields : [], tsSymbol : null, tsSymbolAccess : null};
		ctx.saveHaxeModule(nothingDefinition);
	}
	return haxe_macro_ComplexType.TPath(typePath);
};
SupportTypes.getGlobalModuleForFieldSymbol = function(ctx,symbol,access) {
	var typePath = ctx.haxeTypePathMap.getGlobalModuleTypePath(symbol,access);
	var existingModule = ctx.getGeneratedModule({ name : typePath.name, pack : typePath.pack});
	if(existingModule != null) {
		return existingModule;
	}
	var hxModule = { pack : typePath.pack, name : typePath.name, fields : [], kind : haxe_macro_TypeDefKind.TDClass(null,[],false,false), params : [], isExtern : true, doc : "", meta : [tool_SymbolAccessTools.toAccessMetadata(SymbolAccess.Global([]))], pos : null, tsSymbol : symbol, tsSymbolAccess : access};
	ctx.saveHaxeModule(hxModule);
	return hxModule;
};
var SymbolAccess = $hxEnums["SymbolAccess"] = { __ename__:true,__constructs__:null
	,AmbientModule: ($_=function(modulePath,moduleSymbol,symbolChain) { return {_hx_index:0,modulePath:modulePath,moduleSymbol:moduleSymbol,symbolChain:symbolChain,__enum__:"SymbolAccess",toString:$estr}; },$_._hx_name="AmbientModule",$_.__params__ = ["modulePath","moduleSymbol","symbolChain"],$_)
	,ExportModule: ($_=function(moduleName,sourceFileSymbol,symbolChain) { return {_hx_index:1,moduleName:moduleName,sourceFileSymbol:sourceFileSymbol,symbolChain:symbolChain,__enum__:"SymbolAccess",toString:$estr}; },$_._hx_name="ExportModule",$_.__params__ = ["moduleName","sourceFileSymbol","symbolChain"],$_)
	,Global: ($_=function(symbolChain) { return {_hx_index:2,symbolChain:symbolChain,__enum__:"SymbolAccess",toString:$estr}; },$_._hx_name="Global",$_.__params__ = ["symbolChain"],$_)
	,Inaccessible: {_hx_name:"Inaccessible",_hx_index:3,__enum__:"SymbolAccess",toString:$estr}
};
SymbolAccess.__constructs__ = [SymbolAccess.AmbientModule,SymbolAccess.ExportModule,SymbolAccess.Global,SymbolAccess.Inaccessible];
var SymbolAccessMap = function(program) {
	this.symbolAccessMap = new haxe_ds_IntMap();
	var _gthis = this;
	this.tc = program.getTypeChecker();
	var _g = 0;
	var _g1 = program.getSourceFiles();
	while(_g < _g1.length) {
		var sourceFile = _g1[_g];
		++_g;
		var sourceFileSymbol = [this.tc.getSymbolAtLocation(sourceFile)];
		var _g2 = 0;
		var _g3 = tool_TsProgramTools.getGlobalScopeSymbolsInSourceFile(program,sourceFile);
		while(_g2 < _g3.length) {
			var symbol = _g3[_g2];
			++_g2;
			tool_TsSymbolTools.walkDeclarationSymbols(this.tc,symbol,(function() {
				return function(symbol,accessChain) {
					var currentAccess = SymbolAccess.Global([]);
					var _g = 0;
					var _g1 = accessChain;
					while(_g < _g1.length) {
						var s = _g1[_g];
						++_g;
						currentAccess = _gthis.symbolAccessAppendSymbol(currentAccess,s);
					}
					_gthis.setAccess(symbol,currentAccess);
				};
			})());
		}
		if(sourceFileSymbol[0] != null) {
			var moduleName = [sourceFile.moduleName];
			if(moduleName[0] == null) {
				Log.error("Internal error: SourceFile.moduleName was null, this should have been set when ConverterContext initialized",sourceFile);
			}
			tool_TsSymbolTools.walkDeclarationSymbols(this.tc,sourceFileSymbol[0],(function(moduleName,sourceFileSymbol) {
				return function(symbol,accessChain) {
					var currentAccess = SymbolAccess.ExportModule(moduleName[0],sourceFileSymbol[0],[]);
					var _g = 0;
					var _g1 = accessChain;
					while(_g < _g1.length) {
						var s = _g1[_g];
						++_g;
						currentAccess = _gthis.symbolAccessAppendSymbol(currentAccess,s);
					}
					_gthis.setAccess(symbol,currentAccess);
				};
			})(moduleName,sourceFileSymbol));
		}
	}
};
SymbolAccessMap.__name__ = true;
SymbolAccessMap.prototype = {
	getAccess: function(symbol) {
		var this1 = this.symbolAccessMap;
		var key = tool_TsSymbolTools.getId(symbol);
		var accessArray = this1.h[key];
		if(accessArray != null && accessArray.length > 0) {
			return accessArray;
		} else {
			return [SymbolAccess.Inaccessible];
		}
	}
	,setAccess: function(symbol,access) {
		var this1 = this.symbolAccessMap;
		var key = tool_TsSymbolTools.getId(symbol);
		var accessArray = this1.h[key];
		if(accessArray == null) {
			accessArray = [];
			var this1 = this.symbolAccessMap;
			var key = tool_TsSymbolTools.getId(symbol);
			this1.h[key] = accessArray;
		}
		switch(access._hx_index) {
		case 0:
			var _g = access.moduleSymbol;
			var _g = access.symbolChain;
			var path = access.modulePath;
			var _g = [];
			var _g1 = 0;
			var _g2 = accessArray;
			while(_g1 < _g2.length) {
				var v = _g2[_g1];
				++_g1;
				var tmp;
				switch(v._hx_index) {
				case 0:
					var _g3 = v.modulePath;
					var _g4 = v.moduleSymbol;
					var _g5 = v.symbolChain;
					tmp = true;
					break;
				case 1:
					var _g6 = v.moduleName;
					var _g7 = v.sourceFileSymbol;
					var _g8 = v.symbolChain;
					tmp = true;
					break;
				default:
					tmp = false;
				}
				if(tmp) {
					_g.push(v);
				}
			}
			var existingAccess = _g;
			if(existingAccess.length == 0) {
				accessArray.push(access);
			} else {
				var removed = false;
				var _g = 0;
				while(_g < existingAccess.length) {
					var a = existingAccess[_g];
					++_g;
					var existingPath;
					switch(a._hx_index) {
					case 0:
						var _g1 = a.moduleSymbol;
						var _g2 = a.symbolChain;
						var p = a.modulePath;
						existingPath = p;
						break;
					case 1:
						var _g3 = a.sourceFileSymbol;
						var _g4 = a.symbolChain;
						var p1 = a.moduleName;
						existingPath = p1;
						break;
					default:
						throw haxe_Exception.thrown("Internal error");
					}
					if(path.length < existingPath.length) {
						HxOverrides.remove(accessArray,a);
						removed = true;
					}
				}
				if(removed) {
					accessArray.push(access);
				}
			}
			break;
		case 1:
			var _g = access.sourceFileSymbol;
			var _g = access.symbolChain;
			var path = access.moduleName;
			var _g = [];
			var _g1 = 0;
			var _g2 = accessArray;
			while(_g1 < _g2.length) {
				var v = _g2[_g1];
				++_g1;
				var tmp;
				switch(v._hx_index) {
				case 0:
					var _g3 = v.modulePath;
					var _g4 = v.moduleSymbol;
					var _g5 = v.symbolChain;
					tmp = true;
					break;
				case 1:
					var _g6 = v.moduleName;
					var _g7 = v.sourceFileSymbol;
					var _g8 = v.symbolChain;
					tmp = true;
					break;
				default:
					tmp = false;
				}
				if(tmp) {
					_g.push(v);
				}
			}
			var existingAccess = _g;
			if(existingAccess.length == 0) {
				accessArray.push(access);
			} else {
				var removed = false;
				var _g = 0;
				while(_g < existingAccess.length) {
					var a = existingAccess[_g];
					++_g;
					var existingPath;
					switch(a._hx_index) {
					case 0:
						var _g1 = a.moduleSymbol;
						var _g2 = a.symbolChain;
						var p = a.modulePath;
						existingPath = p;
						break;
					case 1:
						var _g3 = a.sourceFileSymbol;
						var _g4 = a.symbolChain;
						var p1 = a.moduleName;
						existingPath = p1;
						break;
					default:
						throw haxe_Exception.thrown("Internal error");
					}
					if(path.length < existingPath.length) {
						HxOverrides.remove(accessArray,a);
						removed = true;
					}
				}
				if(removed) {
					accessArray.push(access);
				}
			}
			break;
		case 2:
			var _g = access.symbolChain;
			var _g = [];
			var _g1 = 0;
			var _g2 = accessArray;
			while(_g1 < _g2.length) {
				var v = _g2[_g1];
				++_g1;
				var tmp;
				if(v._hx_index == 2) {
					var _g3 = v.symbolChain;
					tmp = true;
				} else {
					tmp = false;
				}
				if(tmp) {
					_g.push(v);
				}
			}
			if(_g.length == 0) {
				accessArray.push(access);
			}
			break;
		case 3:
			break;
		}
	}
	,symbolAccessAppendSymbol: function(access,symbol) {
		if(symbol.escapedName == ts.InternalSymbolName.ExportEquals) {
			Log.error("Internal error: `export=` symbol should not appear in a symbol access chain (" + tool_SymbolAccessTools.toString(access) + ")",null,symbol);
		}
		var symbolChain = tool_SymbolAccessTools.extractSymbolChain(access);
		var _g = 0;
		var _g1 = symbolChain.length;
		while(_g < _g1) {
			var i = _g++;
			var existingSymbol = symbolChain[i];
			if((existingSymbol.flags & ts.SymbolFlags.Alias) != 0 && this.tc.getAliasedSymbol(existingSymbol) == symbol) {
				switch(access._hx_index) {
				case 0:
					var m = access.modulePath;
					var r = access.moduleSymbol;
					var s = access.symbolChain;
					return SymbolAccess.AmbientModule(m,r,s.slice(0,i + 1));
				case 1:
					var m1 = access.moduleName;
					var r1 = access.sourceFileSymbol;
					var s1 = access.symbolChain;
					return SymbolAccess.ExportModule(m1,r1,s1.slice(0,i + 1));
				case 2:
					var s2 = access.symbolChain;
					return SymbolAccess.Global(s2.slice(0,i + 1));
				case 3:
					return SymbolAccess.Inaccessible;
				}
			}
		}
		if(tool_TsSymbolTools.isSourceFileSymbol(symbol)) {
			switch(access._hx_index) {
			case 0:
				var _g = access.moduleSymbol;
				var _g = access.symbolChain;
				var path = access.modulePath;
				Log.error("Cannot change symbol access from <b>AmbientModule(" + path + ")</> to ExportModule",null,symbol);
				return access;
			case 1:
				var _g = access.symbolChain;
				var moduleName = access.moduleName;
				var sourceFileSymbol = access.sourceFileSymbol;
				var newSourceFile = symbol.valueDeclaration.getSourceFile();
				if(symbol != sourceFileSymbol) {
					Log.warn("Changing symbol access module from <b>ExportModule(" + moduleName + ", " + sourceFileSymbol.name + ")</> to <b>ExportModule(" + newSourceFile.moduleName + ", " + symbol.name + ")</>",null,symbol);
				}
				return SymbolAccess.ExportModule(newSourceFile.moduleName,symbol,[]);
			case 2:
				var _g = access.symbolChain;
				Log.error("Cannot change symbol access from global to module",null,symbol);
				return access;
			case 3:
				return SymbolAccess.ExportModule(symbol.name,symbol,[]);
			}
		} else if(tool_TsSymbolTools.isExternalModuleSymbol(symbol)) {
			switch(access._hx_index) {
			case 0:
				var _g = access.modulePath;
				var _g = access.moduleSymbol;
				var _g = access.symbolChain;
				Log.warn("Nested ambient modules should be impossible. This might indicate an internal error",null,symbol);
				return SymbolAccess.AmbientModule(symbol.name,symbol,[]);
			case 1:
				var _g = access.symbolChain;
				var rootModuleName = access.moduleName;
				var rootSourceFileSymbol = access.sourceFileSymbol;
				Log.error("Cannot change symbol access from <b>ExportModule(" + rootModuleName + ", " + rootSourceFileSymbol.name + ")</> to <b>AmbientModule(\"" + symbol.name + "\")</>",null,symbol);
				return access;
			case 2:
				var _g = access.symbolChain;
				return SymbolAccess.AmbientModule(symbol.name,symbol,[]);
			case 3:
				return SymbolAccess.AmbientModule(symbol.name,symbol,[]);
			}
		} else {
			var tmp;
			if((symbol.flags & ts.SymbolFlags.Alias) != 0) {
				if(access._hx_index == 1) {
					var _g = access.moduleName;
					var _g = access.sourceFileSymbol;
					var _g = access.symbolChain;
					tmp = true;
				} else {
					tmp = false;
				}
			} else {
				tmp = false;
			}
			if(tmp) {
				var aliasedSymbol = this.tc.getAliasedSymbol(symbol);
				if(tool_TsSymbolTools.isSourceFileSymbol(aliasedSymbol)) {
					return this.symbolAccessAppendSymbol(access,aliasedSymbol);
				}
			}
			switch(access._hx_index) {
			case 0:
				var m = access.modulePath;
				var r = access.moduleSymbol;
				var s = access.symbolChain;
				return SymbolAccess.AmbientModule(m,r,s.concat([symbol]));
			case 1:
				var m = access.moduleName;
				var r = access.sourceFileSymbol;
				var s = access.symbolChain;
				return SymbolAccess.ExportModule(m,r,s.concat([symbol]));
			case 2:
				var s = access.symbolChain;
				return SymbolAccess.Global(s.concat([symbol]));
			case 3:
				return SymbolAccess.Inaccessible;
			}
		}
	}
};
var haxe_io_Output = function() { };
haxe_io_Output.__name__ = true;
haxe_io_Output.prototype = {
	writeByte: function(c) {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Output.hx", lineNumber : 47, className : "haxe.io.Output", methodName : "writeByte"});
	}
	,writeBytes: function(s,pos,len) {
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		var b = s.b;
		var k = len;
		while(k > 0) {
			this.writeByte(b[pos]);
			++pos;
			--k;
		}
		return len;
	}
	,writeFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.writeBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,writeString: function(s,encoding) {
		var b = haxe_io_Bytes.ofString(s,encoding);
		this.writeFullBytes(b,0,b.length);
	}
};
var _$Sys_FileOutput = function(fd) {
	this.fd = fd;
};
_$Sys_FileOutput.__name__ = true;
_$Sys_FileOutput.__super__ = haxe_io_Output;
_$Sys_FileOutput.prototype = $extend(haxe_io_Output.prototype,{
	writeByte: function(c) {
		js_node_Fs.writeSync(this.fd,String.fromCodePoint(c));
	}
	,writeBytes: function(s,pos,len) {
		var data = s.b;
		return js_node_Fs.writeSync(this.fd,js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length),pos,len);
	}
	,writeString: function(s,encoding) {
		js_node_Fs.writeSync(this.fd,s);
	}
});
var TsInternal = function() { };
TsInternal.__name__ = true;
TsInternal.getSourceFileFromReference = function(program,sourceFile,fileReference) {
	return program.getSourceFileFromReference(sourceFile,fileReference);
};
TsInternal.getSourceFileLocals = function(sourceFile) {
	return Reflect.field(sourceFile,"locals");
};
TsInternal.getSourceFileModuleAugmentations = function(sourceFile) {
	return Reflect.field(sourceFile,"moduleAugmentations");
};
TsInternal.resolveExternalModuleSymbol = function(typeChecker,symbol) {
	return typeChecker.resolveExternalModuleSymbol(symbol);
};
TsInternal.getExpandedParameters = function(typeChecker,signature) {
	return typeChecker.getExpandedParameters(signature);
};
TsInternal.getSignatureDeclarationModifiers = function(d) {
	return Reflect.field(d,"modifiers");
};
var ds_OnceOnlyQueue = function() {
	this.currentQueue = [];
	this.allItemsSeen = [];
};
ds_OnceOnlyQueue.__name__ = true;
ds_OnceOnlyQueue.prototype = {
	tryEnqueue: function(item) {
		if(this.allItemsSeen.indexOf(item) == -1) {
			this.allItemsSeen.push(item);
			this.currentQueue.push(item);
			return true;
		}
		return false;
	}
	,dequeue: function() {
		return this.currentQueue.shift();
	}
	,empty: function() {
		return this.currentQueue.length == 0;
	}
};
var ds_OnceOnlySymbolQueue = function() {
	this.currentQueue = [];
	this.allItemsSeen = new haxe_ds_IntMap();
};
ds_OnceOnlySymbolQueue.__name__ = true;
ds_OnceOnlySymbolQueue.prototype = {
	has: function(item) {
		var id = tool_TsSymbolTools.getId(item);
		return this.allItemsSeen.h.hasOwnProperty(id);
	}
	,tryEnqueue: function(item) {
		var id = tool_TsSymbolTools.getId(item);
		if(!this.allItemsSeen.h.hasOwnProperty(id)) {
			this.allItemsSeen.h[id] = true;
			this.currentQueue.push(item);
			return true;
		}
		return false;
	}
	,dequeue: function() {
		return this.currentQueue.shift();
	}
	,empty: function() {
		return this.currentQueue.length == 0;
	}
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
});
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
});
var haxe_ds_ArraySort = function() { };
haxe_ds_ArraySort.__name__ = true;
haxe_ds_ArraySort.sort = function(a,cmp) {
	haxe_ds_ArraySort.rec(a,cmp,0,a.length);
};
haxe_ds_ArraySort.rec = function(a,cmp,from,to) {
	var middle = from + to >> 1;
	if(to - from < 12) {
		if(to <= from) {
			return;
		}
		var _g = from + 1;
		var _g1 = to;
		while(_g < _g1) {
			var i = _g++;
			var j = i;
			while(j > from) {
				if(cmp(a[j],a[j - 1]) < 0) {
					haxe_ds_ArraySort.swap(a,j - 1,j);
				} else {
					break;
				}
				--j;
			}
		}
		return;
	}
	haxe_ds_ArraySort.rec(a,cmp,from,middle);
	haxe_ds_ArraySort.rec(a,cmp,middle,to);
	haxe_ds_ArraySort.doMerge(a,cmp,from,middle,to,middle - from,to - middle);
};
haxe_ds_ArraySort.doMerge = function(a,cmp,from,pivot,to,len1,len2) {
	var first_cut;
	var second_cut;
	var len11;
	var len22;
	if(len1 == 0 || len2 == 0) {
		return;
	}
	if(len1 + len2 == 2) {
		if(cmp(a[pivot],a[from]) < 0) {
			haxe_ds_ArraySort.swap(a,pivot,from);
		}
		return;
	}
	if(len1 > len2) {
		len11 = len1 >> 1;
		first_cut = from + len11;
		second_cut = haxe_ds_ArraySort.lower(a,cmp,pivot,to,first_cut);
		len22 = second_cut - pivot;
	} else {
		len22 = len2 >> 1;
		second_cut = pivot + len22;
		first_cut = haxe_ds_ArraySort.upper(a,cmp,from,pivot,second_cut);
		len11 = first_cut - from;
	}
	haxe_ds_ArraySort.rotate(a,cmp,first_cut,pivot,second_cut);
	var new_mid = first_cut + len22;
	haxe_ds_ArraySort.doMerge(a,cmp,from,first_cut,new_mid,len11,len22);
	haxe_ds_ArraySort.doMerge(a,cmp,new_mid,second_cut,to,len1 - len11,len2 - len22);
};
haxe_ds_ArraySort.rotate = function(a,cmp,from,mid,to) {
	if(from == mid || mid == to) {
		return;
	}
	var n = haxe_ds_ArraySort.gcd(to - from,mid - from);
	while(n-- != 0) {
		var val = a[from + n];
		var shift = mid - from;
		var p1 = from + n;
		var p2 = from + n + shift;
		while(p2 != from + n) {
			a[p1] = a[p2];
			p1 = p2;
			if(to - p2 > shift) {
				p2 += shift;
			} else {
				p2 = from + (shift - (to - p2));
			}
		}
		a[p1] = val;
	}
};
haxe_ds_ArraySort.gcd = function(m,n) {
	while(n != 0) {
		var t = m % n;
		m = n;
		n = t;
	}
	return m;
};
haxe_ds_ArraySort.upper = function(a,cmp,from,to,val) {
	var len = to - from;
	var half;
	var mid;
	while(len > 0) {
		half = len >> 1;
		mid = from + half;
		if(cmp(a[val],a[mid]) < 0) {
			len = half;
		} else {
			from = mid + 1;
			len = len - half - 1;
		}
	}
	return from;
};
haxe_ds_ArraySort.lower = function(a,cmp,from,to,val) {
	var len = to - from;
	var half;
	var mid;
	while(len > 0) {
		half = len >> 1;
		mid = from + half;
		if(cmp(a[mid],a[val]) < 0) {
			from = mid + 1;
			len = len - half - 1;
		} else {
			len = half;
		}
	}
	return from;
};
haxe_ds_ArraySort.swap = function(a,i,j) {
	var tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = true;
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
var haxe_exceptions_PosException = function(message,previous,pos) {
	haxe_Exception.call(this,message,previous);
	if(pos == null) {
		this.posInfos = { fileName : "(unknown)", lineNumber : 0, className : "(unknown)", methodName : "(unknown)"};
	} else {
		this.posInfos = pos;
	}
};
haxe_exceptions_PosException.__name__ = true;
haxe_exceptions_PosException.__super__ = haxe_Exception;
haxe_exceptions_PosException.prototype = $extend(haxe_Exception.prototype,{
	toString: function() {
		return "" + haxe_Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
	}
});
var haxe_exceptions_NotImplementedException = function(message,previous,pos) {
	if(message == null) {
		message = "Not implemented";
	}
	haxe_exceptions_PosException.call(this,message,previous,pos);
};
haxe_exceptions_NotImplementedException.__name__ = true;
haxe_exceptions_NotImplementedException.__super__ = haxe_exceptions_PosException;
haxe_exceptions_NotImplementedException.prototype = $extend(haxe_exceptions_PosException.prototype,{
});
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.ofString = function(s,encoding) {
	if(encoding == haxe_io_Encoding.RawNative) {
		var buf = new Uint8Array(s.length << 1);
		var _g = 0;
		var _g1 = s.length;
		while(_g < _g1) {
			var i = _g++;
			var c = s.charCodeAt(i);
			buf[i << 1] = c & 255;
			buf[i << 1 | 1] = c >> 8;
		}
		return new haxe_io_Bytes(buf.buffer);
	}
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = s.charCodeAt(i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_io_Path = function(path) {
	switch(path) {
	case ".":case "..":
		this.dir = path;
		this.file = "";
		return;
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else {
		this.dir = null;
	}
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
haxe_io_Path.__name__ = true;
haxe_io_Path.withoutDirectory = function(path) {
	var s = new haxe_io_Path(path);
	s.dir = null;
	return s.toString();
};
haxe_io_Path.directory = function(path) {
	var s = new haxe_io_Path(path);
	if(s.dir == null) {
		return "";
	}
	return s.dir;
};
haxe_io_Path.join = function(paths) {
	var _g = [];
	var _g1 = 0;
	var _g2 = paths;
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		if(v != null && v != "") {
			_g.push(v);
		}
	}
	var paths = _g;
	if(paths.length == 0) {
		return "";
	}
	var path = paths[0];
	var _g = 1;
	var _g1 = paths.length;
	while(_g < _g1) {
		var i = _g++;
		path = haxe_io_Path.addTrailingSlash(path);
		path += paths[i];
	}
	return haxe_io_Path.normalize(path);
};
haxe_io_Path.normalize = function(path) {
	var slash = "/";
	path = path.split("\\").join(slash);
	if(path == slash) {
		return slash;
	}
	var target = [];
	var _g = 0;
	var _g1 = path.split(slash);
	while(_g < _g1.length) {
		var token = _g1[_g];
		++_g;
		if(token == ".." && target.length > 0 && target[target.length - 1] != "..") {
			target.pop();
		} else if(token == "") {
			if(target.length > 0 || HxOverrides.cca(path,0) == 47) {
				target.push(token);
			}
		} else if(token != ".") {
			target.push(token);
		}
	}
	var tmp = target.join(slash);
	var acc_b = "";
	var colon = false;
	var slashes = false;
	var _g2_offset = 0;
	var _g2_s = tmp;
	while(_g2_offset < _g2_s.length) {
		var s = _g2_s;
		var index = _g2_offset++;
		var c = s.charCodeAt(index);
		if(c >= 55296 && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(index + 1) & 1023;
		}
		var c1 = c;
		if(c1 >= 65536) {
			++_g2_offset;
		}
		var c2 = c1;
		switch(c2) {
		case 47:
			if(!colon) {
				slashes = true;
			} else {
				var i = c2;
				colon = false;
				if(slashes) {
					acc_b += "/";
					slashes = false;
				}
				acc_b += String.fromCodePoint(i);
			}
			break;
		case 58:
			acc_b += ":";
			colon = true;
			break;
		default:
			var i1 = c2;
			colon = false;
			if(slashes) {
				acc_b += "/";
				slashes = false;
			}
			acc_b += String.fromCodePoint(i1);
		}
	}
	return acc_b;
};
haxe_io_Path.addTrailingSlash = function(path) {
	if(path.length == 0) {
		return "/";
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		if(c2 != path.length - 1) {
			return path + "\\";
		} else {
			return path;
		}
	} else if(c1 != path.length - 1) {
		return path + "/";
	} else {
		return path;
	}
};
haxe_io_Path.removeTrailingSlashes = function(path) {
	_hx_loop1: while(true) {
		var _g = HxOverrides.cca(path,path.length - 1);
		if(_g == null) {
			break;
		} else {
			switch(_g) {
			case 47:case 92:
				path = HxOverrides.substr(path,0,-1);
				break;
			default:
				break _hx_loop1;
			}
		}
	}
	return path;
};
haxe_io_Path.isAbsolute = function(path) {
	if(StringTools.startsWith(path,"/")) {
		return true;
	}
	if(path.charAt(1) == ":") {
		return true;
	}
	if(StringTools.startsWith(path,"\\\\")) {
		return true;
	}
	return false;
};
haxe_io_Path.prototype = {
	toString: function() {
		return (this.dir == null ? "" : this.dir + (this.backslash ? "\\" : "/")) + this.file + (this.ext == null ? "" : "." + this.ext);
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var haxe_macro_StringLiteralKind = $hxEnums["haxe.macro.StringLiteralKind"] = { __ename__:true,__constructs__:null
	,DoubleQuotes: {_hx_name:"DoubleQuotes",_hx_index:0,__enum__:"haxe.macro.StringLiteralKind",toString:$estr}
	,SingleQuotes: {_hx_name:"SingleQuotes",_hx_index:1,__enum__:"haxe.macro.StringLiteralKind",toString:$estr}
};
haxe_macro_StringLiteralKind.__constructs__ = [haxe_macro_StringLiteralKind.DoubleQuotes,haxe_macro_StringLiteralKind.SingleQuotes];
var haxe_macro_Constant = $hxEnums["haxe.macro.Constant"] = { __ename__:true,__constructs__:null
	,CInt: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CInt",$_.__params__ = ["v"],$_)
	,CFloat: ($_=function(f) { return {_hx_index:1,f:f,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CFloat",$_.__params__ = ["f"],$_)
	,CString: ($_=function(s,kind) { return {_hx_index:2,s:s,kind:kind,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CString",$_.__params__ = ["s","kind"],$_)
	,CIdent: ($_=function(s) { return {_hx_index:3,s:s,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CIdent",$_.__params__ = ["s"],$_)
	,CRegexp: ($_=function(r,opt) { return {_hx_index:4,r:r,opt:opt,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CRegexp",$_.__params__ = ["r","opt"],$_)
};
haxe_macro_Constant.__constructs__ = [haxe_macro_Constant.CInt,haxe_macro_Constant.CFloat,haxe_macro_Constant.CString,haxe_macro_Constant.CIdent,haxe_macro_Constant.CRegexp];
var haxe_macro_Binop = $hxEnums["haxe.macro.Binop"] = { __ename__:true,__constructs__:null
	,OpAdd: {_hx_name:"OpAdd",_hx_index:0,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpMult: {_hx_name:"OpMult",_hx_index:1,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpDiv: {_hx_name:"OpDiv",_hx_index:2,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpSub: {_hx_name:"OpSub",_hx_index:3,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpAssign: {_hx_name:"OpAssign",_hx_index:4,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpEq: {_hx_name:"OpEq",_hx_index:5,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpNotEq: {_hx_name:"OpNotEq",_hx_index:6,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpGt: {_hx_name:"OpGt",_hx_index:7,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpGte: {_hx_name:"OpGte",_hx_index:8,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpLt: {_hx_name:"OpLt",_hx_index:9,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpLte: {_hx_name:"OpLte",_hx_index:10,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpAnd: {_hx_name:"OpAnd",_hx_index:11,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpOr: {_hx_name:"OpOr",_hx_index:12,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpXor: {_hx_name:"OpXor",_hx_index:13,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpBoolAnd: {_hx_name:"OpBoolAnd",_hx_index:14,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpBoolOr: {_hx_name:"OpBoolOr",_hx_index:15,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpShl: {_hx_name:"OpShl",_hx_index:16,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpShr: {_hx_name:"OpShr",_hx_index:17,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpUShr: {_hx_name:"OpUShr",_hx_index:18,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpMod: {_hx_name:"OpMod",_hx_index:19,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpAssignOp: ($_=function(op) { return {_hx_index:20,op:op,__enum__:"haxe.macro.Binop",toString:$estr}; },$_._hx_name="OpAssignOp",$_.__params__ = ["op"],$_)
	,OpInterval: {_hx_name:"OpInterval",_hx_index:21,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpArrow: {_hx_name:"OpArrow",_hx_index:22,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpIn: {_hx_name:"OpIn",_hx_index:23,__enum__:"haxe.macro.Binop",toString:$estr}
};
haxe_macro_Binop.__constructs__ = [haxe_macro_Binop.OpAdd,haxe_macro_Binop.OpMult,haxe_macro_Binop.OpDiv,haxe_macro_Binop.OpSub,haxe_macro_Binop.OpAssign,haxe_macro_Binop.OpEq,haxe_macro_Binop.OpNotEq,haxe_macro_Binop.OpGt,haxe_macro_Binop.OpGte,haxe_macro_Binop.OpLt,haxe_macro_Binop.OpLte,haxe_macro_Binop.OpAnd,haxe_macro_Binop.OpOr,haxe_macro_Binop.OpXor,haxe_macro_Binop.OpBoolAnd,haxe_macro_Binop.OpBoolOr,haxe_macro_Binop.OpShl,haxe_macro_Binop.OpShr,haxe_macro_Binop.OpUShr,haxe_macro_Binop.OpMod,haxe_macro_Binop.OpAssignOp,haxe_macro_Binop.OpInterval,haxe_macro_Binop.OpArrow,haxe_macro_Binop.OpIn];
var haxe_macro_Unop = $hxEnums["haxe.macro.Unop"] = { __ename__:true,__constructs__:null
	,OpIncrement: {_hx_name:"OpIncrement",_hx_index:0,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpDecrement: {_hx_name:"OpDecrement",_hx_index:1,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpNot: {_hx_name:"OpNot",_hx_index:2,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpNeg: {_hx_name:"OpNeg",_hx_index:3,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpNegBits: {_hx_name:"OpNegBits",_hx_index:4,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpSpread: {_hx_name:"OpSpread",_hx_index:5,__enum__:"haxe.macro.Unop",toString:$estr}
};
haxe_macro_Unop.__constructs__ = [haxe_macro_Unop.OpIncrement,haxe_macro_Unop.OpDecrement,haxe_macro_Unop.OpNot,haxe_macro_Unop.OpNeg,haxe_macro_Unop.OpNegBits,haxe_macro_Unop.OpSpread];
var haxe_macro_QuoteStatus = $hxEnums["haxe.macro.QuoteStatus"] = { __ename__:true,__constructs__:null
	,Unquoted: {_hx_name:"Unquoted",_hx_index:0,__enum__:"haxe.macro.QuoteStatus",toString:$estr}
	,Quoted: {_hx_name:"Quoted",_hx_index:1,__enum__:"haxe.macro.QuoteStatus",toString:$estr}
};
haxe_macro_QuoteStatus.__constructs__ = [haxe_macro_QuoteStatus.Unquoted,haxe_macro_QuoteStatus.Quoted];
var haxe_macro_FunctionKind = $hxEnums["haxe.macro.FunctionKind"] = { __ename__:true,__constructs__:null
	,FAnonymous: {_hx_name:"FAnonymous",_hx_index:0,__enum__:"haxe.macro.FunctionKind",toString:$estr}
	,FNamed: ($_=function(name,inlined) { return {_hx_index:1,name:name,inlined:inlined,__enum__:"haxe.macro.FunctionKind",toString:$estr}; },$_._hx_name="FNamed",$_.__params__ = ["name","inlined"],$_)
	,FArrow: {_hx_name:"FArrow",_hx_index:2,__enum__:"haxe.macro.FunctionKind",toString:$estr}
};
haxe_macro_FunctionKind.__constructs__ = [haxe_macro_FunctionKind.FAnonymous,haxe_macro_FunctionKind.FNamed,haxe_macro_FunctionKind.FArrow];
var haxe_macro_ExprDef = $hxEnums["haxe.macro.ExprDef"] = { __ename__:true,__constructs__:null
	,EConst: ($_=function(c) { return {_hx_index:0,c:c,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EConst",$_.__params__ = ["c"],$_)
	,EArray: ($_=function(e1,e2) { return {_hx_index:1,e1:e1,e2:e2,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EArray",$_.__params__ = ["e1","e2"],$_)
	,EBinop: ($_=function(op,e1,e2) { return {_hx_index:2,op:op,e1:e1,e2:e2,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EBinop",$_.__params__ = ["op","e1","e2"],$_)
	,EField: ($_=function(e,field) { return {_hx_index:3,e:e,field:field,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EField",$_.__params__ = ["e","field"],$_)
	,EParenthesis: ($_=function(e) { return {_hx_index:4,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EParenthesis",$_.__params__ = ["e"],$_)
	,EObjectDecl: ($_=function(fields) { return {_hx_index:5,fields:fields,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EObjectDecl",$_.__params__ = ["fields"],$_)
	,EArrayDecl: ($_=function(values) { return {_hx_index:6,values:values,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EArrayDecl",$_.__params__ = ["values"],$_)
	,ECall: ($_=function(e,params) { return {_hx_index:7,e:e,params:params,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ECall",$_.__params__ = ["e","params"],$_)
	,ENew: ($_=function(t,params) { return {_hx_index:8,t:t,params:params,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ENew",$_.__params__ = ["t","params"],$_)
	,EUnop: ($_=function(op,postFix,e) { return {_hx_index:9,op:op,postFix:postFix,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EUnop",$_.__params__ = ["op","postFix","e"],$_)
	,EVars: ($_=function(vars) { return {_hx_index:10,vars:vars,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EVars",$_.__params__ = ["vars"],$_)
	,EFunction: ($_=function(kind,f) { return {_hx_index:11,kind:kind,f:f,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EFunction",$_.__params__ = ["kind","f"],$_)
	,EBlock: ($_=function(exprs) { return {_hx_index:12,exprs:exprs,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EBlock",$_.__params__ = ["exprs"],$_)
	,EFor: ($_=function(it,expr) { return {_hx_index:13,it:it,expr:expr,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EFor",$_.__params__ = ["it","expr"],$_)
	,EIf: ($_=function(econd,eif,eelse) { return {_hx_index:14,econd:econd,eif:eif,eelse:eelse,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EIf",$_.__params__ = ["econd","eif","eelse"],$_)
	,EWhile: ($_=function(econd,e,normalWhile) { return {_hx_index:15,econd:econd,e:e,normalWhile:normalWhile,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EWhile",$_.__params__ = ["econd","e","normalWhile"],$_)
	,ESwitch: ($_=function(e,cases,edef) { return {_hx_index:16,e:e,cases:cases,edef:edef,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ESwitch",$_.__params__ = ["e","cases","edef"],$_)
	,ETry: ($_=function(e,catches) { return {_hx_index:17,e:e,catches:catches,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ETry",$_.__params__ = ["e","catches"],$_)
	,EReturn: ($_=function(e) { return {_hx_index:18,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EReturn",$_.__params__ = ["e"],$_)
	,EBreak: {_hx_name:"EBreak",_hx_index:19,__enum__:"haxe.macro.ExprDef",toString:$estr}
	,EContinue: {_hx_name:"EContinue",_hx_index:20,__enum__:"haxe.macro.ExprDef",toString:$estr}
	,EUntyped: ($_=function(e) { return {_hx_index:21,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EUntyped",$_.__params__ = ["e"],$_)
	,EThrow: ($_=function(e) { return {_hx_index:22,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EThrow",$_.__params__ = ["e"],$_)
	,ECast: ($_=function(e,t) { return {_hx_index:23,e:e,t:t,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ECast",$_.__params__ = ["e","t"],$_)
	,EDisplay: ($_=function(e,displayKind) { return {_hx_index:24,e:e,displayKind:displayKind,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EDisplay",$_.__params__ = ["e","displayKind"],$_)
	,EDisplayNew: ($_=function(t) { return {_hx_index:25,t:t,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EDisplayNew",$_.__params__ = ["t"],$_)
	,ETernary: ($_=function(econd,eif,eelse) { return {_hx_index:26,econd:econd,eif:eif,eelse:eelse,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ETernary",$_.__params__ = ["econd","eif","eelse"],$_)
	,ECheckType: ($_=function(e,t) { return {_hx_index:27,e:e,t:t,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ECheckType",$_.__params__ = ["e","t"],$_)
	,EMeta: ($_=function(s,e) { return {_hx_index:28,s:s,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EMeta",$_.__params__ = ["s","e"],$_)
	,EIs: ($_=function(e,t) { return {_hx_index:29,e:e,t:t,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EIs",$_.__params__ = ["e","t"],$_)
};
haxe_macro_ExprDef.__constructs__ = [haxe_macro_ExprDef.EConst,haxe_macro_ExprDef.EArray,haxe_macro_ExprDef.EBinop,haxe_macro_ExprDef.EField,haxe_macro_ExprDef.EParenthesis,haxe_macro_ExprDef.EObjectDecl,haxe_macro_ExprDef.EArrayDecl,haxe_macro_ExprDef.ECall,haxe_macro_ExprDef.ENew,haxe_macro_ExprDef.EUnop,haxe_macro_ExprDef.EVars,haxe_macro_ExprDef.EFunction,haxe_macro_ExprDef.EBlock,haxe_macro_ExprDef.EFor,haxe_macro_ExprDef.EIf,haxe_macro_ExprDef.EWhile,haxe_macro_ExprDef.ESwitch,haxe_macro_ExprDef.ETry,haxe_macro_ExprDef.EReturn,haxe_macro_ExprDef.EBreak,haxe_macro_ExprDef.EContinue,haxe_macro_ExprDef.EUntyped,haxe_macro_ExprDef.EThrow,haxe_macro_ExprDef.ECast,haxe_macro_ExprDef.EDisplay,haxe_macro_ExprDef.EDisplayNew,haxe_macro_ExprDef.ETernary,haxe_macro_ExprDef.ECheckType,haxe_macro_ExprDef.EMeta,haxe_macro_ExprDef.EIs];
var haxe_macro_DisplayKind = $hxEnums["haxe.macro.DisplayKind"] = { __ename__:true,__constructs__:null
	,DKCall: {_hx_name:"DKCall",_hx_index:0,__enum__:"haxe.macro.DisplayKind",toString:$estr}
	,DKDot: {_hx_name:"DKDot",_hx_index:1,__enum__:"haxe.macro.DisplayKind",toString:$estr}
	,DKStructure: {_hx_name:"DKStructure",_hx_index:2,__enum__:"haxe.macro.DisplayKind",toString:$estr}
	,DKMarked: {_hx_name:"DKMarked",_hx_index:3,__enum__:"haxe.macro.DisplayKind",toString:$estr}
	,DKPattern: ($_=function(outermost) { return {_hx_index:4,outermost:outermost,__enum__:"haxe.macro.DisplayKind",toString:$estr}; },$_._hx_name="DKPattern",$_.__params__ = ["outermost"],$_)
};
haxe_macro_DisplayKind.__constructs__ = [haxe_macro_DisplayKind.DKCall,haxe_macro_DisplayKind.DKDot,haxe_macro_DisplayKind.DKStructure,haxe_macro_DisplayKind.DKMarked,haxe_macro_DisplayKind.DKPattern];
var haxe_macro_ComplexType = $hxEnums["haxe.macro.ComplexType"] = { __ename__:true,__constructs__:null
	,TPath: ($_=function(p) { return {_hx_index:0,p:p,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TPath",$_.__params__ = ["p"],$_)
	,TFunction: ($_=function(args,ret) { return {_hx_index:1,args:args,ret:ret,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TFunction",$_.__params__ = ["args","ret"],$_)
	,TAnonymous: ($_=function(fields) { return {_hx_index:2,fields:fields,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TAnonymous",$_.__params__ = ["fields"],$_)
	,TParent: ($_=function(t) { return {_hx_index:3,t:t,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TParent",$_.__params__ = ["t"],$_)
	,TExtend: ($_=function(p,fields) { return {_hx_index:4,p:p,fields:fields,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TExtend",$_.__params__ = ["p","fields"],$_)
	,TOptional: ($_=function(t) { return {_hx_index:5,t:t,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TOptional",$_.__params__ = ["t"],$_)
	,TNamed: ($_=function(n,t) { return {_hx_index:6,n:n,t:t,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TNamed",$_.__params__ = ["n","t"],$_)
	,TIntersection: ($_=function(tl) { return {_hx_index:7,tl:tl,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TIntersection",$_.__params__ = ["tl"],$_)
};
haxe_macro_ComplexType.__constructs__ = [haxe_macro_ComplexType.TPath,haxe_macro_ComplexType.TFunction,haxe_macro_ComplexType.TAnonymous,haxe_macro_ComplexType.TParent,haxe_macro_ComplexType.TExtend,haxe_macro_ComplexType.TOptional,haxe_macro_ComplexType.TNamed,haxe_macro_ComplexType.TIntersection];
var haxe_macro_TypeParam = $hxEnums["haxe.macro.TypeParam"] = { __ename__:true,__constructs__:null
	,TPType: ($_=function(t) { return {_hx_index:0,t:t,__enum__:"haxe.macro.TypeParam",toString:$estr}; },$_._hx_name="TPType",$_.__params__ = ["t"],$_)
	,TPExpr: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"haxe.macro.TypeParam",toString:$estr}; },$_._hx_name="TPExpr",$_.__params__ = ["e"],$_)
};
haxe_macro_TypeParam.__constructs__ = [haxe_macro_TypeParam.TPType,haxe_macro_TypeParam.TPExpr];
var haxe_macro_Access = $hxEnums["haxe.macro.Access"] = { __ename__:true,__constructs__:null
	,APublic: {_hx_name:"APublic",_hx_index:0,__enum__:"haxe.macro.Access",toString:$estr}
	,APrivate: {_hx_name:"APrivate",_hx_index:1,__enum__:"haxe.macro.Access",toString:$estr}
	,AStatic: {_hx_name:"AStatic",_hx_index:2,__enum__:"haxe.macro.Access",toString:$estr}
	,AOverride: {_hx_name:"AOverride",_hx_index:3,__enum__:"haxe.macro.Access",toString:$estr}
	,ADynamic: {_hx_name:"ADynamic",_hx_index:4,__enum__:"haxe.macro.Access",toString:$estr}
	,AInline: {_hx_name:"AInline",_hx_index:5,__enum__:"haxe.macro.Access",toString:$estr}
	,AMacro: {_hx_name:"AMacro",_hx_index:6,__enum__:"haxe.macro.Access",toString:$estr}
	,AFinal: {_hx_name:"AFinal",_hx_index:7,__enum__:"haxe.macro.Access",toString:$estr}
	,AExtern: {_hx_name:"AExtern",_hx_index:8,__enum__:"haxe.macro.Access",toString:$estr}
	,AAbstract: {_hx_name:"AAbstract",_hx_index:9,__enum__:"haxe.macro.Access",toString:$estr}
	,AOverload: {_hx_name:"AOverload",_hx_index:10,__enum__:"haxe.macro.Access",toString:$estr}
};
haxe_macro_Access.__constructs__ = [haxe_macro_Access.APublic,haxe_macro_Access.APrivate,haxe_macro_Access.AStatic,haxe_macro_Access.AOverride,haxe_macro_Access.ADynamic,haxe_macro_Access.AInline,haxe_macro_Access.AMacro,haxe_macro_Access.AFinal,haxe_macro_Access.AExtern,haxe_macro_Access.AAbstract,haxe_macro_Access.AOverload];
var haxe_macro_FieldType = $hxEnums["haxe.macro.FieldType"] = { __ename__:true,__constructs__:null
	,FVar: ($_=function(t,e) { return {_hx_index:0,t:t,e:e,__enum__:"haxe.macro.FieldType",toString:$estr}; },$_._hx_name="FVar",$_.__params__ = ["t","e"],$_)
	,FFun: ($_=function(f) { return {_hx_index:1,f:f,__enum__:"haxe.macro.FieldType",toString:$estr}; },$_._hx_name="FFun",$_.__params__ = ["f"],$_)
	,FProp: ($_=function(get,set,t,e) { return {_hx_index:2,get:get,set:set,t:t,e:e,__enum__:"haxe.macro.FieldType",toString:$estr}; },$_._hx_name="FProp",$_.__params__ = ["get","set","t","e"],$_)
};
haxe_macro_FieldType.__constructs__ = [haxe_macro_FieldType.FVar,haxe_macro_FieldType.FFun,haxe_macro_FieldType.FProp];
var haxe_macro_TypeDefKind = $hxEnums["haxe.macro.TypeDefKind"] = { __ename__:true,__constructs__:null
	,TDEnum: {_hx_name:"TDEnum",_hx_index:0,__enum__:"haxe.macro.TypeDefKind",toString:$estr}
	,TDStructure: {_hx_name:"TDStructure",_hx_index:1,__enum__:"haxe.macro.TypeDefKind",toString:$estr}
	,TDClass: ($_=function(superClass,interfaces,isInterface,isFinal,isAbstract) { return {_hx_index:2,superClass:superClass,interfaces:interfaces,isInterface:isInterface,isFinal:isFinal,isAbstract:isAbstract,__enum__:"haxe.macro.TypeDefKind",toString:$estr}; },$_._hx_name="TDClass",$_.__params__ = ["superClass","interfaces","isInterface","isFinal","isAbstract"],$_)
	,TDAlias: ($_=function(t) { return {_hx_index:3,t:t,__enum__:"haxe.macro.TypeDefKind",toString:$estr}; },$_._hx_name="TDAlias",$_.__params__ = ["t"],$_)
	,TDAbstract: ($_=function(tthis,from,to) { return {_hx_index:4,tthis:tthis,from:from,to:to,__enum__:"haxe.macro.TypeDefKind",toString:$estr}; },$_._hx_name="TDAbstract",$_.__params__ = ["tthis","from","to"],$_)
	,TDField: ($_=function(kind,access) { return {_hx_index:5,kind:kind,access:access,__enum__:"haxe.macro.TypeDefKind",toString:$estr}; },$_._hx_name="TDField",$_.__params__ = ["kind","access"],$_)
};
haxe_macro_TypeDefKind.__constructs__ = [haxe_macro_TypeDefKind.TDEnum,haxe_macro_TypeDefKind.TDStructure,haxe_macro_TypeDefKind.TDClass,haxe_macro_TypeDefKind.TDAlias,haxe_macro_TypeDefKind.TDAbstract,haxe_macro_TypeDefKind.TDField];
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_node_Fs = require("fs");
var js_node_Path = require("path");
var js_node_buffer_Buffer = require("buffer").Buffer;
var tool_ComplexTypeTools = function() { };
tool_ComplexTypeTools.__name__ = true;
tool_ComplexTypeTools.map = function(complexType,f) {
	if(complexType == null) {
		return null;
	}
	switch(complexType._hx_index) {
	case 0:
		var p = complexType.p;
		return f(haxe_macro_ComplexType.TPath(tool_ComplexTypeTools.mapTypePath(p,f)));
	case 1:
		var args = complexType.args;
		var ret = complexType.ret;
		var result = new Array(args.length);
		var _g = 0;
		var _g1 = args.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = tool_ComplexTypeTools.map(args[i],f);
		}
		return f(haxe_macro_ComplexType.TFunction(result,tool_ComplexTypeTools.map(ret,f)));
	case 2:
		var fields = complexType.fields;
		var result = new Array(fields.length);
		var _g = 0;
		var _g1 = fields.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = tool_ComplexTypeTools.mapField(fields[i],f);
		}
		return f(haxe_macro_ComplexType.TAnonymous(result));
	case 3:
		var t = complexType.t;
		return f(haxe_macro_ComplexType.TParent(tool_ComplexTypeTools.map(t,f)));
	case 4:
		var ap = complexType.p;
		var fields = complexType.fields;
		var result = new Array(ap.length);
		var _g = 0;
		var _g1 = ap.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = tool_ComplexTypeTools.mapTypePath(ap[i],f);
		}
		var tmp = result;
		var result = new Array(fields.length);
		var _g = 0;
		var _g1 = fields.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = tool_ComplexTypeTools.mapField(fields[i],f);
		}
		return f(haxe_macro_ComplexType.TExtend(tmp,result));
	case 5:
		var t = complexType.t;
		return f(haxe_macro_ComplexType.TOptional(tool_ComplexTypeTools.map(t,f)));
	case 6:
		var n = complexType.n;
		var t = complexType.t;
		return f(haxe_macro_ComplexType.TNamed(n,tool_ComplexTypeTools.map(t,f)));
	case 7:
		var types = complexType.tl;
		var result = new Array(types.length);
		var _g = 0;
		var _g1 = types.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = tool_ComplexTypeTools.map(types[i],f);
		}
		return f(haxe_macro_ComplexType.TIntersection(result));
	}
};
tool_ComplexTypeTools.mapTypePath = function(typePath,f) {
	var typePath1 = typePath.pack;
	var typePath2 = typePath.name;
	var typePath3 = typePath.sub;
	var tmp;
	if(typePath.params != null) {
		var _this = typePath.params;
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			var tp = _this[i];
			var tmp1;
			switch(tp._hx_index) {
			case 0:
				var t = tp.t;
				tmp1 = haxe_macro_TypeParam.TPType(tool_ComplexTypeTools.map(t,f));
				break;
			case 1:
				var e = tp.e;
				tmp1 = haxe_macro_TypeParam.TPExpr(e);
				break;
			}
			result[i] = tmp1;
		}
		tmp = result;
	} else {
		tmp = null;
	}
	return { pack : typePath1, name : typePath2, sub : typePath3, params : tmp};
};
tool_ComplexTypeTools.mapArg = function(arg,f) {
	return { name : arg.name, meta : arg.meta, value : arg.value, opt : arg.opt, type : tool_ComplexTypeTools.map(arg.type,f)};
};
tool_ComplexTypeTools.mapFunction = function(fun,f) {
	var fun1 = fun.params;
	var fun2 = fun.expr;
	var _this = fun.args;
	var result = new Array(_this.length);
	var _g = 0;
	var _g1 = _this.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = tool_ComplexTypeTools.mapArg(_this[i],f);
	}
	return { params : fun1, expr : fun2, args : result, ret : tool_ComplexTypeTools.map(fun.ret,f)};
};
tool_ComplexTypeTools.mapField = function(field,f) {
	var field1 = field.name;
	var field2 = field.meta;
	var field3 = field.pos;
	var field4 = field.access;
	var field5 = field.doc;
	var _g = field.kind;
	var tmp;
	switch(_g._hx_index) {
	case 0:
		var t = _g.t;
		var e = _g.e;
		tmp = haxe_macro_FieldType.FVar(tool_ComplexTypeTools.map(t,f),e);
		break;
	case 1:
		var fun = _g.f;
		tmp = haxe_macro_FieldType.FFun(tool_ComplexTypeTools.mapFunction(fun,f));
		break;
	case 2:
		var get = _g.get;
		var set = _g.set;
		var t = _g.t;
		var e = _g.e;
		tmp = haxe_macro_FieldType.FProp(get,set,tool_ComplexTypeTools.map(t,f),e);
		break;
	}
	return { name : field1, meta : field2, pos : field3, access : field4, doc : field5, kind : tmp};
};
var tool_FileTools = function() { };
tool_FileTools.__name__ = true;
tool_FileTools.cwdRelativeFilePath = function(path) {
	return tool_FileTools.relativePath(process.cwd(),path);
};
tool_FileTools.withRelativePrefix = function(path) {
	if(!haxe_io_Path.isAbsolute(path) && !StringTools.startsWith(path,"./") && !StringTools.startsWith(path,".\\")) {
		return "./" + path;
	} else {
		return path;
	}
};
tool_FileTools.relativePath = function(relativeTo,path) {
	path = haxe_io_Path.removeTrailingSlashes(js_node_Path.resolve(path));
	relativeTo = haxe_io_Path.removeTrailingSlashes(js_node_Path.resolve(relativeTo));
	var aPath = path.split("/");
	var aRelativeTo = relativeTo.split("/");
	var matchesUpToIndex = 0;
	var _g = 0;
	var _g1 = aRelativeTo.length;
	while(_g < _g1) {
		var i = _g++;
		if(aPath[i] == aRelativeTo[i]) {
			matchesUpToIndex = i;
		} else {
			break;
		}
	}
	var _g = [];
	var _g1 = 0;
	var _g2 = aRelativeTo.length - 1 - matchesUpToIndex;
	while(_g1 < _g2) {
		var _ = _g1++;
		_g.push("..");
	}
	return _g.concat(aPath.slice(matchesUpToIndex + 1)).join("/");
};
tool_FileTools.touchDirectoryPath = function(path) {
	var directories = haxe_io_Path.normalize(path).split("/");
	var currentDirectories = [];
	var _g = 0;
	while(_g < directories.length) {
		var directory = directories[_g];
		++_g;
		currentDirectories.push(directory);
		var currentPath = currentDirectories.join("/");
		if(currentPath == "/" || currentPath == "") {
			continue;
		}
		if(js_node_Fs.existsSync(currentPath) && js_node_Fs.statSync(currentPath).isDirectory()) {
			continue;
		}
		if(!js_node_Fs.existsSync(currentPath)) {
			js_node_Fs.mkdirSync(currentPath);
		} else {
			throw haxe_Exception.thrown("Could not create directory " + currentPath + " because a file already exists at this path");
		}
	}
};
var tool_HaxeTools = function() { };
tool_HaxeTools.__name__ = true;
tool_HaxeTools.setMeta = function(target,metaName,params) {
	var metas = target.meta;
	if(metas == null) {
		metas = [];
		target.meta = metas;
	}
	var existingMeta = Lambda.find(metas,function(m) {
		return m.name == metaName;
	});
	if(existingMeta != null) {
		existingMeta.params = params;
	} else {
		metas.push({ name : metaName, params : params, pos : null});
	}
};
tool_HaxeTools.removeMeta = function(target,metaName) {
	var metas = target.meta == null ? target.meta = [] : target.meta;
	var _g = [];
	var _g1 = 0;
	var _g2 = metas;
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		if(v.name != metaName) {
			_g.push(v);
		}
	}
	target.meta = _g;
};
tool_HaxeTools.getNativeName = function(target) {
	var nativeMeta = tool_HaxeTools.getMeta(target,":native");
	var _g = nativeMeta;
	if(_g != null) {
		var _g1 = _g.name;
		var _g1 = _g.params;
		var _g2 = _g.pos;
		if(_g1 != null) {
			if(_g1.length == 1) {
				var _g = _g1[0];
				var _g1 = _g.expr;
				var _g2 = _g.pos;
				if(_g1._hx_index == 0) {
					var _g = _g1.c;
					if(_g._hx_index == 2) {
						var _g1 = _g.kind;
						var s = _g.s;
						return s;
					}
				}
			}
		}
	}
	return target.name;
};
tool_HaxeTools.getMeta = function(field,metaName) {
	if(field.meta != null) {
		return Lambda.find(field.meta,function(m) {
			return m.name == metaName;
		});
	} else {
		return null;
	}
};
tool_HaxeTools.hasAccess = function(field,access) {
	if(field.access != null) {
		return Lambda.has(field.access,access);
	} else {
		return false;
	}
};
tool_HaxeTools.enableAccess = function(field,access) {
	var accessArray = field.access != null ? field.access : field.access = [];
	if(accessArray.indexOf(access) == -1) {
		accessArray.push(access);
	}
};
tool_HaxeTools.resolveNameCollisions = function(fields) {
	var renameability = function(field) {
		var renameability = tool_HaxeTools.getMeta(field,":native") != null ? 1 : 0;
		var renameability1 = tool_HaxeTools.hasAccess(field,haxe_macro_Access.AStatic) ? 1 : 0;
		var _g = field.kind;
		var renameability2;
		if(_g._hx_index == 0) {
			var _g1 = _g.t;
			var _g1 = _g.e;
			renameability2 = true;
		} else {
			renameability2 = false;
		}
		return renameability << 2 | renameability1 << 1 | (renameability2 ? 1 : 0);
	};
	while(true) {
		var nameMap_h = Object.create(null);
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			var array = nameMap_h[field.name];
			if(array == null) {
				array = [];
				nameMap_h[field.name] = array;
			}
			array.push(field);
		}
		var noNamesOverlap = true;
		var h = nameMap_h;
		var _g1_h = h;
		var _g1_keys = Object.keys(h);
		var _g1_length = _g1_keys.length;
		var _g1_current = 0;
		while(_g1_current < _g1_length) {
			var key = _g1_keys[_g1_current++];
			var _g2_key = key;
			var _g2_value = _g1_h[key];
			var _ = _g2_key;
			var collidingFields = _g2_value;
			if(collidingFields.length > 1) {
				noNamesOverlap = false;
				haxe_ds_ArraySort.sort(collidingFields,function(a,b) {
					return renameability(b) - renameability(a);
				});
				var fieldToRename = collidingFields[0];
				if(tool_HaxeTools.getMeta(fieldToRename,":native") == null && tool_HaxeTools.getMeta(fieldToRename,":selfCall") == null) {
					tool_HaxeTools.setMeta(fieldToRename,":native",[tool_HaxeTools.toStringExpr(fieldToRename.name)]);
				}
				fieldToRename.name += "_";
			}
		}
		if(noNamesOverlap) {
			break;
		}
	}
};
tool_HaxeTools.toSafeIdent = function(str,escapeReservedWords) {
	if(escapeReservedWords == null) {
		escapeReservedWords = true;
	}
	var _this_r = new RegExp("[\"'`]","gm".split("u").join(""));
	str = str.replace(_this_r,"");
	var _this_r = new RegExp("^@","".split("u").join(""));
	str = str.replace(_this_r,"");
	var _this_r = new RegExp("[-–—.]","gm".split("u").join(""));
	str = str.replace(_this_r,"_");
	var _this_r = new RegExp("[/\\\\]","gm".split("u").join(""));
	str = str.replace(_this_r,"_");
	str = new EReg("([^0-9a-z_]|^[^a-z_]+)([a-z])?","ig").map(str,function(reg) {
		var illegalChars = reg.matched(1);
		var followingChar = reg.matched(2);
		var _this = illegalChars.split("");
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			var charName = tool_HaxeTools.specialCharacterNames.h[_this[i]];
			result[i] = charName != null ? charName : "_";
		}
		return result.join("") + (followingChar != null ? followingChar.toUpperCase() : "");
	});
	if(escapeReservedWords && tool_HaxeTools.haxeReservedWords.indexOf(str) != -1) {
		str += "_";
	}
	return str;
};
tool_HaxeTools.toSafeTypeName = function(str) {
	str = new EReg("[^\\w]+([a-z])","g").map(str,function(reg) {
		return reg.matched(1).toUpperCase();
	});
	str = tool_HaxeTools.toSafeIdent(str,false);
	var firstLetterPattern = new EReg("[a-z]","i");
	if(firstLetterPattern.match(str)) {
		return firstLetterPattern.matchedLeft() + firstLetterPattern.matched(0).toUpperCase() + firstLetterPattern.matchedRight();
	} else {
		return "T" + str;
	}
};
tool_HaxeTools.toSafePackageName = function(str) {
	return tool_HaxeTools.toSafeIdent(str,true).toLowerCase();
};
tool_HaxeTools.toStringExpr = function(str,pos) {
	return { expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CString(str,haxe_macro_StringLiteralKind.DoubleQuotes)), pos : pos != null ? pos : tool_HaxeTools.nullPosition};
};
tool_HaxeTools.toIntExpr = function(int,pos) {
	return { expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CInt(int == null ? "null" : "" + int)), pos : pos != null ? pos : tool_HaxeTools.nullPosition};
};
tool_HaxeTools.primitiveValueToExpr = function(value) {
	if(value == null) {
		return null;
	}
	switch(typeof(value)) {
	case "boolean":
		return { expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent(value == true ? "true" : "false")), pos : tool_HaxeTools.nullPosition};
	case "number":
		return { expr : haxe_macro_ExprDef.EConst(Math.floor(value) == value ? haxe_macro_Constant.CInt(Std.string(value)) : haxe_macro_Constant.CFloat(Std.string(value))), pos : tool_HaxeTools.nullPosition};
	case "string":
		return { expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CString(value,haxe_macro_StringLiteralKind.DoubleQuotes)), pos : tool_HaxeTools.nullPosition};
	default:
		return null;
	}
};
tool_HaxeTools.deduplicateTypes = function(types) {
	var typeStringMap_h = Object.create(null);
	var printer = new haxe_macro_Printer();
	var _g = 0;
	while(_g < types.length) {
		var type = types[_g];
		++_g;
		var typeString = printer.printComplexType(type);
		typeStringMap_h[typeString] = type;
	}
	var _g = [];
	var h = typeStringMap_h;
	var _g2_h = h;
	var _g2_keys = Object.keys(h);
	var _g2_length = _g2_keys.length;
	var _g2_current = 0;
	while(_g2_current < _g2_length) {
		var key = _g2_keys[_g2_current++];
		var _g3_key = key;
		var _g3_value = _g2_h[key];
		var _ = _g3_key;
		var type = _g3_value;
		_g.push(type);
	}
	return _g;
};
tool_HaxeTools.unwrapNull = function(type) {
	if(type._hx_index == 0) {
		var _g = type.p;
		var _g1 = _g.pack;
		var _g2 = _g.params;
		var _g3 = _g.sub;
		if(_g.name == "Null") {
			switch(_g1.length) {
			case 0:
				if(_g2 == null) {
					return type;
				} else if(_g2.length == 1) {
					var _g = _g2[0];
					if(_g._hx_index == 0) {
						var innerType = _g.t;
						return innerType;
					} else {
						return type;
					}
				} else {
					return type;
				}
				break;
			case 1:
				if(_g1[0] == "std") {
					if(_g2 == null) {
						return type;
					} else if(_g2.length == 1) {
						var _g = _g2[0];
						if(_g._hx_index == 0) {
							var innerType = _g.t;
							return innerType;
						} else {
							return type;
						}
					} else {
						return type;
					}
				} else {
					return type;
				}
				break;
			default:
				return type;
			}
		} else {
			return type;
		}
	} else {
		return type;
	}
};
var tool_StringTools = function() { };
tool_StringTools.__name__ = true;
tool_StringTools.unwrapQuotes = function(str) {
	var _g = str.charAt(0);
	switch(_g) {
	case "\"":case "'":case "`":
		var q = _g;
		if(str.charAt(str.length - 1) == q) {
			return HxOverrides.substr(str,1,str.length - 2);
		} else {
			return str;
		}
		break;
	default:
		return str;
	}
};
tool_StringTools.removeIndentation = function(str) {
	var lines = str.split("\n");
	var commonTabsCount = null;
	var commonSpaceCount = null;
	var spacePrefixPattern = new EReg("^([ \t]*)[^\\s]","");
	var _g = 0;
	while(_g < lines.length) {
		var line = lines[_g];
		++_g;
		if(spacePrefixPattern.match(line)) {
			var space = spacePrefixPattern.matched(1);
			var tabsCount = 0;
			var spaceCount = 0;
			var _g1 = 0;
			var _g2 = space.length;
			while(_g1 < _g2) {
				var i = _g1++;
				if(space.charAt(i) == "\t") {
					++tabsCount;
				}
				if(space.charAt(i) == " ") {
					++spaceCount;
				}
			}
			commonTabsCount = commonTabsCount != null ? Math.min(commonTabsCount,tabsCount) | 0 : tabsCount;
			commonSpaceCount = commonSpaceCount != null ? Math.min(commonSpaceCount,spaceCount) | 0 : spaceCount;
		}
	}
	var spaceCharCount = commonTabsCount + commonSpaceCount;
	if(spaceCharCount > 0) {
		var result = new Array(lines.length);
		var _g = 0;
		var _g1 = lines.length;
		while(_g < _g1) {
			var i = _g++;
			var line = lines[i];
			result[i] = spacePrefixPattern.match(line) ? HxOverrides.substr(line,spaceCharCount,null) : line;
		}
		return result.join("\n");
	} else {
		return str;
	}
};
var tool_SymbolAccessTools = function() { };
tool_SymbolAccessTools.__name__ = true;
tool_SymbolAccessTools.extractSymbolChain = function(access) {
	switch(access._hx_index) {
	case 0:
		var _g = access.modulePath;
		var _g = access.moduleSymbol;
		var symbolChain = access.symbolChain;
		return symbolChain;
	case 1:
		var _g = access.moduleName;
		var _g = access.sourceFileSymbol;
		var symbolChain = access.symbolChain;
		return symbolChain;
	case 2:
		var symbolChain = access.symbolChain;
		return symbolChain;
	case 3:
		return [];
	}
};
tool_SymbolAccessTools.getIdentifierChain = function(access) {
	var _this = tool_SymbolAccessTools.extractSymbolChain(access);
	var result = new Array(_this.length);
	var _g = 0;
	var _g1 = _this.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = _this[i].name;
	}
	return result;
};
tool_SymbolAccessTools.toAccessMetadata = function(access) {
	var pos = tool_SymbolAccessTools.getPosition(access);
	var identifierChain = tool_SymbolAccessTools.getIdentifierChain(access);
	switch(access._hx_index) {
	case 0:
		var _g = access.moduleSymbol;
		var _g = access.symbolChain;
		var path = access.modulePath;
		return { name : ":jsRequire", params : [tool_HaxeTools.toStringExpr(tool_StringTools.unwrapQuotes(path),pos)].concat(identifierChain.length > 0 ? [tool_HaxeTools.toStringExpr(identifierChain.join("."),pos)] : []), pos : pos};
	case 1:
		var _g = access.sourceFileSymbol;
		var _g = access.symbolChain;
		var path = access.moduleName;
		return { name : ":jsRequire", params : [tool_HaxeTools.toStringExpr(tool_StringTools.unwrapQuotes(path),pos)].concat(identifierChain.length > 0 ? [tool_HaxeTools.toStringExpr(identifierChain.join("."),pos)] : []), pos : pos};
	case 2:
		var _g = access.symbolChain;
		return { name : ":native", params : [tool_HaxeTools.toStringExpr(identifierChain.join("."),pos)], pos : pos};
	case 3:
		return { name : "jsInaccessible", pos : pos};
	}
};
tool_SymbolAccessTools.getPosition = function(access) {
	return null;
};
tool_SymbolAccessTools.toString = function(access) {
	var identifierChain = tool_SymbolAccessTools.getIdentifierChain(access);
	switch(access._hx_index) {
	case 0:
		var _g = access.moduleSymbol;
		var _g = access.symbolChain;
		var path = access.modulePath;
		return ["ambientRequire(" + path + ")"].concat(identifierChain).join(".");
	case 1:
		var _g = access.sourceFileSymbol;
		var _g = access.symbolChain;
		var moduleName = access.moduleName;
		return ["exportRequire(\"" + moduleName + "\")"].concat(identifierChain).join(".");
	case 2:
		var _g = access.symbolChain;
		return "::" + identifierChain.join(".");
	case 3:
		return "*Inaccessible*";
	}
};
var tool_TsProgramTools = function() { };
tool_TsProgramTools.__name__ = true;
tool_TsProgramTools.getAllDiagnostics = function(program) {
	return program.getGlobalDiagnostics().concat(program.getOptionsDiagnostics()).concat(program.getSemanticDiagnostics()).concat(program.getSyntacticDiagnostics()).concat(program.getDeclarationDiagnostics()).concat(program.getConfigFileParsingDiagnostics());
};
tool_TsProgramTools.isAmbientModule = function(program,moduleName) {
	var tc = program.getTypeChecker();
	return Lambda.exists(tc.getAmbientModules(),function(s) {
		return tool_StringTools.unwrapQuotes(s.name) == tool_TsProgramTools.normalizeModuleName(moduleName);
	});
};
tool_TsProgramTools.getDependencies = function(program,sourceFiles,normalizedInputModuleName,host) {
	var moduleDependencies = [];
	var compilerOptions = program.getCompilerOptions();
	var _g = 0;
	while(_g < sourceFiles.length) {
		var sourceFile = sourceFiles[_g];
		++_g;
		tool_TsProgramTools.walkReferencedSourceFiles(program,sourceFile,host,false,(function() {
			return function(sourceFile) {
				var referenceInfo = ts.preProcessFile(sourceFile.text);
				var _g = [];
				var _g1 = 0;
				var _g2 = referenceInfo.typeReferenceDirectives.concat(referenceInfo.importedFiles);
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(!tool_TsProgramTools.isDirectPathReferenceModule(v.fileName) && !tool_TsProgramTools.isAmbientModule(program,v.fileName)) {
						_g.push(v);
					}
				}
				var externalTypeReferences = _g;
				var _g = 0;
				while(_g < externalTypeReferences.length) {
					var typeReference = externalTypeReferences[_g];
					++_g;
					var result = ts.resolveTypeReferenceDirective(typeReference.fileName,sourceFile.fileName,compilerOptions,host);
					if(result.resolvedTypeReferenceDirective != null) {
						if(result.resolvedTypeReferenceDirective.packageId != null) {
							var packageInfo = result.resolvedTypeReferenceDirective.packageId;
							var normalizedModuleName = [tool_TsProgramTools.normalizeModuleName(packageInfo.name)];
							if(!Lambda.exists(moduleDependencies,(function(normalizedModuleName) {
								return function(m) {
									return m.normalizedModuleName == normalizedModuleName[0];
								};
							})(normalizedModuleName)) && normalizedModuleName[0] != normalizedInputModuleName) {
								moduleDependencies.push({ normalizedModuleName : normalizedModuleName[0], packageInfo : packageInfo});
							}
						}
					} else {
						Log.warn("Definitions not found for module <b>" + typeReference.fileName + "</>",sourceFile);
					}
				}
			};
		})());
	}
	return moduleDependencies;
};
tool_TsProgramTools.getGlobalScopeSymbolsInSourceFile = function(program,sourceFile) {
	var tc = program.getTypeChecker();
	var sourceFileSymbol = tc.getSymbolAtLocation(sourceFile);
	var globalSymbols = [];
	if(sourceFileSymbol == null) {
		var locals = TsInternal.getSourceFileLocals(sourceFile);
		locals.forEach(function(localSymbol,key,_) {
			globalSymbols.push(tc.getExportSymbolOfSymbol(localSymbol));
		});
	} else if(sourceFileSymbol.globalExports != null) {
		sourceFileSymbol.globalExports.forEach(function(s,_) {
			globalSymbols.push(s);
		});
	}
	var moduleAugmentations = TsInternal.getSourceFileModuleAugmentations(sourceFile);
	var globalAugmentations = [];
	var _g = 0;
	while(_g < moduleAugmentations.length) {
		var moduleAugmentation = moduleAugmentations[_g];
		++_g;
		if(ts.isIdentifier(moduleAugmentation)) {
			var ident = moduleAugmentation;
			var identSymbol = tc.getSymbolAtLocation(ident);
			if(identSymbol != null && identSymbol.escapedName == ts.InternalSymbolName.Global) {
				globalAugmentations.push(identSymbol);
			}
		}
	}
	var _g = 0;
	while(_g < globalAugmentations.length) {
		var g = globalAugmentations[_g];
		++_g;
		var _g1 = 0;
		var _g2 = tc.getExportsOfModule(g);
		while(_g1 < _g2.length) {
			var s = _g2[_g1];
			++_g1;
			globalSymbols.push(tc.getExportSymbolOfSymbol(s));
		}
	}
	return globalSymbols;
};
tool_TsProgramTools.getExposedSymbolsOfSourceFile = function(program,sourceFile) {
	var tc = program.getTypeChecker();
	var globalScopeSymbols = tool_TsProgramTools.getGlobalScopeSymbolsInSourceFile(program,sourceFile);
	var sourceFileSymbol = tc.getSymbolAtLocation(sourceFile);
	if(sourceFileSymbol != null) {
		return [sourceFileSymbol].concat(globalScopeSymbols);
	} else {
		return globalScopeSymbols;
	}
};
tool_TsProgramTools.getTopLevelDeclarationSymbols = function(program) {
	var tc = program.getTypeChecker();
	var seenSymbols_h = { };
	var result = [];
	var _g = 0;
	var _g1 = program.getSourceFiles();
	while(_g < _g1.length) {
		var sourceFile = _g1[_g];
		++_g;
		var sourceFileSymbol = tc.getSymbolAtLocation(sourceFile);
		if(sourceFileSymbol != null) {
			var symbol = sourceFileSymbol;
			symbol = tc.getExportSymbolOfSymbol(symbol);
			var key = tool_TsSymbolTools.getId(symbol);
			if(!seenSymbols_h.hasOwnProperty(key)) {
				seenSymbols_h[tool_TsSymbolTools.getId(symbol)] = symbol;
				result.push(symbol);
			}
		}
		var _g2 = 0;
		var _g3 = tc.getSymbolsInScope(sourceFile,16777215);
		while(_g2 < _g3.length) {
			var symbol1 = _g3[_g2];
			++_g2;
			var symbol2 = symbol1;
			symbol2 = tc.getExportSymbolOfSymbol(symbol2);
			var key1 = tool_TsSymbolTools.getId(symbol2);
			if(!seenSymbols_h.hasOwnProperty(key1)) {
				seenSymbols_h[tool_TsSymbolTools.getId(symbol2)] = symbol2;
				result.push(symbol2);
			}
		}
	}
	return result;
};
tool_TsProgramTools.walkReferencedSourceFiles = function(program,sourceFile,host,includeLocalModuleReferences,onSourceFile,visitedSourceFileStack) {
	if(visitedSourceFileStack == null) {
		visitedSourceFileStack = [];
	}
	if(visitedSourceFileStack.indexOf(sourceFile) == -1) {
		onSourceFile(sourceFile);
		visitedSourceFileStack.push(sourceFile);
	} else {
		return;
	}
	var referenceInfo = ts.preProcessFile(sourceFile.text);
	var localFileReferences = referenceInfo.referencedFiles;
	if(includeLocalModuleReferences) {
		var _g = [];
		var _g1 = 0;
		var _g2 = referenceInfo.typeReferenceDirectives.concat(referenceInfo.importedFiles);
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(tool_TsProgramTools.isDirectPathReferenceModule(v.fileName)) {
				_g.push(v);
			}
		}
		var relativeModuleReferences = _g;
		localFileReferences = localFileReferences.concat(relativeModuleReferences);
	}
	var _g = 0;
	while(_g < localFileReferences.length) {
		var fileRef = localFileReferences[_g];
		++_g;
		var referenceSourceFile = TsInternal.getSourceFileFromReference(program,sourceFile,fileRef);
		if(referenceSourceFile != null) {
			tool_TsProgramTools.walkReferencedSourceFiles(program,referenceSourceFile,host,includeLocalModuleReferences,onSourceFile,visitedSourceFileStack);
		}
	}
};
tool_TsProgramTools.assignModuleNames = function(program,moduleSearchPath,host) {
	var compilerOptions = program.getCompilerOptions();
	var packageNames = new ds_OnceOnlyQueue();
	var _g = 0;
	var _g1 = program.getSourceFiles();
	while(_g < _g1.length) {
		var sourceFile = _g1[_g];
		++_g;
		var lookupName = tool_FileTools.withRelativePrefix(tool_TsProgramTools.removeTsExtension(sourceFile.fileName));
		var result = ts.resolveModuleName(lookupName,moduleSearchPath + "/.",compilerOptions,host);
		if(result.resolvedModule != null) {
			if(result.resolvedModule.packageId != null) {
				var packageModuleName = tool_TsProgramTools.normalizeModuleName(result.resolvedModule.packageId.name);
				sourceFile.moduleName = packageModuleName + "/" + tool_TsProgramTools.removeTsExtension(result.resolvedModule.packageId.subModuleName);
				tool_TsProgramTools.setParentModuleName(sourceFile,packageModuleName);
			} else {
				sourceFile.moduleName = tool_TsProgramTools.normalizeModuleName(tool_FileTools.withRelativePrefix(tool_FileTools.cwdRelativeFilePath(lookupName)));
				tool_TsProgramTools.setParentModuleName(sourceFile,sourceFile.moduleName);
			}
			if(!sourceFile.hasNoDefaultLib && result.resolvedModule.packageId != null && result.resolvedModule.packageId.name != null) {
				packageNames.tryEnqueue(result.resolvedModule.packageId.name);
			}
		} else {
			Log.warn("Internal error: Failed to resolve module <b>" + lookupName + "</>");
		}
	}
	while(true) {
		var packageName = packageNames.dequeue();
		if(packageName == null) {
			break;
		}
		var result = ts.resolveModuleName(packageName,moduleSearchPath + "/.",compilerOptions,host);
		if(result.resolvedModule != null) {
			var defaultTypesSourceFile = program.getSourceFile(result.resolvedModule.resolvedFileName);
			if(defaultTypesSourceFile != null) {
				defaultTypesSourceFile.moduleName = tool_TsProgramTools.normalizeModuleName(packageName);
			}
		} else {
			throw haxe_Exception.thrown("Failed to resolve module");
		}
	}
};
tool_TsProgramTools.getParentModuleName = function(sourceFile) {
	var parentModuleName = Reflect.field(sourceFile,"_dts2hx_parentModuleName");
	if(parentModuleName == null) {
		throw haxe_Exception.thrown("Field _dts2hx_parentModuleName not set, this should have been assigned in assignModuleNames()");
	}
	return parentModuleName;
};
tool_TsProgramTools.setParentModuleName = function(sourceFile,value) {
	sourceFile["_dts2hx_parentModuleName"] = value;
};
tool_TsProgramTools.removeTsExtension = function(fileName) {
	var extPattern = new EReg("(\\.d\\.ts|\\.ts|\\.tsx|\\.js|\\.jsx|\\.json)$","i");
	if(extPattern.match(fileName)) {
		return extPattern.matchedLeft();
	} else {
		return fileName;
	}
};
tool_TsProgramTools.normalizeModuleName = function(moduleName) {
	var isRelativePath = moduleName.charAt(0) == ".";
	if(tool_TsProgramTools.isDirectPathReferenceModule(moduleName)) {
		moduleName = tool_FileTools.cwdRelativeFilePath(moduleName);
	}
	moduleName = haxe_io_Path.normalize(moduleName);
	var moduleNameParts = moduleName.split("/");
	if(moduleNameParts[0] == "@types" && moduleNameParts.length > 1) {
		moduleNameParts.shift();
	}
	var normalized = moduleNameParts.join("/");
	if(isRelativePath) {
		return "./" + normalized;
	} else {
		return normalized;
	}
};
tool_TsProgramTools.isDirectPathReferenceModule = function(moduleName) {
	var c0 = moduleName.charAt(0);
	if(c0 != ".") {
		return c0 == "/";
	} else {
		return true;
	}
};
var tool_TsSymbolTools = function() { };
tool_TsSymbolTools.__name__ = true;
tool_TsSymbolTools.getId = function(symbol) {
	return ts.getSymbolId(symbol) | 0;
};
tool_TsSymbolTools.isAccessibleField = function(symbol) {
	var isKnownSymbol = StringTools.startsWith(symbol.escapedName,"__@");
	var FieldSymbolFlags = ts.SymbolFlags.Variable | ts.SymbolFlags.Function | ts.SymbolFlags.ClassMember;
	if(symbol.name == "__promisify__") {
		return false;
	}
	if(!isKnownSymbol) {
		return (symbol.flags & FieldSymbolFlags) != 0;
	} else {
		return false;
	}
};
tool_TsSymbolTools.isExternalModuleSymbol = function(symbol) {
	if((symbol.flags & ts.SymbolFlags.Module) != 0) {
		return HxOverrides.cca(symbol.name,0) == 34;
	} else {
		return false;
	}
};
tool_TsSymbolTools.isSourceFileSymbol = function(symbol) {
	if((symbol.flags & ts.SymbolFlags.Module) != 0 && symbol.valueDeclaration != null) {
		return ts.isSourceFile(symbol.valueDeclaration);
	} else {
		return false;
	}
};
tool_TsSymbolTools.isConstructorTypeVariableSymbol = function(tc,symbol) {
	if((symbol.flags & ts.SymbolFlags.Variable) != 0 && symbol.valueDeclaration != null) {
		var varType = tc.getTypeOfSymbolAtLocation(symbol,symbol.valueDeclaration);
		return tool_TsTypeTools.isConstructorType(tc,varType);
	} else {
		return false;
	}
};
tool_TsSymbolTools.getSymbolParents = function(symbol) {
	var parentChain = [];
	var currentSymbol = symbol;
	while(currentSymbol != null) {
		currentSymbol = tool_TsSymbolTools.getSymbolParent(currentSymbol);
		if(currentSymbol != null) {
			parentChain.unshift(currentSymbol);
		}
	}
	return parentChain;
};
tool_TsSymbolTools.getSymbolParent = function(symbol) {
	return Reflect.field(symbol,"parent");
};
tool_TsSymbolTools.getFlagsInfo = function(symbol,compositeFlags) {
	if(compositeFlags == null) {
		compositeFlags = false;
	}
	var activeFlags = [];
	var symbolFlagsEnum = tool_TsSymbolTools.getSymbolFlagsMap();
	var h = symbolFlagsEnum.h;
	var _g_h = h;
	var _g_keys = Object.keys(h);
	var _g_length = _g_keys.length;
	var _g_current = 0;
	while(_g_current < _g_length) {
		var key = _g_keys[_g_current++];
		var _g1_key = key;
		var _g1_value = _g_h[key];
		var key1 = _g1_key;
		var value = _g1_value;
		if(!compositeFlags && (value & value - 1) != 0) {
			continue;
		}
		if((symbol.flags & value) != 0) {
			activeFlags.push(key1);
		}
	}
	return activeFlags;
};
tool_TsSymbolTools.getPosition = function(symbol) {
	var node = symbol.valueDeclaration != null ? symbol.valueDeclaration : tool_TsSymbolTools.getDeclarationsArray(symbol)[0];
	if(node != null) {
		return { file : node.getSourceFile().fileName, min : node.getStart() | 0, max : node.getEnd() | 0};
	} else {
		return { file : "<unknown location>", min : -1, max : -1};
	}
};
tool_TsSymbolTools.getExports = function(symbol) {
	var exports = [];
	if(symbol.exports != null) {
		symbol.exports.forEach(function(s,_) {
			exports.push(s);
		});
	}
	return exports;
};
tool_TsSymbolTools.getMembers = function(symbol) {
	var members = [];
	if(symbol.members != null) {
		symbol.members.forEach(function(s,_) {
			members.push(s);
		});
	}
	return members;
};
tool_TsSymbolTools.getClassExtendsType = function(tc,symbol) {
	var classDeclaration = symbol.valueDeclaration != null && ts.isClassDeclaration(symbol.valueDeclaration) ? symbol.valueDeclaration : null;
	if(classDeclaration != null && classDeclaration.heritageClauses != null) {
		var extendsClause = Lambda.find(classDeclaration.heritageClauses,function(h) {
			return h.token == ts.SyntaxKind.ExtendsKeyword;
		});
		if(extendsClause != null) {
			var superTypeNode = extendsClause.types[0];
			var superType = tc.getTypeFromTypeNode(superTypeNode);
			return superType;
		}
	}
	return null;
};
tool_TsSymbolTools.getDeclarationsArray = function(symbol) {
	if(symbol.declarations != null) {
		return symbol.declarations;
	} else {
		return [];
	}
};
tool_TsSymbolTools.walkDeclarationSymbols = function(tc,symbol,onSymbol,accessChain,depth) {
	if(depth == null) {
		depth = 0;
	}
	if(accessChain == null) {
		accessChain = [symbol];
	}
	var _g = 0;
	var _g1 = accessChain.length - 1;
	while(_g < _g1) {
		var i = _g++;
		if(accessChain[i] == symbol) {
			return;
		}
	}
	var ignoredSymbolFlags = ts.SymbolFlags.ExportStar;
	if((symbol.flags & ts.SymbolFlags.Module) != 0) {
		var resolvedSymbol = TsInternal.resolveExternalModuleSymbol(tc,symbol);
		if(resolvedSymbol != symbol) {
			tool_TsSymbolTools.walkDeclarationSymbols(tc,resolvedSymbol,onSymbol,accessChain,depth);
			return;
		}
	}
	var handled = (symbol.flags & ignoredSymbolFlags) != 0;
	if((symbol.flags & ts.SymbolFlags.Alias) != 0) {
		handled = true;
		onSymbol(symbol,accessChain);
		var aliasedSymbol = tc.getAliasedSymbol(symbol);
		tool_TsSymbolTools.walkDeclarationSymbols(tc,aliasedSymbol,onSymbol,accessChain.concat([aliasedSymbol]),depth + 1);
	}
	if((symbol.flags & (ts.SymbolFlags.Type | ts.SymbolFlags.Variable | ts.SymbolFlags.Function | ts.SymbolFlags.Property)) != 0) {
		handled = true;
		onSymbol(symbol,accessChain);
	}
	if((symbol.flags & ts.SymbolFlags.Module) != 0) {
		handled = true;
		onSymbol(symbol,accessChain);
		var _g = [];
		var _g1 = 0;
		var _g2 = tc.getExportsOfModule(symbol);
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if((v.flags & ts.SymbolFlags.ModuleMember) != 0) {
				_g.push(v);
			}
		}
		var moduleMembers = _g;
		var _g = 0;
		while(_g < moduleMembers.length) {
			var moduleExport = moduleMembers[_g];
			++_g;
			tool_TsSymbolTools.walkDeclarationSymbols(tc,moduleExport,onSymbol,accessChain.concat([moduleExport]),depth + 1);
		}
	}
	if(!handled) {
		Log.warn("Symbol was not handled in <b>walkDeclarationSymbols()</>",null,symbol);
	}
};
tool_TsSymbolTools.getConstructorSignatures = function(symbol,tc) {
	var _g = [];
	var _g1 = 0;
	var _g2 = tool_TsSymbolTools.getMembers(symbol);
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		if((v.flags & ts.SymbolFlags.Constructor) != 0 && v.escapedName == ts.InternalSymbolName.Constructor) {
			_g.push(v);
		}
	}
	var symbols = _g;
	var result = new Array(symbols.length);
	var _g = 0;
	var _g1 = symbols.length;
	while(_g < _g1) {
		var i = _g++;
		var _g2 = [];
		var _g3 = 0;
		var _g4 = tool_TsSymbolTools.getDeclarationsArray(symbols[i]);
		while(_g3 < _g4.length) {
			var v = _g4[_g3];
			++_g3;
			if(ts.isConstructorDeclaration(v)) {
				_g2.push(v);
			}
		}
		result[i] = _g2;
	}
	var _g = [];
	var e = $getIterator(result);
	while(e.hasNext()) {
		var e1 = e.next();
		var x = $getIterator(e1);
		while(x.hasNext()) {
			var x1 = x.next();
			_g.push(x1);
		}
	}
	var declarations = _g;
	var result = new Array(declarations.length);
	var _g = 0;
	var _g1 = declarations.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = tc.getSignatureFromDeclaration(declarations[i]);
	}
	var signatures = result;
	var _g = [];
	var _g1 = 0;
	var _g2 = signatures;
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		if(v != null) {
			_g.push(v);
		}
	}
	return _g;
};
tool_TsSymbolTools.getDeclarationTypeParameters = function(symbol) {
	var tsTypeParameterDeclarations = [];
	var _g = [];
	var _g1 = 0;
	var _g2 = tool_TsSymbolTools.getDeclarationsArray(symbol);
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		var tmp;
		switch(v.kind) {
		case ts.SyntaxKind.ClassDeclaration:case ts.SyntaxKind.InterfaceDeclaration:case ts.SyntaxKind.TypeAliasDeclaration:
			tmp = true;
			break;
		default:
			tmp = false;
		}
		if(tmp) {
			_g.push(v);
		}
	}
	var typeDeclarations = _g;
	var _g = 0;
	while(_g < typeDeclarations.length) {
		var declaration = typeDeclarations[_g];
		++_g;
		var declarationTypeParameters = ts.getEffectiveTypeParameterDeclarations(declaration);
		if(declarationTypeParameters.length > 0 && declarationTypeParameters.length > tsTypeParameterDeclarations.length) {
			tsTypeParameterDeclarations = declarationTypeParameters;
		}
	}
	return tsTypeParameterDeclarations;
};
tool_TsSymbolTools.getParentModuleNames = function(symbol) {
	var declaredInModules = [];
	var _g = 0;
	var _g1 = tool_TsSymbolTools.getDeclarationsArray(symbol);
	while(_g < _g1.length) {
		var d = _g1[_g];
		++_g;
		var declaredInParentModule = tool_TsProgramTools.getParentModuleName(d.getSourceFile());
		if(!Lambda.has(declaredInModules,declaredInParentModule)) {
			declaredInModules.push(declaredInParentModule);
		}
	}
	return declaredInModules;
};
tool_TsSymbolTools.isInternalSymbolName = function(name) {
	var internalSymbolName = require("typescript").InternalSymbolName;
	var internalSymbolNames = Object.values(internalSymbolName);
	return internalSymbolNames.indexOf(name) != -1;
};
tool_TsSymbolTools.isBuiltIn = function(symbol) {
	var isBuiltIn = false;
	var defaultLibOnlyDeclarations = true;
	var _g = 0;
	var _g1 = tool_TsSymbolTools.getDeclarationsArray(symbol);
	while(_g < _g1.length) {
		var declaration = _g1[_g];
		++_g;
		var sourceFile = declaration.getSourceFile();
		if(sourceFile.hasNoDefaultLib) {
			isBuiltIn = true;
		} else {
			defaultLibOnlyDeclarations = false;
		}
	}
	return isBuiltIn;
};
tool_TsSymbolTools.getSymbolFlagsMap = function() {
	if(tool_TsSymbolTools._symbolFlagsMap == null) {
		tool_TsSymbolTools._symbolFlagsMap = new haxe_ds_StringMap();
		var _g = [];
		var _g1 = 0;
		var _g2 = Object.keys(require("typescript").SymbolFlags);
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(new EReg("[a-z_]","i").match(v)) {
				_g.push(v);
			}
		}
		var symbolFlagsStringKeys = _g;
		var _g = 0;
		while(_g < symbolFlagsStringKeys.length) {
			var key = symbolFlagsStringKeys[_g];
			++_g;
			var value = require("typescript").SymbolFlags[key];
			tool_TsSymbolTools._symbolFlagsMap.h[key] = value;
		}
	}
	return tool_TsSymbolTools._symbolFlagsMap;
};
var tool_TsSyntaxTools = function() { };
tool_TsSyntaxTools.__name__ = true;
tool_TsSyntaxTools.getSyntaxKindName = function(kind) {
	return require("typescript").SyntaxKind[kind];
};
tool_TsSyntaxTools.typeParameterDeclarationName = function(typeParameterDeclaration) {
	var name = typeParameterDeclaration.name;
	return tool_HaxeTools.toSafeTypeName(name.escapedText);
};
tool_TsSyntaxTools.isVarConst = function(node) {
	return (ts.getCombinedNodeFlags(node) & ts.NodeFlags.Const) != 0;
};
var tool_TsTypeTools = function() { };
tool_TsTypeTools.__name__ = true;
tool_TsTypeTools.getFlagsInfo = function(type,compositeFlags) {
	if(compositeFlags == null) {
		compositeFlags = false;
	}
	var activeFlags = [];
	var h = tool_TsTypeTools.getTypeFlagsMap().h;
	var _g_h = h;
	var _g_keys = Object.keys(h);
	var _g_length = _g_keys.length;
	var _g_current = 0;
	while(_g_current < _g_length) {
		var key = _g_keys[_g_current++];
		var _g1_key = key;
		var _g1_value = _g_h[key];
		var key1 = _g1_key;
		var value = _g1_value;
		if(!compositeFlags && (value & value - 1) != 0) {
			continue;
		}
		if((type.flags & value) != 0) {
			activeFlags.push(key1);
		}
	}
	return activeFlags;
};
tool_TsTypeTools.getObjectFlagsInfo = function(type,compositeFlags) {
	if(compositeFlags == null) {
		compositeFlags = false;
	}
	var activeFlags = [];
	var h = tool_TsTypeTools.getObjectFlagsMap().h;
	var _g_h = h;
	var _g_keys = Object.keys(h);
	var _g_length = _g_keys.length;
	var _g_current = 0;
	while(_g_current < _g_length) {
		var key = _g_keys[_g_current++];
		var _g1_key = key;
		var _g1_value = _g_h[key];
		var key1 = _g1_key;
		var value = _g1_value;
		if(!compositeFlags && (value & value - 1) != 0) {
			continue;
		}
		if((type.objectFlags & value) != 0) {
			activeFlags.push(key1);
		}
	}
	return activeFlags;
};
tool_TsTypeTools.isThisType = function(type) {
	return type.isThisType;
};
tool_TsTypeTools.getThisTypeTarget = function(type) {
	return type.constraint;
};
tool_TsTypeTools.isNullishUnion = function(type) {
	if(type.isUnion()) {
		var unionType = type;
		return Lambda.exists(unionType.types,function(t) {
			return (t.flags & (ts.TypeFlags.Null | ts.TypeFlags.Undefined)) != 0;
		});
	} else {
		return false;
	}
};
tool_TsTypeTools.isConstructorType = function(tc,type) {
	return tc.getSignaturesOfType(type,ts.SignatureKind.Construct).length > 0;
};
tool_TsTypeTools.getIndexSignaturesOfType = function(tc,type) {
	var indexDeclarations = [];
	var numberInfo = tc.getIndexInfoOfType(type,ts.IndexKind.Number);
	var stringInfo = tc.getIndexInfoOfType(type,ts.IndexKind.String);
	if(numberInfo != null && numberInfo.declaration != null) {
		indexDeclarations.push(numberInfo.declaration);
	}
	if(stringInfo != null && stringInfo.declaration != null) {
		indexDeclarations.push(stringInfo.declaration);
	}
	var result = new Array(indexDeclarations.length);
	var _g = 0;
	var _g1 = indexDeclarations.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = tc.getSignatureFromDeclaration(indexDeclarations[i]);
	}
	return result;
};
tool_TsTypeTools.getTypeFlagsMap = function() {
	if(tool_TsTypeTools._typeFlagsMap == null) {
		tool_TsTypeTools._typeFlagsMap = new haxe_ds_StringMap();
		var _g = [];
		var _g1 = 0;
		var _g2 = Object.keys(require("typescript").TypeFlags);
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(new EReg("[a-z_]","i").match(v)) {
				_g.push(v);
			}
		}
		var typeFlagsStringKeys = _g;
		var _g = 0;
		while(_g < typeFlagsStringKeys.length) {
			var key = typeFlagsStringKeys[_g];
			++_g;
			var value = require("typescript").TypeFlags[key];
			tool_TsTypeTools._typeFlagsMap.h[key] = value;
		}
	}
	return tool_TsTypeTools._typeFlagsMap;
};
tool_TsTypeTools.getObjectFlagsMap = function() {
	if(tool_TsTypeTools._objectFlagsMap == null) {
		tool_TsTypeTools._objectFlagsMap = new haxe_ds_StringMap();
		var _g = [];
		var _g1 = 0;
		var _g2 = Object.keys(require("typescript").ObjectFlags);
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(new EReg("[a-z_]","i").match(v)) {
				_g.push(v);
			}
		}
		var objectFlagsStringKeys = _g;
		var _g = 0;
		while(_g < objectFlagsStringKeys.length) {
			var key = objectFlagsStringKeys[_g];
			++_g;
			var value = require("typescript").ObjectFlags[key];
			tool_TsTypeTools._objectFlagsMap.h[key] = value;
		}
	}
	return tool_TsTypeTools._objectFlagsMap;
};
var ts = require("typescript");
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.__name__ = true;
Array.__name__ = true;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
js_Boot.__toStr = ({ }).toString;
Console.formatMode = Console.determineConsoleFormatMode();
Console.logPrefix = "<b,gray>><//> ";
Console.warnPrefix = "<b,yellow>><//> ";
Console.errorPrefix = "<b,red>></b> ";
Console.successPrefix = "<b,light_green>><//> ";
Console.unicodeCompatibilityMode = Sys.systemName() == "Windows" ? 1 : 0;
Console.unicodeCompatibilityEnabled = false;
Console.formatTagPattern = new EReg("(\\\\)?<(/)?([^><{}\\s]*|{[^}<>]*})>","g");
ConverterContext.defaultNodeBuilderFlags = ts.NodeBuilderFlags.NoTruncation | ts.NodeBuilderFlags.WriteArrayAsGenericType;
ConverterContext.selfCallFunctionName = "call";
Log.logs = [];
Log.warnings = [];
Log.errors = [];
Log.printLogs = true;
Log.printWarnings = true;
Log.printErrors = true;
Main.dts2hxPackageJson = { keywords : ["haxe","typescript","externs","dts2hx","type definitions","types","cross-platform"], main : "dist/dts2hx.js", name : "dts2hx", description : "Converts TypeScript definition files (d.ts) to haxe externs", repository : { url : "https://github.com/haxiomic/dts2hx", type : "git"}, homepage : "https://github.com/haxiomic/dts2hx", dependencies : { typescript : "4.1.4"}, devDependencies : { "@types/node" : "11.11.3"}, version : "0.18.1", author : "haxiomic", scripts : { prepare : "./haxetoolkit/haxe build.hxml", test : "cd test && ./run-all.sh"}, license : "ISC", bin : "./cli.js"};
Main.defaultStdLibTypeMap = { js : { XMLHttpRequestUpload : { name : "XMLHttpRequestUpload", moduleType : 0, moduleName : "XMLHttpRequestUpload", pack : ["js","html"], typeParameters : [], isExtern : true}, FileMetadataParameters : { name : "FileMetadataParameters", moduleType : 2, moduleName : "FileMetadataParameters", pack : ["js","html","idb"], typeParameters : [], isExtern : false}, LocaleMatcher : { name : "LocaleMatcher", moduleType : 3, moduleName : "LocaleMatcher", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, WorkerGlobalScope : { name : "WorkerGlobalScope", moduleType : 0, moduleName : "WorkerGlobalScope", pack : ["js","html"], typeParameters : [], isExtern : true}, SdpType : { name : "SdpType", moduleType : 3, moduleName : "SdpType", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, GamepadButton : { name : "GamepadButton", moduleType : 0, moduleName : "GamepadButton", pack : ["js","html"], typeParameters : [], isExtern : true}, PaintRequestList : { name : "PaintRequestList", moduleType : 0, moduleName : "PaintRequestList", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaKeyMessageType : { name : "MediaKeyMessageType", moduleType : 3, moduleName : "MediaKeyMessageType", pack : ["js","html","eme"], typeParameters : [], isExtern : false}, WEBGL_compressed_texture_s3tc : { name : "WEBGLCompressedTextureS3tc", moduleType : 0, moduleName : "WEBGLCompressedTextureS3tc", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, RTCCertificate : { name : "Certificate", moduleType : 0, moduleName : "Certificate", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, SessionDescriptionInit : { name : "SessionDescriptionInit", moduleType : 2, moduleName : "SessionDescriptionInit", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, WEBGL_draw_buffers : { name : "WEBGLDrawBuffers", moduleType : 0, moduleName : "WEBGLDrawBuffers", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, HTMLScriptElement : { name : "ScriptElement", moduleType : 0, moduleName : "ScriptElement", pack : ["js","html"], typeParameters : [], isExtern : true}, OESTextureFloatLinear : { name : "OESTextureFloatLinear", moduleType : 2, moduleName : "OESTextureFloatLinear", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, EventModifierInit : { name : "EventModifierInit", moduleType : 2, moduleName : "EventModifierInit", pack : ["js","html"], typeParameters : [], isExtern : false}, TextDecoder : { name : "TextDecoder", moduleType : 0, moduleName : "TextDecoder", pack : ["js","html"], typeParameters : [], isExtern : true}, GL2 : { name : "GL2", moduleType : 2, moduleName : "GL2", pack : ["js","html","webgl"], typeParameters : [], isExtern : false}, Headers : { name : "Headers", moduleType : 0, moduleName : "Headers", pack : ["js","html"], typeParameters : [], isExtern : true}, TreeWalker : { name : "TreeWalker", moduleType : 0, moduleName : "TreeWalker", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLInputElement : { name : "InputElement", moduleType : 0, moduleName : "InputElement", pack : ["js","html"], typeParameters : [], isExtern : true}, IceGatheringState : { name : "IceGatheringState", moduleType : 3, moduleName : "IceGatheringState", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, XMLSerializer : { name : "XMLSerializer", moduleType : 0, moduleName : "XMLSerializer", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLVideoElement : { name : "VideoElement", moduleType : 0, moduleName : "VideoElement", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.PluralRulesSupportedLocalesOfOptions" : { name : "PluralRulesSupportedLocalesOfOptions", moduleType : 2, moduleName : "PluralRules", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, SVGFETileElement : { name : "FETileElement", moduleType : 0, moduleName : "FETileElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, HTMLPictureElement : { name : "PictureElement", moduleType : 0, moduleName : "PictureElement", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMException : { name : "DOMException", moduleType : 0, moduleName : "DOMException", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLImageElement : { name : "ImageElement", moduleType : 0, moduleName : "ImageElement", pack : ["js","html"], typeParameters : [], isExtern : true}, StereoPannerOptions : { name : "StereoPannerOptions", moduleType : 2, moduleName : "StereoPannerOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, MediaStreamTrackEvent : { name : "MediaStreamTrackEvent", moduleType : 0, moduleName : "MediaStreamTrackEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, RequestInit : { name : "RequestInit", moduleType : 2, moduleName : "RequestInit", pack : ["js","html"], typeParameters : [], isExtern : false}, Path2D : { name : "Path2D", moduleType : 0, moduleName : "Path2D", pack : ["js","html"], typeParameters : [], isExtern : true}, Event : { name : "Event", moduleType : 0, moduleName : "Event", pack : ["js","html"], typeParameters : [], isExtern : true}, PathSegLinetoHorizontalRel : { name : "PathSegLinetoHorizontalRel", moduleType : 2, moduleName : "PathSegLinetoHorizontalRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, AnswerOptions : { name : "AnswerOptions", moduleType : 2, moduleName : "AnswerOptions", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, PaintRequest : { name : "PaintRequest", moduleType : 0, moduleName : "PaintRequest", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaRecorderErrorEventInit : { name : "MediaRecorderErrorEventInit", moduleType : 2, moduleName : "MediaRecorderErrorEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, WeakMap : { name : "WeakMap", moduleType : 0, moduleName : "WeakMap", pack : ["js","lib"], typeParameters : ["T"], isExtern : true}, Uint16Array : { name : "Uint16Array", moduleType : 0, moduleName : "Uint16Array", pack : ["js","lib"], typeParameters : [], isExtern : true}, PathSegCurvetoCubicSmoothAbs : { name : "PathSegCurvetoCubicSmoothAbs", moduleType : 2, moduleName : "PathSegCurvetoCubicSmoothAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, DeviceOrientationEvent : { name : "DeviceOrientationEvent", moduleType : 0, moduleName : "DeviceOrientationEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, WebAssembly : { name : "WebAssembly", moduleType : 0, moduleName : "WebAssembly", pack : ["js","lib"], typeParameters : [], isExtern : true}, DelayNode : { name : "DelayNode", moduleType : 0, moduleName : "DelayNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, NodeFilter : { name : "NodeFilter", moduleType : 0, moduleName : "NodeFilter", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMRectList : { name : "DOMRectList", moduleType : 0, moduleName : "DOMRectList", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLTableSectionElement : { name : "TableSectionElement", moduleType : 0, moduleName : "TableSectionElement", pack : ["js","html"], typeParameters : [], isExtern : true}, PathSegLinetoVerticalRel : { name : "PathSegLinetoVerticalRel", moduleType : 2, moduleName : "PathSegLinetoVerticalRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, DOMRequestReadyState : { name : "DOMRequestReadyState", moduleType : 3, moduleName : "DOMRequestReadyState", pack : ["js","html"], typeParameters : [], isExtern : false}, PermissionState : { name : "PermissionState", moduleType : 3, moduleName : "PermissionState", pack : ["js","html"], typeParameters : [], isExtern : false}, URLSearchParams : { name : "URLSearchParams", moduleType : 0, moduleName : "URLSearchParams", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaSource : { name : "MediaSource", moduleType : 0, moduleName : "MediaSource", pack : ["js","html"], typeParameters : [], isExtern : true}, KeyframeAnimationOptions : { name : "KeyframeAnimationOptions", moduleType : 2, moduleName : "KeyframeAnimationOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, MessageChannel : { name : "MessageChannel", moduleType : 0, moduleName : "MessageChannel", pack : ["js","html"], typeParameters : [], isExtern : true}, ProcessingInstruction : { name : "ProcessingInstruction", moduleType : 0, moduleName : "ProcessingInstruction", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaStreamAudioSourceNode : { name : "MediaStreamAudioSourceNode", moduleType : 0, moduleName : "MediaStreamAudioSourceNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, VideoTrack : { name : "VideoTrack", moduleType : 0, moduleName : "VideoTrack", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLFormControlsCollection : { name : "HTMLFormControlsCollection", moduleType : 0, moduleName : "HTMLFormControlsCollection", pack : ["js","html"], typeParameters : [], isExtern : true}, EXTColorBufferFloat : { name : "EXTColorBufferFloat", moduleType : 2, moduleName : "EXTColorBufferFloat", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, ImageCapture : { name : "ImageCapture", moduleType : 0, moduleName : "ImageCapture", pack : ["js","html"], typeParameters : [], isExtern : true}, TransactionMode : { name : "TransactionMode", moduleType : 3, moduleName : "TransactionMode", pack : ["js","html","idb"], typeParameters : [], isExtern : false}, MediaRecorder : { name : "MediaRecorder", moduleType : 0, moduleName : "MediaRecorder", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLAllCollection : { name : "HTMLAllCollection", moduleType : 0, moduleName : "HTMLAllCollection", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.MonthRepresentation" : { name : "MonthRepresentation", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, NotificationEvent : { name : "NotificationEvent", moduleType : 0, moduleName : "NotificationEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, Window : { name : "Window", moduleType : 0, moduleName : "Window", pack : ["js","html"], typeParameters : [], isExtern : true}, PathSegCurvetoCubicRel : { name : "PathSegCurvetoCubicRel", moduleType : 2, moduleName : "PathSegCurvetoCubicRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, MouseScrollEvent : { name : "MouseScrollEvent", moduleType : 0, moduleName : "MouseScrollEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, IceConnectionState : { name : "IceConnectionState", moduleType : 3, moduleName : "IceConnectionState", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, ContextAttributes : { name : "ContextAttributes", moduleType : 2, moduleName : "ContextAttributes", pack : ["js","html","webgl"], typeParameters : [], isExtern : false}, AbortSignal : { name : "AbortSignal", moduleType : 0, moduleName : "AbortSignal", pack : ["js","html"], typeParameters : [], isExtern : true}, TextTrackCueList : { name : "TextTrackCueList", moduleType : 0, moduleName : "TextTrackCueList", pack : ["js","html"], typeParameters : [], isExtern : true}, MessageEventInit : { name : "MessageEventInit", moduleType : 2, moduleName : "MessageEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLSourceElement : { name : "SourceElement", moduleType : 0, moduleName : "SourceElement", pack : ["js","html"], typeParameters : [], isExtern : true}, "WebAssembly.Module" : { name : "Module", moduleType : 0, moduleName : "Module", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : true}, BaseAudioContext : { name : "BaseAudioContext", moduleType : 0, moduleName : "BaseAudioContext", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, OES_standard_derivatives : { name : "OESStandardDerivatives", moduleType : 0, moduleName : "OESStandardDerivatives", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, "Intl.Collation" : { name : "Collation", moduleType : 3, moduleName : "Collator", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, FileReaderSync : { name : "FileReaderSync", moduleType : 0, moduleName : "FileReaderSync", pack : ["js","html"], typeParameters : [], isExtern : true}, BoundingBoxOptions : { name : "BoundingBoxOptions", moduleType : 2, moduleName : "BoundingBoxOptions", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, CloseEvent : { name : "CloseEvent", moduleType : 0, moduleName : "CloseEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, TrackEvent : { name : "TrackEvent", moduleType : 0, moduleName : "TrackEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, BeforeUnloadEvent : { name : "BeforeUnloadEvent", moduleType : 0, moduleName : "BeforeUnloadEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, PushPermissionState : { name : "PushPermissionState", moduleType : 3, moduleName : "PushPermissionState", pack : ["js","html","push"], typeParameters : [], isExtern : false}, Clipboard : { name : "Clipboard", moduleType : 0, moduleName : "Clipboard", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaKeyMessageEvent : { name : "MediaKeyMessageEvent", moduleType : 0, moduleName : "MediaKeyMessageEvent", pack : ["js","html","eme"], typeParameters : [], isExtern : true}, SVGTransformList : { name : "TransformList", moduleType : 0, moduleName : "TransformList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, HTMLParagraphElement : { name : "ParagraphElement", moduleType : 0, moduleName : "ParagraphElement", pack : ["js","html"], typeParameters : [], isExtern : true}, OrientationType : { name : "OrientationType", moduleType : 3, moduleName : "OrientationType", pack : ["js","html"], typeParameters : [], isExtern : false}, PushSubscriptionJSON : { name : "PushSubscriptionJSON", moduleType : 2, moduleName : "PushSubscriptionJSON", pack : ["js","html","push"], typeParameters : [], isExtern : false}, "Intl.RelativeTimeNumeric" : { name : "RelativeTimeNumeric", moduleType : 3, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, WebGLTransformFeedback : { name : "TransformFeedback", moduleType : 0, moduleName : "TransformFeedback", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, HTMLDListElement : { name : "DListElement", moduleType : 0, moduleName : "DListElement", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.NumberFormatPart" : { name : "NumberFormatPart", moduleType : 2, moduleName : "NumberFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, CSSCounterStyleRule : { name : "CSSCounterStyleRule", moduleType : 0, moduleName : "CSSCounterStyleRule", pack : ["js","html"], typeParameters : [], isExtern : true}, IdentityProviderRegistrar : { name : "IdentityProviderRegistrar", moduleType : 2, moduleName : "IdentityProviderRegistrar", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, Worker : { name : "Worker", moduleType : 0, moduleName : "Worker", pack : ["js","html"], typeParameters : [], isExtern : true}, MIDIPortConnectionState : { name : "MIDIPortConnectionState", moduleType : 3, moduleName : "MIDIPortConnectionState", pack : ["js","html","midi"], typeParameters : [], isExtern : false}, MediaStreamTrack : { name : "MediaStreamTrack", moduleType : 0, moduleName : "MediaStreamTrack", pack : ["js","html"], typeParameters : [], isExtern : true}, SignalingState : { name : "SignalingState", moduleType : 3, moduleName : "SignalingState", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, "Intl.CollatorResolvedOptions" : { name : "CollatorResolvedOptions", moduleType : 2, moduleName : "Collator", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, RtpEncodingParameters : { name : "RtpEncodingParameters", moduleType : 2, moduleName : "RtpEncodingParameters", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, Range : { name : "Range", moduleType : 0, moduleName : "Range", pack : ["js","html"], typeParameters : [], isExtern : true}, Uint8ClampedArray : { name : "Uint8ClampedArray", moduleType : 0, moduleName : "Uint8ClampedArray", pack : ["js","lib"], typeParameters : [], isExtern : true}, HTMLDataListElement : { name : "DataListElement", moduleType : 0, moduleName : "DataListElement", pack : ["js","html"], typeParameters : [], isExtern : true}, MIDIMessageEventInit : { name : "MIDIMessageEventInit", moduleType : 2, moduleName : "MIDIMessageEventInit", pack : ["js","html","midi"], typeParameters : [], isExtern : false}, AutoKeyword : { name : "AutoKeyword", moduleType : 3, moduleName : "AutoKeyword", pack : ["js","html"], typeParameters : [], isExtern : false}, NavigationType : { name : "NavigationType", moduleType : 3, moduleName : "NavigationType", pack : ["js","html"], typeParameters : [], isExtern : false}, ChannelCountMode : { name : "ChannelCountMode", moduleType : 3, moduleName : "ChannelCountMode", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, Extension : { name : "Extension", moduleType : 3, moduleName : "Extension", pack : ["js","html","webgl"], typeParameters : ["T"], isExtern : false}, TextTrackCue : { name : "TextTrackCue", moduleType : 0, moduleName : "TextTrackCue", pack : ["js","html"], typeParameters : [], isExtern : true}, AddEventListenerOptions : { name : "AddEventListenerOptions", moduleType : 2, moduleName : "AddEventListenerOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGFEFloodElement : { name : "FEFloodElement", moduleType : 0, moduleName : "FEFloodElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, Selection : { name : "Selection", moduleType : 0, moduleName : "Selection", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGTextPathElement : { name : "TextPathElement", moduleType : 0, moduleName : "TextPathElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, MediaStreamTrackEventInit : { name : "MediaStreamTrackEventInit", moduleType : 2, moduleName : "MediaStreamTrackEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, MediaEncryptedEvent : { name : "MediaEncryptedEvent", moduleType : 0, moduleName : "MediaEncryptedEvent", pack : ["js","html","eme"], typeParameters : [], isExtern : true}, SVGAnimatedNumberList : { name : "AnimatedNumberList", moduleType : 0, moduleName : "AnimatedNumberList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, RtpSynchronizationSource : { name : "RtpSynchronizationSource", moduleType : 2, moduleName : "RtpSynchronizationSource", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, ImageBitmapFormat : { name : "ImageBitmapFormat", moduleType : 3, moduleName : "ImageBitmapFormat", pack : ["js","html"], typeParameters : [], isExtern : false}, Crypto : { name : "Crypto", moduleType : 0, moduleName : "Crypto", pack : ["js","html"], typeParameters : [], isExtern : true}, PeriodicWaveConstraints : { name : "PeriodicWaveConstraints", moduleType : 2, moduleName : "PeriodicWaveConstraints", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, FileSystem : { name : "FileSystem", moduleType : 0, moduleName : "FileSystem", pack : ["js","html"], typeParameters : [], isExtern : true}, PerformanceNavigationTiming : { name : "PerformanceNavigationTiming", moduleType : 0, moduleName : "PerformanceNavigationTiming", pack : ["js","html"], typeParameters : [], isExtern : true}, CSSKeyframeRule : { name : "CSSKeyframeRule", moduleType : 0, moduleName : "CSSKeyframeRule", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGCircleElement : { name : "CircleElement", moduleType : 0, moduleName : "CircleElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, Option : { name : "Option", moduleType : 0, moduleName : "Option", pack : ["js","html"], typeParameters : [], isExtern : true}, OverSampleType : { name : "OverSampleType", moduleType : 3, moduleName : "OverSampleType", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, "Intl.CollatorSupportedLocalesOfOptions" : { name : "CollatorSupportedLocalesOfOptions", moduleType : 2, moduleName : "Collator", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, HTMLPropertiesCollection : { name : "HTMLPropertiesCollection", moduleType : 0, moduleName : "HTMLPropertiesCollection", pack : ["js","html"], typeParameters : [], isExtern : true}, VTTCue : { name : "VTTCue", moduleType : 0, moduleName : "VTTCue", pack : ["js","html"], typeParameters : [], isExtern : true}, RTCTrackEvent : { name : "TrackEvent", moduleType : 0, moduleName : "TrackEvent", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, IndexParameters : { name : "IndexParameters", moduleType : 2, moduleName : "IndexParameters", pack : ["js","html","idb"], typeParameters : [], isExtern : false}, PushEncryptionKeyName : { name : "PushEncryptionKeyName", moduleType : 3, moduleName : "PushEncryptionKeyName", pack : ["js","html","push"], typeParameters : [], isExtern : false}, ScrollIntoViewOptions : { name : "ScrollIntoViewOptions", moduleType : 2, moduleName : "ScrollIntoViewOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, PushSubscriptionInit : { name : "PushSubscriptionInit", moduleType : 2, moduleName : "PushSubscriptionInit", pack : ["js","html","push"], typeParameters : [], isExtern : false}, Permissions : { name : "Permissions", moduleType : 0, moduleName : "Permissions", pack : ["js","html"], typeParameters : [], isExtern : true}, OES_vertex_array_object : { name : "OESVertexArrayObject", moduleType : 0, moduleName : "OESVertexArrayObject", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, CanvasCaptureMediaStream : { name : "CanvasCaptureMediaStream", moduleType : 0, moduleName : "CanvasCaptureMediaStream", pack : ["js","html"], typeParameters : [], isExtern : true}, DTMFToneChangeEventInit : { name : "DTMFToneChangeEventInit", moduleType : 2, moduleName : "DTMFToneChangeEventInit", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, HTMLTableCaptionElement : { name : "TableCaptionElement", moduleType : 0, moduleName : "TableCaptionElement", pack : ["js","html"], typeParameters : [], isExtern : true}, RTCDTMFSender : { name : "DTMFSender", moduleType : 0, moduleName : "DTMFSender", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, SVGForeignObjectElement : { name : "ForeignObjectElement", moduleType : 0, moduleName : "ForeignObjectElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, WaveShaperOptions : { name : "WaveShaperOptions", moduleType : 2, moduleName : "WaveShaperOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, Float64Array : { name : "Float64Array", moduleType : 0, moduleName : "Float64Array", pack : ["js","lib"], typeParameters : [], isExtern : true}, "Intl.RelativeTimeUnit" : { name : "RelativeTimeUnit", moduleType : 3, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, IDBFileHandle : { name : "FileHandle", moduleType : 0, moduleName : "FileHandle", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, EXT_disjoint_timer_query : { name : "EXTDisjointTimerQuery", moduleType : 0, moduleName : "EXTDisjointTimerQuery", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, DataChannelType : { name : "DataChannelType", moduleType : 3, moduleName : "DataChannelType", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, Element : { name : "DOMElement", moduleType : 0, moduleName : "DOMElement", pack : ["js","html"], typeParameters : [], isExtern : true}, Cache : { name : "Cache", moduleType : 0, moduleName : "Cache", pack : ["js","html"], typeParameters : [], isExtern : true}, SourceBufferAppendMode : { name : "SourceBufferAppendMode", moduleType : 3, moduleName : "SourceBufferAppendMode", pack : ["js","html"], typeParameters : [], isExtern : false}, PerformanceServerTiming : { name : "PerformanceServerTiming", moduleType : 0, moduleName : "PerformanceServerTiming", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGSwitchElement : { name : "SwitchElement", moduleType : 0, moduleName : "SwitchElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, MIDIPort : { name : "MIDIPort", moduleType : 0, moduleName : "MIDIPort", pack : ["js","html","midi"], typeParameters : [], isExtern : true}, SVGZoomAndPan : { name : "ZoomAndPan", moduleType : 0, moduleName : "ZoomAndPan", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, XMLHttpRequestEventTarget : { name : "XMLHttpRequestEventTarget", moduleType : 0, moduleName : "XMLHttpRequestEventTarget", pack : ["js","html"], typeParameters : [], isExtern : true}, Function : { name : "Function", moduleType : 0, moduleName : "Function", pack : ["js","lib"], typeParameters : [], isExtern : true}, SpeechRecognitionErrorCode : { name : "SpeechRecognitionErrorCode", moduleType : 3, moduleName : "SpeechRecognitionErrorCode", pack : ["js","html"], typeParameters : [], isExtern : false}, RTCDataChannel : { name : "DataChannel", moduleType : 0, moduleName : "DataChannel", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, IdentityAssertionResult : { name : "IdentityAssertionResult", moduleType : 2, moduleName : "IdentityAssertionResult", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, DeviceOrientationEventInit : { name : "DeviceOrientationEventInit", moduleType : 2, moduleName : "DeviceOrientationEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, TimeRanges : { name : "TimeRanges", moduleType : 0, moduleName : "TimeRanges", pack : ["js","html"], typeParameters : [], isExtern : true}, ScrollToOptions : { name : "ScrollToOptions", moduleType : 2, moduleName : "ScrollToOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, OfflineAudioContextOptions : { name : "OfflineAudioContextOptions", moduleType : 2, moduleName : "OfflineAudioContextOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, XMLHttpRequestResponseType : { name : "XMLHttpRequestResponseType", moduleType : 3, moduleName : "XMLHttpRequestResponseType", pack : ["js","html"], typeParameters : [], isExtern : false}, SubtleCrypto : { name : "SubtleCrypto", moduleType : 0, moduleName : "SubtleCrypto", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLSpanElement : { name : "SpanElement", moduleType : 0, moduleName : "SpanElement", pack : ["js","html"], typeParameters : [], isExtern : true}, RtpTransceiverInit : { name : "RtpTransceiverInit", moduleType : 2, moduleName : "RtpTransceiverInit", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, PathSegCurvetoQuadraticRel : { name : "PathSegCurvetoQuadraticRel", moduleType : 2, moduleName : "PathSegCurvetoQuadraticRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, DeviceAccelerationInit : { name : "DeviceAccelerationInit", moduleType : 2, moduleName : "DeviceAccelerationInit", pack : ["js","html"], typeParameters : [], isExtern : false}, ExtendableMessageEvent : { name : "ExtendableMessageEvent", moduleType : 0, moduleName : "ExtendableMessageEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLFrameSetElement : { name : "FrameSetElement", moduleType : 0, moduleName : "FrameSetElement", pack : ["js","html"], typeParameters : [], isExtern : true}, BiquadFilterOptions : { name : "BiquadFilterOptions", moduleType : 2, moduleName : "BiquadFilterOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, SVGImageElement : { name : "ImageElement", moduleType : 0, moduleName : "ImageElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, MediaStreamEventInit : { name : "MediaStreamEventInit", moduleType : 2, moduleName : "MediaStreamEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, GainNode : { name : "GainNode", moduleType : 0, moduleName : "GainNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, ConvolverOptions : { name : "ConvolverOptions", moduleType : 2, moduleName : "ConvolverOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, SVGPolygonElement : { name : "PolygonElement", moduleType : 0, moduleName : "PolygonElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SpeechRecognitionAlternative : { name : "SpeechRecognitionAlternative", moduleType : 0, moduleName : "SpeechRecognitionAlternative", pack : ["js","html"], typeParameters : [], isExtern : true}, UIEventInit : { name : "UIEventInit", moduleType : 2, moduleName : "UIEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, PathSegArcRel : { name : "PathSegArcRel", moduleType : 2, moduleName : "PathSegArcRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, WebSocket : { name : "WebSocket", moduleType : 0, moduleName : "WebSocket", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLLegendElement : { name : "LegendElement", moduleType : 0, moduleName : "LegendElement", pack : ["js","html"], typeParameters : [], isExtern : true}, ErrorEvent : { name : "ErrorEvent", moduleType : 0, moduleName : "ErrorEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechRecognitionEvent : { name : "SpeechRecognitionEvent", moduleType : 0, moduleName : "SpeechRecognitionEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, TouchEventInit : { name : "TouchEventInit", moduleType : 2, moduleName : "TouchEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, IceCredentialType : { name : "IceCredentialType", moduleType : 3, moduleName : "IceCredentialType", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, SVGRadialGradientElement : { name : "RadialGradientElement", moduleType : 0, moduleName : "RadialGradientElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, Thenable : { name : "Thenable", moduleType : 3, moduleName : "Promise", pack : ["js","lib"], typeParameters : ["T"], isExtern : false}, ShadowRootMode : { name : "ShadowRootMode", moduleType : 3, moduleName : "ShadowRootMode", pack : ["js","html"], typeParameters : [], isExtern : false}, CanvasWindingRule : { name : "CanvasWindingRule", moduleType : 3, moduleName : "CanvasWindingRule", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGFEFuncRElement : { name : "FEFuncRElement", moduleType : 0, moduleName : "FEFuncRElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, RequestCredentials : { name : "RequestCredentials", moduleType : 3, moduleName : "RequestCredentials", pack : ["js","html"], typeParameters : [], isExtern : false}, CryptoKey : { name : "CryptoKey", moduleType : 0, moduleName : "CryptoKey", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGFEFuncAElement : { name : "FEFuncAElement", moduleType : 0, moduleName : "FEFuncAElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SourceBuffer : { name : "SourceBuffer", moduleType : 0, moduleName : "SourceBuffer", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechRecognitionEventInit : { name : "SpeechRecognitionEventInit", moduleType : 2, moduleName : "SpeechRecognitionEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, Int32Array : { name : "Int32Array", moduleType : 0, moduleName : "Int32Array", pack : ["js","lib"], typeParameters : [], isExtern : true}, Uint32Array : { name : "Uint32Array", moduleType : 0, moduleName : "Uint32Array", pack : ["js","lib"], typeParameters : [], isExtern : true}, WebGLSync : { name : "Sync", moduleType : 0, moduleName : "Sync", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, ResponseType : { name : "ResponseType", moduleType : 3, moduleName : "ResponseType", pack : ["js","html"], typeParameters : [], isExtern : false}, AlignSetting : { name : "AlignSetting", moduleType : 3, moduleName : "AlignSetting", pack : ["js","html"], typeParameters : [], isExtern : false}, DirectionSetting : { name : "DirectionSetting", moduleType : 3, moduleName : "DirectionSetting", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLOListElement : { name : "OListElement", moduleType : 0, moduleName : "OListElement", pack : ["js","html"], typeParameters : [], isExtern : true}, PaintWorkletGlobalScope : { name : "PaintWorkletGlobalScope", moduleType : 0, moduleName : "PaintWorkletGlobalScope", pack : ["js","html"], typeParameters : [], isExtern : true}, PushEvent : { name : "PushEvent", moduleType : 0, moduleName : "PushEvent", pack : ["js","html","push"], typeParameters : [], isExtern : true}, PerformanceResourceTiming : { name : "PerformanceResourceTiming", moduleType : 0, moduleName : "PerformanceResourceTiming", pack : ["js","html"], typeParameters : [], isExtern : true}, CustomEvent : { name : "CustomEvent", moduleType : 0, moduleName : "CustomEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, PannerOptions : { name : "PannerOptions", moduleType : 2, moduleName : "PannerOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, MediaTrackConstraints : { name : "MediaTrackConstraints", moduleType : 2, moduleName : "MediaTrackConstraints", pack : ["js","html"], typeParameters : [], isExtern : false}, IntlUtils : { name : "IntlUtils", moduleType : 2, moduleName : "IntlUtils", pack : ["js","html"], typeParameters : [], isExtern : false}, LocalMediaStream : { name : "LocalMediaStream", moduleType : 0, moduleName : "LocalMediaStream", pack : ["js","html"], typeParameters : [], isExtern : true}, ScrollSetting : { name : "ScrollSetting", moduleType : 3, moduleName : "ScrollSetting", pack : ["js","html"], typeParameters : [], isExtern : false}, IdentityProviderOptions : { name : "IdentityProviderOptions", moduleType : 2, moduleName : "IdentityProviderOptions", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, ExtendableMessageEventInit : { name : "ExtendableMessageEventInit", moduleType : 2, moduleName : "ExtendableMessageEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLBodyElement : { name : "BodyElement", moduleType : 0, moduleName : "BodyElement", pack : ["js","html"], typeParameters : [], isExtern : true}, "WebAssembly.TableKind" : { name : "TableKind", moduleType : 3, moduleName : "Table", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : false}, HashChangeEventInit : { name : "HashChangeEventInit", moduleType : 2, moduleName : "HashChangeEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, ServiceWorkerContainer : { name : "ServiceWorkerContainer", moduleType : 0, moduleName : "ServiceWorkerContainer", pack : ["js","html"], typeParameters : [], isExtern : true}, EXT_color_buffer_half_float : { name : "EXTColorBufferHalfFloat", moduleType : 0, moduleName : "EXTColorBufferHalfFloat", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, TextTrackMode : { name : "TextTrackMode", moduleType : 3, moduleName : "TextTrackMode", pack : ["js","html"], typeParameters : [], isExtern : false}, ErrorEventInit : { name : "ErrorEventInit", moduleType : 2, moduleName : "ErrorEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, ClientType : { name : "ClientType", moduleType : 3, moduleName : "ClientType", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.RelativeTimeFormatPart" : { name : "RelativeTimeFormatPart", moduleType : 2, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, MediaSourceReadyState : { name : "MediaSourceReadyState", moduleType : 3, moduleName : "MediaSourceReadyState", pack : ["js","html"], typeParameters : [], isExtern : false}, DynamicsCompressorOptions : { name : "DynamicsCompressorOptions", moduleType : 2, moduleName : "DynamicsCompressorOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, HTMLDetailsElement : { name : "DetailsElement", moduleType : 0, moduleName : "DetailsElement", pack : ["js","html"], typeParameters : [], isExtern : true}, PathSegArcAbs : { name : "PathSegArcAbs", moduleType : 2, moduleName : "PathSegArcAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, MIDIPortType : { name : "MIDIPortType", moduleType : 3, moduleName : "MIDIPortType", pack : ["js","html","midi"], typeParameters : [], isExtern : false}, MediaKeyStatusMapIterator : { name : "MediaKeyStatusMapIterator", moduleType : 2, moduleName : "MediaKeyStatusMapIterator", pack : ["js","html"], typeParameters : [], isExtern : false}, AnimationPlaybackEvent : { name : "AnimationPlaybackEvent", moduleType : 0, moduleName : "AnimationPlaybackEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, NamedNodeMap : { name : "NamedNodeMap", moduleType : 0, moduleName : "NamedNodeMap", pack : ["js","html"], typeParameters : [], isExtern : true}, PathSegClosePath : { name : "PathSegClosePath", moduleType : 2, moduleName : "PathSegClosePath", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, TransitionEventInit : { name : "TransitionEventInit", moduleType : 2, moduleName : "TransitionEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, XMLDocument : { name : "XMLDocument", moduleType : 0, moduleName : "XMLDocument", pack : ["js","html"], typeParameters : [], isExtern : true}, SyntaxError : { name : "SyntaxError", moduleType : 0, moduleName : "Error", pack : ["js","lib"], typeParameters : [], isExtern : true}, HTMLLIElement : { name : "LIElement", moduleType : 0, moduleName : "LIElement", pack : ["js","html"], typeParameters : [], isExtern : true}, PerformanceNavigation : { name : "PerformanceNavigation", moduleType : 0, moduleName : "PerformanceNavigation", pack : ["js","html"], typeParameters : [], isExtern : true}, BarProp : { name : "BarProp", moduleType : 0, moduleName : "BarProp", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGFESpotLightElement : { name : "FESpotLightElement", moduleType : 0, moduleName : "FESpotLightElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, AnimationPlaybackEventInit : { name : "AnimationPlaybackEventInit", moduleType : 2, moduleName : "AnimationPlaybackEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, ChannelMergerOptions : { name : "ChannelMergerOptions", moduleType : 2, moduleName : "ChannelMergerOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, EventListenerOptions : { name : "EventListenerOptions", moduleType : 2, moduleName : "EventListenerOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, ClientQueryOptions : { name : "ClientQueryOptions", moduleType : 2, moduleName : "ClientQueryOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, GamepadEvent : { name : "GamepadEvent", moduleType : 0, moduleName : "GamepadEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, TextTrackKind : { name : "TextTrackKind", moduleType : 3, moduleName : "TextTrackKind", pack : ["js","html"], typeParameters : [], isExtern : false}, MediaKeySystemMediaCapability : { name : "MediaKeySystemMediaCapability", moduleType : 2, moduleName : "MediaKeySystemMediaCapability", pack : ["js","html","eme"], typeParameters : [], isExtern : false}, RtpHeaderExtensionParameters : { name : "RtpHeaderExtensionParameters", moduleType : 2, moduleName : "RtpHeaderExtensionParameters", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, MediaStream : { name : "MediaStream", moduleType : 0, moduleName : "MediaStream", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.HourCycle" : { name : "HourCycle", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, TextDecodeOptions : { name : "TextDecodeOptions", moduleType : 2, moduleName : "TextDecodeOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, IceServer : { name : "IceServer", moduleType : 2, moduleName : "IceServer", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, CSSFontFeatureValuesRule : { name : "CSSFontFeatureValuesRule", moduleType : 0, moduleName : "CSSFontFeatureValuesRule", pack : ["js","html"], typeParameters : [], isExtern : true}, FileSystemDirectoryReader : { name : "FileSystemDirectoryReader", moduleType : 0, moduleName : "FileSystemDirectoryReader", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLAreaElement : { name : "AreaElement", moduleType : 0, moduleName : "AreaElement", pack : ["js","html"], typeParameters : [], isExtern : true}, VersionChangeEventInit : { name : "VersionChangeEventInit", moduleType : 2, moduleName : "VersionChangeEventInit", pack : ["js","html","idb"], typeParameters : [], isExtern : false}, HTMLPreElement : { name : "PreElement", moduleType : 0, moduleName : "PreElement", pack : ["js","html"], typeParameters : [], isExtern : true}, NotificationEventInit : { name : "NotificationEventInit", moduleType : 2, moduleName : "NotificationEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, SpeechSynthesisUtterance : { name : "SpeechSynthesisUtterance", moduleType : 0, moduleName : "SpeechSynthesisUtterance", pack : ["js","html"], typeParameters : [], isExtern : true}, CSSStyleSheet : { name : "CSSStyleSheet", moduleType : 0, moduleName : "CSSStyleSheet", pack : ["js","html"], typeParameters : [], isExtern : true}, RequestCache : { name : "RequestCache", moduleType : 3, moduleName : "RequestCache", pack : ["js","html"], typeParameters : [], isExtern : false}, DOMQuadJSON : { name : "DOMQuadJSON", moduleType : 2, moduleName : "DOMQuadJSON", pack : ["js","html"], typeParameters : [], isExtern : false}, SecurityPolicyViolationEventInit : { name : "SecurityPolicyViolationEventInit", moduleType : 2, moduleName : "SecurityPolicyViolationEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, OfflineAudioCompletionEvent : { name : "OfflineAudioCompletionEvent", moduleType : 0, moduleName : "OfflineAudioCompletionEvent", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, HTMLTableColElement : { name : "TableColElement", moduleType : 0, moduleName : "TableColElement", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaKeyError : { name : "MediaKeyError", moduleType : 0, moduleName : "MediaKeyError", pack : ["js","html","eme"], typeParameters : [], isExtern : true}, MediaElementAudioSourceOptions : { name : "MediaElementAudioSourceOptions", moduleType : 2, moduleName : "MediaElementAudioSourceOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, SVGPreserveAspectRatio : { name : "PreserveAspectRatio", moduleType : 0, moduleName : "PreserveAspectRatio", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, DOMRequest : { name : "DOMRequest", moduleType : 0, moduleName : "DOMRequest", pack : ["js","html"], typeParameters : [], isExtern : true}, VideoPlaybackQuality : { name : "VideoPlaybackQuality", moduleType : 0, moduleName : "VideoPlaybackQuality", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGUnitTypes : { name : "UnitTypes", moduleType : 0, moduleName : "UnitTypes", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, RtpParameters : { name : "RtpParameters", moduleType : 2, moduleName : "RtpParameters", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, EXT_blend_minmax : { name : "EXTBlendMinmax", moduleType : 0, moduleName : "EXTBlendMinmax", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, ReferrerPolicy : { name : "ReferrerPolicy", moduleType : 3, moduleName : "ReferrerPolicy", pack : ["js","html"], typeParameters : [], isExtern : false}, MediaKeySessionType : { name : "MediaKeySessionType", moduleType : 3, moduleName : "MediaKeySessionType", pack : ["js","html","eme"], typeParameters : [], isExtern : false}, MediaTrackSettings : { name : "MediaTrackSettings", moduleType : 2, moduleName : "MediaTrackSettings", pack : ["js","html"], typeParameters : [], isExtern : false}, ReferenceError : { name : "ReferenceError", moduleType : 0, moduleName : "Error", pack : ["js","lib"], typeParameters : [], isExtern : true}, "WebAssembly.LinkError" : { name : "LinkError", moduleType : 0, moduleName : "LinkError", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : true}, PopStateEventInit : { name : "PopStateEventInit", moduleType : 2, moduleName : "PopStateEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, DataChannelState : { name : "DataChannelState", moduleType : 3, moduleName : "DataChannelState", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, DataChannelEventInit : { name : "DataChannelEventInit", moduleType : 2, moduleName : "DataChannelEventInit", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, SVGFEMorphologyElement : { name : "FEMorphologyElement", moduleType : 0, moduleName : "FEMorphologyElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, RTCDataChannelEvent : { name : "DataChannelEvent", moduleType : 0, moduleName : "DataChannelEvent", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, RecordingState : { name : "RecordingState", moduleType : 3, moduleName : "RecordingState", pack : ["js","html"], typeParameters : [], isExtern : false}, Map : { name : "Map", moduleType : 0, moduleName : "Map", pack : ["js","lib"], typeParameters : ["K","V"], isExtern : true}, DataView : { name : "DataView", moduleType : 0, moduleName : "DataView", pack : ["js","lib"], typeParameters : [], isExtern : true}, EndingTypes : { name : "EndingTypes", moduleType : 3, moduleName : "EndingTypes", pack : ["js","html"], typeParameters : [], isExtern : false}, MIDIOutput : { name : "MIDIOutput", moduleType : 0, moduleName : "MIDIOutput", pack : ["js","html","midi"], typeParameters : [], isExtern : true}, HTMLTableCellElement : { name : "TableCellElement", moduleType : 0, moduleName : "TableCellElement", pack : ["js","html"], typeParameters : [], isExtern : true}, CSSTransition : { name : "CSSTransition", moduleType : 0, moduleName : "CSSTransition", pack : ["js","html"], typeParameters : [], isExtern : true}, XPathExpression : { name : "XPathExpression", moduleType : 0, moduleName : "XPathExpression", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGClipPathElement : { name : "ClipPathElement", moduleType : 0, moduleName : "ClipPathElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, CSSImportRule : { name : "CSSImportRule", moduleType : 0, moduleName : "CSSImportRule", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGEllipseElement : { name : "EllipseElement", moduleType : 0, moduleName : "EllipseElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, DegradationPreference : { name : "DegradationPreference", moduleType : 3, moduleName : "DegradationPreference", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, HTMLUnknownElement : { name : "UnknownElement", moduleType : 0, moduleName : "UnknownElement", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGMaskElement : { name : "MaskElement", moduleType : 0, moduleName : "MaskElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, OfferOptions : { name : "OfferOptions", moduleType : 2, moduleName : "OfferOptions", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, DynamicsCompressorNode : { name : "DynamicsCompressorNode", moduleType : 0, moduleName : "DynamicsCompressorNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, IterationCompositeOperation : { name : "IterationCompositeOperation", moduleType : 3, moduleName : "IterationCompositeOperation", pack : ["js","html"], typeParameters : [], isExtern : false}, CompositionEvent : { name : "CompositionEvent", moduleType : 0, moduleName : "CompositionEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, AnimationEvent : { name : "AnimationEvent", moduleType : 0, moduleName : "AnimationEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, ConvertCoordinateOptions : { name : "ConvertCoordinateOptions", moduleType : 2, moduleName : "ConvertCoordinateOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, MediaKeySystemAccess : { name : "MediaKeySystemAccess", moduleType : 0, moduleName : "MediaKeySystemAccess", pack : ["js","html","eme"], typeParameters : [], isExtern : true}, HTMLObjectElement : { name : "ObjectElement", moduleType : 0, moduleName : "ObjectElement", pack : ["js","html"], typeParameters : [], isExtern : true}, WEBGL_depth_texture : { name : "WEBGLDepthTexture", moduleType : 0, moduleName : "WEBGLDepthTexture", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, IDBFactory : { name : "Factory", moduleType : 0, moduleName : "Factory", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, SVGAnimatedAngle : { name : "AnimatedAngle", moduleType : 0, moduleName : "AnimatedAngle", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, IntersectionObserverEntry : { name : "IntersectionObserverEntry", moduleType : 0, moduleName : "IntersectionObserverEntry", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.DateTimeFormatPartType" : { name : "DateTimeFormatPartType", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, HTMLDataElement : { name : "DataElement", moduleType : 0, moduleName : "DataElement", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLMediaElement : { name : "MediaElement", moduleType : 0, moduleName : "MediaElement", pack : ["js","html"], typeParameters : [], isExtern : true}, ImageBitmap : { name : "ImageBitmap", moduleType : 0, moduleName : "ImageBitmap", pack : ["js","html"], typeParameters : [], isExtern : true}, CompositionEventInit : { name : "CompositionEventInit", moduleType : 2, moduleName : "CompositionEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.CaseFirst" : { name : "CaseFirst", moduleType : 3, moduleName : "Collator", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, ImageData : { name : "ImageData", moduleType : 0, moduleName : "ImageData", pack : ["js","html"], typeParameters : [], isExtern : true}, RTCIceCandidate : { name : "IceCandidate", moduleType : 0, moduleName : "IceCandidate", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, SVGAnimationElement : { name : "AnimationElement", moduleType : 0, moduleName : "AnimationElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, Set : { name : "Set", moduleType : 0, moduleName : "Set", pack : ["js","lib"], typeParameters : ["T"], isExtern : true}, "Intl.CollatorOptions" : { name : "CollatorOptions", moduleType : 2, moduleName : "Collator", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, PriorityType : { name : "PriorityType", moduleType : 3, moduleName : "PriorityType", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, MediaSourceEndOfStreamError : { name : "MediaSourceEndOfStreamError", moduleType : 3, moduleName : "MediaSourceEndOfStreamError", pack : ["js","html"], typeParameters : [], isExtern : false}, FileSystemFlags : { name : "FileSystemFlags", moduleType : 2, moduleName : "FileSystemFlags", pack : ["js","html"], typeParameters : [], isExtern : false}, RequestDestination : { name : "RequestDestination", moduleType : 3, moduleName : "RequestDestination", pack : ["js","html"], typeParameters : [], isExtern : false}, CSSStyleDeclaration : { name : "CSSStyleDeclaration", moduleType : 0, moduleName : "CSSStyleDeclaration", pack : ["js","html"], typeParameters : [], isExtern : true}, Blob : { name : "Blob", moduleType : 0, moduleName : "Blob", pack : ["js","html"], typeParameters : [], isExtern : true}, BlobPropertyBag : { name : "BlobPropertyBag", moduleType : 2, moduleName : "BlobPropertyBag", pack : ["js","html"], typeParameters : [], isExtern : false}, PathSegLinetoAbs : { name : "PathSegLinetoAbs", moduleType : 2, moduleName : "PathSegLinetoAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, AnalyserOptions : { name : "AnalyserOptions", moduleType : 2, moduleName : "AnalyserOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, ContextEventInit : { name : "ContextEventInit", moduleType : 2, moduleName : "ContextEventInit", pack : ["js","html","webgl"], typeParameters : [], isExtern : false}, CSSMozDocumentRule : { name : "CSSMozDocumentRule", moduleType : 0, moduleName : "CSSMozDocumentRule", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGStringList : { name : "StringList", moduleType : 0, moduleName : "StringList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGFEMergeNodeElement : { name : "FEMergeNodeElement", moduleType : 0, moduleName : "FEMergeNodeElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, DOMPoint : { name : "DOMPoint", moduleType : 0, moduleName : "DOMPoint", pack : ["js","html"], typeParameters : [], isExtern : true}, Promise : { name : "Promise", moduleType : 0, moduleName : "Promise", pack : ["js","lib"], typeParameters : ["T"], isExtern : true}, ConstrainDOMStringParameters : { name : "ConstrainDOMStringParameters", moduleType : 2, moduleName : "ConstrainDOMStringParameters", pack : ["js","html"], typeParameters : [], isExtern : false}, ImageCaptureErrorEventInit : { name : "ImageCaptureErrorEventInit", moduleType : 2, moduleName : "ImageCaptureErrorEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, PathSegCurvetoCubicAbs : { name : "PathSegCurvetoCubicAbs", moduleType : 2, moduleName : "PathSegCurvetoCubicAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, AudioNodeOptions : { name : "AudioNodeOptions", moduleType : 2, moduleName : "AudioNodeOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, ObjectStoreParameters : { name : "ObjectStoreParameters", moduleType : 2, moduleName : "ObjectStoreParameters", pack : ["js","html","idb"], typeParameters : [], isExtern : false}, SVGFEDiffuseLightingElement : { name : "FEDiffuseLightingElement", moduleType : 0, moduleName : "FEDiffuseLightingElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PopupBlockedEvent : { name : "PopupBlockedEvent", moduleType : 0, moduleName : "PopupBlockedEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, ImageCaptureErrorEvent : { name : "ImageCaptureErrorEvent", moduleType : 0, moduleName : "ImageCaptureErrorEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLButtonElement : { name : "ButtonElement", moduleType : 0, moduleName : "ButtonElement", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGLineElement : { name : "LineElement", moduleType : 0, moduleName : "LineElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, Node : { name : "Node", moduleType : 0, moduleName : "Node", pack : ["js","html"], typeParameters : [], isExtern : true}, TouchEvent : { name : "TouchEvent", moduleType : 0, moduleName : "TouchEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, IDBKeyRange : { name : "KeyRange", moduleType : 0, moduleName : "KeyRange", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, CSSRule : { name : "CSSRule", moduleType : 0, moduleName : "CSSRule", pack : ["js","html"], typeParameters : [], isExtern : true}, AnimationPlayState : { name : "AnimationPlayState", moduleType : 3, moduleName : "AnimationPlayState", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGFECompositeElement : { name : "FECompositeElement", moduleType : 0, moduleName : "FECompositeElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, OpenDBOptions : { name : "OpenDBOptions", moduleType : 2, moduleName : "OpenDBOptions", pack : ["js","html","idb"], typeParameters : [], isExtern : false}, "Intl.RelativeTimeFormatStyle" : { name : "RelativeTimeFormatStyle", moduleType : 3, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, Math : { name : "Math", moduleType : 0, moduleName : "Math", pack : ["js","lib"], typeParameters : [], isExtern : true}, SVGAnimatedLength : { name : "AnimatedLength", moduleType : 0, moduleName : "AnimatedLength", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, XPathEvaluator : { name : "XPathEvaluator", moduleType : 0, moduleName : "XPathEvaluator", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.DateTimeFormatSupportedLocalesOfOptions" : { name : "DateTimeFormatSupportedLocalesOfOptions", moduleType : 2, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, ScrollRestoration : { name : "ScrollRestoration", moduleType : 3, moduleName : "ScrollRestoration", pack : ["js","html"], typeParameters : [], isExtern : false}, SpeechSynthesisEvent : { name : "SpeechSynthesisEvent", moduleType : 0, moduleName : "SpeechSynthesisEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, CustomEventInit : { name : "CustomEventInit", moduleType : 2, moduleName : "CustomEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, WebGLRenderingContext : { name : "RenderingContext", moduleType : 0, moduleName : "RenderingContext", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, VisibilityState : { name : "VisibilityState", moduleType : 3, moduleName : "VisibilityState", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.NumberFormatStyle" : { name : "NumberFormatStyle", moduleType : 3, moduleName : "NumberFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, AudioBufferSourceNode : { name : "AudioBufferSourceNode", moduleType : 0, moduleName : "AudioBufferSourceNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, DeviceMotionEventInit : { name : "DeviceMotionEventInit", moduleType : 2, moduleName : "DeviceMotionEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, MediaQueryListEventInit : { name : "MediaQueryListEventInit", moduleType : 2, moduleName : "MediaQueryListEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, PannerNode : { name : "PannerNode", moduleType : 0, moduleName : "PannerNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, NotificationPermission : { name : "NotificationPermission", moduleType : 3, moduleName : "NotificationPermission", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGElement : { name : "Element", moduleType : 0, moduleName : "Element", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, FontFaceSet : { name : "FontFaceSet", moduleType : 0, moduleName : "FontFaceSet", pack : ["js","html"], typeParameters : [], isExtern : true}, ExtendableEventInit : { name : "ExtendableEventInit", moduleType : 2, moduleName : "ExtendableEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, Int8Array : { name : "Int8Array", moduleType : 0, moduleName : "Int8Array", pack : ["js","lib"], typeParameters : [], isExtern : true}, ShadowRootInit : { name : "ShadowRootInit", moduleType : 2, moduleName : "ShadowRootInit", pack : ["js","html"], typeParameters : [], isExtern : false}, WorkletGlobalScope : { name : "WorkletGlobalScope", moduleType : 0, moduleName : "WorkletGlobalScope", pack : ["js","html"], typeParameters : [], isExtern : true}, DisplayNameResult : { name : "DisplayNameResult", moduleType : 2, moduleName : "DisplayNameResult", pack : ["js","html"], typeParameters : [], isExtern : false}, PathSegCurvetoQuadraticSmoothAbs : { name : "PathSegCurvetoQuadraticSmoothAbs", moduleType : 2, moduleName : "PathSegCurvetoQuadraticSmoothAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, PathSegLinetoVerticalAbs : { name : "PathSegLinetoVerticalAbs", moduleType : 2, moduleName : "PathSegLinetoVerticalAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, DocumentFragment : { name : "DocumentFragment", moduleType : 0, moduleName : "DocumentFragment", pack : ["js","html"], typeParameters : [], isExtern : true}, ConstrainBooleanParameters : { name : "ConstrainBooleanParameters", moduleType : 2, moduleName : "ConstrainBooleanParameters", pack : ["js","html"], typeParameters : [], isExtern : false}, MapEntry : { name : "MapEntry", moduleType : 3, moduleName : "Map", pack : ["js","lib"], typeParameters : ["K","V"], isExtern : false}, FileMode : { name : "FileMode", moduleType : 3, moduleName : "FileMode", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLFrameElement : { name : "FrameElement", moduleType : 0, moduleName : "FrameElement", pack : ["js","html"], typeParameters : [], isExtern : true}, IIRFilterOptions : { name : "IIRFilterOptions", moduleType : 2, moduleName : "IIRFilterOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, Error : { name : "Error", moduleType : 0, moduleName : "Error", pack : ["js","lib"], typeParameters : [], isExtern : true}, PushSubscriptionKeys : { name : "PushSubscriptionKeys", moduleType : 2, moduleName : "PushSubscriptionKeys", pack : ["js","html","push"], typeParameters : [], isExtern : false}, Attr : { name : "Attr", moduleType : 0, moduleName : "Attr", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMParser : { name : "DOMParser", moduleType : 0, moduleName : "DOMParser", pack : ["js","html"], typeParameters : [], isExtern : true}, AudioDestinationNode : { name : "AudioDestinationNode", moduleType : 0, moduleName : "AudioDestinationNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, HTMLDirectoryElement : { name : "DirectoryElement", moduleType : 0, moduleName : "DirectoryElement", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMStringList : { name : "DOMStringList", moduleType : 0, moduleName : "DOMStringList", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGNumberList : { name : "NumberList", moduleType : 0, moduleName : "NumberList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGGElement : { name : "GElement", moduleType : 0, moduleName : "GElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, TextMetrics : { name : "TextMetrics", moduleType : 0, moduleName : "TextMetrics", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaKeySession : { name : "MediaKeySession", moduleType : 0, moduleName : "MediaKeySession", pack : ["js","html","eme"], typeParameters : [], isExtern : true}, AudioWorkletProcessor : { name : "AudioWorkletProcessor", moduleType : 0, moduleName : "AudioWorkletProcessor", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, MediaKeys : { name : "MediaKeys", moduleType : 0, moduleName : "MediaKeys", pack : ["js","html","eme"], typeParameters : [], isExtern : true}, Audio : { name : "Audio", moduleType : 0, moduleName : "Audio", pack : ["js","html"], typeParameters : [], isExtern : true}, FileCallback : { name : "FileCallback", moduleType : 2, moduleName : "FileCallback", pack : ["js","html"], typeParameters : [], isExtern : false}, VideoTrackList : { name : "VideoTrackList", moduleType : 0, moduleName : "VideoTrackList", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLMeterElement : { name : "MeterElement", moduleType : 0, moduleName : "MeterElement", pack : ["js","html"], typeParameters : [], isExtern : true}, HitRegionOptions : { name : "HitRegionOptions", moduleType : 2, moduleName : "HitRegionOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, BlobEvent : { name : "BlobEvent", moduleType : 0, moduleName : "BlobEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGAnimateTransformElement : { name : "AnimateTransformElement", moduleType : 0, moduleName : "AnimateTransformElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGPathSeg : { name : "PathSeg", moduleType : 0, moduleName : "PathSeg", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, WheelEventInit : { name : "WheelEventInit", moduleType : 2, moduleName : "WheelEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.RelativeTimeFormatResolvedOptions" : { name : "RelativeTimeFormatResolvedOptions", moduleType : 2, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, MediaError : { name : "MediaError", moduleType : 0, moduleName : "MediaError", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGComponentTransferFunctionElement : { name : "ComponentTransferFunctionElement", moduleType : 0, moduleName : "ComponentTransferFunctionElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PluginArray : { name : "PluginArray", moduleType : 0, moduleName : "PluginArray", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMPointReadOnly : { name : "DOMPointReadOnly", moduleType : 0, moduleName : "DOMPointReadOnly", pack : ["js","html"], typeParameters : [], isExtern : true}, OES_texture_half_float : { name : "OESTextureHalfFloat", moduleType : 0, moduleName : "OESTextureHalfFloat", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, HTMLFormElement : { name : "FormElement", moduleType : 0, moduleName : "FormElement", pack : ["js","html"], typeParameters : [], isExtern : true}, Object : { name : "Object", moduleType : 0, moduleName : "Object", pack : ["js","lib"], typeParameters : [], isExtern : true}, ElementCreationOptions : { name : "ElementCreationOptions", moduleType : 2, moduleName : "ElementCreationOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, Document : { name : "Document", moduleType : 0, moduleName : "Document", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLHRElement : { name : "HRElement", moduleType : 0, moduleName : "HRElement", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGDescElement : { name : "DescElement", moduleType : 0, moduleName : "DescElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, CacheStorageNamespace : { name : "CacheStorageNamespace", moduleType : 3, moduleName : "CacheStorageNamespace", pack : ["js","html"], typeParameters : [], isExtern : false}, CSSAnimation : { name : "CSSAnimation", moduleType : 0, moduleName : "CSSAnimation", pack : ["js","html"], typeParameters : [], isExtern : true}, ServiceWorkerRegistration : { name : "ServiceWorkerRegistration", moduleType : 0, moduleName : "ServiceWorkerRegistration", pack : ["js","html"], typeParameters : [], isExtern : true}, "WebAssembly.TableDescriptor" : { name : "TableDescriptor", moduleType : 2, moduleName : "Table", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : false}, CaretPosition : { name : "CaretPosition", moduleType : 0, moduleName : "CaretPosition", pack : ["js","html"], typeParameters : [], isExtern : true}, WEBGL_compressed_texture_atc : { name : "WEBGLCompressedTextureAtc", moduleType : 0, moduleName : "WEBGLCompressedTextureAtc", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, HTMLQuoteElement : { name : "QuoteElement", moduleType : 0, moduleName : "QuoteElement", pack : ["js","html"], typeParameters : [], isExtern : true}, WebGLRenderbuffer : { name : "Renderbuffer", moduleType : 0, moduleName : "Renderbuffer", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, "Intl.TimeZoneName" : { name : "TimeZoneName", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, DocumentTimeline : { name : "DocumentTimeline", moduleType : 0, moduleName : "DocumentTimeline", pack : ["js","html"], typeParameters : [], isExtern : true}, URIError : { name : "URIError", moduleType : 0, moduleName : "Error", pack : ["js","lib"], typeParameters : [], isExtern : true}, CSSGroupingRule : { name : "CSSGroupingRule", moduleType : 0, moduleName : "CSSGroupingRule", pack : ["js","html"], typeParameters : [], isExtern : true}, BundlePolicy : { name : "BundlePolicy", moduleType : 3, moduleName : "BundlePolicy", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, CanvasPattern : { name : "CanvasPattern", moduleType : 0, moduleName : "CanvasPattern", pack : ["js","html"], typeParameters : [], isExtern : true}, SharedWorkerGlobalScope : { name : "SharedWorkerGlobalScope", moduleType : 0, moduleName : "SharedWorkerGlobalScope", pack : ["js","html"], typeParameters : [], isExtern : true}, NotificationOptions : { name : "NotificationOptions", moduleType : 2, moduleName : "NotificationOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, ScrollBehavior : { name : "ScrollBehavior", moduleType : 3, moduleName : "ScrollBehavior", pack : ["js","html"], typeParameters : [], isExtern : false}, PathSegLinetoRel : { name : "PathSegLinetoRel", moduleType : 2, moduleName : "PathSegLinetoRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, HTMLBaseElement : { name : "BaseElement", moduleType : 0, moduleName : "BaseElement", pack : ["js","html"], typeParameters : [], isExtern : true}, AudioScheduledSourceNode : { name : "AudioScheduledSourceNode", moduleType : 0, moduleName : "AudioScheduledSourceNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, SecurityPolicyViolationEventDisposition : { name : "SecurityPolicyViolationEventDisposition", moduleType : 3, moduleName : "SecurityPolicyViolationEventDisposition", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGAnimatedPreserveAspectRatio : { name : "AnimatedPreserveAspectRatio", moduleType : 0, moduleName : "AnimatedPreserveAspectRatio", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, IIRFilterNode : { name : "IIRFilterNode", moduleType : 0, moduleName : "IIRFilterNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, OfflineAudioCompletionEventInit : { name : "OfflineAudioCompletionEventInit", moduleType : 2, moduleName : "OfflineAudioCompletionEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, IDBObjectStore : { name : "ObjectStore", moduleType : 0, moduleName : "ObjectStore", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, "WebAssembly.Instance" : { name : "Instance", moduleType : 0, moduleName : "Instance", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : true}, MediaQueryList : { name : "MediaQueryList", moduleType : 0, moduleName : "MediaQueryList", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLParamElement : { name : "ParamElement", moduleType : 0, moduleName : "ParamElement", pack : ["js","html"], typeParameters : [], isExtern : true}, DeviceRotationRateInit : { name : "DeviceRotationRateInit", moduleType : 2, moduleName : "DeviceRotationRateInit", pack : ["js","html"], typeParameters : [], isExtern : false}, EvalError : { name : "EvalError", moduleType : 0, moduleName : "Error", pack : ["js","lib"], typeParameters : [], isExtern : true}, PerformanceEntryFilterOptions : { name : "PerformanceEntryFilterOptions", moduleType : 2, moduleName : "PerformanceEntryFilterOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.YearRepresentation" : { name : "YearRepresentation", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, ServiceWorkerState : { name : "ServiceWorkerState", moduleType : 3, moduleName : "ServiceWorkerState", pack : ["js","html"], typeParameters : [], isExtern : false}, PerformanceTiming : { name : "PerformanceTiming", moduleType : 0, moduleName : "PerformanceTiming", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLHeadingElement : { name : "HeadingElement", moduleType : 0, moduleName : "HeadingElement", pack : ["js","html"], typeParameters : [], isExtern : true}, WebGLFramebuffer : { name : "Framebuffer", moduleType : 0, moduleName : "Framebuffer", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, MIDIConnectionEvent : { name : "MIDIConnectionEvent", moduleType : 0, moduleName : "MIDIConnectionEvent", pack : ["js","html","midi"], typeParameters : [], isExtern : true}, SVGTransform : { name : "Transform", moduleType : 0, moduleName : "Transform", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, WorkerNavigator : { name : "WorkerNavigator", moduleType : 0, moduleName : "WorkerNavigator", pack : ["js","html"], typeParameters : [], isExtern : true}, ChannelMergerNode : { name : "ChannelMergerNode", moduleType : 0, moduleName : "ChannelMergerNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, WindowClient : { name : "WindowClient", moduleType : 0, moduleName : "WindowClient", pack : ["js","html"], typeParameters : [], isExtern : true}, StorageManager : { name : "StorageManager", moduleType : 0, moduleName : "StorageManager", pack : ["js","html"], typeParameters : [], isExtern : true}, Client : { name : "Client", moduleType : 0, moduleName : "Client", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.DayRepresentation" : { name : "DayRepresentation", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, SVGRect : { name : "Rect", moduleType : 0, moduleName : "Rect", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, ServiceWorker : { name : "ServiceWorker", moduleType : 0, moduleName : "ServiceWorker", pack : ["js","html"], typeParameters : [], isExtern : true}, IDBMutableFile : { name : "MutableFile", moduleType : 0, moduleName : "MutableFile", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, MediaRecorderOptions : { name : "MediaRecorderOptions", moduleType : 2, moduleName : "MediaRecorderOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, "WebAssembly.ModuleExportDescriptor" : { name : "ModuleExportDescriptor", moduleType : 2, moduleName : "Module", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : false}, "Intl.DateTimeFormatResolvedOptions" : { name : "DateTimeFormatResolvedOptions", moduleType : 2, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, TextTrack : { name : "TextTrack", moduleType : 0, moduleName : "TextTrack", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGStyleElement : { name : "StyleElement", moduleType : 0, moduleName : "StyleElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PromiseHandler : { name : "PromiseHandler", moduleType : 3, moduleName : "Promise", pack : ["js","lib"], typeParameters : ["T","TOut"], isExtern : false}, SVGFEOffsetElement : { name : "FEOffsetElement", moduleType : 0, moduleName : "FEOffsetElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, StyleSheet : { name : "StyleSheet", moduleType : 0, moduleName : "StyleSheet", pack : ["js","html"], typeParameters : [], isExtern : true}, console : { name : "Console", moduleType : 0, moduleName : "Console", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechSynthesis : { name : "SpeechSynthesis", moduleType : 0, moduleName : "SpeechSynthesis", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLTrackElement : { name : "TrackElement", moduleType : 0, moduleName : "TrackElement", pack : ["js","html"], typeParameters : [], isExtern : true}, EXTShaderTextureLod : { name : "EXTShaderTextureLod", moduleType : 2, moduleName : "EXTShaderTextureLod", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, NodeIterator : { name : "NodeIterator", moduleType : 0, moduleName : "NodeIterator", pack : ["js","html"], typeParameters : [], isExtern : true}, Request : { name : "Request", moduleType : 0, moduleName : "Request", pack : ["js","html"], typeParameters : [], isExtern : true}, ConstrainLongRange : { name : "ConstrainLongRange", moduleType : 2, moduleName : "ConstrainLongRange", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.WeekdayRepresentation" : { name : "WeekdayRepresentation", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, VisualViewport : { name : "VisualViewport", moduleType : 0, moduleName : "VisualViewport", pack : ["js","html"], typeParameters : [], isExtern : true}, AnimationEffect : { name : "AnimationEffect", moduleType : 0, moduleName : "AnimationEffect", pack : ["js","html"], typeParameters : [], isExtern : true}, WheelEvent : { name : "WheelEvent", moduleType : 0, moduleName : "WheelEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, PerformanceMeasure : { name : "PerformanceMeasure", moduleType : 0, moduleName : "PerformanceMeasure", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMMatrixReadOnly : { name : "DOMMatrixReadOnly", moduleType : 0, moduleName : "DOMMatrixReadOnly", pack : ["js","html"], typeParameters : [], isExtern : true}, FontFaceSetLoadEvent : { name : "FontFaceSetLoadEvent", moduleType : 0, moduleName : "FontFaceSetLoadEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaRecorderErrorEvent : { name : "MediaRecorderErrorEvent", moduleType : 0, moduleName : "MediaRecorderErrorEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, Date : { name : "Date", moduleType : 0, moduleName : "Date", pack : ["js","lib"], typeParameters : [], isExtern : true}, WorkerOptions : { name : "WorkerOptions", moduleType : 2, moduleName : "WorkerOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, EventSource : { name : "EventSource", moduleType : 0, moduleName : "EventSource", pack : ["js","html"], typeParameters : [], isExtern : true}, ConsoleInstance : { name : "ConsoleInstance", moduleType : 0, moduleName : "ConsoleInstance", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLDocument : { name : "HTMLDocument", moduleType : 0, moduleName : "HTMLDocument", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGPatternElement : { name : "PatternElement", moduleType : 0, moduleName : "PatternElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, ProgressEventInit : { name : "ProgressEventInit", moduleType : 2, moduleName : "ProgressEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, MediaStreamTrackState : { name : "MediaStreamTrackState", moduleType : 3, moduleName : "MediaStreamTrackState", pack : ["js","html"], typeParameters : [], isExtern : false}, "WebAssembly.ModuleImportDescriptor" : { name : "ModuleImportDescriptor", moduleType : 2, moduleName : "Module", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : false}, ServiceWorkerUpdateViaCache : { name : "ServiceWorkerUpdateViaCache", moduleType : 3, moduleName : "ServiceWorkerUpdateViaCache", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGFEFuncBElement : { name : "FEFuncBElement", moduleType : 0, moduleName : "FEFuncBElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, HTMLMenuItemElement : { name : "MenuItemElement", moduleType : 0, moduleName : "MenuItemElement", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGAnimatedBoolean : { name : "AnimatedBoolean", moduleType : 0, moduleName : "AnimatedBoolean", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, AudioWorkletGlobalScope : { name : "AudioWorkletGlobalScope", moduleType : 0, moduleName : "AudioWorkletGlobalScope", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, Touch : { name : "Touch", moduleType : 0, moduleName : "Touch", pack : ["js","html"], typeParameters : [], isExtern : true}, RtcpParameters : { name : "RtcpParameters", moduleType : 2, moduleName : "RtcpParameters", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, WebGLActiveInfo : { name : "ActiveInfo", moduleType : 0, moduleName : "ActiveInfo", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, HTMLMetaElement : { name : "MetaElement", moduleType : 0, moduleName : "MetaElement", pack : ["js","html"], typeParameters : [], isExtern : true}, PushEventInit : { name : "PushEventInit", moduleType : 2, moduleName : "PushEventInit", pack : ["js","html","push"], typeParameters : [], isExtern : false}, SVGMatrix : { name : "Matrix", moduleType : 0, moduleName : "Matrix", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGAnimatedInteger : { name : "AnimatedInteger", moduleType : 0, moduleName : "AnimatedInteger", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGFEImageElement : { name : "FEImageElement", moduleType : 0, moduleName : "FEImageElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, CacheQueryOptions : { name : "CacheQueryOptions", moduleType : 2, moduleName : "CacheQueryOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, ClipboardEvent : { name : "ClipboardEvent", moduleType : 0, moduleName : "ClipboardEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, RTCStatsReport : { name : "StatsReport", moduleType : 0, moduleName : "StatsReport", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, GainOptions : { name : "GainOptions", moduleType : 2, moduleName : "GainOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, DedicatedWorkerGlobalScope : { name : "DedicatedWorkerGlobalScope", moduleType : 0, moduleName : "DedicatedWorkerGlobalScope", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMTokenList : { name : "DOMTokenList", moduleType : 0, moduleName : "DOMTokenList", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMPointInit : { name : "DOMPointInit", moduleType : 2, moduleName : "DOMPointInit", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGLengthList : { name : "LengthList", moduleType : 0, moduleName : "LengthList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, "Intl.NumberFormatResolvedOption" : { name : "NumberFormatResolvedOption", moduleType : 2, moduleName : "NumberFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, SVGSetElement : { name : "SetElement", moduleType : 0, moduleName : "SetElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, WebAssemblyInstantiatedSource : { name : "WebAssemblyInstantiatedSource", moduleType : 2, moduleName : "WebAssembly", pack : ["js","lib"], typeParameters : [], isExtern : false}, Float32Array : { name : "Float32Array", moduleType : 0, moduleName : "Float32Array", pack : ["js","lib"], typeParameters : [], isExtern : true}, PageTransitionEventInit : { name : "PageTransitionEventInit", moduleType : 2, moduleName : "PageTransitionEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, FileSystemEntryCallback : { name : "FileSystemEntryCallback", moduleType : 2, moduleName : "FileSystemEntryCallback", pack : ["js","html"], typeParameters : [], isExtern : false}, DataTransfer : { name : "DataTransfer", moduleType : 0, moduleName : "DataTransfer", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGPathSegList : { name : "PathSegList", moduleType : 0, moduleName : "PathSegList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, RTCDTMFToneChangeEvent : { name : "DTMFToneChangeEvent", moduleType : 0, moduleName : "DTMFToneChangeEvent", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, "Intl.PluralRules" : { name : "PluralRules", moduleType : 0, moduleName : "PluralRules", pack : ["js","lib","intl"], typeParameters : [], isExtern : true}, HTMLCanvasElement : { name : "CanvasElement", moduleType : 0, moduleName : "CanvasElement", pack : ["js","html"], typeParameters : [], isExtern : true}, WEBGL_compressed_texture_etc1 : { name : "WEBGLCompressedTextureEtc1", moduleType : 0, moduleName : "WEBGLCompressedTextureEtc1", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, "WebAssembly.ImportExportKind" : { name : "ImportExportKind", moduleType : 3, moduleName : "Module", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : false}, HTMLUListElement : { name : "UListElement", moduleType : 0, moduleName : "UListElement", pack : ["js","html"], typeParameters : [], isExtern : true}, CSSBoxType : { name : "CSSBoxType", moduleType : 3, moduleName : "CSSBoxType", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLAudioElement : { name : "AudioElement", moduleType : 0, moduleName : "AudioElement", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.DateTimeFormatPart" : { name : "DateTimeFormatPart", moduleType : 2, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, "Intl.FormatMatcher" : { name : "FormatMatcher", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, PanningModelType : { name : "PanningModelType", moduleType : 3, moduleName : "PanningModelType", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, MediaStreamAudioSourceOptions : { name : "MediaStreamAudioSourceOptions", moduleType : 2, moduleName : "MediaStreamAudioSourceOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, RangeError : { name : "RangeError", moduleType : 0, moduleName : "Error", pack : ["js","lib"], typeParameters : [], isExtern : true}, HTMLFontElement : { name : "FontElement", moduleType : 0, moduleName : "FontElement", pack : ["js","html"], typeParameters : [], isExtern : true}, "WebAssembly.Memory" : { name : "Memory", moduleType : 0, moduleName : "Memory", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : true}, VTTRegion : { name : "VTTRegion", moduleType : 0, moduleName : "VTTRegion", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.RelativeTimeFormatPartType" : { name : "RelativeTimeFormatPartType", moduleType : 2, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, GetUserMediaRequest : { name : "GetUserMediaRequest", moduleType : 2, moduleName : "GetUserMediaRequest", pack : ["js","html"], typeParameters : [], isExtern : false}, MIDIPortDeviceState : { name : "MIDIPortDeviceState", moduleType : 3, moduleName : "MIDIPortDeviceState", pack : ["js","html","midi"], typeParameters : [], isExtern : false}, OscillatorType : { name : "OscillatorType", moduleType : 3, moduleName : "OscillatorType", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, HTMLTimeElement : { name : "TimeElement", moduleType : 0, moduleName : "TimeElement", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.NumberFormatOptions" : { name : "NumberFormatOptions", moduleType : 2, moduleName : "NumberFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, MediaTrackConstraintSet : { name : "MediaTrackConstraintSet", moduleType : 2, moduleName : "MediaTrackConstraintSet", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGLinearGradientElement : { name : "LinearGradientElement", moduleType : 0, moduleName : "LinearGradientElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, WEBGL_debug_renderer_info : { name : "WEBGLDebugRendererInfo", moduleType : 0, moduleName : "WEBGLDebugRendererInfo", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, DistanceModelType : { name : "DistanceModelType", moduleType : 3, moduleName : "DistanceModelType", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, MediaKeySystemConfiguration : { name : "MediaKeySystemConfiguration", moduleType : 2, moduleName : "MediaKeySystemConfiguration", pack : ["js","html","eme"], typeParameters : [], isExtern : false}, MediaElementAudioSourceNode : { name : "MediaElementAudioSourceNode", moduleType : 0, moduleName : "MediaElementAudioSourceNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, RtpCodecParameters : { name : "RtpCodecParameters", moduleType : 2, moduleName : "RtpCodecParameters", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, Proxy : { name : "Proxy", moduleType : 0, moduleName : "Proxy", pack : ["js","lib"], typeParameters : ["T"], isExtern : true}, SVGMarkerElement : { name : "MarkerElement", moduleType : 0, moduleName : "MarkerElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, IceTransportPolicy : { name : "IceTransportPolicy", moduleType : 3, moduleName : "IceTransportPolicy", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, SVGViewElement : { name : "ViewElement", moduleType : 0, moduleName : "ViewElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGFEDisplacementMapElement : { name : "FEDisplacementMapElement", moduleType : 0, moduleName : "FEDisplacementMapElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, HTMLModElement : { name : "ModElement", moduleType : 0, moduleName : "ModElement", pack : ["js","html"], typeParameters : [], isExtern : true}, FetchEventInit : { name : "FetchEventInit", moduleType : 2, moduleName : "FetchEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, LineAlignSetting : { name : "LineAlignSetting", moduleType : 3, moduleName : "LineAlignSetting", pack : ["js","html"], typeParameters : [], isExtern : false}, StyleSheetList : { name : "StyleSheetList", moduleType : 0, moduleName : "StyleSheetList", pack : ["js","html"], typeParameters : [], isExtern : true}, Storage : { name : "Storage", moduleType : 0, moduleName : "Storage", pack : ["js","html"], typeParameters : [], isExtern : true}, RTCPeerConnectionIceEvent : { name : "PeerConnectionIceEvent", moduleType : 0, moduleName : "PeerConnectionIceEvent", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, AssignedNodesOptions : { name : "AssignedNodesOptions", moduleType : 2, moduleName : "AssignedNodesOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGFEPointLightElement : { name : "FEPointLightElement", moduleType : 0, moduleName : "FEPointLightElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, CursorDirection : { name : "CursorDirection", moduleType : 3, moduleName : "CursorDirection", pack : ["js","html","idb"], typeParameters : [], isExtern : false}, "Intl.Sensitivity" : { name : "Sensitivity", moduleType : 3, moduleName : "Collator", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, SVGScriptElement : { name : "ScriptElement", moduleType : 0, moduleName : "ScriptElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SpeechRecognitionResultList : { name : "SpeechRecognitionResultList", moduleType : 0, moduleName : "SpeechRecognitionResultList", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGAnimatedString : { name : "AnimatedString", moduleType : 0, moduleName : "AnimatedString", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, Response : { name : "Response", moduleType : 0, moduleName : "Response", pack : ["js","html"], typeParameters : [], isExtern : true}, PointerEventInit : { name : "PointerEventInit", moduleType : 2, moduleName : "PointerEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLFieldSetElement : { name : "FieldSetElement", moduleType : 0, moduleName : "FieldSetElement", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaDeviceKind : { name : "MediaDeviceKind", moduleType : 3, moduleName : "MediaDeviceKind", pack : ["js","html"], typeParameters : [], isExtern : false}, PerformanceObserverInit : { name : "PerformanceObserverInit", moduleType : 2, moduleName : "PerformanceObserverInit", pack : ["js","html"], typeParameters : [], isExtern : false}, AudioContext : { name : "AudioContext", moduleType : 0, moduleName : "AudioContext", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, SVGAngle : { name : "Angle", moduleType : 0, moduleName : "Angle", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, RequestReadyState : { name : "RequestReadyState", moduleType : 3, moduleName : "RequestReadyState", pack : ["js","html","idb"], typeParameters : [], isExtern : false}, HTMLSelectElement : { name : "SelectElement", moduleType : 0, moduleName : "SelectElement", pack : ["js","html"], typeParameters : [], isExtern : true}, SharedWorker : { name : "SharedWorker", moduleType : 0, moduleName : "SharedWorker", pack : ["js","html"], typeParameters : [], isExtern : true}, IDBVersionChangeEvent : { name : "VersionChangeEvent", moduleType : 0, moduleName : "VersionChangeEvent", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, SVGAnimateElement : { name : "AnimateElement", moduleType : 0, moduleName : "AnimateElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, FontFace : { name : "FontFace", moduleType : 0, moduleName : "FontFace", pack : ["js","html"], typeParameters : [], isExtern : true}, URLSearchParamsIterator : { name : "URLSearchParamsIterator", moduleType : 2, moduleName : "URLSearchParamsIterator", pack : ["js","html"], typeParameters : [], isExtern : false}, MIDIInputMap : { name : "MIDIInputMap", moduleType : 0, moduleName : "MIDIInputMap", pack : ["js","html","midi"], typeParameters : [], isExtern : true}, Symbol : { name : "Symbol", moduleType : 0, moduleName : "Symbol", pack : ["js","lib"], typeParameters : [], isExtern : true}, MIDIMessageEvent : { name : "MIDIMessageEvent", moduleType : 0, moduleName : "MIDIMessageEvent", pack : ["js","html","midi"], typeParameters : [], isExtern : true}, HTMLOutputElement : { name : "OutputElement", moduleType : 0, moduleName : "OutputElement", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.RelativeTimeFormat" : { name : "RelativeTimeFormat", moduleType : 0, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : true}, "Intl.PluralRulesType" : { name : "PluralRulesType", moduleType : 3, moduleName : "PluralRules", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, CSSFontFaceRule : { name : "CSSFontFaceRule", moduleType : 0, moduleName : "CSSFontFaceRule", pack : ["js","html"], typeParameters : [], isExtern : true}, FileSystemEntry : { name : "FileSystemEntry", moduleType : 0, moduleName : "FileSystemEntry", pack : ["js","html"], typeParameters : [], isExtern : true}, OscillatorNode : { name : "OscillatorNode", moduleType : 0, moduleName : "OscillatorNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, HTMLTemplateElement : { name : "TemplateElement", moduleType : 0, moduleName : "TemplateElement", pack : ["js","html"], typeParameters : [], isExtern : true}, WebGLShaderPrecisionFormat : { name : "ShaderPrecisionFormat", moduleType : 0, moduleName : "ShaderPrecisionFormat", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, OrientationLockType : { name : "OrientationLockType", moduleType : 3, moduleName : "OrientationLockType", pack : ["js","html"], typeParameters : [], isExtern : false}, XPathResult : { name : "XPathResult", moduleType : 0, moduleName : "XPathResult", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGGradientElement : { name : "GradientElement", moduleType : 0, moduleName : "GradientElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, ShadowRoot : { name : "ShadowRoot", moduleType : 0, moduleName : "ShadowRoot", pack : ["js","html"], typeParameters : [], isExtern : true}, MimeType : { name : "MimeType", moduleType : 0, moduleName : "MimeType", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGAElement : { name : "AElement", moduleType : 0, moduleName : "AElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, MIDIOutputMap : { name : "MIDIOutputMap", moduleType : 0, moduleName : "MIDIOutputMap", pack : ["js","html","midi"], typeParameters : [], isExtern : true}, PopStateEvent : { name : "PopStateEvent", moduleType : 0, moduleName : "PopStateEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, DocumentType : { name : "DocumentType", moduleType : 0, moduleName : "DocumentType", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGAnimatedTransformList : { name : "AnimatedTransformList", moduleType : 0, moduleName : "AnimatedTransformList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, AudioTrack : { name : "AudioTrack", moduleType : 0, moduleName : "AudioTrack", pack : ["js","html"], typeParameters : [], isExtern : true}, FecParameters : { name : "FecParameters", moduleType : 2, moduleName : "FecParameters", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, SVGAnimateMotionElement : { name : "AnimateMotionElement", moduleType : 0, moduleName : "AnimateMotionElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, CompositeOperation : { name : "CompositeOperation", moduleType : 3, moduleName : "CompositeOperation", pack : ["js","html"], typeParameters : [], isExtern : false}, FetchEvent : { name : "FetchEvent", moduleType : 0, moduleName : "FetchEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, ThenableStruct : { name : "ThenableStruct", moduleType : 2, moduleName : "Promise", pack : ["js","lib"], typeParameters : ["T"], isExtern : false}, PeerConnectionIceEventInit : { name : "PeerConnectionIceEventInit", moduleType : 2, moduleName : "PeerConnectionIceEventInit", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, SVGTextContentElement : { name : "TextContentElement", moduleType : 0, moduleName : "TextContentElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PathSegMovetoAbs : { name : "PathSegMovetoAbs", moduleType : 2, moduleName : "PathSegMovetoAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, AudioWorkletNodeOptions : { name : "AudioWorkletNodeOptions", moduleType : 2, moduleName : "AudioWorkletNodeOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, IDBRequest : { name : "Request", moduleType : 0, moduleName : "Request", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, MediaDevices : { name : "MediaDevices", moduleType : 0, moduleName : "MediaDevices", pack : ["js","html"], typeParameters : [], isExtern : true}, TimeEvent : { name : "TimeEvent", moduleType : 0, moduleName : "TimeEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGRectElement : { name : "RectElement", moduleType : 0, moduleName : "RectElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, HTMLTableRowElement : { name : "TableRowElement", moduleType : 0, moduleName : "TableRowElement", pack : ["js","html"], typeParameters : [], isExtern : true}, PushManager : { name : "PushManager", moduleType : 0, moduleName : "PushManager", pack : ["js","html","push"], typeParameters : [], isExtern : true}, Navigator : { name : "Navigator", moduleType : 0, moduleName : "Navigator", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMQuad : { name : "DOMQuad", moduleType : 0, moduleName : "DOMQuad", pack : ["js","html"], typeParameters : [], isExtern : true}, DataTransferItem : { name : "DataTransferItem", moduleType : 0, moduleName : "DataTransferItem", pack : ["js","html"], typeParameters : [], isExtern : true}, PopupBlockedEventInit : { name : "PopupBlockedEventInit", moduleType : 2, moduleName : "PopupBlockedEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, HashChangeEvent : { name : "HashChangeEvent", moduleType : 0, moduleName : "HashChangeEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, AudioContextState : { name : "AudioContextState", moduleType : 3, moduleName : "AudioContextState", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, WebGLQuery : { name : "Query", moduleType : 0, moduleName : "Query", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, RTCRtpReceiver : { name : "RtpReceiver", moduleType : 0, moduleName : "RtpReceiver", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, "Intl.PluralRulesOptions" : { name : "PluralRulesOptions", moduleType : 2, moduleName : "PluralRules", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, Comment : { name : "Comment", moduleType : 0, moduleName : "Comment", pack : ["js","html"], typeParameters : [], isExtern : true}, PathSegCurvetoQuadraticAbs : { name : "PathSegCurvetoQuadraticAbs", moduleType : 2, moduleName : "PathSegCurvetoQuadraticAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, SVGFETurbulenceElement : { name : "FETurbulenceElement", moduleType : 0, moduleName : "FETurbulenceElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, KeyboardEventInit : { name : "KeyboardEventInit", moduleType : 2, moduleName : "KeyboardEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, External : { name : "External", moduleType : 2, moduleName : "External", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGMPathElement : { name : "MPathElement", moduleType : 0, moduleName : "MPathElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, AudioBufferOptions : { name : "AudioBufferOptions", moduleType : 2, moduleName : "AudioBufferOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, "Intl.SecondRepresentation" : { name : "SecondRepresentation", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, KeyframeEffect : { name : "KeyframeEffect", moduleType : 0, moduleName : "KeyframeEffect", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.Collator" : { name : "Collator", moduleType : 0, moduleName : "Collator", pack : ["js","lib","intl"], typeParameters : [], isExtern : true}, MediaQueryListEvent : { name : "MediaQueryListEvent", moduleType : 0, moduleName : "MediaQueryListEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGFEBlendElement : { name : "FEBlendElement", moduleType : 0, moduleName : "FEBlendElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, IdentityAssertion : { name : "IdentityAssertion", moduleType : 2, moduleName : "IdentityAssertion", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, RegistrationOptions : { name : "RegistrationOptions", moduleType : 2, moduleName : "RegistrationOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, EventTarget : { name : "EventTarget", moduleType : 0, moduleName : "EventTarget", pack : ["js","html"], typeParameters : [], isExtern : true}, DocumentTimelineOptions : { name : "DocumentTimelineOptions", moduleType : 2, moduleName : "DocumentTimelineOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, FontFaceLoadStatus : { name : "FontFaceLoadStatus", moduleType : 3, moduleName : "FontFaceLoadStatus", pack : ["js","html"], typeParameters : [], isExtern : false}, CharacterData : { name : "CharacterData", moduleType : 0, moduleName : "CharacterData", pack : ["js","html"], typeParameters : [], isExtern : true}, BiquadFilterNode : { name : "BiquadFilterNode", moduleType : 0, moduleName : "BiquadFilterNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, SelectionMode : { name : "SelectionMode", moduleType : 3, moduleName : "SelectionMode", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGFEConvolveMatrixElement : { name : "FEConvolveMatrixElement", moduleType : 0, moduleName : "FEConvolveMatrixElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, BroadcastChannel : { name : "BroadcastChannel", moduleType : 0, moduleName : "BroadcastChannel", pack : ["js","html"], typeParameters : [], isExtern : true}, RegExpMatch : { name : "RegExpMatch", moduleType : 0, moduleName : "RegExp", pack : ["js","lib"], typeParameters : [], isExtern : true}, ScrollOptions : { name : "ScrollOptions", moduleType : 2, moduleName : "ScrollOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, PositionError : { name : "PositionError", moduleType : 0, moduleName : "PositionError", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaKeysRequirement : { name : "MediaKeysRequirement", moduleType : 3, moduleName : "MediaKeysRequirement", pack : ["js","html","eme"], typeParameters : [], isExtern : false}, FocusEvent : { name : "FocusEvent", moduleType : 0, moduleName : "FocusEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGUseElement : { name : "UseElement", moduleType : 0, moduleName : "UseElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, WebGLUniformLocation : { name : "UniformLocation", moduleType : 0, moduleName : "UniformLocation", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, Directory : { name : "Directory", moduleType : 0, moduleName : "Directory", pack : ["js","html"], typeParameters : [], isExtern : true}, DataTransferItemList : { name : "DataTransferItemList", moduleType : 0, moduleName : "DataTransferItemList", pack : ["js","html"], typeParameters : [], isExtern : true}, FileSystemFileEntry : { name : "FileSystemFileEntry", moduleType : 0, moduleName : "FileSystemFileEntry", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMRectReadOnly : { name : "DOMRectReadOnly", moduleType : 0, moduleName : "DOMRectReadOnly", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechRecognitionError : { name : "SpeechRecognitionError", moduleType : 0, moduleName : "SpeechRecognitionError", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGGeometryElement : { name : "GeometryElement", moduleType : 0, moduleName : "GeometryElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, Configuration : { name : "Configuration", moduleType : 2, moduleName : "Configuration", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, OptionalEffectTiming : { name : "OptionalEffectTiming", moduleType : 2, moduleName : "OptionalEffectTiming", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLStyleElement : { name : "StyleElement", moduleType : 0, moduleName : "StyleElement", pack : ["js","html"], typeParameters : [], isExtern : true}, CSSRuleList : { name : "CSSRuleList", moduleType : 0, moduleName : "CSSRuleList", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGPathElement : { name : "PathElement", moduleType : 0, moduleName : "PathElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, AudioParam : { name : "AudioParam", moduleType : 0, moduleName : "AudioParam", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, DOMImplementation : { name : "DOMImplementation", moduleType : 0, moduleName : "DOMImplementation", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMRect : { name : "DOMRect", moduleType : 0, moduleName : "DOMRect", pack : ["js","html"], typeParameters : [], isExtern : true}, FileReader : { name : "FileReader", moduleType : 0, moduleName : "FileReader", pack : ["js","html"], typeParameters : [], isExtern : true}, RegExp : { name : "RegExp", moduleType : 0, moduleName : "RegExp", pack : ["js","lib"], typeParameters : [], isExtern : true}, SVGLength : { name : "Length", moduleType : 0, moduleName : "Length", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, IDBCursorWithValue : { name : "CursorWithValue", moduleType : 0, moduleName : "CursorWithValue", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, SVGFEMergeElement : { name : "FEMergeElement", moduleType : 0, moduleName : "FEMergeElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, AbortController : { name : "AbortController", moduleType : 0, moduleName : "AbortController", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGTSpanElement : { name : "TSpanElement", moduleType : 0, moduleName : "TSpanElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, TextEncoder : { name : "TextEncoder", moduleType : 0, moduleName : "TextEncoder", pack : ["js","html"], typeParameters : [], isExtern : true}, PowerPreference : { name : "PowerPreference", moduleType : 3, moduleName : "PowerPreference", pack : ["js","html","webgl"], typeParameters : [], isExtern : false}, RevocableProxy : { name : "RevocableProxy", moduleType : 2, moduleName : "Proxy", pack : ["js","lib"], typeParameters : ["T"], isExtern : false}, SVGFEFuncGElement : { name : "FEFuncGElement", moduleType : 0, moduleName : "FEFuncGElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGAnimatedEnumeration : { name : "AnimatedEnumeration", moduleType : 0, moduleName : "AnimatedEnumeration", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, MutationEvent : { name : "MutationEvent", moduleType : 0, moduleName : "MutationEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, PositionOptions : { name : "PositionOptions", moduleType : 2, moduleName : "PositionOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, PlaybackDirection : { name : "PlaybackDirection", moduleType : 3, moduleName : "PlaybackDirection", pack : ["js","html"], typeParameters : [], isExtern : false}, EXT_sRGB : { name : "EXTSrgb", moduleType : 0, moduleName : "EXTSrgb", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, InputEvent : { name : "InputEvent", moduleType : 0, moduleName : "InputEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLCollection : { name : "HTMLCollection", moduleType : 0, moduleName : "HTMLCollection", pack : ["js","html"], typeParameters : [], isExtern : true}, TypeError : { name : "TypeError", moduleType : 0, moduleName : "Error", pack : ["js","lib"], typeParameters : [], isExtern : true}, WebGLProgram : { name : "Program", moduleType : 0, moduleName : "Program", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, FontFaceSetIterator : { name : "FontFaceSetIterator", moduleType : 2, moduleName : "FontFaceSetIterator", pack : ["js","html"], typeParameters : [], isExtern : false}, ClipboardEventInit : { name : "ClipboardEventInit", moduleType : 2, moduleName : "ClipboardEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, NotificationDirection : { name : "NotificationDirection", moduleType : 3, moduleName : "NotificationDirection", pack : ["js","html"], typeParameters : [], isExtern : false}, ObjectEntry : { name : "ObjectEntry", moduleType : 3, moduleName : "Object", pack : ["js","lib"], typeParameters : [], isExtern : false}, MediaList : { name : "MediaList", moduleType : 0, moduleName : "MediaList", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.CurrencyDisplay" : { name : "CurrencyDisplay", moduleType : 3, moduleName : "NumberFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, History : { name : "History", moduleType : 0, moduleName : "History", pack : ["js","html"], typeParameters : [], isExtern : true}, PeriodicWave : { name : "PeriodicWave", moduleType : 0, moduleName : "PeriodicWave", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, ProgressEvent : { name : "ProgressEvent", moduleType : 0, moduleName : "ProgressEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, TouchInit : { name : "TouchInit", moduleType : 2, moduleName : "TouchInit", pack : ["js","html"], typeParameters : [], isExtern : false}, CSSSupportsRule : { name : "CSSSupportsRule", moduleType : 0, moduleName : "CSSSupportsRule", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMStringMap : { name : "DOMStringMap", moduleType : 0, moduleName : "DOMStringMap", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechRecognition : { name : "SpeechRecognition", moduleType : 0, moduleName : "SpeechRecognition", pack : ["js","html"], typeParameters : [], isExtern : true}, AudioTrackList : { name : "AudioTrackList", moduleType : 0, moduleName : "AudioTrackList", pack : ["js","html"], typeParameters : [], isExtern : true}, FontFaceDescriptors : { name : "FontFaceDescriptors", moduleType : 2, moduleName : "FontFaceDescriptors", pack : ["js","html"], typeParameters : [], isExtern : false}, XMLHttpRequest : { name : "XMLHttpRequest", moduleType : 0, moduleName : "XMLHttpRequest", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLOptionsCollection : { name : "HTMLOptionsCollection", moduleType : 0, moduleName : "HTMLOptionsCollection", pack : ["js","html"], typeParameters : [], isExtern : true}, FillMode : { name : "FillMode", moduleType : 3, moduleName : "FillMode", pack : ["js","html"], typeParameters : [], isExtern : false}, IdentityValidationResult : { name : "IdentityValidationResult", moduleType : 2, moduleName : "IdentityValidationResult", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, SpeechSynthesisErrorEvent : { name : "SpeechSynthesisErrorEvent", moduleType : 0, moduleName : "SpeechSynthesisErrorEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechRecognitionErrorInit : { name : "SpeechRecognitionErrorInit", moduleType : 2, moduleName : "SpeechRecognitionErrorInit", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLTableElement : { name : "TableElement", moduleType : 0, moduleName : "TableElement", pack : ["js","html"], typeParameters : [], isExtern : true}, ANGLE_instanced_arrays : { name : "ANGLEInstancedArrays", moduleType : 0, moduleName : "ANGLEInstancedArrays", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, AnimationTimeline : { name : "AnimationTimeline", moduleType : 0, moduleName : "AnimationTimeline", pack : ["js","html"], typeParameters : [], isExtern : true}, TouchList : { name : "TouchList", moduleType : 0, moduleName : "TouchList", pack : ["js","html"], typeParameters : [], isExtern : true}, WaveShaperNode : { name : "WaveShaperNode", moduleType : 0, moduleName : "WaveShaperNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, StorageEvent : { name : "StorageEvent", moduleType : 0, moduleName : "StorageEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, ArrayBuffer : { name : "ArrayBuffer", moduleType : 0, moduleName : "ArrayBuffer", pack : ["js","lib"], typeParameters : [], isExtern : true}, EXT_texture_filter_anisotropic : { name : "EXTTextureFilterAnisotropic", moduleType : 0, moduleName : "EXTTextureFilterAnisotropic", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, Animation : { name : "Animation", moduleType : 0, moduleName : "Animation", pack : ["js","html"], typeParameters : [], isExtern : true}, CSS : { name : "CSS", moduleType : 0, moduleName : "CSS", pack : ["js","html"], typeParameters : [], isExtern : true}, InputEventInit : { name : "InputEventInit", moduleType : 2, moduleName : "InputEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, CacheStorage : { name : "CacheStorage", moduleType : 0, moduleName : "CacheStorage", pack : ["js","html"], typeParameters : [], isExtern : true}, IDBOpenDBRequest : { name : "OpenDBRequest", moduleType : 0, moduleName : "OpenDBRequest", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, ScrollAreaEvent : { name : "ScrollAreaEvent", moduleType : 0, moduleName : "ScrollAreaEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, Clients : { name : "Clients", moduleType : 0, moduleName : "Clients", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechSynthesisErrorEventInit : { name : "SpeechSynthesisErrorEventInit", moduleType : 2, moduleName : "SpeechSynthesisErrorEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, PermissionStatus : { name : "PermissionStatus", moduleType : 0, moduleName : "PermissionStatus", pack : ["js","html"], typeParameters : [], isExtern : true}, PropertyNodeList : { name : "PropertyNodeList", moduleType : 0, moduleName : "PropertyNodeList", pack : ["js","html"], typeParameters : [], isExtern : true}, PushSubscription : { name : "PushSubscription", moduleType : 0, moduleName : "PushSubscription", pack : ["js","html","push"], typeParameters : [], isExtern : true}, FileList : { name : "FileList", moduleType : 0, moduleName : "FileList", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGAnimatedRect : { name : "AnimatedRect", moduleType : 0, moduleName : "AnimatedRect", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PathSegCurvetoCubicSmoothRel : { name : "PathSegCurvetoCubicSmoothRel", moduleType : 2, moduleName : "PathSegCurvetoCubicSmoothRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, VideoStreamTrack : { name : "VideoStreamTrack", moduleType : 0, moduleName : "VideoStreamTrack", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechGrammarList : { name : "SpeechGrammarList", moduleType : 0, moduleName : "SpeechGrammarList", pack : ["js","html"], typeParameters : [], isExtern : true}, RadioNodeList : { name : "RadioNodeList", moduleType : 0, moduleName : "RadioNodeList", pack : ["js","html"], typeParameters : [], isExtern : true}, AnalyserNode : { name : "AnalyserNode", moduleType : 0, moduleName : "AnalyserNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, ObserverCallback : { name : "ObserverCallback", moduleType : 2, moduleName : "ObserverCallback", pack : ["js","html"], typeParameters : [], isExtern : false}, SpeechRecognitionResult : { name : "SpeechRecognitionResult", moduleType : 0, moduleName : "SpeechRecognitionResult", pack : ["js","html"], typeParameters : [], isExtern : true}, AudioNode : { name : "AudioNode", moduleType : 0, moduleName : "AudioNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, HTMLMapElement : { name : "MapElement", moduleType : 0, moduleName : "MapElement", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGStopElement : { name : "StopElement", moduleType : 0, moduleName : "StopElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, IntersectionObserverInit : { name : "IntersectionObserverInit", moduleType : 2, moduleName : "IntersectionObserverInit", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGTextPositioningElement : { name : "TextPositioningElement", moduleType : 0, moduleName : "TextPositioningElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, UIEvent : { name : "UIEvent", moduleType : 0, moduleName : "UIEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, PageTransitionEvent : { name : "PageTransitionEvent", moduleType : 0, moduleName : "PageTransitionEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGTitleElement : { name : "TitleElement", moduleType : 0, moduleName : "TitleElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PositionAlignSetting : { name : "PositionAlignSetting", moduleType : 3, moduleName : "PositionAlignSetting", pack : ["js","html"], typeParameters : [], isExtern : false}, Geolocation : { name : "Geolocation", moduleType : 2, moduleName : "Geolocation", pack : ["js","html"], typeParameters : [], isExtern : false}, Intl : { name : "Intl", moduleType : 0, moduleName : "Intl", pack : ["js","lib"], typeParameters : [], isExtern : true}, HTMLElement : { name : "Element", moduleType : 0, moduleName : "Element", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechSynthesisErrorCode : { name : "SpeechSynthesisErrorCode", moduleType : 3, moduleName : "SpeechSynthesisErrorCode", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.Usage" : { name : "Usage", moduleType : 3, moduleName : "Collator", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, "WebAssembly.Table" : { name : "Table", moduleType : 0, moduleName : "Table", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : true}, GamepadEventInit : { name : "GamepadEventInit", moduleType : 2, moduleName : "GamepadEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, WebGLVertexArrayObject : { name : "VertexArrayObject", moduleType : 0, moduleName : "VertexArrayObject", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, PerformanceEntry : { name : "PerformanceEntry", moduleType : 0, moduleName : "PerformanceEntry", pack : ["js","html"], typeParameters : [], isExtern : true}, TextDecoderOptions : { name : "TextDecoderOptions", moduleType : 2, moduleName : "TextDecoderOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLAnchorElement : { name : "AnchorElement", moduleType : 0, moduleName : "AnchorElement", pack : ["js","html"], typeParameters : [], isExtern : true}, HeadersIterator : { name : "HeadersIterator", moduleType : 2, moduleName : "HeadersIterator", pack : ["js","html"], typeParameters : [], isExtern : false}, ServiceWorkerGlobalScope : { name : "ServiceWorkerGlobalScope", moduleType : 0, moduleName : "ServiceWorkerGlobalScope", pack : ["js","html"], typeParameters : [], isExtern : true}, PushSubscriptionOptionsInit : { name : "PushSubscriptionOptionsInit", moduleType : 2, moduleName : "PushSubscriptionOptionsInit", pack : ["js","html","push"], typeParameters : [], isExtern : false}, ErrorCallback : { name : "ErrorCallback", moduleType : 2, moduleName : "ErrorCallback", pack : ["js","html"], typeParameters : [], isExtern : false}, FocusEventInit : { name : "FocusEventInit", moduleType : 2, moduleName : "FocusEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, ScrollLogicalPosition : { name : "ScrollLogicalPosition", moduleType : 3, moduleName : "ScrollLogicalPosition", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.NumberFormatSupportedLocalesOfOptions" : { name : "NumberFormatSupportedLocalesOfOptions", moduleType : 2, moduleName : "NumberFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, SpeechSynthesisVoice : { name : "SpeechSynthesisVoice", moduleType : 0, moduleName : "SpeechSynthesisVoice", pack : ["js","html"], typeParameters : [], isExtern : true}, CDATASection : { name : "CDATASection", moduleType : 0, moduleName : "CDATASection", pack : ["js","html"], typeParameters : [], isExtern : true}, PerformanceMark : { name : "PerformanceMark", moduleType : 0, moduleName : "PerformanceMark", pack : ["js","html"], typeParameters : [], isExtern : true}, MIDIAccess : { name : "MIDIAccess", moduleType : 0, moduleName : "MIDIAccess", pack : ["js","html","midi"], typeParameters : [], isExtern : true}, FetchState : { name : "FetchState", moduleType : 3, moduleName : "FetchState", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLHeadElement : { name : "HeadElement", moduleType : 0, moduleName : "HeadElement", pack : ["js","html"], typeParameters : [], isExtern : true}, DOMError : { name : "DOMError", moduleType : 0, moduleName : "DOMError", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLTextAreaElement : { name : "TextAreaElement", moduleType : 0, moduleName : "TextAreaElement", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGPoint : { name : "Point", moduleType : 0, moduleName : "Point", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, MutationObserverInit : { name : "MutationObserverInit", moduleType : 2, moduleName : "MutationObserverInit", pack : ["js","html"], typeParameters : [], isExtern : false}, Iterator : { name : "Iterator", moduleType : 2, moduleName : "Iterator", pack : ["js","lib"], typeParameters : ["T"], isExtern : false}, ConstrainDoubleRange : { name : "ConstrainDoubleRange", moduleType : 2, moduleName : "ConstrainDoubleRange", pack : ["js","html"], typeParameters : [], isExtern : false}, CloseEventInit : { name : "CloseEventInit", moduleType : 2, moduleName : "CloseEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLIFrameElement : { name : "IFrameElement", moduleType : 0, moduleName : "IFrameElement", pack : ["js","html"], typeParameters : [], isExtern : true}, IdentityProviderDetails : { name : "IdentityProviderDetails", moduleType : 2, moduleName : "IdentityProviderDetails", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, XSLTProcessor : { name : "XSLTProcessor", moduleType : 0, moduleName : "XSLTProcessor", pack : ["js","html"], typeParameters : [], isExtern : true}, URL : { name : "URL", moduleType : 0, moduleName : "URL", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGFilterElement : { name : "FilterElement", moduleType : 0, moduleName : "FilterElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SpeechGrammar : { name : "SpeechGrammar", moduleType : 0, moduleName : "SpeechGrammar", pack : ["js","html"], typeParameters : [], isExtern : true}, OESTextureHalfFloatLinear : { name : "OESTextureHalfFloatLinear", moduleType : 2, moduleName : "OESTextureHalfFloatLinear", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, WEBGL_compressed_texture_pvrtc : { name : "WEBGLCompressedTexturePvrtc", moduleType : 0, moduleName : "WEBGLCompressedTexturePvrtc", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, WeakSet : { name : "WeakSet", moduleType : 0, moduleName : "WeakSet", pack : ["js","lib"], typeParameters : [], isExtern : true}, AudioBufferSourceOptions : { name : "AudioBufferSourceOptions", moduleType : 2, moduleName : "AudioBufferSourceOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, RTCRtpSender : { name : "RtpSender", moduleType : 0, moduleName : "RtpSender", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, DOMMatrix : { name : "DOMMatrix", moduleType : 0, moduleName : "DOMMatrix", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.NumberFormat" : { name : "NumberFormat", moduleType : 0, moduleName : "NumberFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : true}, IDBCursor : { name : "Cursor", moduleType : 0, moduleName : "Cursor", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, KeyboardEvent : { name : "KeyboardEvent", moduleType : 0, moduleName : "KeyboardEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, ScriptProcessorNode : { name : "ScriptProcessorNode", moduleType : 0, moduleName : "ScriptProcessorNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, MediaKeyStatusMap : { name : "MediaKeyStatusMap", moduleType : 0, moduleName : "MediaKeyStatusMap", pack : ["js","html","eme"], typeParameters : [], isExtern : true}, "Intl.DateTimeFormatOptions" : { name : "DateTimeFormatOptions", moduleType : 2, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, WorkerDebuggerGlobalScope : { name : "WorkerDebuggerGlobalScope", moduleType : 0, moduleName : "WorkerDebuggerGlobalScope", pack : ["js","html"], typeParameters : [], isExtern : true}, KeyEvent : { name : "KeyEvent", moduleType : 0, moduleName : "KeyEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, PointerEvent : { name : "PointerEvent", moduleType : 0, moduleName : "PointerEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, WEBGL_compressed_texture_etc : { name : "WEBGLCompressedTextureEtc", moduleType : 0, moduleName : "WEBGLCompressedTextureEtc", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, HTMLOptionElement : { name : "OptionElement", moduleType : 0, moduleName : "OptionElement", pack : ["js","html"], typeParameters : [], isExtern : true}, ExtendableEvent : { name : "ExtendableEvent", moduleType : 0, moduleName : "ExtendableEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.DateTimeFormat" : { name : "DateTimeFormat", moduleType : 0, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : true}, Coordinates : { name : "Coordinates", moduleType : 2, moduleName : "Coordinates", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGDefsElement : { name : "DefsElement", moduleType : 0, moduleName : "DefsElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, DelayOptions : { name : "DelayOptions", moduleType : 2, moduleName : "DelayOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, MessagePort : { name : "MessagePort", moduleType : 0, moduleName : "MessagePort", pack : ["js","html"], typeParameters : [], isExtern : true}, "Intl.NumberFormatPartType" : { name : "NumberFormatPartType", moduleType : 3, moduleName : "NumberFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, Text : { name : "Text", moduleType : 0, moduleName : "Text", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaStreamConstraints : { name : "MediaStreamConstraints", moduleType : 2, moduleName : "MediaStreamConstraints", pack : ["js","html"], typeParameters : [], isExtern : false}, "WebAssembly.RuntimeError" : { name : "RuntimeError", moduleType : 0, moduleName : "RuntimeError", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : true}, RtxParameters : { name : "RtxParameters", moduleType : 2, moduleName : "RtxParameters", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, ChannelPixelLayoutDataType : { name : "ChannelPixelLayoutDataType", moduleType : 3, moduleName : "ChannelPixelLayoutDataType", pack : ["js","html"], typeParameters : [], isExtern : false}, StorageEstimate : { name : "StorageEstimate", moduleType : 2, moduleName : "StorageEstimate", pack : ["js","html"], typeParameters : [], isExtern : false}, "WebAssembly.MemoryDescriptor" : { name : "MemoryDescriptor", moduleType : 2, moduleName : "Memory", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : false}, ImageCaptureError : { name : "ImageCaptureError", moduleType : 0, moduleName : "ImageCaptureError", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGFEDropShadowElement : { name : "FEDropShadowElement", moduleType : 0, moduleName : "FEDropShadowElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PromiseNativeHandler : { name : "PromiseNativeHandler", moduleType : 2, moduleName : "PromiseNativeHandler", pack : ["js","html"], typeParameters : [], isExtern : false}, OfferAnswerOptions : { name : "OfferAnswerOptions", moduleType : 2, moduleName : "OfferAnswerOptions", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, ConvolverNode : { name : "ConvolverNode", moduleType : 0, moduleName : "ConvolverNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, SVGTextElement : { name : "TextElement", moduleType : 0, moduleName : "TextElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, IDBDatabase : { name : "Database", moduleType : 0, moduleName : "Database", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, WebGLShader : { name : "Shader", moduleType : 0, moduleName : "Shader", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, AudioStreamTrack : { name : "AudioStreamTrack", moduleType : 0, moduleName : "AudioStreamTrack", pack : ["js","html"], typeParameters : [], isExtern : true}, ObjectPropertyDescriptor : { name : "ObjectPropertyDescriptor", moduleType : 2, moduleName : "Object", pack : ["js","lib"], typeParameters : [], isExtern : false}, AnimationEventInit : { name : "AnimationEventInit", moduleType : 2, moduleName : "AnimationEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, WorkerLocation : { name : "WorkerLocation", moduleType : 0, moduleName : "WorkerLocation", pack : ["js","html"], typeParameters : [], isExtern : true}, CSSConditionRule : { name : "CSSConditionRule", moduleType : 0, moduleName : "CSSConditionRule", pack : ["js","html"], typeParameters : [], isExtern : true}, ArrayBufferView : { name : "ArrayBufferView", moduleType : 0, moduleName : "ArrayBufferView", pack : ["js","lib"], typeParameters : [], isExtern : true}, IntersectionObserver : { name : "IntersectionObserver", moduleType : 0, moduleName : "IntersectionObserver", pack : ["js","html"], typeParameters : [], isExtern : true}, WebGLTexture : { name : "Texture", moduleType : 0, moduleName : "Texture", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, SVGPolylineElement : { name : "PolylineElement", moduleType : 0, moduleName : "PolylineElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, HTMLEmbedElement : { name : "EmbedElement", moduleType : 0, moduleName : "EmbedElement", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLLabelElement : { name : "LabelElement", moduleType : 0, moduleName : "LabelElement", pack : ["js","html"], typeParameters : [], isExtern : true}, BlobEventInit : { name : "BlobEventInit", moduleType : 2, moduleName : "BlobEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGNumber : { name : "Number", moduleType : 0, moduleName : "Number", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PathSegMovetoRel : { name : "PathSegMovetoRel", moduleType : 2, moduleName : "PathSegMovetoRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, Gamepad : { name : "Gamepad", moduleType : 0, moduleName : "Gamepad", pack : ["js","html"], typeParameters : [], isExtern : true}, Reflect : { name : "Reflect", moduleType : 0, moduleName : "Reflect", pack : ["js","lib"], typeParameters : [], isExtern : true}, ResponseInit : { name : "ResponseInit", moduleType : 2, moduleName : "ResponseInit", pack : ["js","html"], typeParameters : [], isExtern : false}, "Intl.HourRepresentation" : { name : "HourRepresentation", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, ObjectPrototype : { name : "ObjectPrototype", moduleType : 2, moduleName : "Object", pack : ["js","lib"], typeParameters : [], isExtern : false}, CSSPseudoElement : { name : "CSSPseudoElement", moduleType : 0, moduleName : "CSSPseudoElement", pack : ["js","html"], typeParameters : [], isExtern : true}, BiquadFilterType : { name : "BiquadFilterType", moduleType : 3, moduleName : "BiquadFilterType", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, HTMLSlotElement : { name : "SlotElement", moduleType : 0, moduleName : "SlotElement", pack : ["js","html"], typeParameters : [], isExtern : true}, ValidityState : { name : "ValidityState", moduleType : 0, moduleName : "ValidityState", pack : ["js","html"], typeParameters : [], isExtern : true}, PathSegCurvetoQuadraticSmoothRel : { name : "PathSegCurvetoQuadraticSmoothRel", moduleType : 2, moduleName : "PathSegCurvetoQuadraticSmoothRel", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, EventSourceInit : { name : "EventSourceInit", moduleType : 2, moduleName : "EventSourceInit", pack : ["js","html"], typeParameters : [], isExtern : false}, EffectTiming : { name : "EffectTiming", moduleType : 2, moduleName : "EffectTiming", pack : ["js","html"], typeParameters : [], isExtern : false}, RTCRtpTransceiver : { name : "RtpTransceiver", moduleType : 0, moduleName : "RtpTransceiver", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, AudioProcessingEvent : { name : "AudioProcessingEvent", moduleType : 0, moduleName : "AudioProcessingEvent", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, WebGLBuffer : { name : "Buffer", moduleType : 0, moduleName : "Buffer", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, WebGLContextEvent : { name : "ContextEvent", moduleType : 0, moduleName : "ContextEvent", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, MediaStreamError : { name : "MediaStreamError", moduleType : 2, moduleName : "MediaStreamError", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLDivElement : { name : "DivElement", moduleType : 0, moduleName : "DivElement", pack : ["js","html"], typeParameters : [], isExtern : true}, RTCSessionDescription : { name : "SessionDescription", moduleType : 0, moduleName : "SessionDescription", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, BufferSource : { name : "BufferSource", moduleType : 3, moduleName : "BufferSource", pack : ["js","lib"], typeParameters : [], isExtern : false}, "Intl.EraRepresentation" : { name : "EraRepresentation", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, SecurityPolicyViolationEvent : { name : "SecurityPolicyViolationEvent", moduleType : 0, moduleName : "SecurityPolicyViolationEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, StorageEventInit : { name : "StorageEventInit", moduleType : 2, moduleName : "StorageEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, OfflineAudioContext : { name : "OfflineAudioContext", moduleType : 0, moduleName : "OfflineAudioContext", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, "Intl.PluralRulesResolvedOptions" : { name : "PluralRulesResolvedOptions", moduleType : 2, moduleName : "PluralRules", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, MessageEvent : { name : "MessageEvent", moduleType : 0, moduleName : "MessageEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, SupportedType : { name : "SupportedType", moduleType : 3, moduleName : "SupportedType", pack : ["js","html"], typeParameters : [], isExtern : false}, Image : { name : "Image", moduleType : 0, moduleName : "Image", pack : ["js","html"], typeParameters : [], isExtern : true}, CanvasRenderingContext2D : { name : "CanvasRenderingContext2D", moduleType : 0, moduleName : "CanvasRenderingContext2D", pack : ["js","html"], typeParameters : [], isExtern : true}, DisplayNameOptions : { name : "DisplayNameOptions", moduleType : 2, moduleName : "DisplayNameOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLTitleElement : { name : "TitleElement", moduleType : 0, moduleName : "TitleElement", pack : ["js","html"], typeParameters : [], isExtern : true}, Uint8Array : { name : "Uint8Array", moduleType : 0, moduleName : "Uint8Array", pack : ["js","lib"], typeParameters : [], isExtern : true}, LocaleInfo : { name : "LocaleInfo", moduleType : 2, moduleName : "LocaleInfo", pack : ["js","html"], typeParameters : [], isExtern : false}, ChannelSplitterOptions : { name : "ChannelSplitterOptions", moduleType : 2, moduleName : "ChannelSplitterOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, ScreenOrientation : { name : "ScreenOrientation", moduleType : 0, moduleName : "ScreenOrientation", pack : ["js","html"], typeParameters : [], isExtern : true}, SVGFESpecularLightingElement : { name : "FESpecularLightingElement", moduleType : 0, moduleName : "FESpecularLightingElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, "Intl.RelativeTimeFormatSupportedLocalesOfOptions" : { name : "RelativeTimeFormatSupportedLocalesOfOptions", moduleType : 2, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, CSSNamespaceRule : { name : "CSSNamespaceRule", moduleType : 0, moduleName : "CSSNamespaceRule", pack : ["js","html"], typeParameters : [], isExtern : true}, DataChannelInit : { name : "DataChannelInit", moduleType : 2, moduleName : "DataChannelInit", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, PeriodicWaveOptions : { name : "PeriodicWaveOptions", moduleType : 2, moduleName : "PeriodicWaveOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, "Intl.RelativeTimeFormatOptions" : { name : "RelativeTimeFormatOptions", moduleType : 2, moduleName : "RelativeTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, AudioListener : { name : "AudioListener", moduleType : 0, moduleName : "AudioListener", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, SVGAnimatedLengthList : { name : "AnimatedLengthList", moduleType : 0, moduleName : "AnimatedLengthList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, PushSubscriptionOptions : { name : "PushSubscriptionOptions", moduleType : 0, moduleName : "PushSubscriptionOptions", pack : ["js","html","push"], typeParameters : [], isExtern : true}, WEBGL_compressed_texture_s3tc_srgb : { name : "WEBGLCompressedTextureS3tcSrgb", moduleType : 0, moduleName : "WEBGLCompressedTextureS3tcSrgb", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, SVGFEColorMatrixElement : { name : "FEColorMatrixElement", moduleType : 0, moduleName : "FEColorMatrixElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGFEDistantLightElement : { name : "FEDistantLightElement", moduleType : 0, moduleName : "FEDistantLightElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, StorageType : { name : "StorageType", moduleType : 3, moduleName : "StorageType", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGMetadataElement : { name : "MetadataElement", moduleType : 0, moduleName : "MetadataElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, CSSPageRule : { name : "CSSPageRule", moduleType : 0, moduleName : "CSSPageRule", pack : ["js","html"], typeParameters : [], isExtern : true}, IDBTransaction : { name : "Transaction", moduleType : 0, moduleName : "Transaction", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, OESTextureFloat : { name : "OESTextureFloat", moduleType : 2, moduleName : "OESTextureFloat", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, PerformanceObserver : { name : "PerformanceObserver", moduleType : 0, moduleName : "PerformanceObserver", pack : ["js","html"], typeParameters : [], isExtern : true}, "WebAssembly.ValueType" : { name : "ValueType", moduleType : 3, moduleName : "Global", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : false}, EXTFragDepth : { name : "EXTFragDepth", moduleType : 2, moduleName : "EXTFragDepth", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, "WebAssembly.CompileError" : { name : "CompileError", moduleType : 0, moduleName : "CompileError", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : true}, MediaKeyNeededEventInit : { name : "MediaKeyNeededEventInit", moduleType : 2, moduleName : "MediaKeyNeededEventInit", pack : ["js","html","eme"], typeParameters : [], isExtern : false}, ComputedEffectTiming : { name : "ComputedEffectTiming", moduleType : 2, moduleName : "ComputedEffectTiming", pack : ["js","html"], typeParameters : [], isExtern : false}, BinaryType : { name : "BinaryType", moduleType : 3, moduleName : "BinaryType", pack : ["js","html"], typeParameters : [], isExtern : false}, AnimationFilter : { name : "AnimationFilter", moduleType : 2, moduleName : "AnimationFilter", pack : ["js","html"], typeParameters : [], isExtern : false}, CSSStyleRule : { name : "CSSStyleRule", moduleType : 0, moduleName : "CSSStyleRule", pack : ["js","html"], typeParameters : [], isExtern : true}, FrameType : { name : "FrameType", moduleType : 3, moduleName : "FrameType", pack : ["js","html"], typeParameters : [], isExtern : false}, FetchObserver : { name : "FetchObserver", moduleType : 0, moduleName : "FetchObserver", pack : ["js","html"], typeParameters : [], isExtern : true}, IdentityProvider : { name : "IdentityProvider", moduleType : 2, moduleName : "IdentityProvider", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, "Intl.MinuteRepresentation" : { name : "MinuteRepresentation", moduleType : 3, moduleName : "DateTimeFormat", pack : ["js","lib","intl"], typeParameters : [], isExtern : false}, Exception : { name : "Exception", moduleType : 2, moduleName : "Exception", pack : ["js","html"], typeParameters : [], isExtern : false}, DeviceMotionEvent : { name : "DeviceMotionEvent", moduleType : 0, moduleName : "DeviceMotionEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, DeviceRotationRate : { name : "DeviceRotationRate", moduleType : 2, moduleName : "DeviceRotationRate", pack : ["js","html"], typeParameters : [], isExtern : false}, AudioContextOptions : { name : "AudioContextOptions", moduleType : 2, moduleName : "AudioContextOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, SVGGraphicsElement : { name : "GraphicsElement", moduleType : 0, moduleName : "GraphicsElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, TrackEventInit : { name : "TrackEventInit", moduleType : 2, moduleName : "TrackEventInit", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, SVGFEGaussianBlurElement : { name : "FEGaussianBlurElement", moduleType : 0, moduleName : "FEGaussianBlurElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, TransitionEvent : { name : "TransitionEvent", moduleType : 0, moduleName : "TransitionEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, RtpTransceiverDirection : { name : "RtpTransceiverDirection", moduleType : 3, moduleName : "RtpTransceiverDirection", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, IteratorStep : { name : "IteratorStep", moduleType : 2, moduleName : "Iterator", pack : ["js","lib"], typeParameters : ["T"], isExtern : false}, NodeList : { name : "NodeList", moduleType : 0, moduleName : "NodeList", pack : ["js","html"], typeParameters : [], isExtern : true}, IDBIndex : { name : "Index", moduleType : 0, moduleName : "Index", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, DragEventInit : { name : "DragEventInit", moduleType : 2, moduleName : "DragEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGPointList : { name : "PointList", moduleType : 0, moduleName : "PointList", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, ChannelPixelLayout : { name : "ChannelPixelLayout", moduleType : 2, moduleName : "ChannelPixelLayout", pack : ["js","html"], typeParameters : [], isExtern : false}, "WebAssembly.Global" : { name : "Global", moduleType : 0, moduleName : "Global", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : true}, CanvasGradient : { name : "CanvasGradient", moduleType : 0, moduleName : "CanvasGradient", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLOptGroupElement : { name : "OptGroupElement", moduleType : 0, moduleName : "OptGroupElement", pack : ["js","html"], typeParameters : [], isExtern : true}, GetNotificationOptions : { name : "GetNotificationOptions", moduleType : 2, moduleName : "GetNotificationOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, Notification : { name : "Notification", moduleType : 0, moduleName : "Notification", pack : ["js","html"], typeParameters : [], isExtern : true}, FileSystemDirectoryEntry : { name : "FileSystemDirectoryEntry", moduleType : 0, moduleName : "FileSystemDirectoryEntry", pack : ["js","html"], typeParameters : [], isExtern : true}, ProxyHandler : { name : "ProxyHandler", moduleType : 2, moduleName : "Proxy", pack : ["js","lib"], typeParameters : ["T"], isExtern : false}, MutationRecord : { name : "MutationRecord", moduleType : 0, moduleName : "MutationRecord", pack : ["js","html"], typeParameters : [], isExtern : true}, HTMLLinkElement : { name : "LinkElement", moduleType : 0, moduleName : "LinkElement", pack : ["js","html"], typeParameters : [], isExtern : true}, MimeTypeArray : { name : "MimeTypeArray", moduleType : 0, moduleName : "MimeTypeArray", pack : ["js","html"], typeParameters : [], isExtern : true}, KeyframeEffectOptions : { name : "KeyframeEffectOptions", moduleType : 2, moduleName : "KeyframeEffectOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, HTMLHtmlElement : { name : "HtmlElement", moduleType : 0, moduleName : "HtmlElement", pack : ["js","html"], typeParameters : [], isExtern : true}, CSSMediaRule : { name : "CSSMediaRule", moduleType : 0, moduleName : "CSSMediaRule", pack : ["js","html"], typeParameters : [], isExtern : true}, MediaKeyMessageEventInit : { name : "MediaKeyMessageEventInit", moduleType : 2, moduleName : "MediaKeyMessageEventInit", pack : ["js","html","eme"], typeParameters : [], isExtern : false}, MIDIOptions : { name : "MIDIOptions", moduleType : 2, moduleName : "MIDIOptions", pack : ["js","html","midi"], typeParameters : [], isExtern : false}, HTMLMenuElement : { name : "MenuElement", moduleType : 0, moduleName : "MenuElement", pack : ["js","html"], typeParameters : [], isExtern : true}, Performance : { name : "Performance", moduleType : 0, moduleName : "Performance", pack : ["js","html"], typeParameters : [], isExtern : true}, OESElementIndexUint : { name : "OESElementIndexUint", moduleType : 2, moduleName : "OESElementIndexUint", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, MouseEventInit : { name : "MouseEventInit", moduleType : 2, moduleName : "MouseEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, WEBGLLoseContext : { name : "WEBGLLoseContext", moduleType : 2, moduleName : "WEBGLLoseContext", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, TextTrackList : { name : "TextTrackList", moduleType : 0, moduleName : "TextTrackList", pack : ["js","html"], typeParameters : [], isExtern : true}, RequestRedirect : { name : "RequestRedirect", moduleType : 3, moduleName : "RequestRedirect", pack : ["js","html"], typeParameters : [], isExtern : false}, StereoPannerNode : { name : "StereoPannerNode", moduleType : 0, moduleName : "StereoPannerNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, EventInit : { name : "EventInit", moduleType : 2, moduleName : "EventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, MIDIConnectionEventInit : { name : "MIDIConnectionEventInit", moduleType : 2, moduleName : "MIDIConnectionEventInit", pack : ["js","html","midi"], typeParameters : [], isExtern : false}, HTMLBRElement : { name : "BRElement", moduleType : 0, moduleName : "BRElement", pack : ["js","html"], typeParameters : [], isExtern : true}, PerformanceObserverEntryList : { name : "PerformanceObserverEntryList", moduleType : 0, moduleName : "PerformanceObserverEntryList", pack : ["js","html"], typeParameters : [], isExtern : true}, FormDataIterator : { name : "FormDataIterator", moduleType : 2, moduleName : "FormDataIterator", pack : ["js","html"], typeParameters : [], isExtern : false}, MediaStreamAudioDestinationNode : { name : "MediaStreamAudioDestinationNode", moduleType : 0, moduleName : "MediaStreamAudioDestinationNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, WEBGLDebugShaders : { name : "WEBGLDebugShaders", moduleType : 2, moduleName : "WEBGLDebugShaders", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : false}, ConstantSourceNode : { name : "ConstantSourceNode", moduleType : 0, moduleName : "ConstantSourceNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, PathSegLinetoHorizontalAbs : { name : "PathSegLinetoHorizontalAbs", moduleType : 2, moduleName : "PathSegLinetoHorizontalAbs", pack : ["js","html","svg"], typeParameters : [], isExtern : false}, RtpContributingSource : { name : "RtpContributingSource", moduleType : 2, moduleName : "RtpContributingSource", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, GamepadMappingType : { name : "GamepadMappingType", moduleType : 3, moduleName : "GamepadMappingType", pack : ["js","html"], typeParameters : [], isExtern : false}, SVGSymbolElement : { name : "SymbolElement", moduleType : 0, moduleName : "SymbolElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, Screen : { name : "Screen", moduleType : 0, moduleName : "Screen", pack : ["js","html"], typeParameters : [], isExtern : true}, RequestMode : { name : "RequestMode", moduleType : 3, moduleName : "RequestMode", pack : ["js","html"], typeParameters : [], isExtern : false}, IDBFileRequest : { name : "FileRequest", moduleType : 0, moduleName : "FileRequest", pack : ["js","html","idb"], typeParameters : [], isExtern : true}, WEBGL_color_buffer_float : { name : "WEBGLColorBufferFloat", moduleType : 0, moduleName : "WEBGLColorBufferFloat", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, XPathNSResolver : { name : "XPathNSResolver", moduleType : 2, moduleName : "XPathNSResolver", pack : ["js","html"], typeParameters : [], isExtern : false}, GL : { name : "GL", moduleType : 2, moduleName : "GL", pack : ["js","html","webgl"], typeParameters : [], isExtern : false}, WebGL2RenderingContext : { name : "WebGL2RenderingContext", moduleType : 0, moduleName : "WebGL2RenderingContext", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, ConstantSourceOptions : { name : "ConstantSourceOptions", moduleType : 2, moduleName : "ConstantSourceOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, "WebAssembly.GlobalDescriptor" : { name : "GlobalDescriptor", moduleType : 2, moduleName : "Global", pack : ["js","lib","webassembly"], typeParameters : [], isExtern : false}, SVGSVGElement : { name : "SVGElement", moduleType : 0, moduleName : "SVGElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, HTMLProgressElement : { name : "ProgressElement", moduleType : 0, moduleName : "ProgressElement", pack : ["js","html"], typeParameters : [], isExtern : true}, SourceBufferList : { name : "SourceBufferList", moduleType : 0, moduleName : "SourceBufferList", pack : ["js","html"], typeParameters : [], isExtern : true}, DeviceAcceleration : { name : "DeviceAcceleration", moduleType : 2, moduleName : "DeviceAcceleration", pack : ["js","html"], typeParameters : [], isExtern : false}, File : { name : "File", moduleType : 0, moduleName : "File", pack : ["js","html"], typeParameters : [], isExtern : true}, RTCPeerConnection : { name : "PeerConnection", moduleType : 0, moduleName : "PeerConnection", pack : ["js","html","rtc"], typeParameters : [], isExtern : true}, MediaTrackSupportedConstraints : { name : "MediaTrackSupportedConstraints", moduleType : 2, moduleName : "MediaTrackSupportedConstraints", pack : ["js","html"], typeParameters : [], isExtern : false}, FontFaceSetIteratorResult : { name : "FontFaceSetIteratorResult", moduleType : 2, moduleName : "FontFaceSetIteratorResult", pack : ["js","html"], typeParameters : [], isExtern : false}, EventListener : { name : "EventListener", moduleType : 2, moduleName : "EventListener", pack : ["js","html"], typeParameters : [], isExtern : false}, AudioBuffer : { name : "AudioBuffer", moduleType : 0, moduleName : "AudioBuffer", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, GetRootNodeOptions : { name : "GetRootNodeOptions", moduleType : 2, moduleName : "GetRootNodeOptions", pack : ["js","html"], typeParameters : [], isExtern : false}, Position : { name : "Position", moduleType : 2, moduleName : "Position", pack : ["js","html"], typeParameters : [], isExtern : false}, Int16Array : { name : "Int16Array", moduleType : 0, moduleName : "Int16Array", pack : ["js","lib"], typeParameters : [], isExtern : true}, SVGAnimatedNumber : { name : "AnimatedNumber", moduleType : 0, moduleName : "AnimatedNumber", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, SVGFEComponentTransferElement : { name : "FEComponentTransferElement", moduleType : 0, moduleName : "FEComponentTransferElement", pack : ["js","html","svg"], typeParameters : [], isExtern : true}, IceCandidateInit : { name : "IceCandidateInit", moduleType : 2, moduleName : "IceCandidateInit", pack : ["js","html","rtc"], typeParameters : [], isExtern : false}, CSSKeyframesRule : { name : "CSSKeyframesRule", moduleType : 0, moduleName : "CSSKeyframesRule", pack : ["js","html"], typeParameters : [], isExtern : true}, ImageBitmapRenderingContext : { name : "ImageBitmapRenderingContext", moduleType : 0, moduleName : "ImageBitmapRenderingContext", pack : ["js","html"], typeParameters : [], isExtern : true}, SpeechSynthesisEventInit : { name : "SpeechSynthesisEventInit", moduleType : 2, moduleName : "SpeechSynthesisEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, OscillatorOptions : { name : "OscillatorOptions", moduleType : 2, moduleName : "OscillatorOptions", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, DragEvent : { name : "DragEvent", moduleType : 0, moduleName : "DragEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, MutationObserver : { name : "MutationObserver", moduleType : 0, moduleName : "MutationObserver", pack : ["js","html"], typeParameters : [], isExtern : true}, MIDIInput : { name : "MIDIInput", moduleType : 0, moduleName : "MIDIInput", pack : ["js","html","midi"], typeParameters : [], isExtern : true}, WEBGL_compressed_texture_astc : { name : "WEBGLCompressedTextureAstc", moduleType : 0, moduleName : "WEBGLCompressedTextureAstc", pack : ["js","html","webgl","extension"], typeParameters : [], isExtern : true}, MediaStreamEvent : { name : "MediaStreamEvent", moduleType : 0, moduleName : "MediaStreamEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, MouseEvent : { name : "MouseEvent", moduleType : 0, moduleName : "MouseEvent", pack : ["js","html"], typeParameters : [], isExtern : true}, ChannelInterpretation : { name : "ChannelInterpretation", moduleType : 3, moduleName : "ChannelInterpretation", pack : ["js","html","audio"], typeParameters : [], isExtern : false}, FileSystemEntriesCallback : { name : "FileSystemEntriesCallback", moduleType : 2, moduleName : "FileSystemEntriesCallback", pack : ["js","html"], typeParameters : [], isExtern : false}, FilePropertyBag : { name : "FilePropertyBag", moduleType : 2, moduleName : "FilePropertyBag", pack : ["js","html"], typeParameters : [], isExtern : false}, Plugin : { name : "Plugin", moduleType : 0, moduleName : "Plugin", pack : ["js","html"], typeParameters : [], isExtern : true}, BatteryManager : { name : "BatteryManager", moduleType : 0, moduleName : "BatteryManager", pack : ["js","html"], typeParameters : [], isExtern : true}, FormData : { name : "FormData", moduleType : 0, moduleName : "FormData", pack : ["js","html"], typeParameters : [], isExtern : true}, WebGLSampler : { name : "Sampler", moduleType : 0, moduleName : "Sampler", pack : ["js","html","webgl"], typeParameters : [], isExtern : true}, Location : { name : "Location", moduleType : 0, moduleName : "Location", pack : ["js","html"], typeParameters : [], isExtern : true}, ChannelSplitterNode : { name : "ChannelSplitterNode", moduleType : 0, moduleName : "ChannelSplitterNode", pack : ["js","html","audio"], typeParameters : [], isExtern : true}, PushMessageData : { name : "PushMessageData", moduleType : 0, moduleName : "PushMessageData", pack : ["js","html","push"], typeParameters : [], isExtern : true}, FontFaceSetLoadEventInit : { name : "FontFaceSetLoadEventInit", moduleType : 2, moduleName : "FontFaceSetLoadEventInit", pack : ["js","html"], typeParameters : [], isExtern : false}, FontFaceSetLoadStatus : { name : "FontFaceSetLoadStatus", moduleType : 3, moduleName : "FontFaceSetLoadStatus", pack : ["js","html"], typeParameters : [], isExtern : false}, MediaDeviceInfo : { name : "MediaDeviceInfo", moduleType : 0, moduleName : "MediaDeviceInfo", pack : ["js","html"], typeParameters : [], isExtern : true}}, topLevelNames : ["Any","Array","Class","Date","DateTools","EReg","Enum","EnumValue","HxOverrides","IntIterator","Lambda","List","Map","IMap","Math","Reflect","String","Std","Void","Float","Int","Null","Bool","Dynamic","Iterator","Iterable","KeyValueIterator","KeyValueIterable","ArrayAccess","StringBuf","StringTools","Sys","ValueType","Type","UInt","UnicodeString","XmlType","Xml"], haxeVersion : "4.0.5"};
tool_HaxeTools.nullPosition = { file : "", min : -1, max : -1};
tool_HaxeTools.haxeReservedWords = ["public","private","static","override","dynamic","inline","macro","final","extern","function","class","static","var","if","else","while","do","for","break","return","continue","extends","implements","import","switch","case","default","private","public","try","catch","new","this","throw","extern","enum","in","interface","untyped","cast","override","typedef","dynamic","package","inline","using","null","true","false","abstract","macro","final","operator","overload","protected"];
tool_HaxeTools.specialCharacterNames = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h["0"] = "Zero";
	_g.h["1"] = "One";
	_g.h["2"] = "Two";
	_g.h["3"] = "Three";
	_g.h["4"] = "Four";
	_g.h["5"] = "Five";
	_g.h["6"] = "Six";
	_g.h["7"] = "Seven";
	_g.h["8"] = "Eight";
	_g.h["9"] = "Nine";
	_g.h["!"] = "Bang";
	_g.h["\""] = "DoubleQuote";
	_g.h["#"] = "Hash";
	_g.h["$"] = "Dollar";
	_g.h["£"] = "Pound";
	_g.h["%"] = "Percent";
	_g.h["&"] = "Ampersand";
	_g.h["'"] = "Quote";
	_g.h["("] = "LeftParentheses";
	_g.h[")"] = "RightParentheses";
	_g.h["*"] = "Star";
	_g.h["+"] = "Plus";
	_g.h[","] = "Comma";
	_g.h["-"] = "Minus";
	_g.h["."] = "Dot";
	_g.h["/"] = "ForwardSlash";
	_g.h[":"] = "Colon";
	_g.h[";"] = "SemiColon";
	_g.h["<"] = "LessThan";
	_g.h["="] = "Equals";
	_g.h[">"] = "GreaterThan";
	_g.h["?"] = "QuestionMark";
	_g.h["{"] = "LeftBrace";
	_g.h["|"] = "Bar";
	_g.h["}"] = "RightBrace";
	_g.h["~"] = "Tilde";
	_g.h["["] = "LeftSquareBracket";
	_g.h["\\"] = "BackwardSlash";
	_g.h["]"] = "RightSquareBracket";
	_g.h["^"] = "Caret";
	_g.h["_"] = "Underscore";
	_g.h["@"] = "At";
	$r = _g;
	return $r;
}(this));
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=dts2hx.js.map