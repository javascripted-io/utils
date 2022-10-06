/**
 * Pad input string on right side if it is shorter than target length.
 *
 * @param {string} input - string to pad
 * @param {number} targetLength - length of resulting string once padded
 * @param {string} [padString] - string used as padding
 * @returns {string} padded string
 */
 export default (input: string, targetLength: number, padString?: string): string => input.padEnd(targetLength, padString)
 