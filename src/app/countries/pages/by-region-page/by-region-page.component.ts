import { Component, OnInit } from "@angular/core";
import { Country, Region } from "../../interfaces";
import { CountriesService } from "../../services";

@Component({
	selector: "app-by-region-page",
	templateUrl: "./by-region-page.component.html",
})
export class ByRegionPageComponent implements OnInit {
	public countries: Country[] = [];
	public isLoading: boolean = false;
	public regions: Region[] = [
		"Africa",
		"Americas",
		"Asia",
		"Europe",
		"Oceania",
	];
	public selectedRegion?: Region;

	constructor(private countriesService: CountriesService) {}

	ngOnInit(): void {
		this.countries = this.countriesService.cacheStore.byRegion.countries;
		this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
	}

	searchByRegion(region: Region): void {
		this.selectedRegion = region;
		this.isLoading = true;

		this.countriesService.searchByRegion(region).subscribe((countries) => {
			this.countries = countries;
			this.isLoading = false;
		});
	}
}
