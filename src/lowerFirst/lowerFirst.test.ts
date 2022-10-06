import upperFirst from "./index"
import { describe, expect, it } from "vitest"

describe("upperFirst", () => {
    it.each([
        ["lowercase word", "word", "word"],
        ["capitalized word", "Word", "word"],
        ["uppercase word", "WORD", "wORD"]
    ])("should return expected string when %s", (_, input, output) =>{
        expect(upperFirst(input)).toBe(output)
    })
})
