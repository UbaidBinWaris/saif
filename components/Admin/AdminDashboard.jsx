import React, { useState, useEffect, useCallback } from 'react';
import { useRouter} from 'next/navigation';
import { Helmet } from '@dr.pogodin/react-helmet';
import './AdminDashboard.css';  

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  const checkAuth = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return false;
    }
    return true;
  }, [router]);

  const fetchPosts = useCallback(async () => {
    try {
      console.log('Admin fetching posts from: /db/blog_posts_new.php');
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : '';
      const response = await fetch('/db/blog_posts_new.php', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Admin response status:', response.status);
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      console.log('Admin response data:', data);
      
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Admin error fetching posts:', error);
      setError('Error fetching posts: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (checkAuth()) {
      fetchPosts();
    }
  }, [checkAuth, fetchPosts]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_token');
    }
    router.push('/admin/login');
  };

  const handleDeletePost = async (postId) => {
    if (typeof window !== 'undefined' && !window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : '';
      const response = await fetch('/db/blog_posts_new.php', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id: postId })
      });

      const data = await response.json();
      
      if (data.success) {
        setPosts(posts.filter(post => post.id !== postId));
      } else {
        alert('Error deleting post: ' + data.message);
      }
    } catch (error) {
      alert('Error deleting post: ' + error.message);
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      // Use consistent formatting to avoid hydration issues
      return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
    } catch (error) {
      return dateString || '';
    }
  };

  if (isLoading) {
    return (
      <div className="admin-dashboard">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - GIXI AI Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>Blog Management Dashboard</h1>
          <div className="dashboard-actions">
            <button 
              onClick={() => router.push('/admin/create-post')}
              className="create-post-btn"
            >
              Create New Post
            </button>
            <button 
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="posts-container">
          <h2>All Blog Posts ({posts.length})</h2>
          
          {posts.length === 0 ? (
            <div className="no-posts">
              <p>No blog posts found. Create your first post!</p>
            </div>
          ) : (
            <div className="posts-grid">
              {posts.map(post => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <h3>{post.title}</h3>
                    <div className="post-meta">
                      <span>By {post.author}</span>
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                  </div>
                  
                  <div className="post-content">
                    <p>{post.excerpt}</p>
                    <div className="post-tags">
                      {post.tags && post.tags.split(',').map(tag => (
                        <span key={tag.trim()} className="tag">{tag.trim()}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="post-status">
                    <span className={`status ${post.status}`}>{post.status}</span>
                  </div>
                  
                  <div className="post-actions">
                    <button 
                      onClick={() => router.push(`/admin/edit-post/${post.id}`)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => router.push(`/blog/${post.slug}`)}
                      className="view-btn"
                    >
                      View
                    </button>
                    <button 
                      onClick={() => handleDeletePost(post.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
