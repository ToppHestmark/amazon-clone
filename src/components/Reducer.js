export const initialState = {
  basket: [{
    id: "P568R6BPYFE7507YAKC1",
    title: "Lenovo Flex 5 14in 2-in-1 Laptop, 14.0in FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey",
    rating: 5,
    price: 599.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg"
  }],
  user: null,
};

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
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