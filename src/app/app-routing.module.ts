import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetaiComponent} from "./detai/detai.component";
import {HighChartComponent} from "./home/component/high-chart/high-chart.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail/:id', component: DetaiComponent},
  // {path: '', component: HighChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
