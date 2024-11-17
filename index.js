const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Middleware to serve static files (like HTML)
app.use(express.static(path.join(__dirname, 'src')));

// Route definitions
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'contact-me.html'));
});

// Catch-all route for 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'src', '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});