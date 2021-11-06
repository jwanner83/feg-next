/**
 * The fetcher function executes the fetch request and handles any errors
 * @param url
 * @param options
 */
 import { RequestError } from './RequestError';

 export const fetcher = async (url: string, options: RequestInit) => {
   const res = await fetch(url, options);
 
   if (!res.ok) {
     const error = new RequestError({
       name: res.statusText,
       statusCode: res.status
     });
 
     try {
       const response = await res.json();
       if (response?.messages) {
         error.messages = response.messages;
       }
     } catch {
       // Error response had no body
     }
 
     throw error;
   }
 
   return res.json();
 };
 