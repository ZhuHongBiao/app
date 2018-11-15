import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalPrice: 0
  },
  mutations: {
    add (state, price) {
      state.totalPrice += price
    },
    decrease (state, price) {
      state.totalPrice -= price
    }
  }
})
