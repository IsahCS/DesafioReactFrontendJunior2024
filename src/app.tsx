import Footer from "./components/shared/Footer";
import { Todo } from "./components/instances/Todo";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
      <Footer />
    </QueryClientProvider>
  );
};
