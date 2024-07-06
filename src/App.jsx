import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Dashboard from "./component/auth/Dashboard";

import SignupFlow from "./component/auth/SignupFlow";
import { AuthProvider } from "./component/auth/AuthContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register/*" element={<SignupFlow />} />{" "}
          {/* Adjusted path */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
