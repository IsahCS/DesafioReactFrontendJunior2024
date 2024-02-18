import { TodoItem } from "../../../instances/Todo/types";
import React, { useState } from "react";
import "./index.css";

interface FooterProps {
  todos: TodoItem[];
  setCurrentFilter: (filter: string) => void;
  onClearCompleted: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  todos,
  setCurrentFilter,
  onClearCompleted,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const itemCount = todos.filter((item) => !item.completed).length;

  if (todos.length === 0) {
    return null;
  }

  return (
    <>
      <footer className="footer" data-testid="footer">
        <span className="todo-count">{itemCount} item left!</span>
        <ul className="filters" data-testid="footer-navigation">
          <li>
            <a
              className={selectedFilter === "ALL" ? "selected" : ""}
              href="#/"
              onClick={() => {
                setCurrentFilter("ALL");
                setSelectedFilter("ALL");
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={selectedFilter === "ACTIVE" ? "selected" : ""}
              href="#/active"
              onClick={() => {
                setCurrentFilter("ACTIVE");
                setSelectedFilter("ACTIVE");
              }}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={selectedFilter === "COMPLETED" ? "selected" : ""}
              href="#/completed"
              onClick={() => {
                setCurrentFilter("COMPLETED");
                setSelectedFilter("COMPLETED");
              }}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          data-testid="clear-completed"
          onClick={() => onClearCompleted()}
          disabled={todos.filter((todo) => todo.completed).length === 0}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
};
