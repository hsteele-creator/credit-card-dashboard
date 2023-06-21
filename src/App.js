import "./App.css";
import Dashboard from "./Dashboard";
import TransactionsPage from "./TransactionsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
