import axios from 'axios';

const FIELDS = "name,population,region,subregion,capital,languages,timezones,flags"
const URL = `https://restcountries.com/v3.1/all?fields=${FIELDS}`;

export const getAllCountries = async () => {
    return await axios.get(URL)
}