export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN":
      return { ...state, login: action.payload };
    default:
      return state;
  }
};
