import { toUpperCase } from "../internals"

/**
 * Uppercase first letter in a string.
 *
 * @param {string} input - string to uppercase first letter of
 * @returns {string} string with first letter uppercase
 */
export default (input: string): string => toUpperCase(input.at(0)) + input.slice(1)
