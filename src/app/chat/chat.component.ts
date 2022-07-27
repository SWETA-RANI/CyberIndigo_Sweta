import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  loader: any;

  constructor() { }

  ngOnInit(): void {
    this.loader = true;
    setTimeout(() => {                          
      this.loader = false;
    
    }, 3000);
  }

}
