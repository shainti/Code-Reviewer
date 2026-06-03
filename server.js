const express = require('express')
const app = express();

const PORT = 3000;
app.listen(PORT, () => console.log(`Server start at https://locahost:${PORT}`));
exports.app = app;
