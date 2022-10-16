"use strict";
exports.__esModule = true;
var guard_1 = require("../guard");
/**
 * Check if a value is a Date or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Date
 */
exports["default"] = (0, guard_1.instanceGuard)(Date);
