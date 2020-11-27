import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstStepComponent} from './first-step/first-step.component';
import {ResultsComponent} from './results/results.component';


const routes: Routes = [
  {path: 'first-step', component: FirstStepComponent},
  {path: 'results/:date', component: ResultsComponent},
  { path: '',   redirectTo: '/first-step', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
