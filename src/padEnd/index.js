"use strict";
exports.__esModule = true;
/**
 * Pad input string on right side if it is shorter than target length.
 *
 * @param {string} input - string to pad
 * @param {number} targetLength - length of resulting string once padded
 * @param {string} [padString] - string used as padding
 * @returns {string} padded string
 */
exports["default"] = (function (input, targetLength, padString) { return input.padEnd(targetLength, padString); });
