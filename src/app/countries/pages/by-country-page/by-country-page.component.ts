import { Component, OnInit } from "@angular/core";
import { Country } from "../../interfaces";
import { CountriesService } from "../../services";

@Component({
	selector: "app-by-country-page",
	templateUrl: "./by-country-page.component.html",
})
export class ByCountryPageComponent implements OnInit {
	public countries: Country[] = [];
	public initialValue: string = "";
	public isLoading: boolean = false;

	constructor(private countriesService: CountriesService) {}

	ngOnInit(): void {
		this.countries = this.countriesService.cacheStore.byCountry.countries;
		this.initialValue = this.countriesService.cacheStore.byCountry.term;
	}

	searchByCountry(country: string): void {
		this.isLoading = true;

		this.countriesService.searchByCountry(country).subscribe((countries) => {
			this.countries = countries;
			this.isLoading = false;
		});
	}
}
