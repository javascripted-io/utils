import { RefineType } from "../types"

/**
 * Check if a value is null or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is null
 */
export default <T>(value: T | null): value is RefineType<T, null> => value === null
