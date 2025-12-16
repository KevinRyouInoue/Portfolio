const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Disable directory listing
app.set('view engine', null);

// Routes - Define before static middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public'), {
  index: false,
  dotfiles: 'ignore'
}));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running on http://localhost:${PORT}`);
});
