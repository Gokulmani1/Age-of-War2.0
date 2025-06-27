const express = require('express');
const cors = require('cors');
const app = express();
const path = require("path");
const battleRoute = require('./routes/battleRoute');

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(cors());
app.use(express.json());
app.use('/', battleRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})