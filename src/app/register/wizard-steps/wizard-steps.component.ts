import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem, Message} from "primeng/primeng";

@Component({
  selector: 'thor-wizard-steps',
  templateUrl: './wizard-steps.component.html',
  styleUrls: ['./wizard-steps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WizardStepsComponent implements OnInit {

  items: MenuItem[];

  msgs: Message[] = [];

  activeIndex: number = 1;

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Personal',
      command: (event: any) => {
        this.activeIndex = 0;
        this.msgs.length = 0;
        this.msgs.push({severity:'info', summary:'First Step', detail: event.item.label});
      }
    },
      {
        label: 'Seat',
        command: (event: any) => {
          this.activeIndex = 1;
          this.msgs.length = 0;
          this.msgs.push({severity:'info', summary:'Seat Selection', detail: event.item.label});
        }
      },
      {
        label: 'Payment',
        command: (event: any) => {
          this.activeIndex = 2;
          this.msgs.length = 0;
          this.msgs.push({severity:'info', summary:'Pay with CC', detail: event.item.label});
        }
      },
      {
        label: 'Confirmation',
        command: (event: any) => {
          this.activeIndex = 3;
          this.msgs.length = 0;
          this.msgs.push({severity:'info', summary:'Last Step', detail: event.item.label});
        }
      }
    ];
  }

  moveNextStep(){
    this.activeIndex +=1;
    this.activeIndexChange.emit(this.activeIndex);
  }
}
