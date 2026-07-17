const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, my Task API is alive!');
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});