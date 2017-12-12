# NgJexia

The official library to use Jexia with Angular

## Install

```bash
npm install @ngJexia/core --save
```

## Quick Start

Open `app.module.ts`, import the Jexia module and specify your dataset configuration:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { JexiaSdkModule } from '@ngJexia/core';

@NgModule({
  imports: [
    BrowserModule,
    JexiaSdkModule.initClient(environment.jexiaConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

Use our service to access and manipulate your datasets.

```ts
import { Component } from '@angular/core';
import { JexiaSdkService } from '@ngJexia/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  data: Promise<any>;
  constructor(jexiaSdk: JexiaSdkService) {
    this.data = this.jexiaSdk.initialization.then(() =>
      this.jexiaSdk.dataset('skd_js').select().execute());
  }
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
