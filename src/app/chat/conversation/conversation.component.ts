import { Component, OnInit } from '@angular/core';
import { ChatRegister } from 'src/app/register/model/registration.model';
import { RegisterService } from 'src/app/register/service/register.service';
import { ChatConversation } from '../model/chat.model';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})

export class ConversationComponent implements OnInit {

  conData: ChatConversation[]=[];
  regData!: ChatRegister;

  constructor(private chatService: ChatService, private registerService: RegisterService) {
    console.log("inside constructor of conversation comp")
  }

  ngOnInit(): void {
    this.chatService.chatData$.subscribe(data=>{
      this.conData=data;
    });
    this.registerService.registerData$.subscribe(rdata=>{
      this.regData=rdata;
    })
    console.log("test registered user ", this.regData);
    console.log("selectedChat Room ", this.regData.selectedChatRoom);
    this.chatService.fetchChatData(this.regData?.selectedChatRoom); //this.regData?.selectedChatRoom
  }

  


}
