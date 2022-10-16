"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var vitest_1 = require("vitest");
(0, vitest_1.describe)("upperFirst", function () {
    vitest_1.it.each([
        ["lowercase word", "word", "word"],
        ["capitalized word", "Word", "word"],
        ["uppercase word", "WORD", "wORD"]
    ])("should return expected string when %s", function (_, input, output) {
        (0, vitest_1.expect)((0, index_1["default"])(input)).toBe(output);
    });
});
