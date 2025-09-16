'use client'
import React, { useState, useEffect } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Link from "next/link";
import Image from "next/image";
import "./Blog.css";
import Preloader from "../Preloader/Preloader";
import { getBlogPosts } from "../../data/blog";

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
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const data = getBlogPosts(page, 6);
      console.log('Blog posts data:', data.posts); // Debug logging
      data.posts.forEach(post => {
        console.log(`Post: ${post.title}, Featured Image: ${post.featured_image}`); // Debug logging
      });
      setPosts(data.posts);
      setPagination(data.pagination);
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
    return <Preloader />;
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
                        src={`/assets/${post.featured_image}`}
                        alt={post.title}
                        width={400}
                        height={250}
                        style={{ display: 'block' }}
                        onError={(e) => {
                          console.log('Image failed to load:', e.target.src);
                          e.target.style.display = 'none';
                          const placeholder = e.target.parentElement.querySelector('.blog-card-placeholder');
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                        onLoad={(e) => {
                          // Image loaded successfully, ensure placeholder is hidden
                          const placeholder = e.target.parentElement.querySelector('.blog-card-placeholder');
                          if (placeholder) placeholder.style.display = 'none';
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
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    
                    <div className="blog-card-footer">
                      <Link href={`/blog/${post.slug}`} className="blog-read-more">
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
