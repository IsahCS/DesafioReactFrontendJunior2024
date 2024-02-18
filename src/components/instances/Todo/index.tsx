import { useTodos } from "../../../hooks/useTodos";
import { Todos } from "../../shared/Todos";
import { todoTransformer } from "./reducer";
import { TodoItem } from "./types";

export const Todo = () => {
  const {
    todos,
    currentFilter,
    setCurrentFilter,
    handleAddItem,
    handleToggleCompletion,
    handleToggleAllCompletion,
    handleDeleteItem,
    handleClearCompleted,
  } = useTodos();

  const initialState: TodoItem[] = [];

  return (
    <>
      <Todos.Root>
        <Todos.Header onAddItem={handleAddItem} />
        <Todos.TodoList
          items={todoTransformer[currentFilter]?.(todos) || initialState}
          onToggleCompletion={handleToggleCompletion}
          onDeleteItem={handleDeleteItem}
          onToggleAllCompletion={handleToggleAllCompletion}
        />
        <Todos.Footer
          setCurrentFilter={setCurrentFilter}
          todos={todos}
          onClearCompleted={handleClearCompleted}
        />
      </Todos.Root>
    </>
  );
};
