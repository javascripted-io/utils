/**
 * Split an array into chunks of a given size.
 *
 * @param {Array<*>} array - array to split
 * @returns {Array<Array<*>>} array of chunks from original array
 */
export default <T>(array: T[], size: number): T[][] => {
    const chunks: T[][] = Array(Math.ceil(array.length / size))
    for (let i = 0, j = 0; i < array.length; i += size, j += 1) chunks[j] = array.slice(i, i + size)
    return chunks
}
