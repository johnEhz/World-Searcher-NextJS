import axios from 'axios';

const URL = `https://restcountries.com/v3.1/name/`;
const PARAMETERS = "?fullText=true"

export const getCountryByName = async (name: string | string[] | undefined) => {
    return await axios.get(`${URL}${name}${PARAMETERS}`)
}