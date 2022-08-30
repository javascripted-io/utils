import isNaN from "./index"
import { describe, expect, it } from "vitest"

describe("isNaN", () => {
    it("should return true when value is NaN", () => {
        expect(isNaN(NaN)).toBe(true)
    })

    it.each([
        ["Infinity", Infinity],
        ["-Infinity", -Infinity],
        ["undefined", undefined],
        ["null", null],
        ["a boolean", true],
        ["a function", function () {}],
        ["an arrow function", () => {}],
        ["an async function", async function() {}],
        ["a positive decimal", 2.3],
        ["a negative decimal", -2.3],
        ["a positive integer", 1],
        ["a negative integer", -1],
        ["a string", "foo"],
        ["an array", []],
        ["an object", {}],
        ["a BigUint64Array", new BigUint64Array()],
        ["a Date", new Date()],
        ["an Error", new Error()],
        ["a Map", new Map()],
        ["a Uint8Array", new Uint8Array()],
        ["a Uint8ClampedArray", new Uint8ClampedArray()],
        ["a Uint16Array", new Uint16Array()],
        ["a Uint32Array", new Uint32Array()],
        ["a Regex", /x/],
        ["a Symbol", Symbol()]
    ])("should return false when value is %s", (_, value) =>{
        expect(isNaN(value)).toBe(false)
    })
})
