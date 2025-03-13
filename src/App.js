import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import PatientDetails from "./components/Patient_Details";
import Patient_Profile from "./components/Patient_Profile";
import Detected_Patient_Profile from "./components/Detected_Patient_Profile";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/patient_profile" element={ <Patient_Profile /> } />
        <Route path="/detected_patients" element={ <Detected_Patient_Profile /> } />
        <Route path="/notification" element = { <Notification /> } />
        <Route element={ <Layout /> }>
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/patient_details" element={ <PatientDetails /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
