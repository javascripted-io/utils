import startsWith from "./index"
import { describe, expect, it } from "vitest"

describe("startsWith", () => {
    it.each([
        ["starts with single character target", "foobar", "f", undefined],
        ["starts with multi-character target", "foobar", "foo", undefined],
        ["from position starts with single character target", "foobar", "o", 1],
        ["from position starts with multi-character target", "foobar", "oob", 1],
        ["starts with single character target and position is less than zero", "foobar", "f", -1],
        ["starts with multi-character target and position is less than zero", "foobar", "foo", -1]
    ])("should return true when string %s", (_, input, target, position) =>{
        expect(startsWith(input, target, position)).toBe(true)
    })

    it.each([
        ["does not start with single character target", "foobar", "o", undefined],
        ["does not start with multi-character target", "foobar", "oob", undefined],
        ["from position does not start with single character target", "foobar", "f", 1],
        ["from position does not start with multi-character target", "foobar", "foo", 1]
    ])("should return false when string %s", (_, input, target, position) =>{
        expect(startsWith(input, target, position)).toBe(false)
    })
})
