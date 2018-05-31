import { Directive } from '@angular/core';

@Directive({
  selector: '[alert-primary]',
  host: {
    'class': 'alert-primary'
  }
})
export class AlertPrimaryDirective {

  constructor() { }

}
