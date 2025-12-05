const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from repository root
app.use(express.static(path.join(__dirname)));

// Fallback to home.html for unknown routes so links work in a browser
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
