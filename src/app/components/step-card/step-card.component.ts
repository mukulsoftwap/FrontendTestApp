import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss'],
})
export class StepCardComponent  implements OnInit {

  @Input() data:any = '';

  constructor() { }

  ngOnInit() {
    console.log("data", this.data)
  }

}
