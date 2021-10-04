import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ChatRegister } from "src/app/register/model/registration.model";
import { ConversationComponent } from "../conversation/conversation.component";
import { ChatConversation } from "../model/chat.model";

@Injectable({
  providedIn: "root",
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
    this.http
      .get<ChatConversation[]>(
        `https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=${roomType}`
      )
      .toPromise()
      .then((data) => {
        console.log('inside fetchdata  ')
        this.chatData.next(data);

      });
  }

  postData(data: ChatConversation) {
    console.log(data, "data to be posted");

    let url = "https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage";

    this.http.post(url,data).subscribe(response=>{
      console.log(response,"response");
    })

    const currentData = this.chatData.getValue();

    const updatedData: ChatConversation[] = [...currentData,data];

    this.chatData.next(updatedData);


    // return this.http
    //   .post(url, data)
    //   .toPromise()
    //   .then((response) => {
    //     console.log("inside promise", response);
    //     return Promise.resolve(response as ChatConversation);
    //   })
    //   .catch((err) => {
    //     console.log("inside error", err);
    //     return Promise.reject(err);
    //   });
 
    //this.http.post('https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage', data).toPromise();
  }
}
