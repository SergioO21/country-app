import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../../services";
import { Country } from "../../interfaces";

@Component({
	selector: "app-by-capital-page",
	templateUrl: "./by-capital-page.component.html",
})
export class ByCapitalPageComponent implements OnInit {
	public countries: Country[] = [];
	public initialValue: string = "";
	public isLoading: boolean = false;

	constructor(private countriesService: CountriesService) {}

	ngOnInit(): void {
		this.countries = this.countriesService.cacheStore.byCapital.countries;
		this.initialValue = this.countriesService.cacheStore.byCapital.term;
	}

	searchByCapital(capital: string): void {
		this.isLoading = true;

		this.countriesService.searchByCapital(capital).subscribe((countries) => {
			this.countries = countries;
			this.isLoading = false;
		});
	}
}
