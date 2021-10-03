import { Component, Input, OnInit } from '@angular/core';
import { ChatRegister } from 'src/app/register/model/registration.model';
import { RegisterService } from 'src/app/register/service/register.service';
import { ChatConversation } from '../model/chat.model';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {



  registerData: ChatRegister | undefined;


  @Input() msg: String | "" = "";

  constructor(private registerService: RegisterService, private chatService: ChatService) {
    this.registerData = {
      screenName: "",
      selectedChatRoom: ""
    };
  }

  ngOnInit(): void {
    this.registerService.registerData$.subscribe(newData => {
      this.registerData = newData;
    });
  }

  onSendEvent(data: ChatConversation){
    this.chatService.postData(data);
  }

}
