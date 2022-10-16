"use strict";
/**
 * @vitest-environment jsdom
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var index_1 = require("../index");
var vitest_1 = require("vitest");
var common_1 = require("./common");
(0, vitest_1.describe)("isBuffer", function () {
    vitest_1.it.each([
        ["a HTMLAnchor", "a"],
        ["a HTMLArea", "area"],
        ["a HTMLAudioElement", "audio"],
        ["a HTMLBRElement", "br"],
        ["a HTMLBaseElement", "base"],
        ["a HTMLBodyElement", "body"],
        ["a HTMLButtonElement", "button"],
        ["a HTMLCanvasElement", "canvas"],
        ["a HTMLContentElement", "content"],
        ["a HTMLDListElement", "dl"],
        ["a HTMLDataElement", "data"],
        ["a HTMLDataListElement", "datalist"],
        ["a HTMLDialogElement", "dialog"],
        ["a HTMLDivElement", "div"],
        ["a HTMLEmbedElement", "embed"],
        ["a HTMLFieldsetElement", "fieldset"],
        ["a HTMLFormElement", "form"],
        ["a HTMLFrameSetElement", "frameset"],
        ["a HTMLHRElement", "hr"],
        ["a HTMLHeadElement", "head"],
        ["a HTMLHeadingElement (h1)", "h1"],
        ["a HTMLHeadingElement (h2)", "h2"],
        ["a HTMLHeadingElement (h3)", "h3"],
        ["a HTMLHeadingElement (h4)", "h4"],
        ["a HTMLHeadingElement (h5)", "h5"],
        ["a HTMLHeadingElement (h6)", "h6"],
        ["a HTMLHtmlElement", "html"],
        ["a HTMLIFrameElement", "iframe"],
        ["a HTMLImageElement", "image"],
        ["a HTMLImageElement", "image"],
        ["a HTMLKeygenElement", "keygen"],
        ["a HTMLMapElement", "map"],
        ["a HTMLMetaElement", "meta"],
        ["a HTMLMeterElement", "meter"],
        ["a HTMLModElement (del)", "del"],
        ["a HTMLModeElement (insert)", "insert"],
        ["a HTMLOListElement", "ol"],
        ["a HTMLObjectElement", "object"],
        ["a HTMLOptGroupElement", "optgroup"],
        ["a HTMLOptionElement", "option"],
        ["a HTMLOutputElement", "output"],
        ["a HTMLParagraphElement", "p"],
        ["a HTMLPictureElement", "picture"],
        ["a HTMLPreElement", "pre"],
        ["a HTMLProgressElement", "progress"],
        ["a HTMLQuoteElement (blockquote)", "blockquote"],
        ["a HTMLQuoteElement (cite)", "cite"],
        ["a HTMLQuoteElement (q)", "q"],
        ["a HTMLScriptElement", "script"],
        ["a HTMLSelectElement", "select"],
        ["a HTMLShadowElement", "shadow"],
        ["a HTMLSourceElement", "source"],
        ["a HTMLSpanElement", "span"],
        ["a HTMLStyleElement", "style"],
        ["a HTMLTableCaptionElement", "caption"],
        ["a HTMLTableCellElement (td)", "td"],
        ["a HTMLTableCellElement (th)", "th"],
        ["a HTMLTableColElement", "col"],
        ["a HTMLTableElement", "table"],
        ["a HTMLTableRowElement", "tr"],
        ["a HTMLTableSectionElement (tbody)", "tbody"],
        ["a HTMLTableSectionElement (tfoot)", "tfoot"],
        ["a HTMLTableSectionElement (thead)", "thead"],
        ["a HTMLTemplateElement", "template"],
        ["a HTMLTextAreaElement", "textarea"],
        ["a HTMLTimeElement", "time"],
        ["a HTMLTitleElement", "title"],
        ["a HTMLTrackElement", "track"],
        ["a HTMLUListElement", "ul"],
        ["a HTMLVideoElement", "video"]
    ])("should return true when value is %s", function (_, tag) {
        (0, vitest_1.expect)((0, index_1["default"])(document.createElement(tag))).toBe(true);
    });
    vitest_1.it.each(__spreadArray(__spreadArray([], common_1.FALSY, true), [
        ["a HTMLDocument", document]
    ], false))("should return false when value is %s", function (_, value) {
        (0, vitest_1.expect)((0, index_1["default"])(value)).toBe(false);
    });
});
