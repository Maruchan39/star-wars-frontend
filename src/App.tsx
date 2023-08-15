import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Routes as RoutePaths } from "./routes";
import { Films } from "./pages";
import { Sidebar } from "./components";
import { About } from "./pages";
import { NotFoundPage } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path={RoutePaths.FILMS} element={<Films />} />
          <Route path={RoutePaths.ABOUT} element={<About />} />
          <Route path={RoutePaths.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
