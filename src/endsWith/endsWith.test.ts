import endsWith from "./index"
import { describe, expect, it } from "vitest"

describe("endsWith", () => {
    it.each([
        ["ends with single character target", "foobar", "r", undefined],
        ["ends with multi-character target", "foobar", "bar", undefined],
        ["up to position ends with single character target", "foobar", "a", 5],
        ["up to position ends with multi-character target", "foobar", "oba", 5],
        ["ends with single character target and position is greater than string length", "foobar", "r", 10],
        ["ends with multi-character target and position is greater than string length", "foobar", "bar", 10]
    ])("should return true when string %s", (_, input, target, position) =>{
        expect(endsWith(input, target, position)).toBe(true)
    })

    it.each([
        ["does not end with single character target", "foobar", "a", undefined],
        ["does not end with multi-character target", "foobar", "car", undefined],
        ["up to position does not ends with single character target", "foobar", "b", 5],
        ["up to position does not ends with multi-character target", "foobar", "oob", 5]
    ])("should return false when string %s", (_, input, target, position) =>{
        expect(endsWith(input, target, position)).toBe(false)
    })
})
