"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var vitest_1 = require("vitest");
(0, vitest_1.describe)("padStart", function () {
    vitest_1.it.each([
        ["pad string with space when pad string not provided", "foo", 5, undefined, "  foo"],
        ["pad string with provided pad string", "foo", 5, "_", "__foo"],
        ["not pad string that is already target length", "foo", 3, undefined, "foo"],
        ["coerce pad string to fit target length", "foo", 6, "_-", "_-_foo"],
    ])("should %s", function (_, input, targetLength, padString, output) {
        (0, vitest_1.expect)((0, index_1["default"])(input, targetLength, padString)).toBe(output);
    });
});
