import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {


  loader: any;

  constructor() { }

  ngOnInit(): void {

    this.loader = true;
    setTimeout(() => {                          
      this.loader = false;
    
    }, 3000);

 
  }

}
