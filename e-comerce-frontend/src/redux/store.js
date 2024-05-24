import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// Reducers
import {cartReducer} from './reducers/cartReducers'
import {
  getProductsReducer,
  getProductDetailsReducer,
  getAlmondDetailsReducer,
  getAlmondReducer,
  getCashewnutDetailsReducer,
  getCashewnutReducer,
  getFigDetailsReducer,
  getFigReducer,
  getPistaDetailsReducer,
  getPistaReducer,
  getRaisinDetailsReducer,
  getRaisinReducer
} from './reducers/productReducers'
import {userReducer} from './reducers/userReducer'

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getAlmonds: getAlmondReducer,
  getCashewnuts: getCashewnutReducer,
  getFigs: getFigReducer,
  getPistas: getPistaReducer,
  getRaisins: getRaisinReducer,
  getProductDetails: getProductDetailsReducer,
  getAlmondDetails: getAlmondDetailsReducer,
  getCashewnutDetails: getCashewnutDetailsReducer,
  getFigDetails: getFigDetailsReducer,
  getPistaDetails: getPistaDetailsReducer,
  getRaisinDetails: getRaisinDetailsReducer,
  user: userReducer,
})

const middleware = [thunk]

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
