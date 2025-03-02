import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
