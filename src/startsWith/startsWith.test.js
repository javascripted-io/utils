"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var vitest_1 = require("vitest");
(0, vitest_1.describe)("startsWith", function () {
    vitest_1.it.each([
        ["starts with single character target", "foobar", "f", undefined],
        ["starts with multi-character target", "foobar", "foo", undefined],
        ["from position starts with single character target", "foobar", "o", 1],
        ["from position starts with multi-character target", "foobar", "oob", 1],
        ["starts with single character target and position is less than zero", "foobar", "f", -1],
        ["starts with multi-character target and position is less than zero", "foobar", "foo", -1]
    ])("should return true when string %s", function (_, input, target, position) {
        (0, vitest_1.expect)((0, index_1["default"])(input, target, position)).toBe(true);
    });
    vitest_1.it.each([
        ["does not start with single character target", "foobar", "o", undefined],
        ["does not start with multi-character target", "foobar", "oob", undefined],
        ["from position does not start with single character target", "foobar", "f", 1],
        ["from position does not start with multi-character target", "foobar", "foo", 1]
    ])("should return false when string %s", function (_, input, target, position) {
        (0, vitest_1.expect)((0, index_1["default"])(input, target, position)).toBe(false);
    });
});
