import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surprise-section',
  templateUrl: './surprise-section.component.html',
  styleUrls: ['./surprise-section.component.scss'],
})
export class SurpriseSectionComponent  implements OnInit {

  constructor(private route: Router) { }

  gotoSubscribePage(){
    this.route.navigate(['/subscribe']);
  }

  ngOnInit() {}

}
