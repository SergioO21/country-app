import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesService } from "../../services";
import { switchMap } from "rxjs";
import { Country } from "../../interfaces";

@Component({
	selector: "app-country-page",
	templateUrl: "./country-page.component.html",
})
export class CountryPageComponent implements OnInit {
	country?: Country;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private countriesService: CountriesService
	) {}

	ngOnInit() {
		this.activatedRoute.params
			.pipe(
				switchMap(({ code }) => this.countriesService.searchByAlphaCode(code))
			)
			.subscribe((country) => {
				if (!country) return this.router.navigateByUrl("");

				return (this.country = country);
			});
	}
}
