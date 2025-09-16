'use client'
import AdminDashboard from '../../../components/Admin/AdminDashboard';
import ProtectedRoute from '../../../components/Admin/ProtectedRoute';

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  );
}
