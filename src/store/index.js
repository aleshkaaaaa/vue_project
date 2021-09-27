import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    }
    // editValue (state, payload) {
    //   state.paymentsList[0] = payload
    //   state.paymentsList = [...state.paymentsList]
    // Vue.set(state.paymentsList, 0, payload)
    // }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              date: '28.03.2020',
              type: 'Food',
              amount: 169
            },
            {
              date: '24.03.2020',
              type: 'Transport',
              amount: 360
            },
            {
              date: '24.03.2020',
              type: 'Food',
              amount: 532
            }
          ])
        }, 2000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Sport'])
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.amount, 0)
    },
    getCategoryList: state => state.categoryList
  }
})
