import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {

  data: any;

  constructor() {
    this.data = [1, 2, 3, 4, 5]
  }

}
