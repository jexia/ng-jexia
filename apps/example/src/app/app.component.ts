import { JexiaDataset } from '@ngJexia/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  userDataset = this.jexiaDataset.get<User>('myusers');
  users = this.userDataset.select().execute();

  constructor(
    private jexiaDataset: JexiaDataset
  ) {
    this.userDataset.insert([{ name: 'joao', age: 99 }]).execute();
  }

}
