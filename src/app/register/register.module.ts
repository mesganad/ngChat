import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './service/register.service';



@NgModule({
  declarations: [],
  providers:[
    RegisterService
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
