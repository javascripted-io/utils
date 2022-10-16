"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var vitest_1 = require("vitest");
(0, vitest_1.describe)("chunk", function () {
    vitest_1.it.each([
        ["length of array is size", [1, 2, 3, 4], 4, [[1, 2, 3, 4]]],
        ["length of array is divisible by size", [1, 2, 3, 4], 2, [[1, 2], [3, 4]]],
        ["length of array is not divisible by size", [1, 2, 3, 4], 3, [[1, 2, 3], [4]]],
        ["length of array is less than size", [1, 2, 3, 4], 5, [[1, 2, 3, 4]]]
    ])("should return expected value when %s", function (_, array, size, result) {
        (0, vitest_1.expect)((0, index_1["default"])(array, size)).toEqual(result);
    });
});
