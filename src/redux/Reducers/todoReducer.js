const initialState = {
  list: [],
  searchQuery: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "EDIT_TASK":
      const updatedTask = state.list.map((task, index) =>
        index === action.payload.index ? action.payload.task : task
      );
      return {
        ...state,
        list: updatedTask,
      };
    case "DELETE_TASK":
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
