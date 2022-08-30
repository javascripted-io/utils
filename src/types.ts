export type RefineType<Type, FilteredType> = Type extends FilteredType ? FilteredType : Extract<Type, FilteredType>
