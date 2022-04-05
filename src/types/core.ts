export type Expand<T, U> = {[K in keyof T]?: T[K] extends Array<infer O> ? Array<O & U> : T[K]};
