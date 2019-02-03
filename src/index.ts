import express from 'express';
import data from './data.json';
import defaultExport from './default-export';
import { namedExport } from './named-export';

const app = express();

const PORT = 1337;

app.get('/', (req, res) => {
  console.log('HELLO');
  console.log('SECRET:', data.secret);


  res.send('Hello world! \n');
});

app.listen(PORT, () => {
  const dataDefault = defaultExport();
  console.log('dataDefault:', dataDefault);

  const dataNamed = namedExport();
  console.log('dataNamed:', dataNamed);

  console.log(`Server started at http://localhost:${PORT}`);
});
