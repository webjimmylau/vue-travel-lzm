const mutations = {
  changeCity(state, payload){
    state.city = payload
    localStorage.city = JSON.stringify(payload) // 当为对象是，要转字符串
  }
}

export default mutations
