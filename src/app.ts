import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Gabriel!');
});

app.get('/corinthians', (req, res) => {
  let mundiais = 1; // Enumera o real número de mundiais do Corinthians
  res.json({
    fundacao: '01/09/1910',
    team: 'Corinthians Paulista',
    mundiais
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});