// The main purpose of this module is to just wrap native methods in an effort to make our output lib smaller (both pre
// and post gzip).

import isString from "./isString"
import type { MaybeString } from "./types"

export const toLowerCase = <T = MaybeString>(value: T) => isString(value) ? value.toLowerCase() : value

export const toUpperCase = <T = MaybeString>(value: T) => isString(value) ? value.toUpperCase() : value
