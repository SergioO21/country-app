import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	ByCapitalPageComponent,
	ByCountryPageComponent,
	ByRegionPageComponent,
	CountryPageComponent,
} from "./pages";

const routes: Routes = [
	{
		path: "by-capital",
		component: ByCapitalPageComponent,
	},
	{
		path: "by-country",
		component: ByCountryPageComponent,
	},
	{
		path: "by-region",
		component: ByRegionPageComponent,
	},
	{
		path: "by/:code",
		component: CountryPageComponent,
	},
	{
		path: "**",
		redirectTo: "by-capital",
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CountriesRoutingModule {}
