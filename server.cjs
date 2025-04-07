const express = require("express");
console.log("HERE");
const path = require('path');
console.log("HERE");
const app = express();
console.log("HERE");

const port = process.env.PORT || 3000;
console.log("HERE");

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));
console.log("HERE");

// For SPA (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
console.log("HERE");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log("HERE");
