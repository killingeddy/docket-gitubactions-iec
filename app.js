const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello Worl!');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
