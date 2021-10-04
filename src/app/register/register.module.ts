import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './service/register.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { RegisterViewComponent } from './register-view/register-view.component';




@NgModule({
  declarations: [
    RegisterViewComponent,
    TestComponent
  ],
  providers:[
    RegisterService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ]
})
export class RegisterModule { }
