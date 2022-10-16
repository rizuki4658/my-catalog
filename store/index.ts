import { ActionTree, MutationTree, GetterTree } from 'vuex'
import {
  menu as Menu,
  footer as Footer,
  socialMedia as Socials,
} from '~/constant'

export const state = () => ({
  menu: Menu,
  footers: Footer,
  socials: Socials,
  loading: true,
  populars: [],
  products: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_MENU: (state, payload) => {
    const menus = state.menu.map((item: any) => {
      item.active = false
      return item
    })
    if (menus[payload]) menus[payload].active = true
    state.menu = menus
  },
  SET_POPULARS: (state, payload) => {
    state.populars = payload
  },
  SET_PRODUCTS: (state, payload) => {
    state.products = payload
  },
  SET_LOADING: (state, payload) => {
    state.loading = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  // async nuxtServerInit({ commit }, { $repository, app }) {},
  setMenu({ commit }, payload) {
    commit('SET_MENU', payload)
  },
  setPopulars({ commit }, payload) {
    commit('SET_POPULARS', payload)
  },
  setProducts({ commit }, payload) {
    commit('SET_PRODUCTS', payload)
  },
  setLoading({ commit }, payload) {
    commit('SET_LOADING', payload)
  },
}

export const getters: GetterTree<RootState, RootState> = {
  menu: (state) => state.menu,
  footers: (state) => state.footers,
  socials: (state) => state.socials,
  loading: (state) => state.loading,
  populars: (state) => state.populars,
  products: (state) => state.products,
}
