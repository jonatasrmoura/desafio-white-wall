import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { weatherRoute } from './routes/weather.route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/weather', weatherRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT} ☁️`);
});
