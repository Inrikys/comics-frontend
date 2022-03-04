import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsHomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ComicsHomeComponent,
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
  ]
})

export class ComicsModule { }
