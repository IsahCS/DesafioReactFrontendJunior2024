import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TodoList } from "./TodoList";

const TodosRoot: React.FC<{ children: ReactNode }>  = ({children}) => {
  return (
    <section className="todoapp" id="root">
      {children}
    </section>
  );
}

export const Todos = {
    Root: TodosRoot,
    Header: Header,
    Footer: Footer,
    TodoList: TodoList
}