import { Films } from "./pages/Films";
import { Sidebar } from "./components/Sidebar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About } from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
