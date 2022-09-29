import { instanceGuard } from "../guard"

/**
 * Check if a value is an ArrayBuffer or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is an ArrayBuffer
 */
export default instanceGuard(ArrayBuffer)
