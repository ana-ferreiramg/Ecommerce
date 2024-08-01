import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async loadProducts({ commit }) {
      await axios.get('https://fakestoreapi.com/products')
        .then(res => {
          commit('loadProducts', res.data)
        })
    }
  },
  modules: {

  }
})
