const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Jenkins CI/CD Working Successfully!');
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});