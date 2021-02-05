import axios from 'axios';
const API_KEY = 'AIzaSyC_E7ZWi5m-Gslo0Qt4SfSGZijl5Agh_1E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY
    }
});