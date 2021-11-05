/**
 * The type for query parameters
 */
 type ParametersType = {
    [key: string]: string | undefined;
  };
  
  /**
   * The options to pass to an API request, includes query parameters
   */
  interface RequestOptions extends RequestInit {
    queryParams?: ParametersType;
  }
  
  export type ApiRequestOptions = Omit<RequestOptions, 'body'> & {
    body?: any;
  };
  
  export type RequestErrorType = {
    statusCode: number;
    name: string;
  };
  
  export type Pagination = {
    offset: number;
    limit: number;
    totalResults: number;
  };
  
  export type DefaultResponseSchema<T> = {
    data: Array<T>;
    pagination: Pagination;
  };
  