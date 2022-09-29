import { RefineType } from "./types"

export const instanceGuard = <T, R extends Function>(r: R) => (value: T | R): value is RefineType<T, R> => value instanceof r

export const typeofGuard = <T = unknown>(type: string) => (value: unknown): value is T => typeof value === type