import { Component, OnInit } from '@angular/core';
import { ChatRegister } from '../model/registration.model';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  registerData: ChatRegister | undefined;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.registerData$.subscribe(newData => {
      this.registerData = newData;
    });
  }

  onRegisterEvent(regData: ChatRegister): void {
    this.registerService.addUser(regData);
  }

}
