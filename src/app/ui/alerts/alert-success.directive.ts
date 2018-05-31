import { Directive } from '@angular/core';

@Directive({
  selector: '[alert-success]',
  host: {
    'class': 'alert-success'
  }
})
export class AlertSuccessDirective {

  constructor() { }

}
