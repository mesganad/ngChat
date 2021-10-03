import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatRegister } from '../model/registration.model';

@Injectable()
export class RegisterService {
  private readonly registerData: BehaviorSubject<ChatRegister>

  get registerData$():Observable<ChatRegister>{
    return this.registerData.asObservable();
  }

  constructor() { 
    this.registerData=new BehaviorSubject<ChatRegister>({
      screenName:"",
      selectedChatRoom:""
  });
}
addUser(data:ChatRegister): void{

  const currentData=this.registerData.getValue();
  const newData: ChatRegister={
    screenName:data.screenName,
    selectedChatRoom:data.selectedChatRoom
  }
  this.registerData.next(newData);
}
}

