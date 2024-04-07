import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, catchError, map, of, tap } from "rxjs";

import { Country, CacheStore, Region } from "../interfaces";

@Injectable({
	providedIn: "root",
})
export class CountriesService {
	apiUrl: string = "https://restcountries.com/v3.1";

	public cacheStore: CacheStore = {
		byCapital: { term: "", countries: [] },
		byCountry: { term: "", countries: [] },
		byRegion: { region: "", countries: [] },
	};

	constructor(private httpClient: HttpClient) {
		this.loadFromLocalStorage();
	}

	private saveToLocalStorage(): void {
		localStorage.setItem("cacheStore", JSON.stringify(this.cacheStore));
	}

	private loadFromLocalStorage(): void {
		if (!localStorage.getItem("cacheStore")) return;
		this.cacheStore = JSON.parse(localStorage.getItem("cacheStore")!);
	}

	private getCountries(url: string): Observable<Country[]> {
		return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
	}

	searchByAlphaCode(code: string): Observable<Country | null> {
		const url = `${this.apiUrl}/alpha/${code}`;
		return this.getCountries(url).pipe(
			map((countries) => (countries ? countries[0] : null))
		);
	}

	searchByCapital(capital: string): Observable<Country[]> {
		const url = `${this.apiUrl}/capital/${capital}`;
		return this.getCountries(url).pipe(
			tap((countries) => {
				this.cacheStore.byCapital = { term: capital, countries };
			}),
			tap(() => this.saveToLocalStorage())
		);
	}

	searchByCountry(country: string): Observable<Country[]> {
		const url = `${this.apiUrl}/name/${country}`;
		return this.getCountries(url).pipe(
			tap((countries) => {
				this.cacheStore.byCountry = { term: country, countries };
			}),
			tap(() => this.saveToLocalStorage())
		);
	}

	searchByRegion(region: Region): Observable<Country[]> {
		const url = `${this.apiUrl}/region/${region}`;
		return this.getCountries(url).pipe(
			tap((countries) => {
				this.cacheStore.byRegion = { region, countries };
			}),
			tap(() => this.saveToLocalStorage())
		);
	}
}
