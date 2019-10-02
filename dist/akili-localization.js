/*!
 * Localization service for Akili framework
 * 
 * @version 1.0.3
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * {@link https://github.com/ortexx/akili-localization}
 * {@link https://github.com/ortexx/akili}
 * {@link https://akilijs.com}
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Akili"));
	else if(typeof define === 'function' && define.amd)
		define(["Akili"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("Akili")) : factory(root["Akili"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__36__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(21);

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(12),
    getRawTag = __webpack_require__(53),
    objectToString = __webpack_require__(54);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var listCacheClear = __webpack_require__(41),
    listCacheDelete = __webpack_require__(42),
    listCacheGet = __webpack_require__(43),
    listCacheHas = __webpack_require__(44),
    listCacheSet = __webpack_require__(45);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eq = __webpack_require__(7);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isKeyable = __webpack_require__(67);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsNative = __webpack_require__(51),
    getValue = __webpack_require__(58);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(4),
    isObject = __webpack_require__(0);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(1);

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperty = __webpack_require__(24);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsArguments = __webpack_require__(82),
    isObjectLike = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
    return arguments;
}()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(11),
    isLength = __webpack_require__(17);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__(4),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(10),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(52)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapCacheClear = __webpack_require__(59),
    mapCacheDelete = __webpack_require__(66),
    mapCacheGet = __webpack_require__(68),
    mapCacheHas = __webpack_require__(69),
    mapCacheSet = __webpack_require__(70);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseAssignValue = __webpack_require__(13),
    eq = __webpack_require__(7);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(10);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var overArg = __webpack_require__(81);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(1),
    stubFalse = __webpack_require__(84);

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsTypedArray = __webpack_require__(86),
    baseUnary = __webpack_require__(87),
    nodeUtil = __webpack_require__(88);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayLikeKeys = __webpack_require__(92),
    baseKeysIn = __webpack_require__(94),
    isArrayLike = __webpack_require__(16);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(3),
    isKey = __webpack_require__(108),
    stringToPath = __webpack_require__(109),
    toString = __webpack_require__(33);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseToString = __webpack_require__(112);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(19);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _akili = __webpack_require__(36);

var _akili2 = _interopRequireDefault(_akili);

var _localization = __webpack_require__(37);

var _localization2 = _interopRequireDefault(_localization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localization = {
  tags: ['translate', 'currency', 'number', 'date']
};

/**
 * Define the service
 * 
 * @param {object} options 
 */
localization.define = function () {
  var _this = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  this.locale = new _localization2.default(options);
  var keys = Object.getOwnPropertyNames(_localization2.default.prototype);

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    var val = this.locale[keys[i]];

    if (key == 'constructor' || typeof val != 'function') {
      continue;
    }

    this[key] = val.bind(this.locale);
  }

  var originalSetDefaultLocale = _localization2.default.prototype.setDefaultLocale;
  var originalSetCurrentLocale = _localization2.default.prototype.setCurrentLocale;

  this.setDefaultLocale = function () {
    var res = originalSetDefaultLocale.apply(this.locale, arguments);
    this.tags.forEach(function (tag) {
      return _akili2.default.triggerTag(tag);
    });
    return res;
  };

  this.setCurrentLocale = function () {
    var res = originalSetCurrentLocale.apply(this.locale, arguments);
    this.tags.forEach(function (tag) {
      return _akili2.default.triggerTag(tag);
    });
    return res;
  };

  Object.defineProperty(localization, 'translateValueHandler', {
    set: function set(value) {
      _this.locale.translateValueHandler = value.bind(_this.locale);
    }
  });

  Object.defineProperty(localization, 'translateParamsHandler', {
    set: function set(value) {
      _this.locale.translateParamsHandler = value.bind(_this.locale);
    }
  });

  this.tags.forEach(function (tag) {
    return _akili2.default.globals[tag] = _this[tag].bind(_this.locale);
  });
};

_akili2.default.services.localization = localization;
exports.default = localization;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__36__;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Locale = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(38);

var _merge2 = _interopRequireDefault(_merge);

var _has = __webpack_require__(105);

var _has2 = _interopRequireDefault(_has);

var _get = __webpack_require__(114);

var _get2 = _interopRequireDefault(_get);

var _escapeRegExp = __webpack_require__(116);

