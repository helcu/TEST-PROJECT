import axios from 'axios';
const BASE_URL = 'https://api.adviceslip.com/advice/';

const adviceByKeywordService = async (keyword) => {
  const urlPath = 'search/';
  const url = BASE_URL + urlPath + keyword;
  const response = await axios.get(url);

  return response.data;
};

module.exports = { adviceByKeywordService };
