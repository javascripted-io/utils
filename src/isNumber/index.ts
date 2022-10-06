import { typeofGuard } from "../guard"

/**
 * Check if a value is a number or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a number
 */
export default typeofGuard<number>("number")
