import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {HomeListReducer, HomeSaveReducer} from './HOME/Reducers/HomeReduce';
import {} from './'


const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
//   cart: { cartItems, shipping: {}, payment: {} },
//   userSignin: { userInfo },
};
const reducer = combineReducers({
    HomeList:HomeListReducer,
    HomeSave:HomeSaveReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RedusStore = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default RedusStore;
