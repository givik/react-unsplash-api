import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 860feefb0dac06497dd8c14a3976c8f99d952316e84448076441db7fc5030797'
  }
});
