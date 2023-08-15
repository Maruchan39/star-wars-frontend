import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Films } from "./pages";
import { Sidebar } from "./components";
import { About } from "./pages";
import { NotFoundPage } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
