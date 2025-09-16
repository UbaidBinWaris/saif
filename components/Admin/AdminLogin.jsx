import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Helmet } from '@dr.pogodin/react-helmet';
import './AdminLogin.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/db/admin_auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'login',
          username: credentials.username,
          password: credentials.password
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('admin_token', data.token);
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
        // Debug information
        console.log('Login response:', data);
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.name === 'SyntaxError') {
        setError('Server response error. Please check if PHP is running.');
      } else if (error.message.includes('Failed to fetch')) {
        setError('Cannot connect to server. Please check your local server.');
      } else {
        setError(`Network error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - GIXI AI Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="admin-login-container">
        <div className="admin-login-card">
          <div className="admin-login-header">
            <h1>Admin Login</h1>
            <p>Access blog management dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
