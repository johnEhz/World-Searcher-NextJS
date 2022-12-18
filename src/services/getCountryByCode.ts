import axios from 'axios';

const URL = `https://restcountries.com/v2/alpha`;

export const getCountryByCode = async (code:string) => {
    return await axios.get(`${URL}/${code}`)
}