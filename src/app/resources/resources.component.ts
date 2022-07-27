import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  loader: any;

  constructor() { }

  ngOnInit(): void {

    this.loader = true;
    setTimeout(() => {                          
      this.loader = false;
    
    }, 3000);
  }

}
