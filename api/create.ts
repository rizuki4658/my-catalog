import { Context } from '@nuxt/types'
import { RequestApi, requestApi } from '@/api'

export type RequestRepo = {
  request: RequestApi
}

export const createApi = ({ $axios, redirect }: Context): RequestRepo => {
  $axios.setBaseURL(
    'https://my-json-server.typicode.com/rizuki4658/my-catalog-placeholder'
  )

  $axios.onError(() => {
    redirect('/')
  })

  return {
    request: requestApi($axios),
  }
}
