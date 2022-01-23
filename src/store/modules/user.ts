import { Module } from 'vuex'
import { createStorage } from '@/utils/Storage'
import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'

const storage = createStorage({ storage: localStorage })

interface StoreUser {
  id: number,
  username: string,
  avatar: string,
  token: string,
  info: any
}

const store: Module<StoreUser, unknown> = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: '测试用户',
      avatar: 'https://www.tailwindcss.cn/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg',
      token: storage.get(ACCESS_TOKEN, ''),
      info: storage.get(CURRENT_USER, {})
    }
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setAvatar(state, avatar: string) {
      state.avatar = avatar
    },
    setUserInfo(state, info) {
      state.info = info
    }
  },
  actions: {
    async logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', '')
      storage.remove(ACCESS_TOKEN)
      storage.remove(CURRENT_USER)
      return Promise.resolve('')
    },
    async login({ commit }, userInfo) {
      try {
        const response = await login(userInfo)
        const { result, code } = response
        if (code === 200) {
          const ex = 7 * 24 * 60 * 60 * 1000
          storage.set(ACCESS_TOKEN, result.token, ex)
          storage.set(CURRENT_USER, result, ex)
          commit('setToken', result.token)
          commit('setUserInfo', result)
        }
        return Promise.resolve(response)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  },
  getters: {
    getUserProfile(state: StoreUser) {
      return { ...state }
    },
    getToken(state): string {
      return state.token
    },
    getAvatar(state): string {
      return state.avatar
    },
    getNickname(state): string {
      return state.username
    }
  }
}

export default store
