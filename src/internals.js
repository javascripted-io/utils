"use strict";
// The main purpose of this module is to just wrap native methods in an effort to make our output lib smaller (both pre
// and post gzip).
exports.__esModule = true;
exports.toUpperCase = exports.toLowerCase = void 0;
var isString_1 = require("./isString");
var toLowerCase = function (value) { return (0, isString_1["default"])(value) ? value.toLowerCase() : value; };
exports.toLowerCase = toLowerCase;
var toUpperCase = function (value) { return (0, isString_1["default"])(value) ? value.toUpperCase() : value; };
exports.toUpperCase = toUpperCase;
