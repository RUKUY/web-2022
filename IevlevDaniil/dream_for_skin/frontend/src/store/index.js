import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Auth: {
      isAuth: false,       
    },
    isSideMenuDisplays: false,

    wishlist : {
      products : [{id: 3}],
      count: 1,
    },

    cart: {
      products: [{id: 1, amount: 2}, {id: 5, amount: 1}],
      count: 2,
      totalPrice: 700,
    },
  },
  getters: {
    getAuthCondition(state) {
      return state.Auth.isAuth;
    },

    getSideMenuCondition(state) {
      return state.isSideMenuDisplays;
    },

    getWishListProductsCount(state) {
      return state.wishlist.count;
    },

    getCartProductsCount(state) {
      let sum = 0;
      state.cart.products.forEach(item => {
        sum += item.amount;
      });
      return sum;
    },

    getCartTotalPrice(state) {
      return state.cart.totalPrice;
    },

    getCartProducts(state) {
      return state.cart.products;
    }

  },
  mutations: {
    LOGIN(state, user) {
      state.Auth.isAuth = true;

      localStorage.setItem('user', JSON.stringify({id: user.id, token: user.token}));
    },
    
    LOGOUT(state) {
      state.Auth.isAuth = false;

      localStorage.removeItem('user');
      location.href = "/";
    },

    INVERT_MENU_CONDITION(state) {
      state.isSideMenuDisplays = !state.isSideMenuDisplays;
      (state.isSideMenuDisplays == true ) ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    },

    PLUS_ITEM(state, product) {
      for (let i = 0; i < state.cart.products.length; i++) {
        if (state.cart.products[i].id == product.id) {
          state.cart.products[i].amount++;
          state.cart.totalPrice += product.price;

          console.log(state.cart.products[i].amount);
          break;
        }
      }
    },
    MINUS_ITEM(state, product) {
      for (let i = 0; i < state.cart.products.length; i++) {
        if (state.cart.products[i].id == product.id) {
          state.cart.products[i].amount--;
          state.cart.totalPrice -= product.price;

          console.log(state.cart.products[i].amount);
          break;
        }
      }
    },
    
    ADD_ITEM_TO_CART(state, product) {
      state.cart.products.push({id: product.id, amount: product.amount});
      state.cart.totalPrice += product.price * product.amount;
      state.cart.count++;

      console.log(state.cart.products);
    },

    DELETE_ITEM_FROM_CART(state, product) {
      let index = -1;
      for (let i = 0; i < state.cart.products.length; i++) {
        if (product.id == state.cart.products[i].id) {
          index = i;
          break;
        }
      }

      if (index == -1) { 
        return;
      } 
      state.cart.totalPrice -= state.cart.products[index].amount * product.price;
      state.cart.products.splice(index, 1);
      state.cart.count--;
      
      console.log("Продукт с id = " + product.id + " удален");
    },

    ADD_ITEM_TO_WISHLIST(state, product) {
      state.wishlist.products.push({id: product.id});
      state.wishlist.count++;

      console.log(state.wishlist.products);

    },
    REMOVE_ITEM_FROM_WISHLIST(state, product) {
      let index = -1;
      for (let i = 0; i < state.wishlist.products.length; i++) {
        if (product.id == state.wishlist.products[i].id) {
          index = i;
          break;
        }
      }

      if (index == -1) { 
        return;
      } 

      state.wishlist.products.splice(index, 1);
      state.wishlist.count--;
      
      console.log("Продукт с id = " + product.id + " удален c wishlist'а");
    },
    


  },
  actions: {
  },
  modules: {
  }
})
