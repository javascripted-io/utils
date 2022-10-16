"use strict";
exports.__esModule = true;
var guard_1 = require("../guard");
var fallback = function () {
    throw new Error("Buffer is not defined");
};
/**
 * Check if a value is a Buffer or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Buffer
 */
exports["default"] = "Buffer" in global ? (0, guard_1.instanceGuard)(global.Buffer) : fallback;
