import { useReducer, useState } from "react";
import { todoReducer } from "../components/Todos/reducer";
import { TodoItem } from "../components/Todos/types";

const initialState: TodoItem[] = [];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [currentFilter, setCurrentFilter] = useState("ALL");

  const handleAddItem = (description: string) => {
    dispatch({ type: "ADD_TODO", description });
  };

  const handleToggleCompletion = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleToggleAllCompletion = (id: number) => {
    todos.forEach((todo) => dispatch({ type: "TOGGLE_TODO", id: todo.id }));
  };

  const handleDeleteItem = (id: number) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleClearCompleted = () => {
    todos
      .filter((todo) => todo.completed)
      .forEach((todo) => dispatch({ type: "REMOVE_TODO", id: todo.id }));
  };

  return {
    todos,
    currentFilter,
    setCurrentFilter,
    handleAddItem,
    handleToggleCompletion,
    handleToggleAllCompletion,
    handleDeleteItem,
    handleClearCompleted,
  };
};
