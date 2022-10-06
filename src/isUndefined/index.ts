import { typeofGuard } from "../guard"

/**
 * Check if a value is undefined or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is undefined
 */
export default typeofGuard<undefined>("undefined")
