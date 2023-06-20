import "./App.css";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Profile from "./Profile";

function App() {
  return (
    <>
      <div id="main">
        <Dashboard />

        <div id="transactions-profile">
          <Profile />
          <Transactions />
        </div>
      </div>
    </>
  );
}

export default App;
