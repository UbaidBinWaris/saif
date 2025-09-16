import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('admin_token');
      setToken(storedToken);
      setIsLoading(false);
      
      if (!storedToken) {
        router.push('/admin/login');
      }
    }
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return null;
  }
  
  return children;
};

export default ProtectedRoute;
