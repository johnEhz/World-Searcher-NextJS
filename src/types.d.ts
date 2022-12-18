export interface Country {
    name: {
        common: string,
        official: string,
    },
    population: number,
    region: string,
    subregion: string,
    borders: string[],
    capital: string[],
    flags: {
        png: string
    }
}

export interface Query {
    countryName: string,
    regionName: string
}