import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from "../core";
import { DashboardComponent } from "./dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: RouteConstants.DAHBOARD,
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule {}
