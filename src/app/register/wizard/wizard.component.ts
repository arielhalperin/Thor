import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'thor-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {

  display: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  moveNextStep(){
    console.log("1");
  }

}
