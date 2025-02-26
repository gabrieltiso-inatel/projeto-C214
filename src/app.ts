import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Gabriel!');
});

app.get('/corinthians', (req, res) => {
  res.json({
    name: 'Gabriel',
    team: 'Corinthians'
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});