/* eslint-disable react-hooks/rules-of-hooks */
import { EditContext, GetContext, UseEditReturnType } from './Base.types';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient
} from 'react-query';
import { DefaultResponseSchema } from '../common/request.types';
import { RequestError } from '../common/RequestError';
import { useRef } from 'react';

/**
 * The base endpoint
 * Every endpoint extends this class
 */
export abstract class BaseEndpoint<SubClass extends BaseEndpoint<SubClass>> {
  abstract key: string;

  /**
   * Create the useGet hook for GET requests in react components
   * @param fn
   * @protected
   */
  protected createUseGetHook<
    ParamType,
    FnReturnType,
    QueryReturnType = DefaultResponseSchema<FnReturnType>
  >(fn: (context: GetContext<ParamType>) => PromiseLike<FnReturnType>) {
    return (params?: ParamType) => {
      const queryClient = useQueryClient();
      const queryKey = [`${this.key}/${fn.name}`, { params }];
      const query = useQuery<QueryReturnType>(queryKey, (context) =>
        this.extractContext(context, fn)
      );
      const invalidateQuery = () => queryClient.invalidateQueries(queryKey);
      return {
        ...query,
        invalidateQuery
      };
    };
  }

  /**
   * Create the useEdit hook for PUT, POST, DELETE requests in react components
   * @param fn
   * @protected
   */
  protected createUseEditHook<BodyType, ParamType, FnReturnType>(
    fn: (context: EditContext<BodyType, ParamType>) => Promise<FnReturnType>
  ) {
    return (): UseEditReturnType<
      FnReturnType,
      { body?: BodyType; params?: ParamType }
    > => {
      const noop = () => {};
      let successHandler = useRef<any>(noop);
      let failureHandler = useRef<any>(noop);
      let settledHandler = useRef<any>(noop);

      const mutation = useMutation<
        FnReturnType,
        any,
        { body?: BodyType; params?: ParamType }
      >(
        `${this.key}/${fn.name}`,
        (data: any) =>
          fn({
            body: data.body,
            params: data.params
          }) as unknown as Promise<FnReturnType>,
        {
          onSuccess: (...args) => successHandler.current(...args),
          onError: (...args) => failureHandler.current(...args),
          onSettled: (...args) => settledHandler.current(...args),
          useErrorBoundary: false,
          retry: false
        }
      );

      const onSuccess = (successFn: (data: FnReturnType) => void) => {
        successHandler.current = successFn;
      };

      const onError = (errorFn: (error: RequestError) => void) => {
        failureHandler.current = errorFn;
      };

      const onSettled = (
        settledFn: (data: FnReturnType, error: RequestError) => void
      ) => {
        settledHandler.current = settledFn;
      };

      return {
        mutation,
        onSuccess,
        onError,
        onSettled
      };
    };
  }

  /**
   * Create the prefetch function for server-side data fetching
   * @param fn
   * @protected
   */
  protected createGetPrefetch<ParamType, ReturnType>(
    fn: (context: GetContext<ParamType>) => PromiseLike<ReturnType>
  ) {
    return async (params: ParamType) => {
      const queryClient = new QueryClient();
      await queryClient.prefetchQuery<ReturnType>(
        [`${this.key}/${fn.name}`, { params }],
        (context) => this.extractContext(context, fn)
      );
      return queryClient;
    };
  }

  /**
   * Internal function to create the context object object from react-query parameters
   * @param context
   * @param fn
   * @private
   */
  private extractContext(context: any, fn: any) {
    const [_key, { params }] = context.queryKey;

    return fn({ key: _key, params });
  }
}
