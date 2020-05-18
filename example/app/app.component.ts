import { DataOperations } from '@jexia/ng-jexia';
import { Component, ViewEncapsulation } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  userDataset = this.dataOperations.dataset<User>('myusers');
  users$ = this.userDataset.select();

  constructor(
    private dataOperations: DataOperations,
  ) {
    this.userDataset.insert([{ name: 'joao', age: 99 }]).subscribe();
  }

}
