import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    this.http.post('https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage', data);
  }
}
