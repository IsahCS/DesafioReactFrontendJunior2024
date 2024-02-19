export type TodoItem = {
  completed: boolean;
  description: string;
  id: number;
};

export type ITodoTransformer = {
  [key: string]: (todos: TodoItem[]) => TodoItem[];
};

export type Action =
  | { type: "ADD_TODO"; description: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number }
  | { type: "SET_INITIAL_STATE"; initialState: TodoItem[] }
  | { type: "EDIT_TODO"; id: number; description: string };
