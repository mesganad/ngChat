import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatRegister } from 'src/app/register/model/registration.model';
import { ChatConversation } from '../model/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatData: BehaviorSubject<ChatConversation[]>;

  constructor(private http: HttpClient) {

 
    this.chatData = new BehaviorSubject<ChatConversation[]>([]);
  }

  get chatData$(): Observable<ChatConversation[]> {
    return this.chatData.asObservable();
  }

  //https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=Mystic-1-4-U
  fetchChatData(roomType: String): void {
    this.http.get<ChatConversation[]>("https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=" + roomType)
      .toPromise().then(data => {
        this.chatData.next(data);
      });
  }

  postData(data: ChatConversation): void {
    console.log(data, "data to be posted");

    let url = 'https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage'
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
     this.http.post(url, data, { headers: httpHeaders }).toPromise()
           .then(response=>{
             console.log(response, "response");
           })
           .catch(err=>{
             console.log(err,"err");
           });
    //this.http.post('https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage', data).toPromise();
  }
}
