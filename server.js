import express from 'express';
import data from './data/data.js';
import cors from 'cors';
const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.json(data);
});

const server = app.listen(port, () => console.log('Hello'));
