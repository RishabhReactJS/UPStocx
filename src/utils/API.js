import axios from 'axios';
import Config from './config';

export default axios.create({
    baseURL: `${Config.BASE_URL}api/`,
    responseType: "json"
})