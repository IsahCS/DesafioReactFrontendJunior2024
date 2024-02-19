import { Action, ITodoTransformer, TodoItem } from "./types";

export const todoReducer = (state: TodoItem[], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), description: action.description, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "SET_INITIAL_STATE":
      return action.initialState;
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, description: action.description }
          : todo
      );
    default:
      return state;
  }
};

export const todoTransformer: ITodoTransformer = {
  COMPLETED: (todos: TodoItem[]) => todos.filter((item) => item.completed),
  ACTIVE: (todos: TodoItem[]) => todos.filter((item) => !item.completed),
  ALL: (todos: TodoItem[]) => todos,
};
