import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 0cf7b42133664a5f999cb65ce0e903a3b3db590f15dcc96d3a6ae4a3ae2887eb'
    }
});