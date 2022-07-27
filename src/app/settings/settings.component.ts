import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  loader: any;

  constructor() { }

  ngOnInit(): void {
    this.loader = true;
    setTimeout(() => {                          
      this.loader = false;
    
    }, 3000);
  }

}
