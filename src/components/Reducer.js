export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case 'REMOVE_FROM_BASKET':
    
      let newBasket = [...state.basket]; // -- Clone from the basket

      // Check to see if product exist.
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if (index >= 0) {
        newBasket.splice(index, 1); // -- Remove existing item from the basket
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in the basket.`
        )
      }
      return { 
        ...state, 
        basket: newBasket }
    default:
      return state;
  }
}

export default reducer;