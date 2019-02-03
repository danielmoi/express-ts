import express from 'express';
import data from './data.json';

const app = express();

const PORT = 1337;

app.get('/', (req, res) => {
  console.log('HELLO');
  console.log('SECRET:', data.secret);
  res.send('Hello world! \n');
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
