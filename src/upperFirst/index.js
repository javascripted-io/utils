"use strict";
exports.__esModule = true;
var internals_1 = require("../internals");
/**
 * Uppercase first letter in a string.
 *
 * @param {string} input - string to uppercase first letter of
 * @returns {string} string with first letter uppercase
 */
exports["default"] = (function (input) { return (0, internals_1.toUpperCase)(input.at(0)) + input.slice(1); });
