# Kevin Ryou Inoue - Portfolio Website

🔗 **[https://portfolio-kevin-inoue-ryou.vercel.app/](https://portfolio-kevin-inoue-ryou.vercel.app/)**

## Project Overview

Professional portfolio website showcasing my skills, projects, and experience as a Software Engineer who graduated from University of Toronto. It features dark mode, smooth animations, and full responsive design built with Node.js, Express, and vanilla JavaScript.

## File Structure

### **[server.js](server.js)** - Backend Server
- Express.js server on port 3001 with security measures
- Stateless architecture ideal for Vercel serverless deployment
- Why Express? Provides flexibility for future API endpoints while maintaining simplicity

### **[public/index.html](public/index.html)** - Frontend Structure  
- Single-page application with six sections: Home, about, projects, experience, education, contact
- Displays detailed projects with images, GitHub links, and technology tags
- Simplicity is essential. Creates fluid user experience with smooth scrolling instead of page reloads

### **[public/css/style.css](public/css/style.css)** - Styling
- Dual-theme system using CSS custom properties
- Orange accent color for brand consistency across themes
- Mobile-first responsive design with breakpoints at 768px, 1024px, 1400px
- The most used code this website was CDD, used for single-attribute theme switching with natural cascade behavior

### **[public/js/main.js](public/js/main.js)** - Interactive Features
- Theme toggle with localStorage persistence
- Smooth scrolling navigation with active link highlighting
- Intersection Observer API for performance-optimized scroll animations
- **Why vanilla JavaScript?** Smaller bundle size, faster load times, demonstrates core fundamentals without framework overhead

### **[package.json](package.json)** & **[vercel.json](vercel.json)** - Configuration
- Dependencies: Express (production), Nodemon (development)
- Vercel deployment config for serverless hosting with automatic HTTPS and CDN

## Key Design Decisions

**Minimal Tech Stack:** Node.js + Express + vanilla JS prioritizes performance and demonstrates fundamental skills over framework reliance.

## Running Locally

```bash
npm install     # Install dependencies
npm run dev     # Development with hot-reload  
npm start       # Production mode
```

Access at `http://localhost:3001`

acknowledgement:
Github Copilot helped to complete this portfolio.
I mostly used it for UI/UX design for nativate readers.
