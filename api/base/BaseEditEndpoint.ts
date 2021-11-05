import { BaseGetEndpoint } from './BaseGetEndpoint';
import {
  EditContext,
  FnParamType,
  FnReturnType,
  RequestFnName
} from './Base.types';

export abstract class BaseEditEndpoint<
  SubClass extends BaseEditEndpoint<SubClass>
> extends BaseGetEndpoint<SubClass> {
  /**
   * Directly accesses the PUT function of the API class
   * @param context
   */
  abstract put(
    context: EditContext<any, FnParamType<SubClass[RequestFnName.PUT]>>
  ): ReturnType<SubClass[RequestFnName.PUT]>;

  /**
   * Directly accesses the POST function of the API class
   * @param context
   */
  abstract post(
    context: EditContext<any, FnParamType<SubClass[RequestFnName.POST]>>
  ): ReturnType<SubClass[RequestFnName.POST]>;

  /**
   * Directly accesses the DELETE function of the API class
   * @param context
   */
  abstract delete(
    context: EditContext<any, FnParamType<SubClass[RequestFnName.DELETE]>>
  ): ReturnType<SubClass[RequestFnName.DELETE]>;

  usePut = this.createUseEditHook<
    any,
    FnParamType<SubClass[RequestFnName.PUT]>,
    FnReturnType<SubClass[RequestFnName.PUT]>
  >(this.put);

  usePost = this.createUseEditHook<
    any,
    FnParamType<SubClass[RequestFnName.POST]>,
    FnReturnType<SubClass[RequestFnName.POST]>
  >(this.post);

  useDelete = this.createUseEditHook<
    any,
    FnParamType<SubClass[RequestFnName.DELETE]>,
    FnReturnType<SubClass[RequestFnName.DELETE]>
  >(this.delete);
}
