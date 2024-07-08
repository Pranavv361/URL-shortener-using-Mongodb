const express = require("express");

const app = express();
const port = 8001;

app.listen(PORT, () => console.log(`Server started at port:${port}`));
