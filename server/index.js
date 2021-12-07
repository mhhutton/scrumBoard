const app = require('./server.js');

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
  console.log(`Server listening on ${host}:${port}`);
});
