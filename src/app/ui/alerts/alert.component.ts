import { Component, Input } from '@angular/core';

/**
 * @group Alerts
 * @component Alert
 * @description
 * <h1>Usage</h1>
 * Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
 */
@Component({
  selector: 'alert[alert-primary], alert[alert-success]',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  // @Input('isDisabled') isDisabled: boolean = false;
  // label: string = 'Item A';
}
