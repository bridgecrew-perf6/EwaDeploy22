import { createStore } from 'vuex'

function updateLocalStorage(cart){
  localStorage.setItem('cart',JSON.stringify(cart))
}

export default createStore({
  state: {
    cart:[]
  },
  getters:{
    productQuantity: state=>product =>{
      const item= state.cart.find(i=>i.ProduktID===product.ProduktID)
      if (item) return item.quantity
      else return null
    },
    cartItems: (state) => {
      return state.cart
    }
  },
  mutations: {
    addToCart(state,product){
      let item= state.cart.find(i=>i.ProduktID===product.ProduktID)
      console.log(item)
      if (item){
        item.quantity++
      }else{
        state.cart.push({...product, quantity:1})
      }

      updateLocalStorage(state.cart)
    },
    removeFromCart(state,product){
      let item=state.cart.find(i=>i.ProduktID===product.ProduktID)
      if(item){
        if (item.quantity>1){
          item.quantity--
        }else{
          state.cart=state.cart.filter(i=>i.ProduktID !==product.ProduktID)
        }
      }
      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
