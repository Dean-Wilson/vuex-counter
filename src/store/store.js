export default {
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  // required if have an asynchronous mutation - actions commit the mutations
  // Would still work but wouldn't track it properly if called the mutation directly
  // https://vuex.vuejs.org/guide/actions.html
  actions: {
    increment (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    }
  },
  getters: {
    sqrt (state) {
      return Math.sqrt(state.count)
    }
  }
}
