import { fetcher } from './fetcher';
import { ApiRequestOptions } from './request.types';

const baseUrl = 'https://test.feg-gossau.ch/wp-json/wp/v2/';

/**
 * Prepares the request received by an endpoint function to be fetched
 * @param endpoint
 * @param requestOptions
 */
const prepareRequest = (
  endpoint: string,
  requestOptions?: ApiRequestOptions
): { url: string; options: RequestInit } => {
  const requestOptionsObject = { ...requestOptions };

  let queryParamsString: string;
  let queryParams = new URLSearchParams('');

  if (requestOptionsObject?.queryParams) {
    const queryParamsRaw = requestOptionsObject.queryParams;
    queryParams = new URLSearchParams(queryParamsRaw as any);
  }

  if (requestOptionsObject?.singleQueryParams) {
    for (const singleQuery of requestOptionsObject.singleQueryParams) {
      queryParams.set(singleQuery, "")
    }
  }

  queryParamsString = queryParams.toString();

  let body: string | undefined = undefined;
  if (requestOptionsObject?.body) {
    body = requestOptionsObject.body as string;
    if (typeof requestOptionsObject.body !== 'string') {
      body = JSON.stringify(requestOptionsObject.body);
    }
  }

  const url = `${baseUrl}${endpoint}?${queryParamsString}`;
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const options = {
    ...requestOptionsObject,
    body,
    headers
  };

  return { url, options };
};

/**
 * apiRequest is the default implementation for API requests.
 * @param endpoint
 * @param requestOptions
 */
export const apiRequest = <T = any>(
  endpoint: string,
  requestOptions?: ApiRequestOptions
) => {
  const { url, options } = prepareRequest(endpoint, requestOptions);

  return fetcher(url, options);
};
