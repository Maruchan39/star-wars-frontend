import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Films } from "./pages/Films";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Films />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
