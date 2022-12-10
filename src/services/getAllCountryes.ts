import axios from 'axios';

const FIELDS = "?fields=name,population,region,subregion,capital,languages,timezones,flags"
const URL = `https://restcountries.com/v3.1/all${FIELDS}`;

export const getAllCountries = async () => {
    return await axios.get(URL)
}