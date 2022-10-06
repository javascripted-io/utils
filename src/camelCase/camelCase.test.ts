import camelCase from "./index"
import { describe, expect, it } from "vitest"

describe("camelCase", () => {
    it.each([
        ["multiple words separated by spaces", "foo bar", "fooBar"],
        ["words and numbers separated by spaces", "foo 21 bar", "foo21Bar"],
        ["multiple words separated by hyphens", "foo-bar", "fooBar"],
        ["words and numbers separated by hyphens", "foo-21-bar", "foo21Bar"],
        ["words contain acronyms", "safe HTML", "safeHtml"]
    ])("should return expected string when %s", (_, input, output) =>{
        expect(camelCase(input)).toBe(output)
    })
})
