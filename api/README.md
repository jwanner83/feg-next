# API connector

The API connector uses react-query internally to cache and re-request data when needed.

## How to create an endpoint

### Creating a GET endpoint

1. Create a new Class that extends from **BaseEndpoint**.
   Pass it as a generic argument to the Base class.

```typescript
class ExampleEndpoint extends BaseEndpoint<ExampleEndpoint> {}
```

2. Define a key. This can be any value, provided it isn't used in any other Endpoint class.

```typescript
class ExampleEndpoint extends BaseEndpoint<ExampleEndpoint> {
  key = 'example'
}
```

3. Create your request function using a request provider.
   You can use the default apiRequest, or create your own in the request.ts file.

```typescript
class ExampleEndpoint extends BaseEndpoint<ExampleEndpoint> {
  key = 'example'

  getExampleRequest(
    context: GetContext<ExampleParameters>
  ): Promise<DefaultResponseSchema<ExampleReturnType>> {
    return apiRequest('user/getUserData', {
      queryParams: { uid: context.params.uid }
    })
  }
}
```

Your request function receives a context Object.
If you're creating a GET service, this will be of type GetContext&lt;ParamType&gt;.
The ParamType is the type of the parameters passed to the hook.
If you want to receive a typed data object, return a Promise with the type.
In this case the DefaultResponseSchema is used (`{ data: {}, pagination: {} }`).

4. Define the hook using the createUseGetHook function.

```typescript
class ExampleEndpoint extends BaseEndpoint<ExampleEndpoint> {
  //...
  useGetExampleRequest = this.createUseGetHook(this.getExampleRequest)
}
```

Pass the parameter and return types as generic parameters.
This is done to ensure correct typing on the hook.

5. _(Not required)_ Define the prefetch function using the createGetPrefetch function.
   To prefetch data for server-side rendering, a separate function needs to be created.

   This function fetches the data using the same function you defined before, and inserts it into the cache.

```typescript
class ExampleEndpoint extends BaseEndpoint<ExampleEndpoint> {
  // ...
  prefetchExampleRequest = this.createGetPrefetch(this.getExampleRequest)
}
```

6. Export an Instance of this class.

```typescript
export const exampleEndpoint = new ExampleEndpoint()
```

### Creating a POST, PUT, DELETE endpoint

These types of endpoints are summarized as the edit type.
Since they update data, they need to be sent exactly once.

1. Follow step 1-2 of the previous section, or use your existing class.
2. Create your request function. Use the EditContext as a type for the context parameter.
   Pass the body and parameter type for your function.

```typescript
class ExampleEndpoint extends BaseEndpoint<ExampleEndpoint> {
  key = 'example'

  addAddress(
    context: EditContext<UserAddAddressBody, SiteParams>
  ): Promise<DefaultResponseSchema<any>> {
    return apiRequest('user/addAddress', {
      method: 'POST',
      queryParams: {
        site: context.params.site
      },
      body: context.body
    })
  }
}
```

4. Define the hook using the createUseEditHook function.

```typescript
class ExampleEndpoint extends BaseEndpoint<ExampleEndpoint> {
  // ...

  useAddAddress = this.createUseEditHook(this.addAddress)
}
```

5. Export an Instance of this class.

```typescript
export const exampleEndpoint = new ExampleEndpoint()
```

### Context<Type>

The GetContext looks like this:

```typescript
type GetContext<T> = {
  key: string
  params: T
}
```

The EditContext looks like this:

```typescript
type EditContext<B, T> = {
  key: string
  body: B
  params: T
}
```

## How to use an endpoint

### Using the useGet hook

In a React component, import the endpoint.

```typescript
import { exampleEndpoint } from './ExampleEndpoint'
```

And use it by accessing the hook function you defined.

```typescript
const { isLoading, isError, data, error } =
  exampleEndpoint.useGetExampleRequest({
    // Any parameters defined in the ExampleParameters type
  })
```

### SSR

To fetch the data on the server, use the previously defined prefetchGetExampleRequest function inside the getServerSideProps function.
The prefetch function returns a queryClient instance, which you need to pass as a value to the prop dehydratedState.

```typescript
export async function getServerSideProps() {
  const queryClient = await exampleEndpoint.prefetchGet({ index: 1 })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
```

If you then use the hook, the returned data object will already be populated with the data fetched in the above function.

_Important: Make sure the params passed to the prefetch and hook functions are equivalent, otherwise the data will be fetched twice._

### Using the useEdit hook

In a React component, import the endpoint.

```typescript
import { exampleEndpoint } from './ExampleEndpoint'
```

Create a new mutation by calling the useEdit hook you previously defined.

```typescript
const { mutation, onSuccess, onError, onSettled } =
  exampleEndpoint.useEditUser()

onSuccess((data) => {
  // Success!
})

onError((error) => {
  // Failure :(
})

onSettled((data, error) => {
  // Success or failure, ¯\_(ツ)_/¯
})
```

_Note: This will not start a request yet._

Start the request by calling mutation.mutate().

```typescript
const onClick = () => {
  mutation.mutate({ body: { username: 'abc' }, params: { param: 'example' } })
}
```

The reason for this two-step process is to allow you to execute the request in a nested function, for example an event handler.  
_Note: Don't call mutation.mutate() in the top level of a component! This will cause unintended behavior._
