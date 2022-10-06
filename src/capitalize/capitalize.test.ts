import capitalize from "./index"
import { describe, expect, it } from "vitest"

describe("capitalize", () => {
    it.each([
        ["lowercase word", "word", "Word"],
        ["capitalized word", "Word", "Word"],
        ["uppercase word", "WORD", "Word"]
    ])("should return expected string when %s", (_, input, output) =>{
        expect(capitalize(input)).toBe(output)
    })
})
