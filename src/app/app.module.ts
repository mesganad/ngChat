import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { RegisterModule } from './register/register.module';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
