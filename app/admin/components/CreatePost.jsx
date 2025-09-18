import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { Helmet } from '@dr.pogodin/react-helmet';
import './CreatePost.css';

const CreatePost = () => {
  const { id } = useParams();
  const router = useRouter();
  const isEditing = Boolean(id);
  
  const [post, setPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    tags: '',
    status: 'published',
    image: null,
    existing_image: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const checkAuth = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return false;
    }
    return true;
  }, [router]);

  const fetchPost = useCallback(async () => {
    if (!isEditing) return;
    
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : '';
      const response = await fetch(`/db/blog_posts_new.php?id=${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }

      const data = await response.json();
      if (data.success && data.post) {
        setPost({
          ...data.post,
          tags: data.post.tags || '',
          image: null,
          existing_image: data.post.featured_image || ''
        });
        
        if (data.post.featured_image) {
          setImagePreview(`/uploads/${data.post.featured_image}`);
        }
      }
    } catch (error) {
      setError('Error fetching post: ' + error.message);
    }
  }, [isEditing, id]);

  useEffect(() => {
    if (checkAuth()) {
      fetchPost();
    }
  }, [checkAuth, fetchPost]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const insertFormatting = (format) => {
    const textarea = document.getElementById('content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let beforeText = '';
    let afterText = '';
    
    switch (format) {
      case 'bold':
        beforeText = '<strong>';
        afterText = '</strong>';
        break;
      case 'italic':
        beforeText = '<em>';
        afterText = '</em>';
        break;
      case 'h2':
        beforeText = '<h2>';
        afterText = '</h2>';
        break;
      case 'h3':
        beforeText = '<h3>';
        afterText = '</h3>';
        break;
      case 'p':
        beforeText = '<p>';
        afterText = '</p>';
        break;
      case 'br':
        beforeText = '<br>';
        afterText = '';
        break;
      case 'ul':
        beforeText = '<ul><li>';
        afterText = '</li></ul>';
        break;
      case 'link':
        const url = prompt('Enter URL:');
        if (url) {
          beforeText = `<a href="${url}">`;
          afterText = '</a>';
        }
        break;
      default:
        // No formatting applied
        break;
    }
    
    const newValue = 
      textarea.value.substring(0, start) +
      beforeText + selectedText + afterText +
      textarea.value.substring(end);
    
    setPost(prev => ({
      ...prev,
      content: newValue
    }));
    
    // Restore focus and cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + beforeText.length,
        start + beforeText.length + selectedText.length
      );
    }, 0);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPost(prev => ({
        ...prev,
        image: file
      }));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const generateExcerpt = (content) => {
    const plainText = content.replace(/<[^>]*>/g, '');
    return plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : '';
      console.log('Token being sent:', token); // Debug log
      
      const formData = new FormData();
      formData.append('title', post.title);
      formData.append('content', post.content);
      formData.append('excerpt', post.excerpt || generateExcerpt(post.content));
      formData.append('tags', post.tags);
      formData.append('status', post.status);
      formData.append('slug', generateSlug(post.title));
      
      if (post.image) {
        formData.append('image', post.image);
      }
      
      if (isEditing) {
        formData.append('id', id);
      }

      console.log('Making request to: /db/blog_posts_new.php'); // Debug log
      console.log('Authorization header:', `Bearer ${token}`); // Debug log

      const response = await fetch('/db/blog_posts_new.php', {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      console.log('Response status:', response.status); // Debug log
      
      const data = await response.json();
      console.log('Response data:', data); // Debug log

      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Failed to save post');
        if (data.debug) {
          console.log('Debug info:', data.debug);
        }
      }
    } catch (error) {
      console.error('Submit error:', error);
      setError('Error saving post: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Post' : 'Create New Post'} - GIXI AI Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="create-post-container">
        <div className="create-post-header">
          <h1>{isEditing ? 'Edit Post' : 'Create New Post'}</h1>
          <button 
            onClick={() => router.push('/admin/dashboard')}
            className="back-btn"
          >
            ← Back to Dashboard
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="create-post-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={post.title}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                placeholder="Enter post title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={post.status}
                onChange={handleInputChange}
                disabled={isLoading}
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Excerpt</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={post.excerpt}
              onChange={handleInputChange}
              disabled={isLoading}
              rows="3"
              placeholder="Brief description of the post (optional - will be auto-generated if empty)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content *</label>
            <div className="formatting-toolbar">
              <button type="button" onClick={() => insertFormatting('bold')} title="Bold">
                <strong>B</strong>
              </button>
              <button type="button" onClick={() => insertFormatting('italic')} title="Italic">
                <em>I</em>
              </button>
              <button type="button" onClick={() => insertFormatting('h2')} title="Heading 2">
                H2
              </button>
              <button type="button" onClick={() => insertFormatting('h3')} title="Heading 3">
                H3
              </button>
              <button type="button" onClick={() => insertFormatting('p')} title="Paragraph">
                P
              </button>
              <button type="button" onClick={() => insertFormatting('br')} title="Line Break">
                BR
              </button>
              <button type="button" onClick={() => insertFormatting('ul')} title="List">
                UL
              </button>
              <button type="button" onClick={() => insertFormatting('link')} title="Link">
                🔗
              </button>
            </div>
            <textarea
              id="content"
              name="content"
              value={post.content}
              onChange={handleInputChange}
              required
              disabled={isLoading}
              rows="15"
              placeholder="Write your post content here... Use the formatting buttons above to add HTML tags."
            />
            <div className="formatting-help">
              <small>
                Tip: Select text and click formatting buttons to add HTML tags. 
                Use &lt;p&gt; for paragraphs, &lt;br&gt; for line breaks.
              </small>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={post.tags}
              onChange={handleInputChange}
              disabled={isLoading}
              placeholder="automation, n8n, workflow (comma-separated)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Featured Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              disabled={isLoading}
            />
            {imagePreview && (
              <div className="image-preview">
                <Image src={imagePreview} alt="Preview" width={300} height={200} />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              onClick={() => router.push('/admin/dashboard')}
              className="cancel-btn"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
