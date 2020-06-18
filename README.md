# NgJexia

[![CircleCI](https://circleci.com/gh/jexia/ng-jexia.svg?style=svg)](https://circleci.com/gh/jexia/ng-jexia)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


The official library to use Jexia with Angular. Currently we are only supporting **Datasets**, but planning to make *Filesets, Project Users* and *Real-time Communication* available in a near future.

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
  users = this.userDataset.select();

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

Check out the [ng-jexia docs](https://jexia.github.io/ng-jexia/) and the [JavaScript SDK Docs](https://docs.jexia.com/tools/)
for a detailed view of the Api of both this Angular adapter and the original [JavaScript SDK](https://github.com/jexia/jexia-sdk-js/).

### Contributing

You can find all the steps at the [Contributing Guide](https://jexia.github.io/ng-jexia/contributing.html).

## License

[MIT](https://jexia.github.io/ng-jexia/license.html)
