const initialState = {
    items: [],
  };
  
  function menuReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_MENU_ITEMS':
        return { ...state, items: action.payload };
      default:
        return state;
    }
  }
  
  export default menuReducer;
  