import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  appareilStatus: string= "éteint";
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }
  

}
