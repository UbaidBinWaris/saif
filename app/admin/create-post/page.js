'use client'
import CreatePost from '../components/CreatePost';
import ProtectedRoute from '../components/ProtectedRoute';

export default function CreatePostPage() {
  return (
    <ProtectedRoute>
      <CreatePost />
    </ProtectedRoute>
  );
}
