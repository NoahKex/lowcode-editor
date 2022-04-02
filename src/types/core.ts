export type Expand<T, U> = {[K in keyof T]: T[K] & U};
