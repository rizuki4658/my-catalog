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
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_MENU: (state, payload) => {
    state.menu = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  // async nuxtServerInit({ commit }, { $repository, app }) {},
  setMenu({ commit }, payload) {
    commit('SET_MENU', payload)
  },
}

export const getters: GetterTree<RootState, RootState> = {
  menu: (state) => state.menu,
  footers: (state) => state.footers,
  socials: (state) => state.socials,
}
