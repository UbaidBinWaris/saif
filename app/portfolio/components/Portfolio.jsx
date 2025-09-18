'use client'
import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import Link from 'next/link';
import { LayoutGrid, Bot, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioProjects, getProjectsByCategory, getProjectsPaginated } from '../../../data/projects';
import './Portfolio.css';

// Memoized ProjectCard component for better performance
const ProjectCard = memo(({ project }) => {
  const [touched, setTouched] = useState(false);

  const handleTouchStart = useCallback(() => {
    setTouched(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Keep overlay visible for a bit longer on touch devices
    setTimeout(() => setTouched(false), 3000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTouched(false);
  }, []);

  return (
    <div 
      className={`portfolio-card ${touched ? 'touched' : ''}`}
      style={{'--card-image': `url(${project.image})`}}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image-container">
        <div className="card-overlay">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-cta-button"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{project.title}</h3>
        </div>
        <p className="card-description">{project.description}</p>
        <div className="card-technologies">
          {/* <h4 className="card-technologies-title">Technologies</h4> */}
          <div className="technologies-list">
            {project.technologies.map((tech, index) => (
              <span key={index} className="technology-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Memoize categories to prevent re-creation on every render
  const categories = useMemo(() => [
    { id: 'all', label: 'All Projects', icon: LayoutGrid },
    { id: 'automation', label: 'Automation', icon: Bot },
    { id: 'web-development', label: 'Web Development', icon: Globe }
  ], []);

  // Memoize filtered projects to avoid recalculation
  const filteredProjects = useMemo(() => {
    return getProjectsByCategory(filter);
  }, [filter]);

  // Memoize paginated data
  const paginatedData = useMemo(() => {
    return getProjectsPaginated(filteredProjects, currentPage, itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  // Memoize page change handler
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      const element = document.querySelector('.portfolio-grid-section');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }, []);

  if (!mounted) {
    return (
      <div className="loading-container">
        Loading...
      </div>
    );
  }

  return (
    <section className="portfolio-section">
      {/* Background Pattern */}
      <div className="background-pattern"></div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-container">
          <h2 className="filter-title">Discover Our Expertise</h2>
          <div className="filter-buttons">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  className={`filter-button ${filter === category.id ? 'active' : ''}`}
                  onClick={() => setFilter(category.id)}
                >
                  <IconComponent className="filter-button-icon" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid-section">
        <div className="portfolio-grid-container">
          <div className="portfolio-grid">
            {paginatedData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Pagination */}
          {paginatedData.totalPages > 1 && (
            <div className="pagination-container">
              <div className="pagination-info">
                <span className="pagination-text">
                  Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, paginatedData.totalProjects)} of {paginatedData.totalProjects} projects
                </span>
              </div>
              
              <div className="pagination-controls">
                <button 
                  className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="pagination-icon" />
                  Previous
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: paginatedData.totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button 
                  className={`pagination-button ${currentPage === paginatedData.totalPages ? 'disabled' : ''}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === paginatedData.totalPages}
                >
                  Next
                  <ChevronRight className="pagination-icon" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Let's work together to create amazing automation solutions and web experiences 
            that will transform your business.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-primary">
              Start Your Project
            </Link>
            <Link href="/services" className="cta-secondary">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
