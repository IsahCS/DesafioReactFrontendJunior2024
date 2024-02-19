import { useTodos } from "../../../hooks/useTodos";
import { Todos } from "../../shared/Todos";
import { todoTransformer } from "./reducer";

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
    handleEditItem,
  } = useTodos();

  return (
    <>
      <Todos.Root>
        <Todos.Header onAddItem={handleAddItem} />
        <Todos.TodoList
          items={todoTransformer[currentFilter]?.(todos)}
          onToggleCompletion={handleToggleCompletion}
          onDeleteItem={handleDeleteItem}
          onToggleAllCompletion={handleToggleAllCompletion}
          onEditItem={handleEditItem}
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
