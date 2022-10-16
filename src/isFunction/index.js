"use strict";
exports.__esModule = true;
var guard_1 = require("../guard");
/**
 * Check if a value is a Function or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Function
 */
exports["default"] = (0, guard_1.instanceGuard)(Function);
