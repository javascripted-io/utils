import isElement from "../index"
import { describe, expect, it } from "vitest"
import { FALSY } from "./common"

describe("isBuffer", () => {
    it.each(FALSY)(`should throw when value is %s`, (_, value) => {
        expect(() => {
            isElement(value)
        }).toThrow("Element is not defined")
    });
})
  