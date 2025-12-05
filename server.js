const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from repo root so existing HTML and asset structure works
const publicDir = path.join(__dirname, '.');
app.use(express.static(publicDir));

// Default route -> index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
