"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var vitest_1 = require("vitest");
(0, vitest_1.describe)("camelCase", function () {
    vitest_1.it.each([
        ["multiple words separated by spaces", "foo bar", "fooBar"],
        ["words and numbers separated by spaces", "foo 21 bar", "foo21Bar"],
        ["multiple words separated by hyphens", "foo-bar", "fooBar"],
        ["words and numbers separated by hyphens", "foo-21-bar", "foo21Bar"],
        ["words contain acronyms", "safe HTML", "safeHtml"]
    ])("should return expected string when %s", function (_, input, output) {
        (0, vitest_1.expect)((0, index_1["default"])(input)).toBe(output);
    });
});
