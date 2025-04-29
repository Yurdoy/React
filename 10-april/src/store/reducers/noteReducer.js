import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actions/noteActions";

const initialState = [
  {
    id: 1,
    title: "title",
    body: "body",
  },
];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case UPDATE_NOTE:
      if (state.length > 0) {
        return state.map((note) =>
          note.id === action.payload.id
            ? { ...note, ...action.payload.updateNote }
            : note
        );
      }
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    default:
      state;
  }
};
