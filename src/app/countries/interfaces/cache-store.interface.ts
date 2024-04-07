import { Country } from "./country";
import { Region } from "./region.type";

export interface CacheStore {
	byCapital: TermCountries;
	byCountry: TermCountries;
	byRegion: RegionCountries;
}

export interface TermCountries {
	countries: Country[];
	term: string;
}

export interface RegionCountries {
	countries: Country[];
	region: Region;
}
