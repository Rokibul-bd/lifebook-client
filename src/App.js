import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
