/**
 * Check if a value is a Symbol or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Symbol
 */
export default (value: unknown): value is Symbol => value?.constructor === Symbol
