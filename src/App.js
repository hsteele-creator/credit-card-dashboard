import "./App.css";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
