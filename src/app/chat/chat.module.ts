import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from 'src/app/register/service/register.service';
import { ChatService } from './service/chat.service';
import {HttpClientModule} from '@angular/common/http';
import { ConversationComponent } from './conversation/conversation.component';
import { ChatViewComponent } from './chat-view/chat-view.component';


@NgModule({
  declarations: [
    ConversationComponent,
    ChatViewComponent
  ],
  providers:[
    RegisterService,
    ChatService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ChatModule { }
