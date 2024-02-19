import { useEffect, useReducer, useState } from "react";
import { TodoItem } from "../components/instances/Todo/types";
import { todoReducer } from "../components/instances/Todo/reducer";
import { useQuery } from "react-query";
import { API_URL } from "../config";
import { ITodoApiResponse } from "./interface";

export const useTodos = () => {
  const { data } = useQuery("repoData", () =>
    fetch(`${API_URL}/todos`).then((res) => res.json())
  );

  const [todos, dispatch] = useReducer(todoReducer, []);
  const [currentFilter, setCurrentFilter] = useState("ALL");

  useEffect(() => {
    if (data) {
      const initialState: TodoItem[] =
        data?.map((item: ITodoApiResponse) => ({
          completed: item.isDone,
          description: item.title,
          id: item.id,
        })) || [];
      dispatch({ type: "SET_INITIAL_STATE", initialState });
    }
  }, [data]);

  const handleAddItem = (description: string) => {
    dispatch({ type: "ADD_TODO", description });
  };

  const handleToggleCompletion = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleToggleAllCompletion = () => {
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

  const handleEditItem = (id: number, description: string) => {
    dispatch({ type: "EDIT_TODO", id, description });
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
    handleEditItem,
  };
};
