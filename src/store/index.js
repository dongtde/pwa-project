import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    themeColor: "#008cff"

  },
  mutations: {
    changeThemeColor(state, val) {
      state.themeColor = val;
    }

  },
  actions: {
  },
  modules: {
  }
})
