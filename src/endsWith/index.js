"use strict";
exports.__esModule = true;
var isNumber_1 = require("../isNumber");
/**
 * Check if a string ends with a given target string.
 *
 * @param {string} input - string to inspect
 * @param {string} target - string to search for
 * @param {number} [position] - position to search up to
 * @returns {boolean} whether or not string ends with target string
 */
exports["default"] = (function (input, target, position) {
    return ((0, isNumber_1["default"])(position) ? input.substring(0, position) : input).endsWith(target);
});
