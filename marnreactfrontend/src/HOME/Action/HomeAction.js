import {
    Home_LIST_REQUEST,
    Home_LIST_SUCCESS,
    Home_LIST_FAIL,
    Home_SAVE_SUCCESS,
    Home_SAVE_REQUEST,
    Home_SAVE_FAIL
  } from '../Constants/HomeConstants';
  import axios from 'axios';
  import Axios from 'axios';
  
  const listProducts = (
    category = '',
    searchKeyword = '',
    sortOrder = ''
  ) => async (dispatch) => {
    try {
      dispatch({ type: Home_LIST_REQUEST });
      const { data } = await axios.get(
        '/api/products?category=' +
          category +
          '&searchKeyword=' +
          searchKeyword +
          '&sortOrder=' +
          sortOrder
      );
      dispatch({ type: Home_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: Home_LIST_FAIL, payload: error.message });
    }
  };
  const Homelist= () => {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const HomeDatalist =() =>  async (dispatch)=>{
    // axios.get('http://localhost:5000/exercises/')
    //   .then(response => {
    //     this.setState({ exercises: response.data })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    try {
        dispatch({ type: Home_LIST_REQUEST });
        const { data } = await axios.get(
          'http://localhost:5000/exercises/'
        );
        dispatch({ type: Home_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: Home_LIST_FAIL, payload: error.message });
      }
  }
  
  const saveProduct = (product) => async (dispatch, getState) => {
    try {
      alert("saveaction")
      debugger
      dispatch({ type: Home_SAVE_REQUEST, payload: product });
      const {
        userSignin: { userInfo },
      } = getState();
      if (!product._id) {
        const { data } = await Axios.post('/api/products', product, {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        });
        dispatch({ type: Home_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await Axios.put(
          '/api/products/' + product._id,
          product,
          {
            headers: {
              Authorization: 'Bearer ' + userInfo.token,
            },
          }
        );
        dispatch({ type: Home_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: Home_SAVE_FAIL, payload: error.message });
    }
  };
  
//   const detailsProduct = (productId) => async (dispatch) => {
//     try {
//       dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
//       const { data } = await axios.get('/api/products/' + productId);
//       dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
//     }
//   };
  
//   const deleteProdcut = (productId) => async (dispatch, getState) => {
//     try {
//       const {
//         userSignin: { userInfo },
//       } = getState();
//       dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
//       const { data } = await axios.delete('/api/products/' + productId, {
//         headers: {
//           Authorization: 'Bearer ' + userInfo.token,
//         },
//       });
//       dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
//     } catch (error) {
//       dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
//     }
//   };
  
//   const saveProductReview = (productId, review) => async (dispatch, getState) => {
//     try {
//       const {
//         userSignin: {
//           userInfo: { token },
//         },
//       } = getState();
//       dispatch({ type: PRODUCT_REVIEW_SAVE_REQUEST, payload: review });
//       const { data } = await axios.post(
//         `/api/products/${productId}/reviews`,
//         review,
//         {
//           headers: {
//             Authorization: 'Bearer ' + token,
//           },
//         }
//       );
//       dispatch({ type: PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
//     } catch (error) {
//       // report error
//       dispatch({ type: PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
//     }
//   };
  
  export {
    listProducts,
    HomeDatalist,
    Homelist,
    // detailsProduct,
     saveProduct,
    // deleteProdcut,
    // saveProductReview,
  };
  