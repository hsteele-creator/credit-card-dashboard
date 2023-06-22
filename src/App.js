import "./App.css";
import Dashboard from "./Dashboard";
import AddCard from "./AddCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-card" element={<AddCard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
