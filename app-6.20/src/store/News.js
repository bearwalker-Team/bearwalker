import axios from 'axios'
const state = {
  newsList: []
}
const mutations = {
  changeNewsList (state, list) {
    state.newsList = list
  }
}
const actions = {
  getNewsList ({ commit }, data) {
    axios({
      url: 'getnews',
      params: data,
      method: 'get'
    }).then((res) => {
      commit('changeNewsList', res.data.list)
    }).catch((error) => {
      console.log(error)
    })
  }
}
const getters = {

}
export default {
  state,
  getters,
  actions,
  mutations
}
