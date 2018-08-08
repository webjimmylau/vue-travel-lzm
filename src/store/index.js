import Vue from 'vue'
import Vuex from 'vuex'

let defaultCity = {
  id: 1,
  spell: 'beijing',
  name: '北京'
}
if(localStorage.city){
  defaultCity = JSON.parse(localStorage.city) // 字符串转对象
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, payload){
      state.city = payload
      localStorage.city = JSON.stringify(payload) // 当为对象是，要转字符串
    }
  },
  actions: {
    changeCity(context, payload){
      context.commit('changeCity', payload)
    }
  }
})
