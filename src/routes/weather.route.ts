import { Router } from 'express';
import axios from 'axios';

const weatherRoute = Router();

const API_KEY = process.env.WEATHER_API_KEY;
const CITY = 'Aurora'; // cidade fictícia
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`;

weatherRoute.get('/', async (_, res) => {
  try {
    const response = await axios.get(URL);
    const data = response.data;

    res.json({
      city: data.location.name,
      region: data.location.region,
      temp_c: data.current.temp_c,
      condition: data.current.condition.text,
      updated: data.current.last_updated,
    });
  } catch (error: any) {
    console.error('Erro ao buscar clima:', error.message);
    res
      .status(500)
      .json({ error: 'Não foi possível obter a previsão do tempo.' });
  }
});

export { weatherRoute };
