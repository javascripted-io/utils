"use strict";
exports.__esModule = true;
var index_1 = require("../index");
var vitest_1 = require("vitest");
var common_1 = require("./common");
(0, vitest_1.describe)("isBuffer", function () {
    vitest_1.it.each(common_1.FALSY)("should throw when value is %s", function (_, value) {
        (0, vitest_1.expect)(function () {
            (0, index_1["default"])(value);
        }).toThrow("Element is not defined");
    });
});
