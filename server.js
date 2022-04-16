const express = require('express');
const app = express();

//stays on bottom of file
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});