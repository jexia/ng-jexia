# NgJexia

The official library to use Jexia with Angular

## Install

```bash
npm install ng-jexia --save
```

## Quick Start

Open `app.module.ts`, import the Jexia module and specify your dataset configuration:

```ts
import { NgJexiaModule, DataOperationsModule } from 'ng-jexia';

@NgModule({
  imports: [
    BrowserModule,
    NgJexiaModule.initialize({
      ...environment.jexiaConfig,
      providers: [
        DataOperationsModule,
      ],
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

Use our service to access and manipulate your datasets.

```ts
import { Component } from '@angular/core';
import { DataOperations } from 'ng-jexia';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  userDataset = this.dataOperations.dataset<User>('myusers');
  users = this.userDataset.select().execute();

  constructor(
    private dataOperations: DataOperations,
  ) {}
}
```

Then use it on your template:

```html
<pre>
  data: {{ data | async | json }}
</pre>
```

## Example app

You can find the code at this repository on `apps/example`, and run it with `npm start` command.

## Contributing

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/*` directory.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
