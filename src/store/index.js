import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: {
      id: 1,
      spell: 'beijing',
      name: '北京'
    }
  },
  mutations: {
    changeCity(state, payload){
      state.city = payload
    }
  },
  actions: {
    changeCity(context, payload){
      context.commit('changeCity', payload)
    }
  }
})
