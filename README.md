# NgJexia

[![CircleCI](https://circleci.com/gh/jexia/ng-jexia.svg?style=svg)](https://circleci.com/gh/jexia/ng-jexia)

:warning: This project is outdated, and it is not advised to make use of it anymore until it is up to speed with current version of our platform :warning:

The official library to use Jexia with Angular

## Install

Install this package along with Jexia JavaScript JDK:

```bash
npm install ng-jexia jexia-sdk-js --save
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

## Developer Guide

### Example app

You can find runnable the code at this repository on `apps/example`, use your own credentials at the `app.module.ts`,
and run the whole application it with `npm start` command at the root of this project.

### Api Docs

Check out the [ng-jexia docs](https://jexia.github.io/ng-jexia/) and the [JavaScript SDK Docs](https://jexia.github.io/jexia-sdk-js/)
for a detailed view of the Api of both this Angular adapter and the original [JavaScript SDK](https://github.com/jexia/jexia-sdk-js/).

### Contributing

You can find all the steps at the [Contributing Guide](https://jexia.github.io/ng-jexia/contributing.html).

## License

[MIT](https://jexia.github.io/ng-jexia/license.html)
