import Footer from "./components/shared/Footer";
import { Todo } from "./components/instances/Todo";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

export const App = () => {
  const todoInstance = <Todo />;

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/active" element={todoInstance} />
          <Route path="/completed" element={todoInstance} />
          <Route path="/" element={todoInstance} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
};
