import { Component } from '@angular/core';
import { WebSocketSubject } from "rxjs/observable/dom/WebSocketSubject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wss-demo';

// private socket: WebSocketSubject<{ content: string }>;

// constructor() {
//   this.socket = new WebSocketSubject<{ content: string }>("ws://localhost:7777");
//   this.socket.next({
//     content: "immediate"
//   });
//   this.socket.subscribe((msg) => {
//     console.log(msg);
//   });

//   setTimeout(() => {
//     console.log("Unsub");
//     this.socket.unsubscribe();
//   }, 10000);
// }

// public send() {
//   this.socket.next({
//     content: "from client"
//   });
// }
}
