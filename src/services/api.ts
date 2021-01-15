import axios from 'axios';

const uri = 'http://192.168.100.2:80';


const api = axios.create({
    baseURL: uri
});

export default api;
