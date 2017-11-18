import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem, Message} from 'primeng/primeng';
import {WizardService} from '../shared/wizard.service';

@Component({
  selector: 'thor-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {

  items: MenuItem[];

  msgs: Message[] = [];

  activeIndex: number = 0;

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    this.items = [{
      label: 'General Information',
      command: (event: any) => {
        this.activeIndex = 0;
        this.msgs.length = 0;
        this.msgs.push({severity:'info', summary:'First Step', detail: event.item.label});
      }
    },
      {
        label: 'Social Information',
        command: (event: any) => {
          this.activeIndex = 1;
          this.msgs.length = 0;
          this.msgs.push({severity:'info', summary:'Seat Selection', detail: event.item.label});
        }
      },
      {
        label: 'Interests',
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

    this.wizardService.stepIsChanged.subscribe(
      (index) => {
        this.activeIndex = this.activeIndex + index;
      }
    );
  }
}
