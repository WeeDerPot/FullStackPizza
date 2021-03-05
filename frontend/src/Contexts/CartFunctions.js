export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.dishname === product.dishname
    );
  
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    console.log(updatedCart);
    return { ...state, cart: updatedCart };
    
};

const removeProductFromCart = (product, state) => {
    console.log("Removing product with name: " + product.dishname);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.dishname === product);
  
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    console.log(updatedCart);
    return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return addProductToCart(action.product, state);
      case REMOVE_PRODUCT:
        return removeProductFromCart(action.product, state);
      default:
        return state;
    }
  };