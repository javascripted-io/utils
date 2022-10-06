import isNumber from "../isNumber"

/**
 * Check if a string ends with a given target string.
 *
 * @param {string} input - string to inspect
 * @param {string} target - string to search for
 * @param {number} [position] - position to search up to
 * @returns {boolean} whether or not string ends with target string
 */
export default (input: string, target: string, position?: number): boolean =>
    (isNumber(position) ? input.substring(0, position) : input).endsWith(target)
