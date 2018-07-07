import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";

//Modulo
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";

//el exports lo coloco unicamente para exportar los componentes que quiero
//que puedan ser usados por otros componentes externos

@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES

    ]
})
export class PagesModule {}