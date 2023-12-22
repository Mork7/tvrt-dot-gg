// api.js
import axios from 'axios';

const API_KEY = '864048d978msh08b059cd6e28e22p12ed46jsncd75686af2ec';

const api = axios.create({
  baseURL: 'https://league-of-legends-galore.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'league-of-legends-galore.p.rapidapi.com',
  },
});

export const getPlayerRank = async (summonerName, tagLine, region = 'na') => {
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
