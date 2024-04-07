import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutPageComponent } from "./shared/pages";
import { ContactPageComponent } from "./shared/pages";

const routes: Routes = [
	{
		path: "about",
		component: AboutPageComponent,
	},
	{
		path: "contact",
		component: ContactPageComponent,
	},
	{
		path: "countries",
		loadChildren: () =>
			import("./countries/countries.module").then((m) => m.CountriesModule),
	},
	{
		path: "**",
		redirectTo: "countries",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
