import { Plugin } from '@nuxt/types'

import { createApi } from '@/api/create'

const api: Plugin = (ctx, inject) => {
  const apiAxios = createApi(ctx)

  inject('api', apiAxios)
}

export default api
