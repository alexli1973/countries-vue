import axios from "axios";
import {ICountry} from "@/typings/types";

const clientService = axios.create({
    baseURL: "https://restcountries.com/v3.1/",
    withCredentials: false,
});

export async function getCountries(url: string, fields?: any) {
    try {
        const { data } = await clientService.get(`/${url}`, {
            params: {
                fields: fields,
            }
        })
        return data.map((item: ICountry) => {
            return {
                name: item.name,
                independent: item.independent,
                currencies: item.currencies,
                capital: item.capital,
                region: item.region,
                subregion: item.subregion,
                languages: item.languages,
                area: item.region,
                maps: item.maps,
                capitalInfo: item.capitalInfo,
                latlng: item.latlng,
            }
        })

    } catch (err) {
        // add error handler shared service
        console.log(err);
    }
}
