"use strict";
exports.__esModule = true;
exports.typeofGuard = exports.instanceGuard = void 0;
var instanceGuard = function (r) { return function (value) { return value instanceof r; }; };
exports.instanceGuard = instanceGuard;
var typeofGuard = function (type) { return function (value) { return typeof value === type; }; };
exports.typeofGuard = typeofGuard;
