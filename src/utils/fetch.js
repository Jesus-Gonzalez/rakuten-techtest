import axios from 'axios'

import { Configuration } from '~/api'

export const fetch = (endpoint, config) => {
  const url = new URL(endpoint, Configuration.BaseUrl)
  Object.entries(Configuration.SearchParams)
    .forEach(([key, value]) => url.searchParams.append(key, value))

  return axios(Object.assign({}, config, { url: url.href }))
}
