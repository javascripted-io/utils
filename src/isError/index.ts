import { instanceGaurd } from "../guard"

/**
 * Check if a value is an Error or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is an Error
 */
export default instanceGaurd(Error)
