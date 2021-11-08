import {
  FnParamType,
  FnReturnType,
  GetContext,
  RequestFnName
} from './Base.types'
import { BaseEndpoint } from './BaseEndpoint'

/**
 * This class provides a default GET implementation for REST-compliant APIs
 * To implement, override the get method. Hooks and prefetch functions are automatically generated.
 */
export abstract class BaseGetEndpoint<
  SubClass extends BaseGetEndpoint<SubClass>
> extends BaseEndpoint<SubClass> {
  /**
   * Directly accesses the GET function of the API class
   * @param context
   */
  abstract get(
    context: GetContext<any>
  ): ReturnType<SubClass[RequestFnName.GET]>

  prefetchGet = this.createGetPrefetch<
    FnParamType<SubClass[RequestFnName.GET]>,
    FnReturnType<SubClass[RequestFnName.GET]>
  >(this.get)

  useGet = this.createUseGetHook<
    FnParamType<SubClass[RequestFnName.GET]>,
    FnReturnType<SubClass[RequestFnName.GET]>
  >(this.get)
}
