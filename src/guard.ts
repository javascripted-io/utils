import { RefineType } from "./types"

export const instanceGaurd = <T, R extends Function>(r: R) => (value: T | R): value is RefineType<T, R> => value instanceof r

export const typeGaurd = <T, R>(r: string) => (value: T | R): value is RefineType<T, R> => typeof value === r
