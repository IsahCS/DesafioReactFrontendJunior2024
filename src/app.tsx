import { Todos } from "./components/Todos";
import { TodoItem } from "./components/Todos/types";
import { todoTransformer } from "./components/Todos/reducer";
import { useTodos } from "./hooks/useTodos";

const initialState: TodoItem[] = [];

export const App = () => {
  const {
    todos,
    currentFilter,
    setCurrentFilter,
    handleAddItem,
    handleToggleCompletion,
    handleDeleteItem,
  } = useTodos();

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
