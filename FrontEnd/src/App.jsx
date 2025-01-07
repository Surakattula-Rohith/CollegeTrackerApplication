import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { setupAxiosInterceptors } from "./api";
import { useEffect } from "react";
import Forget from "./components/Forget";
import Reset from "./components/Reset";
import { useSelector } from "react-redux";
import StudentDashboard from "./pages/student/StudentDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProfessorDashboard from "./pages/professor/ProfessorDashboard";

function App() {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => {
    return state.loader;
  });
  useEffect(() => {
    setupAxiosInterceptors(navigate);
  }, [navigate]);
  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/professor"
          element={
            <ProtectedRoute>
              <ProfessorDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </>
  );
}

export default App;
