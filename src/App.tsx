import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Films } from "./pages/Films/Films";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { About } from "./pages/About/About";
import "./App.css";

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
