import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import {AlertComponent} from '../alert.component';
import {Component} from '@angular/core';
import {AlertPrimaryDirective} from '../alert-primary.directive';
import {AlertSuccessDirective} from '../alert-success.directive';
import { By } from '@angular/platform-browser';

describe('Alerts', () => {
  let component: AlertComponentTestHost;
  let fixture: ComponentFixture<AlertComponentTestHost>;

  beforeEach(async(() => {

    /**
     * @uijar AlertComponent
     * @hostcomponent AlertComponentTestHost
     */
    TestBed.configureTestingModule({
      declarations: [
        AlertComponent,
        AlertComponentTestHost,
        AlertPrimaryDirective,
        AlertSuccessDirective
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponentTestHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** @uijarexample Alerts */
  it('should be created and set correct CSS-classes', () => {
    expect(fixture.debugElement.query(By.directive(AlertPrimaryDirective)).nativeElement.classList.contains('alert-primary')).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(AlertSuccessDirective)).nativeElement.classList.contains('alert-success')).toBeTruthy();
  });

});

@Component({
  selector: 'x-alert-test-host',
  template: `
    <alert class="alert" alert-primary role="alert">Primary</alert>
    <alert class="alert" alert-success role="alert">Success</alert>
  `
})
class AlertComponentTestHost {

}