var _escapeRegExp2 = _interopRequireDefault(_escapeRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class to create instances of locale
 */
var Locale = exports.Locale = function () {
  /**
   * @param {Locate|object|string} locale
   */
  function Locale(locale) {
    _classCallCheck(this, Locale);

    if (locale instanceof Locale) {
      return locale;
    }

    if (typeof locale == "string") {
      var info = locale.split(/[-_]+/g);
      this.language = info[0];
      info.length > 1 && (this.country = info[info.length - 1]);
    } else if (locale && (typeof locale === 'undefined' ? 'undefined' : _typeof(locale)) == "object") {
      this.language = locale.language;
      this.country = locale.country;
    } else {
      throw new Error('Wrong locale data');
    }

    if (!this.language) {
      throw new Error('Local instance must have at least language property');
    }

    this.language = this.language.toLowerCase();
    this.country && (this.country = this.country.toUpperCase());
  }

  /**
   * Convert the object to string
   * 
   * @param {string} [sep="-"] - seporator for language and country
   * @returns {string}
   */


  _createClass(Locale, [{
    key: 'toString',
    value: function toString() {
      var sep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';

      if (this.country) {
        return this.language + sep + this.country;
      }

      return this.language;
    }

    /**
     * Check the locale is the same as the current
     * 
     * @param {Locate|object|string} locale
     * @param {boolean} [strict=false] - including the country or not
     * @returns {boolean}
     */

  }, {
    key: 'is',
    value: function is(locale) {
      var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      locale = new Locale(locale);

      if (strict) {
        return locale.toString() == this.toString();
      } else {
        return locale.language == this.language;
      }
    }
  }]);

  return Locale;
}();

/**
 * Localization manager class
 */


var Localization = function () {
  function Localization() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Localization);

    var defaults = {
      arraySign: "%%",
      objectPattern: { start: '{{', end: '}}' }
    };

    this.options = (0, _merge2.default)(defaults, options);
    this.dicts = {};
    this.defaultLocale = new Locale(this.options.defaultLocale || { language: 'en', country: 'US' });
    this.currentLocale = new Locale(this.options.currentLocale || this.defaultLocale);
  }

  /**
   * Set a default locale
   * 
   * @param {Locate|object|string} locale 
   */


  _createClass(Localization, [{
    key: 'setDefaultLocale',
    value: function setDefaultLocale(locale) {
      this.defaultLocale = new Locale(locale);
      this.__fullDict = this.createFullDict();
    }

    /**
     * Set a current locale
     * 
     * @param {Locate|object|string} locale 
     */

  }, {
    key: 'setCurrentLocale',
    value: function setCurrentLocale(locale) {
      this.currentLocale = new Locale(locale);
      this.__fullDict = this.createFullDict();
    }

    /**
     * Get a default locale
     * 
     * @returns {Locate|object|string} locale 
     */

  }, {
    key: 'getDefaultLocale',
    value: function getDefaultLocale() {
      return this.defaultLocale;
    }

    /**
     * Get a current locale
     * 
     * @returns {Locate|object|string} locale 
     */

  }, {
    key: 'getCurrentLocale',
    value: function getCurrentLocale() {
      return this.currentLocale;
    }

    /**
     * Function is called on translate to change params if you need
     * 
     * @param {string} value 
     * @param {string} key
     * @param {object|array} [params]
     * @returns {string}
     */

  }, {
    key: 'translateParamsHandler',
    value: function translateParamsHandler(value) {
      return value || '';
    }

    /**
     * Function is called on translate to change the result value if you need
     * 
     * @param {string|object} value 
     * @param {string} key
     * @param {object|array} [params]
     * @returns {string|object}
     */

  }, {
    key: 'translateValueHandler',
    value: function translateValueHandler(value, key) {
      if (value === undefined) {
        return key;
      }

      return value;
    }

    /**
     * Check the locale is the same as the manager locale
     * 
     * @param {Locate|object|string} locale
     * @param {boolean} [strict=false] - including the country or not
     * @returns {boolean}
     */

  }, {
    key: 'isLocale',
    value: function isLocale(locale, strict) {
      return this.currentLocale.is(locale, strict) || this.defaultLocale.is(locale, strict);
    }

    /**
     * Get all variants of writing a locale
     *  
     * @param {Locate|object|string} locale
     * @returns {string[]}
     */

  }, {
    key: 'getLocaleVariants',
    value: function getLocaleVariants(locale) {
      locale = new Locale(locale);
      var dash = locale.toString();
      var underscore = locale.toString('_');

      return [dash, dash.toLowerCase(), dash.toUpperCase(), underscore, underscore.toLowerCase(), underscore.toUpperCase(), locale.language.toLowerCase(), locale.language.toUpperCase()];
    }

    /**
     * Get a dictionary
     * 
     * @param {Locate|object|string} locale
     * @return {object|null} 
     * @param {boolean} [strict=false] - if true then check full match including a country
     */

  }, {
    key: 'getDict',
    value: function getDict(locale) {
      var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      locale = new Locale(locale);
      var dict = this.dicts[locale.toString()];

      if (!dict && !strict) {
        dict = this.dicts[locale.language];
      }

      return dict;
    }

    /**
    * Check the manager has the locale dictionary
    * 
    * @param {Locate|object|string} locale
    * @param {boolean} [strict=false] - if true then check full match including a country
    * @returns {boolean}
    */

  }, {
    key: 'hasDict',
    value: function hasDict(locale) {
      var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      locale = new Locale(locale);
      var dict = this.dicts[locale.toString()];

      if (!dict && !strict) {
        dict = this.dicts[locale.language];
      }

      return !!dict;
    }

    /**
     * Add a dictionary
     * 
     * @param {Locate|object|string} locale 
     * @param {object} dict
     */

  }, {
    key: 'addDict',
    value: function addDict(locale, dict) {
      locale = new Locale(locale);
      this.dicts[locale.toString()] = (0, _merge2.default)({}, dict);
      this.isLocale(locale) && (this.__fullDict = this.createFullDict());
    }

    /**
     * Merge a dict with the existent
     * 
     * @param {Locate|object|string} locale 
     * @param {object} dict 
     */

  }, {
    key: 'mergeDict',
    value: function mergeDict(locale, dict) {
      locale = new Locale(locale);
      var localName = locale.toString();
      var current = this.dicts[localName] || {};
      this.dicts[localName] = (0, _merge2.default)({}, current, dict);
      this.isLocale(locale) && (this.__fullDict = this.createFullDict());
    }

    /**
     * Remove a dictionary
     * 
     * @param {Locate|object|string} locale 
     */

  }, {
    key: 'removeDict',
    value: function removeDict(locale) {
      locale = new Locale(locale);
      delete this.dicts[locale.toString()];
      this.isLocale(locale) && (this.__fullDict = this.createFullDict());
    }

    /**
     * Get a union dictionary drom dafault and current locale
     * 
     * @returns {object}
     */

  }, {
    key: 'getFullDict',
    value: function getFullDict() {
      return this.__fullDict;
    }

    /**
     * Create a union dictionary drom dafault and current locale
     * 
     * @returns {object}
     */

  }, {
    key: 'createFullDict',
    value: function createFullDict() {
      return (0, _merge2.default)({}, this.getDict(this.defaultLocale), this.getDict(this.currentLocale));
    }

    /**
     * Check the translation existence by key
     * 
     * @param {string} key
     * @returns {boolean}
     */

  }, {
    key: 'hasTranslation',
    value: function hasTranslation(key) {
      return (0, _has2.default)(this.getFullDict(), key);
    }

    /**
     * Translate a key value
     * 
     * @param {string} key 
     * @param {object|array} [params] 
     */

  }, {
    key: 'translate',
    value: function translate(key) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var value = (0, _get2.default)(this.getFullDict(), key);

      if (typeof value == 'string') {
        if (!params || Array.isArray(params)) {
          var i = 0;
          value = value.replace(new RegExp((0, _escapeRegExp2.default)(this.options.arraySign), 'g'), function () {
            return _this.translateParamsHandler(params ? params[i++] : undefined, key, params);
          });
        }

        if (!params || (typeof params === 'undefined' ? 'undefined' : _typeof(params)) == 'object') {
          var pattern = this.options.objectPattern;
          var start = (0, _escapeRegExp2.default)(pattern.start);
          var end = (0, _escapeRegExp2.default)(pattern.end);
          value = value.replace(new RegExp(start + '\\s*([\\w]+)\\s*' + end, 'g'), function (m, v) {
            return _this.translateParamsHandler(params ? params[v] : undefined, key, params);
          });
        }
      }

      return this.translateValueHandler(value, key, params);
    }

    /**
     * Localize a data
     * 
     * @param {Date} date 
     * @param {object} options 
     */

  }, {
    key: 'date',
    value: function date(_date) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var intl = new Intl.DateTimeFormat(this.currentLocale.toString(), options);
      return intl.format(_date);
    }

    /**
     * Localize a number
     * 
     * @param {number} num 
     * @param {object} options 
     */

  }, {
    key: 'number',
    value: function number(num) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var intl = new Intl.NumberFormat(this.currentLocale.toString(), options);
      return intl.format(num);
    }

    /**
     * Localize a currency
     * 
     * @param {number} num 
     * @param {string} currency 
     * @param {object} options 
     */

  }, {
    key: 'currency',
    value: function currency(num, _currency) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = (0, _merge2.default)({}, options, {
        style: "currency",
        currency: _currency
      });

      var intl = new Intl.NumberFormat(this.currentLocale.toString(), options);
      return intl.format(num);
    }
  }]);

  return Localization;
}();

exports.default = Localization;


