const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  total: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false
      }
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true
      }
    case 'MENU_ERROR':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: true
      }
    case 'ITEM_ADD_TO_CART': {
      const id = action.payload;
      const item = state.menu.find((item) => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
      };
      return {
        ...state,
        items: [...state.items, newItem],
        total: state.total + item.price,
      };
    }
    case 'ITEM_REMOVE_FROM_CART': {
      const id = action.payload;
      const itemIdx = state.items.findIndex(item => item.id === id);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIdx),
          ...state.items.slice(itemIdx + 1)
        ],
        total: state.total - state.items[itemIdx].price
      };
    }
    default:
      return state;
  }
}

export default reducer;