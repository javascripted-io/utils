import chunk from "./index"
import { describe, expect, it } from "vitest"

describe("chunk", () => {
    it.each([
        ["length of array is size", [1, 2, 3, 4], 4, [[1, 2, 3, 4]]],
        ["length of array is divisible by size", [1, 2, 3, 4], 2, [[1, 2], [3, 4]]],
        ["length of array is not divisible by size", [1, 2, 3, 4], 3, [[1, 2, 3], [4]]],
        ["length of array is less than size", [1, 2, 3, 4], 5, [[1, 2, 3, 4]]]
    ])("should return expected value when %s", (_, array, size, result) =>{
        expect(chunk(array, size)).toEqual(result)
    })
})
