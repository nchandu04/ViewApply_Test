import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Landing } from '@/pages/Landing';
import { Prescreen } from '@/pages/Prescreen';
import { Dashboard } from '@/pages/Dashboard';
import { useAuth } from '@/contexts/AuthContext';

export function AppRoutes() {
  const { login, logout } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Landing onLogin={login} />} />
      <Route
        path="/prescreen"
        element={
          <ProtectedRoute>
            <Prescreen onLogout={logout} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard onLogout={logout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}