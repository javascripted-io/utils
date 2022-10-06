/**
 * Check if a string starts with a given target string.
 *
 * @param {string} input - string to inspect
 * @param {string} target - string to search for
 * @param {number} [position] - position to search from
 * @returns {boolean} whether or not string starts with target string
 */
export default (input: string, target: string, position?: number): boolean => input.startsWith(target, position)
