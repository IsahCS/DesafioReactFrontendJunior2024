import { TodoItem } from "../../../app";
import "./index.css";

interface FooterProps {
  todos: TodoItem[];
  setCurrentFilter: (filter: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ todos, setCurrentFilter }) => {
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
              className="selected"
              href="#/"
              onClick={() => setCurrentFilter("ALL")}
            >
              All
            </a>
          </li>
          <li>
            <a href="#/active" onClick={() => setCurrentFilter("ACTIVE")}>
              Active
            </a>
          </li>
          <li>
            <a href="#/completed" onClick={() => setCurrentFilter("COMPLETED")}>
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" disabled>
          Clear completed
        </button>
      </footer>
    </>
  );
};
