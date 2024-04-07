import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AboutPageComponent, ContactPageComponent } from "./pages";
import {
	SidebarComponent,
	LoadingSpinnerComponent,
	SearchBoxComponent,
} from "./components";

@NgModule({
	declarations: [
		AboutPageComponent,
		ContactPageComponent,
		LoadingSpinnerComponent,
		SearchBoxComponent,
		SidebarComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [
		AboutPageComponent,
		ContactPageComponent,
		LoadingSpinnerComponent,
		SearchBoxComponent,
		SidebarComponent,
	],
})
export class SharedModule {}
