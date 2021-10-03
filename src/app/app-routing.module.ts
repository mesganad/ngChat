import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { RegisterViewComponent } from './register/register-view/register-view.component';

const routes: Routes = [
  {path: 'chatapp/register', component:RegisterViewComponent},
  {path: 'chatapp/chat', component:ChatViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
