import axios from 'axios'

const KEY = 'AIzaSyAOfRAc36mzM6diJrpeIgvR1MXkhDe6YW0';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        maxResults: 5,
        key: KEY,
    }
})