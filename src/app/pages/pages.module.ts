import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";

//Modulo
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

//Graficas
import { ChartsModule } from 'ng2-charts';

//el exports lo coloco unicamente para exportar los componentes que quiero
//que puedan ser usados por otros componentes externos

//temporal


@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule

    ]
})
export class PagesModule {}