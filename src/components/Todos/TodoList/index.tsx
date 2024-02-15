import React from "react";
import "./index.css";
import { TodoItem } from "../types";

type TodoListProps = {
  items: TodoItem[];
  onToggleCompletion: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  items,
  onToggleCompletion,
  onDeleteItem,
}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <main className="main" data-testid="main">
      <ul className="todo-list" data-testid="todo-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.completed ? "completed" : ""}
            data-testid="todo-item"
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                data-testid="todo-item-toggle"
                onClick={() => onToggleCompletion(item.id)}
              ></input>
              <label data-testid="todo-item-label">{item.description}</label>
              <button
                className="destroy destroy-button"
                data-testid="todo-item-button"
                onClick={() => onDeleteItem(item.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
