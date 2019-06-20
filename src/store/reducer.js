const initialState = {
  test: "this is just a test"
}
const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_TEXT'){
    return {
      ...state, test: action.value
    }
  }
  return state;

}

export default reducer;
