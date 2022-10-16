"use strict";
exports.__esModule = true;
var internals_1 = require("../internals");
var upperFirst_1 = require("../upperFirst");
exports["default"] = (function (input) { return input
    .split(/[\s-]/)
    .map(function (word) { return (0, internals_1.toLowerCase)(word); })
    .map(function (word, index) { return index === 0 ? word : (0, upperFirst_1["default"])(word); })
    .join(""); });
