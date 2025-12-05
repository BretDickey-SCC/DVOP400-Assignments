Running the site with Node.js

1) Open PowerShell and change to the project folder:

   cd "c:\Users\Lilli\OneDrive\Desktop\DVOPs400\DVOP400-Assignments"

2) Install dependencies:

   npm install

3) Start the server (production):

   npm start

   The site will be available at http://localhost:3000 and will serve the files in the repository root.

4) (Optional) Start in development mode with automatic restarts (requires nodemon):

   npm run dev

Notes
- The server statically serves files from the repository root and falls back to `home.html` for unknown routes.
- If you named your home page `Home.html` (capital H), the server still serves `home.html` fallback; consider renaming/canonicalizing to `home.html` if needed.
