// 3. Создание начального состояния counterReducer.
const initialState = {
  count: 0,
};
// 2. Создание редюсера и передача состояния редюсера.
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      // редюсер не меняет напрямую состояния, он следует принципу иммутабельности, где вам необходимо новое состояние брать "поверх" старого по средствам действия (action)
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
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
// 1. Создание Store и передача редюсера.

// subscribe используется для отслеживания состояния после изменения action

// console.log(store.getState());

export default counterReducer;
