import React, { useEffect } from "react";
import "./index.css";
import { TodoItem as TodoItemType } from "../../../../utils/type";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  items: TodoItemType[];
  onToggleCompletion: (id: number) => void;
  onDeleteItem: (id: number) => void;
  onToggleAllCompletion: () => void;
  onEditItem: (id: number, description: string) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  items,
  onToggleCompletion,
  onDeleteItem,
  onToggleAllCompletion,
  onEditItem,
}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <main className="main" data-testid="main">
      <div className="toggle-all-container">
        <input
          className="toggle-all"
          type="checkbox"
          data-testid="toggle-all"
          onClick={() => onToggleAllCompletion()}
        />
        <label className="toggle-all-label" htmlFor="toggle-all">
          Toggle All Input
        </label>
      </div>
      <ul className="todo-list" data-testid="todo-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.completed ? "completed" : ""}
            data-testid="todo-item"
          >
            <TodoItem
              item={item}
              onToggleCompletion={onToggleCompletion}
              onDeleteItem={onDeleteItem}
              onEditItem={onEditItem}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
