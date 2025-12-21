# Kevin Ryou Inoue - Portfolio Website

🔗 **[Live Site](https://portfolio-kevin-inoue-ryou.vercel.app/)**

## Project Overview

Professional portfolio website showcasing my skills, projects, and experience as a Software Engineer and Chemistry graduate from the University of Toronto. Features dark mode, smooth animations, and full responsive design built with Node.js, Express, and vanilla JavaScript.

## File Structure

### **[server.js](server.js)** - Backend Server
- Express.js server on port 3001 with security measures (disabled directory listing, dotfiles ignored)
- Stateless architecture ideal for Vercel serverless deployment
- **Why Express?** Provides flexibility for future API endpoints while maintaining simplicity

### **[public/index.html](public/index.html)** - Frontend Structure  
- Single-page application with seven sections: navigation, hero, about, projects, experience, education, contact
- Five detailed project cards with images, GitHub links, and technology tags
- **Why single-page?** Creates fluid user experience with smooth scrolling instead of page reloads

### **[public/css/style.css](public/css/style.css)** - Styling (1000+ lines)
- Dual-theme system using CSS custom properties
- Orange accent color (#ff9d5c) for brand consistency across themes
- Mobile-first responsive design with breakpoints at 768px, 1024px, 1400px
- **Why CSS variables?** Single-attribute theme switching with natural cascade behavior

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
