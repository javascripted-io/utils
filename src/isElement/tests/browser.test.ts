/**
 * @vitest-environment jsdom
 */

import isElement from "../index"
import { describe, expect, it } from "vitest"
import { FALSY } from "./common"

describe("isBuffer", () => {
    it.each([
        ["a HTMLAnchor", "a"],
        ["a HTMLArea", "area"],
        ["a HTMLAudioElement", "audio"],
        ["a HTMLBRElement", "br"],
        ["a HTMLBaseElement", "base"],
        ["a HTMLBodyElement", "body"],
        ["a HTMLButtonElement", "button"],
        ["a HTMLCanvasElement", "canvas"],
        ["a HTMLContentElement", "content"], // deprecated element
        ["a HTMLDListElement", "dl"],
        ["a HTMLDataElement", "data"],
        ["a HTMLDataListElement", "datalist"],
        ["a HTMLDialogElement", "dialog"],
        ["a HTMLDivElement", "div"],
        ["a HTMLEmbedElement", "embed"],
        ["a HTMLFieldsetElement", "fieldset"],
        ["a HTMLFormElement", "form"],
        ["a HTMLFrameSetElement", "frameset"], // deprecated element
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
        ["a HTMLKeygenElement", "keygen"], // deprecated element
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
        ["a HTMLShadowElement", "shadow"], // deprecated element
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
    ])("should return true when value is %s", (_, tag) => {
        expect(isElement(document.createElement(tag))).toBe(true)
    })

    it.each([
        ...FALSY,
        ["a HTMLDocument", document]
    ])("should return false when value is %s", (_, value) =>{
        expect(isElement(value)).toBe(false)
    })
})
