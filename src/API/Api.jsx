const axios = require('axios').default;
const API_KEY = '29561920-1065b6adaef0eaf94313a88f4';
const BASIC_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;
const searchParams = '&image_type=photo&orientation=horizontal';

export class GetImages {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.newQuery = '';
  }
  async getImages() {
    const serverDataURL = `${BASIC_URL}${this.searchQuery}${searchParams}&page=${this.page}&per_page=12`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {}
  }
}
