import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountriesRoutingModule } from "./countries-routing.module";
import {
	ByCapitalPageComponent,
	ByCountryPageComponent,
	ByRegionPageComponent,
	CountryPageComponent,
} from "./pages";
import { SharedModule } from "../shared/shared.module";
import { CountryTableComponent } from "./components/country-table/country-table.component";

@NgModule({
	declarations: [
		ByCapitalPageComponent,
		ByCountryPageComponent,
		ByRegionPageComponent,
		CountryPageComponent,
		CountryTableComponent,
	],
	imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
