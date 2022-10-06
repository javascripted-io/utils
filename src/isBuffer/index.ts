import { instanceGuard } from "../guard"

const fallback = () => {
    throw new Error("Buffer is not defined")
}

/**
 * Check if a value is a Buffer or not.
 *
 * @param {*} value - value to check
 * @returns {boolean} whether or not value is a Buffer
 */
export default "Buffer" in global ? instanceGuard(global.Buffer) : fallback
