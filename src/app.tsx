import React, { useState, useReducer, useEffect } from "react";
import { Todos } from "./components/Todos";

export type TodoItem = {
  completed: boolean;
  description: string;
  id: number;
};

type Action =
  | { type: "ADD_TODO"; description: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number };

const initialState: TodoItem[] = [];

const todoReducer = (state: TodoItem[], action: Action) => {
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
    default:
      return state;
  }
};

interface ITodoTransformer {
  [key: string]: (todos: TodoItem[]) => TodoItem[];
}

const todoTransformer: ITodoTransformer = {
  COMPLETED: (todos: TodoItem[]) => todos.filter((item) => item.completed),
  ACTIVE: (todos: TodoItem[]) => todos.filter((item) => !item.completed),
  ALL: (todos: TodoItem[]) => todos,
};

export const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [currentFilter, setCurrentFilter] = useState("ALL");

  const handleAddItem = (description: string) => {
    dispatch({ type: "ADD_TODO", description });
  };

  const handleToggleCompletion = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleDeleteItem = (id: number) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <>
      <Todos.Root>
        <Todos.Header onAddItem={handleAddItem} />
        <Todos.TodoList
          items={todoTransformer[currentFilter]?.(todos) || initialState}
          onToggleCompletion={handleToggleCompletion}
          onDeleteItem={handleDeleteItem}
        />
        <Todos.Footer setCurrentFilter={setCurrentFilter} todos={todos} />
      </Todos.Root>
    </>
  );
};
