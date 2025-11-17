# Kevin Ryou Inoue - Portfolio Website

A modern, responsive portfolio website built with Node.js and Express, featuring smooth scrolling animations and a clean, professional design.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly layout
- ✨ Smooth scroll animations
- 🎯 Interactive navigation
- 🌙 Dark theme with gradient accents
- ⚡ Fast and lightweight

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with CSS variables
- **Animations**: CSS animations and Intersection Observer API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/KevinRyouInoue/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. For development with auto-reload:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
Portfolio/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## Sections

- **Home**: Hero section with introduction and call-to-action
- **About**: Professional summary and background
- **Experience**: Work history with detailed descriptions
- **Projects**: Featured projects with technologies used
- **Skills**: Technical skills organized by category
- **Education**: Academic background
- **Contact**: Contact information and links

## Customization

To customize the portfolio:

1. **Colors**: Edit CSS variables in `public/css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

2. **Content**: Update the content in `public/index.html`

3. **Animations**: Modify JavaScript animations in `public/js/main.js`

## Deployment

### Deploy to Heroku

1. Create a Heroku account
2. Install Heroku CLI
3. Run:
```bash
heroku create
git push heroku main
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to AWS/Azure

Follow standard Node.js deployment procedures for your chosen platform.

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Kevin Ryou Inoue
- Email: kevininoue0131@gmail.com
- Phone: 437-837-7689
- GitHub: [KevinRyouInoue](https://github.com/KevinRyouInoue)
- LinkedIn: [Kevin Inoue](https://linkedin.com/in/kevin-inoue)

---

Built with ❤️ using Node.js & Express
