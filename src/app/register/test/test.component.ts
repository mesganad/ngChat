import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ChatRegister } from '../model/registration.model';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  registerData: ChatRegister | undefined;

  public userForm! : FormGroup;

  constructor(private registerService: RegisterService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      screenName:'',
      selectedChatRoom:''
    });

    this.registerService.registerData$.subscribe(newUser =>{
      this.registerData = newUser;
    })
  }
 
onRegisterEvent(e:Event){
  e.preventDefault();
  let createdUser: ChatRegister={

    screenName: this.userForm.controls.screenName.value,
    selectedChatRoom: this.userForm.controls.selectedChatRoom.value,
  }

  console.log(createdUser);
  this.registerService.addUser(createdUser);
}
}
