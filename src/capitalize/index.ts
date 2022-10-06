import { toLowerCase, toUpperCase } from "../internals"

/**
 * Uppercase first letter in a string and lowercase rest.
 *
 * @param {string} input - string to capitalize
 * @returns {string} capitalized string
 */
 export default (input: string): string => toUpperCase(input.at(0)) + toLowerCase(input.slice(1))
 