"use strict";
exports.__esModule = true;
var guard_1 = require("../guard");
/**
 * Check if a value is a number or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a number
 */
exports["default"] = (0, guard_1.typeofGuard)("number");
