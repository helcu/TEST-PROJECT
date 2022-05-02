import axios from 'axios';
const BASE_URL = 'https://api.adviceslip.com/advice/';
/**
 * Advice service method to retrive data from external API
 *
 * @param {string} keyword keyword used to search advice 'string'
 * @return {object} object with response data from API
 */
const adviceByKeywordService = async (keyword) => {
  const urlPath = 'search/';
  const url = BASE_URL + urlPath + keyword;
  const response = await axios.get(url);

  return response.data;
};

module.exports = { adviceByKeywordService };
