"use strict";
exports.__esModule = true;
var internals_1 = require("../internals");
/**
 * Uppercase first letter in a string and lowercase rest.
 *
 * @param {string} input - string to capitalize
 * @returns {string} capitalized string
 */
exports["default"] = (function (input) { return (0, internals_1.toUpperCase)(input.at(0)) + (0, internals_1.toLowerCase)(input.slice(1)); });
