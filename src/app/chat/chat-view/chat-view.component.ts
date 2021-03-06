import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
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


  public chatForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private registerService: RegisterService, private chatService: ChatService) {
    this.registerData = {
      screenName: "",
      selectedChatRoom: ""
    };
  }

  ngOnInit(): void {
    this.chatForm= this.formBuilder.group({
        msg:'',
    })
    this.registerService.registerData$.subscribe(newData => {
      this.registerData = newData;
    });
  }

  onSendEvent(e:Event){
    e.preventDefault();
   
    console.log(this.registerData,"registered data");

    console.log(this.registerData?.screenName, "screen name");
    let screen = this.registerData?.screenName;

    const dataToBeSent  = {
      message:this.chatForm.controls.msg.value,
      timestamp: '2021-10-01T20:49:51.495Z',
      screenName: this.registerData?.screenName,
      selectedChatRoom: this.registerData?.selectedChatRoom
    }

    console.log(dataToBeSent,"Data to be sent");
 
    this.chatService.postData(dataToBeSent as any);
  }

}
