const axios = require('axios').default;
const API_KEY = '29561920-1065b6adaef0eaf94313a88f4';
const BASIC_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;
const searchParams = '&image_type=photo&orientation=horizontal';

export const getImages = async (page, query) => {
  console.log(query);
  const serverDataURL = `${BASIC_URL}${query}${searchParams}&page=${page}&per_page=12`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;
    const hits = data.hits;
    return hits;
  } catch (error) {}
};
