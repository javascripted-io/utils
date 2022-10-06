export type MaybeString = string | null | undefined
export type RefineType<Type, FilteredType> = Type extends FilteredType ? FilteredType : Extract<Type, FilteredType>
