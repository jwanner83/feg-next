const base = 'https://feg-gossau.ch/wp-json/wp/v2/'

interface options extends RequestInit {
  body?: any
  params?: {
    [key: string]: string | undefined
  }
}

function prepare(endpoint: string, options: options) {
  let params = ''

  if (options.params) {
    params = new URLSearchParams(options.params).toString()
  }

  const url = base + endpoint + '?' + params

  return {
    url,
    options
  }
}

export async function request<ResponseData>(
  endpoint: string,
  options: options
): Promise<undefined | { data: ResponseData; headers: Headers }> {
  const prepared = prepare(endpoint, options)

  try {
    const response = await fetch(prepared.url, prepared.options)
    const data = await response.json()

    return {
      data,
      headers: new Headers(response.headers)
    }
  } catch (error) {
    console.error(`request to ${endpoint} failed`, error)
  }

  return undefined
}
