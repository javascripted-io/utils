"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var vitest_1 = require("vitest");
(0, vitest_1.describe)("endsWith", function () {
    vitest_1.it.each([
        ["ends with single character target", "foobar", "r", undefined],
        ["ends with multi-character target", "foobar", "bar", undefined],
        ["up to position ends with single character target", "foobar", "a", 5],
        ["up to position ends with multi-character target", "foobar", "oba", 5],
        ["ends with single character target and position is greater than string length", "foobar", "r", 10],
        ["ends with multi-character target and position is greater than string length", "foobar", "bar", 10]
    ])("should return true when string %s", function (_, input, target, position) {
        (0, vitest_1.expect)((0, index_1["default"])(input, target, position)).toBe(true);
    });
    vitest_1.it.each([
        ["does not end with single character target", "foobar", "a", undefined],
        ["does not end with multi-character target", "foobar", "car", undefined],
        ["up to position does not ends with single character target", "foobar", "b", 5],
        ["up to position does not ends with multi-character target", "foobar", "oob", 5]
    ])("should return false when string %s", function (_, input, target, position) {
        (0, vitest_1.expect)((0, index_1["default"])(input, target, position)).toBe(false);
    });
});
