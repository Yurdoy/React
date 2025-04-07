// 3. Create initial state
const initialState = {
  count: 0,
};

// 2. Create reducer and transfer state reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      // reducer not changing state directly. It follow method immutable, where we need new state take above previous(old)
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "ADD_NUMBER":
      return {};
    default:
      return state;
  }
}

export const increment = {
  type: "INCREMENT",
};

export const decrement = {
  type: "DECREMENT",
};

export const addExectNumber = (num) => {
  return {
    type: ADD_NUMBER,
  };
};
// 1. Create Store and transfer reducer

export default counterReducer;
