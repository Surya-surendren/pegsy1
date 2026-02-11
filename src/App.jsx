import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PatientDash from "./Pages/PatientDash";
import TherapistDash from "./Pages/TherapistDash";
import Games from "./Pages/Games";
import Performance from "./Pages/Performance";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboards */}
      <Route path="/patient-dashboard" element={<PatientDash />} />
      <Route path="/therapist-dashboard" element={<TherapistDash />} />

      {/* Other */}
      <Route path="/games" element={<Games />} />
      <Route path="/performance/:patientName" element={<Performance />} />
    </Routes>
  );
}

export default App;
