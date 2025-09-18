import React, { useState, useEffect } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Link from "next/link";
import "./Blog.css";
import Image from "next/image";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const fetchPosts = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`/db/blog_posts_new.php?page=${page}&limit=6&status=published`);
      const data = await response.json();
      
      if (data.success) {
        setPosts(data.posts);
        setPagination(data.pagination);
      } else {
        console.error('Failed to fetch posts:', data.message);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="blog-section">
        <div className="blog-container">
          <div className="blog-loading">
            <div className="loading-spinner"></div>
            <p>Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-section">
      <Helmet>
        <title>Blog - GIXI AI Solutions | Automation & n8n Insights</title>
        <meta name="description" content="Explore our blog for the latest insights on automation, workflow optimization, and n8n development. Learn best practices and advanced strategies." />
        <meta name="keywords" content="automation blog, n8n tutorials, workflow optimization, business automation, API integration" />
      </Helmet>

      <div className="blog-container">
        <header className="blog-hero">
          <div className="blog-hero-content">
            <h1 className="blog-title">
              Our <span className="blog-highlight">Blog</span>
            </h1>
            <p className="blog-subtitle">
              Discover the latest insights, tutorials, and best practices in automation, 
              workflow optimization, and n8n development.
            </p>
          </div>
        </header>

        <div className="blog-posts-container">
          {posts.length === 0 ? (
            <div className="no-posts">
              <p>No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="blog-posts-grid">
              {posts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    {post.featured_image ? (
                      <Image
                        src={`/uploads/${post.featured_image}`}
                        alt={post.title}
                        width={400}
                        height={250}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="blog-card-placeholder" style={{ display: post.featured_image ? 'none' : 'flex' }}>
                      <span>📝</span>
                    </div>
                  </div>
                  
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-date">{formatDate(post.created_at)}</span>
                      <span className="blog-author">By Saifullah</span>
                    </div>
                    
                    <h2 className="blog-card-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    
                    <div className="blog-card-footer">
                      <Link to={`/blog/${post.slug}`} className="blog-read-more">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {pagination.total_pages > 1 && (
            <div className="blog-pagination">
              <button
                className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              <div className="pagination-numbers">
                {[...Array(pagination.total_pages)].map((_, index) => (
                  <button
                    key={index + 1}
                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <button
                className={`pagination-btn ${currentPage === pagination.total_pages ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination.total_pages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
