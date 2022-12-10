export interface Country {
    name: {
        common: string,
        official: string,
    },
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    languages: {},
    timezones: string[],
    flags: {
        png: string
    }

}