"use strict";
exports.__esModule = true;
/**
 * Check if a value is a Symbol or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Symbol
 */
exports["default"] = (function (value) { return (value === null || value === void 0 ? void 0 : value.constructor) === Symbol; });
