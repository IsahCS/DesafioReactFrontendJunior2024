import { TodoItem } from "../../../instances/Todo/types";
import React, { useState } from "react";
import "./index.css";
import { FilterButton } from "./FilterButton";

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
          <FilterButton
            selectedFilter={selectedFilter}
            filterValue="ALL"
            setCurrentFilter={setCurrentFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <FilterButton
            selectedFilter={selectedFilter}
            filterValue="ACTIVE"
            setCurrentFilter={setCurrentFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <FilterButton
            selectedFilter={selectedFilter}
            filterValue="COMPLETED"
            setCurrentFilter={setCurrentFilter}
            setSelectedFilter={setSelectedFilter}
          />
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
