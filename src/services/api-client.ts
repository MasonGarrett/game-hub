import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5f9b71cdcf1a40c0ae12b81e7b9fe352',
    },
});
