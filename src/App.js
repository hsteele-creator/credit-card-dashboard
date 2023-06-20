import "./App.css";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
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
