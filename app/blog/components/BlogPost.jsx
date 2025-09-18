'use client'
import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Helmet } from "@dr.pogodin/react-helmet";
import "./BlogPost.css";
import Pbutton from "../../../components/Other/Pbutton";
import { getBlogPostBySlug } from "../../../data/blog";

const BlogPost = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const postData = getBlogPostBySlug(slug);
      
      if (postData) {
        setPost(postData);
      } else {
        setError('Blog post not found');
      }
    } catch (error) {
      setError('Error fetching blog post');
      console.error('Error fetching post:', error);
    }
    
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      // Use consistent formatting to avoid hydration issues
      return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
    } catch (error) {
      return dateString || '';
    }
  };

  if (loading) {
    return (
      <div className="blog-post-loading">
        <p>Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post-error">
        <h2>Post Not Found</h2>
        <p>{error || 'The blog post you are looking for does not exist.'}</p>
        <Link href="/blog">
          <Pbutton>Back to Blog</Pbutton>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | GIXI AI Solutions Blog</title>
        <meta name="description" content={post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta name="keywords" content={post.tags || "automation, workflow, n8n, business process, GIXI AI Solutions"} />
        <link rel="canonical" href={`https://gixiai.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta property="og:image" content={post.featured_image ? `/assets/${post.featured_image}` : "https://gixiai.com/new logos/three.png"} />
        <meta property="og:url" content={`https://gixiai.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="article:author" content="Saifullah" />
        <meta name="article:published_time" content={post.created_at} />
      </Helmet>

      <article className="blog-post-section">
        <div className="blog-post-container">
          {/* Header */}
          <header className="blog-post-header">
            <div className="blog-post-breadcrumb">
              <Link href="/blog">
                <Pbutton>Back to Blog</Pbutton>
              </Link>
            </div>
            
            <div className="blog-post-meta">
              <span className="blog-post-date">{formatDate(post.created_at)}</span>
              <span className="blog-post-author">By Saifullah</span>
            </div>
            
            <h1 className="blog-post-title">{post.title}</h1>
            
            {post.excerpt && (
              <p className="blog-post-excerpt">{post.excerpt}</p>
            )}
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="blog-post-featured-image">
              <Image
                src={`/assets/${post.featured_image}`}
                alt={post.title}
                width={800}
                height={400}
              />
            </div>
          )}

          {/* Content */}
          <div className="blog-post-content">
            <div 
              className="blog-post-text"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Footer */}
          <footer className="blog-post-footer">
            {post.tags && (
              <div className="blog-post-tags">
                {post.tags.split(',').map(tag => (
                  <span key={tag.trim()} className="tag">{tag.trim()}</span>
                ))}
              </div>
            )}
            
            <div className="blog-post-navigation">
              <Link href="/blog" className="back-to-blog">
                View All Posts
              </Link>
              <Link href="/contact" className="contact-cta">
                Get Started with Automation
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
