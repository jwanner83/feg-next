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

export async function request(endpoint: string, options: options) {
  const prepared = prepare(endpoint, options)

  try {
    const response = await fetch(prepared.url, prepared.options)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(`request to ${endpoint} failed`, error)
  }

  return undefined
}
