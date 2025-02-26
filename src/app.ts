import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Gabriel!');
});

app.get('/corinthians', (req, res) => {
  let mundiais = 2;
  let mundiais_verdadeiros_mengao = 0;
  let copa_toyota = 1;
  res.json({
    team: 'Corinthians',
    name: 'Gabriel',
    status: 'supporter'
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});