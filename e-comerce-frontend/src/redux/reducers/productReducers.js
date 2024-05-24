import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const getAlmondReducer = (state = { almonds: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ALMONDS_REQUEST:
      return {
        loading: true,
        almonds: [],
      };
    case actionTypes.GET_ALMONDS_SUCCESS:
      return {
        almonds: action.payload,
        loading: false,
      };
    case actionTypes.GET_ALMONDS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAlmondDetailsReducer = (state = { almonds: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_ALMOND_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_ALMOND_DETAILS_SUCCESS:
      return {
        loading: false,
        almonds: action.payload,
      };
    case actionTypes.GET_ALMOND_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_ALMOND_DETAILS_RESET:
      return {
        almonds: {},
      };
    default:
      return state;
  };
}
  export const getCashewnutReducer = (state = { cashewnuts: [] }, action) => {
    switch (action.type) {
      case actionTypes.GET_CASHEWNUTS_REQUEST:
        return {
          loading: true,
          cashewnuts: [],
        };
      case actionTypes.GET_CASHEWNUTS_SUCCESS:
        return {
          cashewnuts: action.payload,
          loading: false,
        };
      case actionTypes.GET_CASHEWNUTS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const getCashewnutDetailsReducer = (state = { cashewnuts: {} }, action) => {
    switch (action.type) {
      case actionTypes.GET_CASHEWNUT_DETAILS_REQUEST:
        return {
          loading: true,
        };
      case actionTypes.GET_CASHEWNUT_DETAILS_SUCCESS:
        return {
          loading: false,
          cashewnuts: action.payload,
        };
      case actionTypes.GET_CASHEWNUT_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case actionTypes.GET_CASHEWNUT_DETAILS_RESET:
        return {
          cashewnuts: {},
        };
      default:
        return state;
    }
  }

  export const getFigReducer = (state = { figs: [] }, action) => {
    switch (action.type) {
      case actionTypes.GET_FIGS_REQUEST:
        return {
          loading: true,
          figs: [],
        };
      case actionTypes.GET_FIGS_SUCCESS:
        return {
          figs: action.payload,
          loading: false,
        };
      case actionTypes.GET_FIGS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const getFigDetailsReducer = (state = { figs: {} }, action) => {
    switch (action.type) {
      case actionTypes.GET_FIG_DETAILS_REQUEST:
        return {
          loading: true,
        };
      case actionTypes.GET_FIG_DETAILS_SUCCESS:
        return {
          loading: false,
          figs: action.payload,
        };
      case actionTypes.GET_FIG_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case actionTypes.GET_FIG_DETAILS_RESET:
        return {
          figs: {},
        };
      default:
        return state;
    }
  }

export const getPistaReducer = (state = { pistas: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PISTAS_REQUEST:
      return {
        loading: true,
        pistas: [],
      };
    case actionTypes.GET_PISTAS_SUCCESS:
      return {
        pistas: action.payload,
        loading: false,
      };
    case actionTypes.GET_PISTAS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPistaDetailsReducer = (state = { pistas: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PISTA_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PISTA_DETAILS_SUCCESS:
      return {
        loading: false,
        pistas: action.payload,
      };
    case actionTypes.GET_PISTA_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PISTA_DETAILS_RESET:
      return {
        pistas: {},
      };
    default:
      return state;
  }
}

export const getRaisinReducer = (state = { raisins: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_RAISINS_REQUEST:
      return {
        loading: true,
        raisins: [],
      };
    case actionTypes.GET_RAISINS_SUCCESS:
      return {
        raisins: action.payload,
        loading: false,
      };
    case actionTypes.GET_RAISINS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getRaisinDetailsReducer = (state = { raisins: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_RAISIN_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_RAISIN_DETAILS_SUCCESS:
      return {
        loading: false,
        raisins: action.payload,
      };
    case actionTypes.GET_RAISIN_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_RAISIN_DETAILS_RESET:
      return {
        raisins: {},
      };
    default:
      return state;
  }
}