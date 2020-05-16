import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FirstPageWindowComponent } from './components/first-page-window/first-page-window.component';
import { SecondPageWindowComponent } from './components/second-page-window/second-page-window.component';
const routes: Routes = [
  {path: 'start/welcome', component: FirstPageWindowComponent},
  {path: 'start/reckon-init', component: SecondPageWindowComponent},
  {path: '', pathMatch: 'full', redirectTo: 'start/welcome'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
