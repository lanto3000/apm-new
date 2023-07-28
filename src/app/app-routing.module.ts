import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  { path: 'a1', component: A1Component},
  { path: 'a2', component: A2Component },
  { path: '**', component: MeComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
