import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CWfkOFiUKErIWyRSs8jCeceFvx9ar-6I9eKZsd3aqbA'
    }
});