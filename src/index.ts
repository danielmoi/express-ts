import express from 'express';

const app = express();

const PORT = 1337;

app.get('/', (req, res) => {
  console.log('HELLO');
  res.send('Hello world! \n');
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
