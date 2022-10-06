import { instanceGuard } from "../guard"

const fallback = () => {
    throw new Error("Element is not defined")
}

/**
 * Check if a value is an Element or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is an Element
 */
export default "Element" in global ? instanceGuard(global.Element) : fallback
