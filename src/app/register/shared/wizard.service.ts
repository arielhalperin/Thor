import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class WizardService {

  stepIsChanged = new EventEmitter();
  constructor() { }

  stepChange(number) {
    this.stepIsChanged.emit(number);
  }

}