Localization.Locale = Locale;
(typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && (window.Localization = Localization);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseMerge = __webpack_require__(39),
    createAssigner = __webpack_require__(96);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__(40),
    assignMergeValue = __webpack_require__(23),
    baseFor = __webpack_require__(71),
    baseMergeDeep = __webpack_require__(73),
    isObject = __webpack_require__(0),
    keysIn = __webpack_require__(30),
    safeGet = __webpack_require__(29);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(5),
    stackClear = __webpack_require__(46),
    stackDelete = __webpack_require__(47),
    stackGet = __webpack_require__(48),
    stackHas = __webpack_require__(49),
    stackSet = __webpack_require__(50);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(6);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(6);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(6);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(6);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(5);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(5),
    Map = __webpack_require__(20),
    MapCache = __webpack_require__(22);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(11),
    isMasked = __webpack_require__(55),
    isObject = __webpack_require__(0),
    toSource = __webpack_require__(57);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coreJsData = __webpack_require__(56);

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Hash = __webpack_require__(60),
    ListCache = __webpack_require__(5),
    Map = __webpack_require__(20);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hashClear = __webpack_require__(61),
    hashDelete = __webpack_require__(62),
    hashGet = __webpack_require__(63),
    hashHas = __webpack_require__(64),
    hashSet = __webpack_require__(65);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(8);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(9);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(9);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(9);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(9);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createBaseFor = __webpack_require__(72);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assignMergeValue = __webpack_require__(23),
    cloneBuffer = __webpack_require__(74),
    cloneTypedArray = __webpack_require__(75),
    copyArray = __webpack_require__(78),
    initCloneObject = __webpack_require__(79),
    isArguments = __webpack_require__(15),
    isArray = __webpack_require__(3),
    isArrayLikeObject = __webpack_require__(83),
    isBuffer = __webpack_require__(27),
    isFunction = __webpack_require__(11),
    isObject = __webpack_require__(0),
    isPlainObject = __webpack_require__(85),
    isTypedArray = __webpack_require__(28),
    safeGet = __webpack_require__(29),
    toPlainObject = __webpack_require__(89);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(1);

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cloneArrayBuffer = __webpack_require__(76);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Uint8Array = __webpack_require__(77);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseCreate = __webpack_require__(80),
    getPrototype = __webpack_require__(25),
    isPrototype = __webpack_require__(26);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(0);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(4),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayLike = __webpack_require__(16),
    isObjectLike = __webpack_require__(2);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(4),
    getPrototype = __webpack_require__(25),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(4),
    isLength = __webpack_require__(17),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(21);

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var copyObject = __webpack_require__(90),
    keysIn = __webpack_require__(30);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assignValue = __webpack_require__(91),
    baseAssignValue = __webpack_require__(13);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseAssignValue = __webpack_require__(13),
    eq = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseTimes = __webpack_require__(93),
    isArguments = __webpack_require__(15),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(27),
    isIndex = __webpack_require__(18),
    isTypedArray = __webpack_require__(28);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(0),
    isPrototype = __webpack_require__(26),
    nativeKeysIn = __webpack_require__(95);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRest = __webpack_require__(97),
    isIterateeCall = __webpack_require__(104);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var identity = __webpack_require__(31),
    overRest = __webpack_require__(98),
    setToString = __webpack_require__(100);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = __webpack_require__(99);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseSetToString = __webpack_require__(101),
    shortOut = __webpack_require__(103);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constant = __webpack_require__(102),
    defineProperty = __webpack_require__(24),
    identity = __webpack_require__(31);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var eq = __webpack_require__(7),
    isArrayLike = __webpack_require__(16),
    isIndex = __webpack_require__(18),
    isObject = __webpack_require__(0);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseHas = __webpack_require__(106),
    hasPath = __webpack_require__(107);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var castPath = __webpack_require__(32),
    isArguments = __webpack_require__(15),
    isArray = __webpack_require__(3),
    isIndex = __webpack_require__(18),
    isLength = __webpack_require__(17),
    toKey = __webpack_require__(34);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(19);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoizeCapped = __webpack_require__(110);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

module.exports = stringToPath;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoize = __webpack_require__(111);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapCache = __webpack_require__(22);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(12),
    arrayMap = __webpack_require__(113),
    isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(19);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGet = __webpack_require__(115);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var castPath = __webpack_require__(32),
    toKey = __webpack_require__(34);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = __webpack_require__(33);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
}

