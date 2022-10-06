import { toLowerCase } from "../internals"
import upperFirst from "../upperFirst"

export default (input: string): string => input
    .split(/[\s-]/)
    .map(word => toLowerCase(word))
    .map((word, index) => index === 0 ? word : upperFirst(word))
    .join("")
