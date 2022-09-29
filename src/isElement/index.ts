import { ArgumentsType } from "vitest";
import { instanceGuard } from "../guard"

const guard = instanceGuard(global.Element)

const fallback = (() => {
    throw new Error("Element is not defined")
}) as unknown as typeof guard

/**
 * Check if a value is an Element or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is an Element
 */
export default global.Element ? guard : fallback
