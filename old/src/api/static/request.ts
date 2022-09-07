const host = process.env.NEXT_PUBLIC_API
const base = 'wp/v2/'

interface options extends RequestInit {
  base?: string
  body?: any
  params?: {
    [key: string]: string | undefined
  }
}

function prepare(endpoint: string, options: options) {
  const edited = { ...options }
  let params = ''

  if (edited.params) {
    params = new URLSearchParams(edited.params).toString()
  }

  let url = endpoint + '?' + params

  if (edited.base) {
    url = host + edited.base + url
    delete edited.base
  } else {
    url = host + base + url
  }

  return {
    url,
    options: edited
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
