import * as actionTypes from './actions';

const initialState = {
  test: "this is just a test"
}
const reducer = (state = initialState, action) => {

  switch (action.type) {

  case actionTypes.CHANGE_TEXT:
    return {
      ...state, test: action.value
    }
  case actionTypes.CHANGE_TEXT2:
    return {
      ...state, test: action.value
    }
  default: return initialState;
  }
}

export default reducer;
