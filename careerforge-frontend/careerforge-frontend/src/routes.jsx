import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Dsa from "./pages/Dsa";
import StudyLogs from "./pages/StudyLogs";
import Interviews from "./pages/Interviews";
import Certifications from "./pages/Certifications";
import Profile from "./pages/Profile";
import AiAssistant from "./pages/AiAssistant";

import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const RoutesComponent = () => {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />


      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Projects />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/dsa"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dsa />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/studylogs"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <StudyLogs />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/interviews"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Interviews />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/certifications"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Certifications />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/ai"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AiAssistant />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h1>404 Page Not Found</h1>} />

    </Routes>
  );
};

export default RoutesComponent;