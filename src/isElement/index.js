"use strict";
exports.__esModule = true;
var guard_1 = require("../guard");
var fallback = function () {
    throw new Error("Element is not defined");
};
/**
 * Check if a value is an Element or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is an Element
 */
exports["default"] = "Element" in global ? (0, guard_1.instanceGuard)(global.Element) : fallback;
