import upperFirst from "./index"
import { describe, expect, it } from "vitest"

describe("upperFirst", () => {
    it.each([
        ["lowercase word", "word", "Word"],
        ["capitalized word", "Word", "Word"],
        ["uppercase word", "WORD", "WORD"]
    ])("should return expected string when %s", (_, input, output) =>{
        expect(upperFirst(input)).toBe(output)
    })
})
