import { Component, OnInit } from '@angular/core';
import { ChatRoomList } from '../model/chatRoomList.model';
import { ChatRegister } from '../model/registration.model';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  registerData: ChatRegister | undefined;
  screenName: String = ''
  chatRoomName: String = '';
  chatRoomData: ChatRoomList[] = [
    {
      chatRoomId: '1',
      chatRoomName: "Fun with Taxes",
    },
    {
      chatRoomId: '1',
      chatRoomName: "Dark Web",
    },
    {
      chatRoomId: '1',
      chatRoomName: "Mystic-1-4-U",
    }
  ]
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

  }

  onRegisterEvent(regData: ChatRegister): void {
    this.registerService.addUser(regData);
  }
  getScreenName(inputText: String) {
    this.screenName = inputText;
    console.log(this.screenName);
  }
  getChatRoomName(inputText: any) {
    console.log(inputText.value);
    this.chatRoomName = inputText.value;
  }

  getFormValue() {
    this.registerData = {
      screenName: this.screenName,
      selectedChatRoom: this.chatRoomName
    }
    this.onRegisterEvent(this.registerData);
  }


}
