import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsHomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
