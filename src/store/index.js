import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    cart:[]
  },
  mutations: {
    ADD_item(state, id){
      state.cart.push(id)
    },
    ADD_item_prod(state, product){
      state.products.push(product)
      return state
    },
    REMOVE_item(state, index){
      state.cart.splice(index, 1)
    }
  },
  actions: {
    addItemtoProducts(context, product){
      context.commit("ADD_item_prod", product)
    },
    addItemtoCart(context, id){
      context.commit("ADD_item", id)
    },
    removeItemfromCart(context, id){
      context.commit("REMOVE_item", id)
    }
  },
  getters:{
    products: (state) => state.products,
    cart: (state) => state.cart
  },
  modules: {
  }
})
