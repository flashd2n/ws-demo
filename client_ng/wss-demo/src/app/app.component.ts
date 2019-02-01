import { Component, OnInit } from '@angular/core';
import { WebSocketSubject } from "rxjs/observable/dom/WebSocketSubject";
import { GlueService } from './services/glue-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wss-demo';

  private socket: WebSocketSubject<{ content: string }>;

  constructor(private readonly glueService: GlueService) {
    // this.socket = new WebSocketSubject<{ content: string }>("ws://localhost:7777");
    // this.socket.next({
    //   content: "immediate"
    // });
    // this.socket.subscribe((msg) => {
    //   console.log(msg);
    // });

    // setTimeout(() => {
    //   console.log("Unsub");
    //   this.socket.unsubscribe();
    // }, 10000);


  }

  ngOnInit(): void {
    this.glueService.getPrices();
  }
  // public send() {
  //   this.socket.next({
  //     content: "from client"
  //   });
  // }
}
