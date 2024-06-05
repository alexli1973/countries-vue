export interface ICountry {
    name: ICountryName;
    cc3: string;
    independent: boolean;
    currencies: ICurrencies | null | undefined; //null - Antarctica etc..
    capital: string[];
    region: string;
    subregion: string;
    languages: ILanguages | null | undefined; //null - Antarctica etc..
    area: number;
    maps: IMaps;
    flags: IFlags;
    capitalInfo: ICapitalInfo;
    latlng: Array<any>;
}

export interface ICountryName {
    common: string;
    official: string;
}

export interface ICurrencies {
    [key: string]: {
        name: string;
        symbol?: symbol;
    }
}

export interface ILanguages {
    [key: string]: string;
}

export interface IMaps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface IFlags {
    png: string;
    svg: string;
    alt?: string;
}

export interface ICapitalInfo {
    latlng: Array<any>;
}

