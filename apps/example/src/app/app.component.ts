import { JexiaSdkService } from '@ngJexia/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  data = this.jexiaSdk.initialization.then(() =>
    this.jexiaSdk.dataset('skd_js').select().execute());

  constructor(
    private jexiaSdk: JexiaSdkService
  ) { }

}
