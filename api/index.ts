import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const requestApi: any = (axios: NuxtAxiosInstance) => ({
  async getPopulars() {
    return await axios.$get('/populars').then((res) => res)
  },
  async getProducts() {
    return await axios.$get('/products').then((res) => res)
  },
  async getDetails(payload: any) {
    return await axios.$get(`/${payload}`).then((res) => res)
  },
})

export type RequestApi = ReturnType<typeof requestApi>
