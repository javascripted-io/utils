import padStart from "./index"
import { describe, expect, it } from "vitest"

describe("padStart", () => {
    it.each([
        ["pad string with space when pad string not provided", "foo", 5, undefined, "  foo"],
        ["pad string with provided pad string", "foo", 5, "_", "__foo"],
        ["not pad string that is already target length", "foo", 3, undefined, "foo"],
        ["coerce pad string to fit target length", "foo", 6, "_-", "_-_foo"],
    ])("should %s", (_, input, targetLength, padString, output) =>{
        expect(padStart(input, targetLength, padString)).toBe(output)
    })
})
