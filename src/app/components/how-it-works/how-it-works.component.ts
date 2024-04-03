import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent  implements OnInit {

  public stepsData:any = [];

  constructor(private route: Router) {
    this.stepsData = [
      {
        icon : "subscribe.png",
        title : "Step 1",
        name : "Subscribe",
        desc : "Select a subscription plan that suits your child's learning needs and preferences."
      },
      {
        icon : "customize.png",
        title : "Step 2",
        name : "Personalise Your Box",
        desc : "Tell us about your child's age, interests, and learning goals, and we'll customize their surprise box accordingly."
      },
      {
        icon : "surprise.png",
        title : "Step 3",
        name : "Receive Your Surprise Box",
        desc : "Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials."
      }
    ]
  }

  gotoSubscribePage(){
    this.route.navigate(['/subscribe']);
  }

  ngOnInit() {}

}
