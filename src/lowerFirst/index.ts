import { toLowerCase } from "../internals"

/**
 * Lowercase first letter in a string.
 *
 * @param {string} input - string to lowercase first letter of
 * @returns {string} string with first letter lowercase
 */
 export default (input: string): string => toLowerCase(input.at(0)) + input.slice(1)
 