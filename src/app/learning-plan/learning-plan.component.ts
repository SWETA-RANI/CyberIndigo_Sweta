import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-plan',
  templateUrl: './learning-plan.component.html',
  styleUrls: ['./learning-plan.component.css']
})
export class LearningPlanComponent implements OnInit {
  loader: any;

  constructor() { }

  ngOnInit(): void {

    this.loader = true;
    setTimeout(() => {                          
      this.loader = false;
    
    }, 3000);
  }

}
