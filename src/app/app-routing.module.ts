import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetaiComponent} from "./detai/detai.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail/:id', component: DetaiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
