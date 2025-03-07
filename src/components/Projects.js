import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1: Portfolio Website</h3>
          <p>This is a personal portfolio website built with React and styled-components. It showcases my projects, skills, and contact information.</p>
          <a href="https://github.com/tecnoboyer/portfolio-website" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li>
          <h3>Project 2: E-commerce Store</h3>
          <p>An e-commerce store built with Node.js, Express, and MongoDB. It features user authentication, product management, and order processing.</p>
          <a href="https://github.com/tecnoboyer/e-commerce-store" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li>
          <h3>Project 3: Blogging Platform</h3>
          <p>A full-stack blogging platform built with React for the front-end and GraphQL with Apollo Server for the back-end. It allows users to create, edit, and delete blog posts.</p>
          <a href="https://github.com/tecnoboyer/blogging-platform" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;