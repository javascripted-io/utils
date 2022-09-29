import { instanceGuard } from "../guard"

/**
 * Check if a value is a Buffer or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Buffer
 */
export default instanceGuard(Buffer)
