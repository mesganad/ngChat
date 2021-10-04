import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { RegisterViewComponent } from './register/register-view/register-view.component';
import { TestComponent } from './register/test/test.component';

const routes: Routes = [
  {path: 'chatapp/register', component:TestComponent},
  {path: 'chatapp/chat', component:ChatViewComponent},
  // {path:'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
