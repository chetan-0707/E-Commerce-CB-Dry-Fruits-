import * as actionTypes from '../constants/productConstants'
import axios from 'axios'
import {Api} from '../../utils/Api'

export const getProducts = () => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})

    const {data} = await Api.getRequest('/api/products')

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: JSON.parse(data),
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getProductDetails = id => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})

    const {data} = await Api.getRequest(`/api/products/${id}`)
    const p = JSON.parse(data)
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: {
        ...p,
      },
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const removeProductDetails = () => dispatch => {
  dispatch({type: actionTypes.GET_PRODUCT_DETAILS_RESET})
}

/*****************Almonds*********************/

export const getAlmonds = () => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_ALMONDS_REQUEST})

    const {data} = await Api.getRequest('/api/almonds')

    dispatch({
      type: actionTypes.GET_ALMONDS_SUCCESS,
      payload: JSON.parse(data),
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALMONDS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAlmondDetails = id => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_ALMOND_DETAILS_REQUEST})

    const {data} = await Api.getRequest(`/api/almonds/${id}`)
    const p = JSON.parse(data)
    console.log(">>>>>?", p)
    dispatch({
      type: actionTypes.GET_ALMOND_DETAILS_SUCCESS,
      payload: {
        ...p,
      },
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALMOND_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const removeAlmondsetails = () => dispatch => {
  dispatch({type: actionTypes.GET_ALMOND_DETAILS_RESET})
}

/*****************Raisin*********************/

export const getRaisins = () => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_RAISINS_REQUEST})

    const {data} = await Api.getRequest('/api/raisins')

    dispatch({
      type: actionTypes.GET_RAISINS_SUCCESS,
      payload: JSON.parse(data),
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_RAISINS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getRaisinDetails = id => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_RAISIN_DETAILS_REQUEST})

    const {data} = await Api.getRequest(`/api/raisins/${id}`)
    const p = JSON.parse(data)
    console.log(">>>>>?", p)
    dispatch({
      type: actionTypes.GET_RAISIN_DETAILS_SUCCESS,
      payload: {
        ...p,
      },
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_RAISIN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const removeRaisinsetails = () => dispatch => {
  dispatch({type: actionTypes.GET_RAISIN_DETAILS_RESET})
}

/*****************Figs*********************/

export const getFigs = () => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_FIGS_REQUEST})

    const {data} = await Api.getRequest('/api/figs')

    dispatch({
      type: actionTypes.GET_FIGS_SUCCESS,
      payload: JSON.parse(data),
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_FIGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getFigDetails = id => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_FIG_DETAILS_REQUEST})

    const {data} = await Api.getRequest(`/api/figs/${id}`)
    const p = JSON.parse(data)
    console.log(">>>>>?", p)
    dispatch({
      type: actionTypes.GET_FIG_DETAILS_SUCCESS,
      payload: {
        ...p,
      },
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_FIG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const removeFigsetails = () => dispatch => {
  dispatch({type: actionTypes.GET_FIG_DETAILS_RESET})
}

/*****************Cashewnuts*********************/

export const getCashewnuts = () => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_CASHEWNUTS_REQUEST})

    const {data} = await Api.getRequest('/api/cashewnuts')

    dispatch({
      type: actionTypes.GET_CASHEWNUTS_SUCCESS,
      payload: JSON.parse(data),
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CASHEWNUTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getCashewnutDetails = id => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_CASHEWNUT_DETAILS_REQUEST})

    const {data} = await Api.getRequest(`/api/cashewnuts/${id}`)
    const p = JSON.parse(data)
    console.log(">>>>>?", p)
    dispatch({
      type: actionTypes.GET_CASHEWNUT_DETAILS_SUCCESS,
      payload: {
        ...p,
      },
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CASHEWNUT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const removeCashewnutsetails = () => dispatch => {
  dispatch({type: actionTypes.GET_CASHEWNUT_DETAILS_RESET})
}

/*****************Pista*********************/

export const getPistas = () => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_PISTAS_REQUEST})

    const {data} = await Api.getRequest('/api/pistas')

    dispatch({
      type: actionTypes.GET_PISTAS_SUCCESS,
      payload: JSON.parse(data),
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PISTAS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getPistaDetails = id => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_PISTA_DETAILS_REQUEST})

    const {data} = await Api.getRequest(`/api/pistas/${id}`)
    const p = JSON.parse(data)
    console.log(">>>>>?", p)
    dispatch({
      type: actionTypes.GET_PISTA_DETAILS_SUCCESS,
      payload: {
        ...p,
      },
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PISTA_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const removePistasetails = () => dispatch => {
  dispatch({type: actionTypes.GET_PISTA_DETAILS_RESET})
}
