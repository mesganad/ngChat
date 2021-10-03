import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './service/register.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterViewComponent } from './register-view/register-view.component';



@NgModule({
  declarations: [RegisterViewComponent],
  providers: [
    RegisterService
  ],
  // exports: [RegisterViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
})
export class RegisterModule { }
