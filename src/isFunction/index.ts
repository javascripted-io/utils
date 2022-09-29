import { instanceGuard } from "../guard"

/**
 * Check if a value is a Function or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Function
 */
export default instanceGuard(Function)