module.exports = escapeRegExp;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25NZXJnZVZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NhZmVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQWtpbGlcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jYWxpemF0aW9uanMvc3JjL2xvY2FsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWVyZ2VEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9QbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FwcGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lc2NhcGVSZWdFeHAuanMiXSwibmFtZXMiOlsiaXNPYmplY3QiLCJ2YWx1ZSIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZnJlZUdsb2JhbCIsInJlcXVpcmUiLCJmcmVlU2VsZiIsInNlbGYiLCJPYmplY3QiLCJyb290IiwiRnVuY3Rpb24iLCJpc09iamVjdExpa2UiLCJpc0FycmF5IiwiQXJyYXkiLCJTeW1ib2wiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwidW5kZWZpbmVkIiwiYmFzZUdldFRhZyIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiZW50cmllcyIsImluZGV4IiwibGVuZ3RoIiwiY2xlYXIiLCJlbnRyeSIsInNldCIsInByb3RvdHlwZSIsImdldCIsImhhcyIsImVxIiwiYXNzb2NJbmRleE9mIiwiYXJyYXkiLCJrZXkiLCJvdGhlciIsImdldE5hdGl2ZSIsIm5hdGl2ZUNyZWF0ZSIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJtYXAiLCJkYXRhIiwiX19kYXRhX18iLCJiYXNlSXNOYXRpdmUiLCJnZXRWYWx1ZSIsIm9iamVjdCIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiaXNGdW5jdGlvbiIsInRhZyIsImRlZmluZVByb3BlcnR5IiwiYmFzZUFzc2lnblZhbHVlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImVudW1lcmFibGUiLCJsIiwiaSIsImJhc2VJc0FyZ3VtZW50cyIsIm9iamVjdFByb3RvIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImlzQXJndW1lbnRzIiwiYXJndW1lbnRzIiwiY2FsbCIsImlzTGVuZ3RoIiwiaXNBcnJheUxpa2UiLCJNQVhfU0FGRV9JTlRFR0VSIiwicmVJc1VpbnQiLCJpc0luZGV4IiwidGVzdCIsInN5bWJvbFRhZyIsImlzU3ltYm9sIiwiTWFwIiwiZ2xvYmFsIiwibWFwQ2FjaGVDbGVhciIsIm1hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiTWFwQ2FjaGUiLCJhc3NpZ25NZXJnZVZhbHVlIiwiZnVuYyIsImUiLCJvdmVyQXJnIiwiZ2V0UHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJpc1Byb3RvdHlwZSIsIkN0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvIiwic3R1YkZhbHNlIiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImJhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJub2RlVXRpbCIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJzYWZlR2V0IiwiYXJyYXlMaWtlS2V5cyIsImJhc2VLZXlzSW4iLCJrZXlzSW4iLCJpZGVudGl0eSIsImlzS2V5Iiwic3RyaW5nVG9QYXRoIiwidG9TdHJpbmciLCJjYXN0UGF0aCIsImJhc2VUb1N0cmluZyIsIklORklOSVRZIiwidG9LZXkiLCJyZXN1bHQiLCJsb2NhbGl6YXRpb24iLCJ0YWdzIiwiZGVmaW5lIiwib3B0aW9ucyIsImxvY2FsZSIsIkxvY2FsaXphdGlvbiIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidmFsIiwiYmluZCIsIm9yaWdpbmFsU2V0RGVmYXVsdExvY2FsZSIsInNldERlZmF1bHRMb2NhbGUiLCJvcmlnaW5hbFNldEN1cnJlbnRMb2NhbGUiLCJzZXRDdXJyZW50TG9jYWxlIiwicmVzIiwiYXBwbHkiLCJmb3JFYWNoIiwiQWtpbGkiLCJ0cmlnZ2VyVGFnIiwidHJhbnNsYXRlVmFsdWVIYW5kbGVyIiwidHJhbnNsYXRlUGFyYW1zSGFuZGxlciIsImdsb2JhbHMiLCJzZXJ2aWNlcyIsIkxvY2FsZSIsImluZm8iLCJzcGxpdCIsImxhbmd1YWdlIiwiY291bnRyeSIsIkVycm9yIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInNlcCIsInN0cmljdCIsImRlZmF1bHRzIiwiYXJyYXlTaWduIiwib2JqZWN0UGF0dGVybiIsInN0YXJ0IiwiZW5kIiwiZGljdHMiLCJkZWZhdWx0TG9jYWxlIiwiY3VycmVudExvY2FsZSIsIl9fZnVsbERpY3QiLCJjcmVhdGVGdWxsRGljdCIsImlzIiwiZGFzaCIsInVuZGVyc2NvcmUiLCJkaWN0IiwiaXNMb2NhbGUiLCJsb2NhbE5hbWUiLCJjdXJyZW50IiwiZ2V0RGljdCIsImdldEZ1bGxEaWN0IiwicGFyYW1zIiwicmVwbGFjZSIsIlJlZ0V4cCIsInBhdHRlcm4iLCJtIiwidiIsImRhdGUiLCJpbnRsIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZm9ybWF0IiwibnVtIiwiTnVtYmVyRm9ybWF0IiwiY3VycmVuY3kiLCJzdHlsZSIsIndpbmRvdyIsImJhc2VNZXJnZSIsImNyZWF0ZUFzc2lnbmVyIiwibWVyZ2UiLCJzb3VyY2UiLCJzcmNJbmRleCIsIlN0YWNrIiwiYmFzZUZvciIsImJhc2VNZXJnZURlZXAiLCJjdXN0b21pemVyIiwic3RhY2siLCJzcmNWYWx1ZSIsIm5ld1ZhbHVlIiwic3RhY2tDbGVhciIsInN0YWNrRGVsZXRlIiwic3RhY2tHZXQiLCJzdGFja0hhcyIsInN0YWNrU2V0Iiwic2l6ZSIsImFycmF5UHJvdG8iLCJzcGxpY2UiLCJsYXN0SW5kZXgiLCJwb3AiLCJwdXNoIiwiTEFSR0VfQVJSQVlfU0laRSIsInBhaXJzIiwiaXNNYXNrZWQiLCJ0b1NvdXJjZSIsInJlUmVnRXhwQ2hhciIsInJlSXNIb3N0Q3RvciIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInJlSXNOYXRpdmUiLCJnIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwiY29yZUpzRGF0YSIsIm1hc2tTcmNLZXkiLCJ1aWQiLCJleGVjIiwiSUVfUFJPVE8iLCJIYXNoIiwiaGFzaENsZWFyIiwiaGFzaERlbGV0ZSIsImhhc2hHZXQiLCJoYXNoSGFzIiwiaGFzaFNldCIsIkhBU0hfVU5ERUZJTkVEIiwiY3JlYXRlQmFzZUZvciIsImZyb21SaWdodCIsIml0ZXJhdGVlIiwia2V5c0Z1bmMiLCJpdGVyYWJsZSIsInByb3BzIiwiY2xvbmVCdWZmZXIiLCJjbG9uZVR5cGVkQXJyYXkiLCJjb3B5QXJyYXkiLCJpbml0Q2xvbmVPYmplY3QiLCJpc0FycmF5TGlrZU9iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0b1BsYWluT2JqZWN0IiwibWVyZ2VGdW5jIiwib2JqVmFsdWUiLCJzdGFja2VkIiwiaXNDb21tb24iLCJpc0FyciIsImlzQnVmZiIsImlzVHlwZWQiLCJhbGxvY1Vuc2FmZSIsImJ1ZmZlciIsImlzRGVlcCIsInNsaWNlIiwiY29weSIsImNsb25lQXJyYXlCdWZmZXIiLCJ0eXBlZEFycmF5IiwiYnl0ZU9mZnNldCIsIlVpbnQ4QXJyYXkiLCJhcnJheUJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJiYXNlQ3JlYXRlIiwib2JqZWN0Q3JlYXRlIiwiY3JlYXRlIiwidHJhbnNmb3JtIiwiYXJnIiwiYXJnc1RhZyIsIm9iamVjdFRhZyIsIm9iamVjdEN0b3JTdHJpbmciLCJhcnJheVRhZyIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwidHlwZXMiLCJiaW5kaW5nIiwiY29weU9iamVjdCIsImFzc2lnblZhbHVlIiwiaXNOZXciLCJiYXNlVGltZXMiLCJpbmhlcml0ZWQiLCJpc0FyZyIsImlzVHlwZSIsInNraXBJbmRleGVzIiwiU3RyaW5nIiwibiIsIm5hdGl2ZUtleXNJbiIsImlzUHJvdG8iLCJiYXNlUmVzdCIsImlzSXRlcmF0ZWVDYWxsIiwiYXNzaWduZXIiLCJzb3VyY2VzIiwiZ3VhcmQiLCJvdmVyUmVzdCIsInNldFRvU3RyaW5nIiwibmF0aXZlTWF4IiwiTWF0aCIsIm1heCIsImFyZ3MiLCJvdGhlckFyZ3MiLCJ0aGlzQXJnIiwiYmFzZVNldFRvU3RyaW5nIiwic2hvcnRPdXQiLCJjb25zdGFudCIsInN0cmluZyIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsIm5vdyIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicmVtYWluaW5nIiwiYmFzZUhhcyIsImhhc1BhdGgiLCJwYXRoIiwiaGFzRnVuYyIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJtZW1vaXplQ2FwcGVkIiwicmVQcm9wTmFtZSIsInJlRXNjYXBlQ2hhciIsImNoYXJDb2RlQXQiLCJtYXRjaCIsIm51bWJlciIsInF1b3RlIiwic3ViU3RyaW5nIiwibWVtb2l6ZSIsIk1BWF9NRU1PSVpFX1NJWkUiLCJjYWNoZSIsIkZVTkNfRVJST1JfVEVYVCIsInJlc29sdmVyIiwiVHlwZUVycm9yIiwibWVtb2l6ZWQiLCJDYWNoZSIsImFycmF5TWFwIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VHZXQiLCJkZWZhdWx0VmFsdWUiLCJyZUhhc1JlZ0V4cENoYXIiLCJlc2NhcGVSZWdFeHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNs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LEtBQUs5VCxPQUFMLENBQU4sQ0FBUCxDQUFUO0FBQ0Q7QUFDRCxTQUFRQSxTQUFTQSxTQUFTQyxNQUFuQixHQUE2QnFCLE1BQTdCLEdBQXNDL0IsU0FBN0M7QUFDRDs7QUFFRG5CLE9BQU9DLE9BQVAsR0FBaUJnWCxPQUFqQixDOzs7Ozs7Ozs7QUN2QkEsSUFBSTFQLFdBQVdwSCxtQkFBT0EsQ0FBQyxFQUFSLENBQWY7O0FBRUE7Ozs7QUFJQSxJQUFJeU4sZUFBZSxxQkFBbkI7QUFBQSxJQUNJdUosa0JBQWtCaE0sT0FBT3lDLGFBQWF4QixNQUFwQixDQUR0Qjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FBU2dMLFlBQVQsQ0FBc0J0QyxNQUF0QixFQUE4QjtBQUM1QkEsV0FBU3ZOLFNBQVN1TixNQUFULENBQVQ7QUFDQSxTQUFRQSxVQUFVcUMsZ0JBQWdCclMsSUFBaEIsQ0FBcUJnUSxNQUFyQixDQUFYLEdBQ0hBLE9BQU81SixPQUFQLENBQWUwQyxZQUFmLEVBQTZCLE1BQTdCLENBREcsR0FFSGtILE1BRko7QUFHRDs7QUFFRDlVLE9BQU9DLE9BQVAsR0FBaUJtWCxZQUFqQixDIiwiZmlsZSI6ImFraWxpLWxvY2FsaXphdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkFraWxpXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkFraWxpXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJBa2lsaVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJBa2lsaVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM2X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzUpO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFzc2lnblZhbHVlYCBleGNlcHQgdGhhdCBpdCBkb2Vzbid0IGFzc2lnblxuICogYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmICgodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZXEob2JqZWN0W2tleV0sIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25NZXJnZVZhbHVlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAsIHVubGVzcyBga2V5YCBpcyBcIl9fcHJvdG9fX1wiIG9yIFwiY29uc3RydWN0b3JcIi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNhZmVHZXQob2JqZWN0LCBrZXkpIHtcbiAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJyAmJiB0eXBlb2Ygb2JqZWN0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhZmVHZXQ7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCJpbXBvcnQgQWtpbGkgZnJvbSAnYWtpbGknO1xuaW1wb3J0IExvY2FsaXphdGlvbiBmcm9tICdsb2NhbGl6YXRpb25qcy9zcmMvbG9jYWxpemF0aW9uJztcblxuY29uc3QgbG9jYWxpemF0aW9uID0ge1xuICB0YWdzOiBbJ3RyYW5zbGF0ZScsICdjdXJyZW5jeScsICdudW1iZXInLCAnZGF0ZSddXG59O1xuXG4vKipcbiAqIERlZmluZSB0aGUgc2VydmljZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBcbiAqL1xubG9jYWxpemF0aW9uLmRlZmluZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcbiAgdGhpcy5sb2NhbGUgPSBuZXcgTG9jYWxpemF0aW9uKG9wdGlvbnMpO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTG9jYWxpemF0aW9uLnByb3RvdHlwZSk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgIGNvbnN0IHZhbCA9IHRoaXMubG9jYWxlW2tleXNbaV1dO1xuXG4gICAgaWYoa2V5ID09ICdjb25zdHJ1Y3RvcicgfHwgdHlwZW9mIHZhbCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzW2tleV0gPSB2YWwuYmluZCh0aGlzLmxvY2FsZSk7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbFNldERlZmF1bHRMb2NhbGUgPSBMb2NhbGl6YXRpb24ucHJvdG90eXBlLnNldERlZmF1bHRMb2NhbGU7XG4gIGNvbnN0IG9yaWdpbmFsU2V0Q3VycmVudExvY2FsZSA9IExvY2FsaXphdGlvbi5wcm90b3R5cGUuc2V0Q3VycmVudExvY2FsZTtcblxuICB0aGlzLnNldERlZmF1bHRMb2NhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmVzID0gb3JpZ2luYWxTZXREZWZhdWx0TG9jYWxlLmFwcGx5KHRoaXMubG9jYWxlLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGFncy5mb3JFYWNoKHRhZyA9PiBBa2lsaS50cmlnZ2VyVGFnKHRhZykpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICB0aGlzLnNldEN1cnJlbnRMb2NhbGUgPSBmdW5jdGlvbiAoKSB7ICAgIFxuICAgIGNvbnN0IHJlcyA9IG9yaWdpbmFsU2V0Q3VycmVudExvY2FsZS5hcHBseSh0aGlzLmxvY2FsZSwgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaCh0YWcgPT4gQWtpbGkudHJpZ2dlclRhZyh0YWcpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxvY2FsaXphdGlvbiwgJ3RyYW5zbGF0ZVZhbHVlSGFuZGxlcicsIHtcbiAgICBzZXQ6IHZhbHVlID0+IHtcbiAgICAgIHRoaXMubG9jYWxlLnRyYW5zbGF0ZVZhbHVlSGFuZGxlciA9IHZhbHVlLmJpbmQodGhpcy5sb2NhbGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxvY2FsaXphdGlvbiwgJ3RyYW5zbGF0ZVBhcmFtc0hhbmRsZXInLCB7XG4gICAgc2V0OiB2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZS50cmFuc2xhdGVQYXJhbXNIYW5kbGVyID0gdmFsdWUuYmluZCh0aGlzLmxvY2FsZSk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLnRhZ3MuZm9yRWFjaCh0YWcgPT4gQWtpbGkuZ2xvYmFsc1t0YWddID0gdGhpc1t0YWddLmJpbmQodGhpcy5sb2NhbGUpKTtcbn1cblxuQWtpbGkuc2VydmljZXMubG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uO1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemF0aW9uOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMzZfXzsiLCJpbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlJztcbmltcG9ydCBoYXMgZnJvbSAnbG9kYXNoL2hhcyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IGVzY2FwZVJlZ0V4cCBmcm9tICdsb2Rhc2gvZXNjYXBlUmVnRXhwJztcblxuLyoqXG4gKiBDbGFzcyB0byBjcmVhdGUgaW5zdGFuY2VzIG9mIGxvY2FsZVxuICovXG5leHBvcnQgY2xhc3MgTG9jYWxlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7TG9jYXRlfG9iamVjdHxzdHJpbmd9IGxvY2FsZVxuICAgKi9cbiAgY29uc3RydWN0b3IobG9jYWxlKSB7XG4gICAgaWYgKGxvY2FsZSBpbnN0YW5jZW9mIExvY2FsZSkge1xuICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGxvY2FsZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgaW5mbyA9IGxvY2FsZS5zcGxpdCgvWy1fXSsvZyk7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gaW5mb1swXTtcbiAgICAgIGluZm8ubGVuZ3RoID4gMSAmJiAodGhpcy5jb3VudHJ5ID0gaW5mb1tpbmZvLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobG9jYWxlICYmIHR5cGVvZiBsb2NhbGUgPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhpcy5sYW5ndWFnZSA9IGxvY2FsZS5sYW5ndWFnZTtcbiAgICAgIHRoaXMuY291bnRyeSA9IGxvY2FsZS5jb3VudHJ5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgbG9jYWxlIGRhdGEnKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5sYW5ndWFnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2NhbCBpbnN0YW5jZSBtdXN0IGhhdmUgYXQgbGVhc3QgbGFuZ3VhZ2UgcHJvcGVydHknKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuY291bnRyeSAmJiAodGhpcy5jb3VudHJ5ID0gdGhpcy5jb3VudHJ5LnRvVXBwZXJDYXNlKCkpOyAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBvYmplY3QgdG8gc3RyaW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlcD1cIi1cIl0gLSBzZXBvcmF0b3IgZm9yIGxhbmd1YWdlIGFuZCBjb3VudHJ5XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyhzZXAgPSAnLScpIHtcbiAgICBpZiAodGhpcy5jb3VudHJ5KSB7XG4gICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZSArIHNlcCArIHRoaXMuY291bnRyeTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgbG9jYWxlIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge0xvY2F0ZXxvYmplY3R8c3RyaW5nfSBsb2NhbGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIGluY2x1ZGluZyB0aGUgY291bnRyeSBvciBub3RcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpcyhsb2NhbGUsIHN0cmljdCA9IGZhbHNlKSB7XG4gICAgbG9jYWxlID0gbmV3IExvY2FsZShsb2NhbGUpO1xuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgcmV0dXJuIGxvY2FsZS50b1N0cmluZygpID09IHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmxhbmd1YWdlID09IHRoaXMubGFuZ3VhZ2U7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTG9jYWxpemF0aW9uIG1hbmFnZXIgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpemF0aW9uIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBhcnJheVNpZ246IFwiJSVcIixcbiAgICAgIG9iamVjdFBhdHRlcm46IHsgc3RhcnQ6ICd7eycsIGVuZDogJ319JyB9XG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmRpY3RzID0ge307ICAgIFxuICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IG5ldyBMb2NhbGUodGhpcy5vcHRpb25zLmRlZmF1bHRMb2NhbGUgfHwgeyBsYW5ndWFnZTogJ2VuJywgY291bnRyeTogJ1VTJyB9KTtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXcgTG9jYWxlKHRoaXMub3B0aW9ucy5jdXJyZW50TG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgZGVmYXVsdCBsb2NhbGVcbiAgICogXG4gICAqIEBwYXJhbSB7TG9jYXRlfG9iamVjdHxzdHJpbmd9IGxvY2FsZSBcbiAgICovXG4gIHNldERlZmF1bHRMb2NhbGUobG9jYWxlKSB7XG4gICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gbmV3IExvY2FsZShsb2NhbGUpO1xuICAgIHRoaXMuX19mdWxsRGljdCA9IHRoaXMuY3JlYXRlRnVsbERpY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBjdXJyZW50IGxvY2FsZVxuICAgKiBcbiAgICogQHBhcmFtIHtMb2NhdGV8b2JqZWN0fHN0cmluZ30gbG9jYWxlIFxuICAgKi9cbiAgc2V0Q3VycmVudExvY2FsZShsb2NhbGUpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXcgTG9jYWxlKGxvY2FsZSk7XG4gICAgdGhpcy5fX2Z1bGxEaWN0ID0gdGhpcy5jcmVhdGVGdWxsRGljdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGRlZmF1bHQgbG9jYWxlXG4gICAqIFxuICAgKiBAcmV0dXJucyB7TG9jYXRlfG9iamVjdHxzdHJpbmd9IGxvY2FsZSBcbiAgICovXG4gIGdldERlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBjdXJyZW50IGxvY2FsZVxuICAgKiBcbiAgICogQHJldHVybnMge0xvY2F0ZXxvYmplY3R8c3RyaW5nfSBsb2NhbGUgXG4gICAqL1xuICBnZXRDdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gaXMgY2FsbGVkIG9uIHRyYW5zbGF0ZSB0byBjaGFuZ2UgcGFyYW1zIGlmIHlvdSBuZWVkXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IFtwYXJhbXNdXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0cmFuc2xhdGVQYXJhbXNIYW5kbGVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIHx8ICcnO1xuICB9IFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBpcyBjYWxsZWQgb24gdHJhbnNsYXRlIHRvIGNoYW5nZSB0aGUgcmVzdWx0IHZhbHVlIGlmIHlvdSBuZWVkXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHZhbHVlIFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBbcGFyYW1zXVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfG9iamVjdH1cbiAgICovXG4gIHRyYW5zbGF0ZVZhbHVlSGFuZGxlcih2YWx1ZSwga2V5KSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBsb2NhbGUgaXMgdGhlIHNhbWUgYXMgdGhlIG1hbmFnZXIgbG9jYWxlXG4gICAqIFxuICAgKiBAcGFyYW0ge0xvY2F0ZXxvYmplY3R8c3RyaW5nfSBsb2NhbGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIGluY2x1ZGluZyB0aGUgY291bnRyeSBvciBub3RcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0xvY2FsZShsb2NhbGUsIHN0cmljdCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGUuaXMobG9jYWxlLCBzdHJpY3QpIHx8IHRoaXMuZGVmYXVsdExvY2FsZS5pcyhsb2NhbGUsIHN0cmljdCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB2YXJpYW50cyBvZiB3cml0aW5nIGEgbG9jYWxlXG4gICAqICBcbiAgICogQHBhcmFtIHtMb2NhdGV8b2JqZWN0fHN0cmluZ30gbG9jYWxlXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIGdldExvY2FsZVZhcmlhbnRzKGxvY2FsZSkge1xuICAgIGxvY2FsZSA9IG5ldyBMb2NhbGUobG9jYWxlKTtcbiAgICBsZXQgZGFzaCA9IGxvY2FsZS50b1N0cmluZygpO1xuICAgIGxldCB1bmRlcnNjb3JlID0gbG9jYWxlLnRvU3RyaW5nKCdfJyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgZGFzaCxcbiAgICAgIGRhc2gudG9Mb3dlckNhc2UoKSxcbiAgICAgIGRhc2gudG9VcHBlckNhc2UoKSxcbiAgICAgIHVuZGVyc2NvcmUsXG4gICAgICB1bmRlcnNjb3JlLnRvTG93ZXJDYXNlKCksXG4gICAgICB1bmRlcnNjb3JlLnRvVXBwZXJDYXNlKCksXG4gICAgICBsb2NhbGUubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKSxcbiAgICAgIGxvY2FsZS5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkaWN0aW9uYXJ5XG4gICAqIFxuICAgKiBAcGFyYW0ge0xvY2F0ZXxvYmplY3R8c3RyaW5nfSBsb2NhbGVcbiAgICogQHJldHVybiB7b2JqZWN0fG51bGx9IFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gaWYgdHJ1ZSB0aGVuIGNoZWNrIGZ1bGwgbWF0Y2ggaW5jbHVkaW5nIGEgY291bnRyeVxuICAgKi9cbiAgZ2V0RGljdChsb2NhbGUsIHN0cmljdCA9IGZhbHNlKSB7XG4gICAgbG9jYWxlID0gbmV3IExvY2FsZShsb2NhbGUpO1xuICAgIGxldCBkaWN0ID0gdGhpcy5kaWN0c1tsb2NhbGUudG9TdHJpbmcoKV07XG5cbiAgICBpZiAoIWRpY3QgJiYgIXN0cmljdCkge1xuICAgICAgZGljdCA9IHRoaXMuZGljdHNbbG9jYWxlLmxhbmd1YWdlXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGljdDtcbiAgfVxuXG4gICAvKipcbiAgICogQ2hlY2sgdGhlIG1hbmFnZXIgaGFzIHRoZSBsb2NhbGUgZGljdGlvbmFyeVxuICAgKiBcbiAgICogQHBhcmFtIHtMb2NhdGV8b2JqZWN0fHN0cmluZ30gbG9jYWxlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSBpZiB0cnVlIHRoZW4gY2hlY2sgZnVsbCBtYXRjaCBpbmNsdWRpbmcgYSBjb3VudHJ5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaGFzRGljdChsb2NhbGUsIHN0cmljdCA9IGZhbHNlKSB7XG4gICAgbG9jYWxlID0gbmV3IExvY2FsZShsb2NhbGUpO1xuICAgIGxldCBkaWN0ID0gdGhpcy5kaWN0c1tsb2NhbGUudG9TdHJpbmcoKV07XG5cbiAgICBpZiAoIWRpY3QgJiYgIXN0cmljdCkge1xuICAgICAgZGljdCA9IHRoaXMuZGljdHNbbG9jYWxlLmxhbmd1YWdlXTtcbiAgICB9XG5cbiAgICByZXR1cm4gISFkaWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGRpY3Rpb25hcnlcbiAgICogXG4gICAqIEBwYXJhbSB7TG9jYXRlfG9iamVjdHxzdHJpbmd9IGxvY2FsZSBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRpY3RcbiAgICovXG4gIGFkZERpY3QobG9jYWxlLCBkaWN0KSB7XG4gICAgbG9jYWxlID0gbmV3IExvY2FsZShsb2NhbGUpO1xuICAgIHRoaXMuZGljdHNbbG9jYWxlLnRvU3RyaW5nKCldID0gbWVyZ2Uoe30sIGRpY3QpO1xuICAgIHRoaXMuaXNMb2NhbGUobG9jYWxlKSAmJiAodGhpcy5fX2Z1bGxEaWN0ID0gdGhpcy5jcmVhdGVGdWxsRGljdCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBhIGRpY3Qgd2l0aCB0aGUgZXhpc3RlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7TG9jYXRlfG9iamVjdHxzdHJpbmd9IGxvY2FsZSBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRpY3QgXG4gICAqL1xuICBtZXJnZURpY3QobG9jYWxlLCBkaWN0KSB7XG4gICAgbG9jYWxlID0gbmV3IExvY2FsZShsb2NhbGUpO1xuICAgIGxldCBsb2NhbE5hbWUgPSBsb2NhbGUudG9TdHJpbmcoKTtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuZGljdHNbbG9jYWxOYW1lXSB8fCB7fTtcbiAgICB0aGlzLmRpY3RzW2xvY2FsTmFtZV0gPSBtZXJnZSh7fSwgY3VycmVudCwgZGljdCk7XG4gICAgdGhpcy5pc0xvY2FsZShsb2NhbGUpICYmICh0aGlzLl9fZnVsbERpY3QgPSB0aGlzLmNyZWF0ZUZ1bGxEaWN0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGRpY3Rpb25hcnlcbiAgICogXG4gICAqIEBwYXJhbSB7TG9jYXRlfG9iamVjdHxzdHJpbmd9IGxvY2FsZSBcbiAgICovXG4gIHJlbW92ZURpY3QobG9jYWxlKSB7XG4gICAgbG9jYWxlID0gbmV3IExvY2FsZShsb2NhbGUpO1xuICAgIGRlbGV0ZSB0aGlzLmRpY3RzW2xvY2FsZS50b1N0cmluZygpXTtcbiAgICB0aGlzLmlzTG9jYWxlKGxvY2FsZSkgJiYgKHRoaXMuX19mdWxsRGljdCA9IHRoaXMuY3JlYXRlRnVsbERpY3QoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdW5pb24gZGljdGlvbmFyeSBkcm9tIGRhZmF1bHQgYW5kIGN1cnJlbnQgbG9jYWxlXG4gICAqIFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0RnVsbERpY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19mdWxsRGljdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB1bmlvbiBkaWN0aW9uYXJ5IGRyb20gZGFmYXVsdCBhbmQgY3VycmVudCBsb2NhbGVcbiAgICogXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBjcmVhdGVGdWxsRGljdCgpIHtcbiAgICByZXR1cm4gbWVyZ2Uoe30sIHRoaXMuZ2V0RGljdCh0aGlzLmRlZmF1bHRMb2NhbGUpLCB0aGlzLmdldERpY3QodGhpcy5jdXJyZW50TG9jYWxlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHRyYW5zbGF0aW9uIGV4aXN0ZW5jZSBieSBrZXlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBoYXNUcmFuc2xhdGlvbihrZXkpIHtcbiAgICByZXR1cm4gaGFzKHRoaXMuZ2V0RnVsbERpY3QoKSwga2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGUgYSBrZXkgdmFsdWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgXG4gICAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBbcGFyYW1zXSBcbiAgICovXG4gIHRyYW5zbGF0ZShrZXksIHBhcmFtcyA9IG51bGwpIHtcbiAgICBsZXQgdmFsdWUgPSBnZXQodGhpcy5nZXRGdWxsRGljdCgpLCBrZXkpO1xuICAgIFxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICAgIGlmKCFwYXJhbXMgfHwgQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XG4gICAgICAgIGxldCBpID0gMDsgIFxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGhpcy5vcHRpb25zLmFycmF5U2lnbiksICdnJyksICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVQYXJhbXNIYW5kbGVyKHBhcmFtcz8gcGFyYW1zW2krK106IHVuZGVmaW5lZCwga2V5LCBwYXJhbXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoIXBhcmFtcyB8fCB0eXBlb2YgcGFyYW1zID09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLm9wdGlvbnMub2JqZWN0UGF0dGVybjtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBlc2NhcGVSZWdFeHAocGF0dGVybi5zdGFydCk7XG4gICAgICAgIGNvbnN0IGVuZCA9IGVzY2FwZVJlZ0V4cChwYXR0ZXJuLmVuZCk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKHN0YXJ0ICsgJ1xcXFxzKihbXFxcXHddKylcXFxccyonICsgZW5kLCAnZycpLCAobSwgdikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVBhcmFtc0hhbmRsZXIocGFyYW1zPyBwYXJhbXNbdl06IHVuZGVmaW5lZCwga2V5LCBwYXJhbXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgICBcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVWYWx1ZUhhbmRsZXIodmFsdWUsIGtleSwgcGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NhbGl6ZSBhIGRhdGFcbiAgICogXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgXG4gICAqL1xuICBkYXRlKGRhdGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGludGwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmN1cnJlbnRMb2NhbGUudG9TdHJpbmcoKSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGludGwuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvY2FsaXplIGEgbnVtYmVyXG4gICAqIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBcbiAgICovXG4gIG51bWJlcihudW0sIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGludGwgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5jdXJyZW50TG9jYWxlLnRvU3RyaW5nKCksIG9wdGlvbnMpO1xuICAgIHJldHVybiBpbnRsLmZvcm1hdChudW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvY2FsaXplIGEgY3VycmVuY3lcbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW0gXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW5jeSBcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgXG4gICAqL1xuICBjdXJyZW5jeShudW0sIGN1cnJlbmN5LCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gbWVyZ2Uoe30sIG9wdGlvbnMsIHtcbiAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICBjdXJyZW5jeTogY3VycmVuY3lcbiAgICB9KTtcblxuICAgIGNvbnN0IGludGwgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5jdXJyZW50TG9jYWxlLnRvU3RyaW5nKCksIG9wdGlvbnMpO1xuICAgIHJldHVybiBpbnRsLmZvcm1hdChudW0pO1xuICB9XG59XG5cbkxvY2FsaXphdGlvbi5Mb2NhbGUgPSBMb2NhbGU7XG50eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmICh3aW5kb3cuTG9jYWxpemF0aW9uID0gTG9jYWxpemF0aW9uKTtcbiIsInZhciBiYXNlTWVyZ2UgPSByZXF1aXJlKCcuL19iYXNlTWVyZ2UnKSxcbiAgICBjcmVhdGVBc3NpZ25lciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUFzc2lnbmVyJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5hc3NpZ25gIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IG1lcmdlcyBvd24gYW5kXG4gKiBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0cyBpbnRvIHRoZVxuICogZGVzdGluYXRpb24gb2JqZWN0LiBTb3VyY2UgcHJvcGVydGllcyB0aGF0IHJlc29sdmUgdG8gYHVuZGVmaW5lZGAgYXJlXG4gKiBza2lwcGVkIGlmIGEgZGVzdGluYXRpb24gdmFsdWUgZXhpc3RzLiBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IHByb3BlcnRpZXNcbiAqIGFyZSBtZXJnZWQgcmVjdXJzaXZlbHkuIE90aGVyIG9iamVjdHMgYW5kIHZhbHVlIHR5cGVzIGFyZSBvdmVycmlkZGVuIGJ5XG4gKiBhc3NpZ25tZW50LiBTb3VyY2Ugb2JqZWN0cyBhcmUgYXBwbGllZCBmcm9tIGxlZnQgdG8gcmlnaHQuIFN1YnNlcXVlbnRcbiAqIHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjUuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0ge1xuICogICAnYSc6IFt7ICdiJzogMiB9LCB7ICdkJzogNCB9XVxuICogfTtcbiAqXG4gKiB2YXIgb3RoZXIgPSB7XG4gKiAgICdhJzogW3sgJ2MnOiAzIH0sIHsgJ2UnOiA1IH1dXG4gKiB9O1xuICpcbiAqIF8ubWVyZ2Uob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB7ICdhJzogW3sgJ2InOiAyLCAnYyc6IDMgfSwgeyAnZCc6IDQsICdlJzogNSB9XSB9XG4gKi9cbnZhciBtZXJnZSA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCkge1xuICBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhc3NpZ25NZXJnZVZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduTWVyZ2VWYWx1ZScpLFxuICAgIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAgYmFzZU1lcmdlRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VNZXJnZURlZXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpLFxuICAgIHNhZmVHZXQgPSByZXF1aXJlKCcuL19zYWZlR2V0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgaWYgKGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgICAgYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgYmFzZU1lcmdlLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgICA/IGN1c3RvbWl6ZXIoc2FmZUdldChvYmplY3QsIGtleSksIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgICAgfVxuICAgICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSwga2V5c0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWVyZ2U7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCJ2YXIgYXNzaWduTWVyZ2VWYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnbk1lcmdlVmFsdWUnKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5JyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi9pc1BsYWluT2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKSxcbiAgICBzYWZlR2V0ID0gcmVxdWlyZSgnLi9fc2FmZUdldCcpLFxuICAgIHRvUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL3RvUGxhaW5PYmplY3QnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VNZXJnZWAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgbWVyZ2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXJnZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1lcmdlIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IHNhZmVHZXQob2JqZWN0LCBrZXkpLFxuICAgICAgc3JjVmFsdWUgPSBzYWZlR2V0KHNvdXJjZSwga2V5KSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuXG4gIGlmIChzdGFja2VkKSB7XG4gICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICBpZiAoaXNDb21tb24pIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KHNyY1ZhbHVlKSxcbiAgICAgICAgaXNCdWZmID0gIWlzQXJyICYmIGlzQnVmZmVyKHNyY1ZhbHVlKSxcbiAgICAgICAgaXNUeXBlZCA9ICFpc0FyciAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheShzcmNWYWx1ZSk7XG5cbiAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgIGlmIChpc0FyciB8fCBpc0J1ZmYgfHwgaXNUeXBlZCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCdWZmKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVCdWZmZXIoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNUeXBlZCkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lVHlwZWRBcnJheShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCBpc0Z1bmN0aW9uKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGluaXRDbG9uZU9iamVjdChzcmNWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgbWVyZ2VGdW5jKG5ld1ZhbHVlLCBzcmNWYWx1ZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWVyZ2VEZWVwO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9QbGFpbk9iamVjdDtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcbiIsInZhciBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcbiIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcbiIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG4iLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcbiIsIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG4iLCJ2YXIgYmFzZUhhcyA9IHJlcXVpcmUoJy4vX2Jhc2VIYXMnKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3QgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IHsgJ2InOiAyIH0gfTtcbiAqIHZhciBvdGhlciA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhcyhvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXMob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXMob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhcyhvdGhlciwgJ2EnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhcyhvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXM7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc2Agd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhcyhvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhcztcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG4iLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsInZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxcbiAgICByZUhhc1JlZ0V4cENoYXIgPSBSZWdFeHAocmVSZWdFeHBDaGFyLnNvdXJjZSk7XG5cbi8qKlxuICogRXNjYXBlcyB0aGUgYFJlZ0V4cGAgc3BlY2lhbCBjaGFyYWN0ZXJzIFwiXlwiLCBcIiRcIiwgXCJcXFwiLCBcIi5cIiwgXCIqXCIsIFwiK1wiLFxuICogXCI/XCIsIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCIsIGFuZCBcInxcIiBpbiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBlc2NhcGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBlc2NhcGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5lc2NhcGVSZWdFeHAoJ1tsb2Rhc2hdKGh0dHBzOi8vbG9kYXNoLmNvbS8pJyk7XG4gKiAvLyA9PiAnXFxbbG9kYXNoXFxdXFwoaHR0cHM6Ly9sb2Rhc2hcXC5jb20vXFwpJ1xuICovXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiAoc3RyaW5nICYmIHJlSGFzUmVnRXhwQ2hhci50ZXN0KHN0cmluZykpXG4gICAgPyBzdHJpbmcucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZVJlZ0V4cDtcbiJdLCJzb3VyY2VSb290IjoiIn0=