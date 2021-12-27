const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  };
};

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  };
};

const menuError = () => {
  return {
    type: 'MENU_ERROR',
  }
}

const addToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  }
}

const removeFromCart = (id) => {
  return {
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id
  };
}

export { menuLoaded, menuRequested, menuError, addToCart, removeFromCart };