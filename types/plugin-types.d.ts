import { RequestApi } from '@/api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: RequestApi
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: RequestApi
  }

  interface Context {
    $api: RequestApi
  }
}
