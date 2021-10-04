import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatRegister } from '../model/registration.model';
const REGISTER_KEY = 'userRegister';

@Injectable()
export class RegisterService {
  private readonly registerData: BehaviorSubject<ChatRegister>

  get registerData$():Observable<ChatRegister>{
    return this.registerData.asObservable();
  }

  constructor() { 
    const registerdUser: ChatRegister= localStorage.getItem(REGISTER_KEY) === null ? {
      screenName:'',
      selectedChatRoom:''
    }: JSON.parse(localStorage.getItem(REGISTER_KEY) as any);
    this.registerData=new BehaviorSubject<ChatRegister>(registerdUser);
}
addUser(data:ChatRegister): void{

  const currentData=this.registerData.getValue();
  const newData: ChatRegister={
    screenName:data.screenName,
    selectedChatRoom:data.selectedChatRoom
  }
  localStorage.setItem(REGISTER_KEY,JSON.stringify(newData));
  this.registerData.next(newData);
}
}

