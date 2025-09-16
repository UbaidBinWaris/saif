'use client'
import CreatePost from '../../../components/Admin/CreatePost';
import ProtectedRoute from '../../../components/Admin/ProtectedRoute';

export default function CreatePostPage() {
  return (
    <ProtectedRoute>
      <CreatePost />
    </ProtectedRoute>
  );
}
