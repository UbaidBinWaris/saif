-- Blog System Setup for leadvweq_gixiai Database
-- Run this in your existing database

USE leadvweq_gixiai;

-- Admin users table for blog management
CREATE TABLE IF NOT EXISTS admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content LONGTEXT NOT NULL,
    featured_image VARCHAR(255),
    tags TEXT,
    author_id INT,
    status ENUM('draft', 'published') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES admin_users(id)
);

-- Insert default admin user (password: admin123)
-- First delete any existing admin user to avoid conflicts
DELETE FROM admin_users WHERE username = 'admin';

-- Insert with plain text password (no hashing)
INSERT INTO admin_users (username, password, email) VALUES 
('admin', 'admin123', 'admin@gixiai.com');
