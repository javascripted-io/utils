import { instanceGuard } from "../guard"

/**
 * Check if a value is a Date or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Date
 */
export default instanceGuard(Date)
