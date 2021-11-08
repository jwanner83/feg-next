import { UseMutationResult } from 'react-query'

/**
 * The get context received by a getter API implementation (see README)
 */
export type GetContext<T> = {
  key: string
  params?: T
}

/**
 * The edit (POST, PUT, DELETE) context received by an edit API implementation (see README)
 */
export type EditContext<B, T> = {
  body?: B
  params?: T
}

/**
 * The return type for the useEdit hook
 */
export type UseEditReturnType<FnReturnType, VariablesType> = {
  mutation: UseMutationResult<FnReturnType, any, VariablesType>
  onSuccess: (fn: (data: FnReturnType) => void) => void
  onError: (fn: (error: Error) => void) => void
  onSettled: (fn: (data?: FnReturnType, error?: Error) => void) => void
}

/**
 * The type, which a promise resolves to.
 * Promise<string> would resolve in string.
 *
 * Replace with Awaited<> after November 16th (Typescript 4.5)
 */
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T

/**
 * Extracts the non-promise return type of a function.
 */
export type FnReturnType<M extends (...args: any) => any> = Awaited<
  ReturnType<M>
>

/**
 * Extracts the type of the property "param" of the first return type of a method.
 * @example
 * fn({ param: "test" }) results in "String"
 */
export type FnParamType<M extends (...args: any) => any> =
  Parameters<M>[0]['params']

/**
 * Enum for the names of the default request methods
 */
export enum RequestFnName {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete'
}
