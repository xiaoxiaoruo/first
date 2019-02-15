import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    a: 'xxx',
    b: 20
  },
  mutations: {
    add(state, num) {
      state.count += num;
    }
  },
  actions: {

  },
  getters: {
    sum: (state) => {
      return state.count + state.b;
    }
  }
})
