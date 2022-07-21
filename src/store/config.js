export const initialState = {
    cart: [],
    products: [{}, {}],
    other: "...",
    number: 0,
  };

  export function reducer(state, action) {
    switch (action.type) {
      case "add2ToNumber":
        return { ...state, number: state.number + 2 };
      case "mult7ToNumber":
        return { ...state, number: state.number * 7 };
      case "addNToNumber":
        return { ...state, number: state.number + action.n };
      case "div25ToNumber":
        return { ...state, number: parseInt(state.number / 25) };
      case "login":
        return { ...state, user: { name: action.payload } };
      default:
        return state;
    }
  }