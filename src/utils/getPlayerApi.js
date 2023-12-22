// api.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: 'https://league-of-legends-galore.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'league-of-legends-galore.p.rapidapi.com',
  },
});

export const getPlayerRank = async (summonerName, tagLine, region) => {
  try {
    const response = await api.get('/api/getPlayerRank', {
      params: {
        name: `${summonerName}-${tagLine}`,
        region: region,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching player rank:', error);
    throw error;
  }
};
