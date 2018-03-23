import { NgJexiaModule } from '@ngJexia/core';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    NgJexiaModule.initialize({
      projectID: '7402e44f-5a9e-492a-949a-dcc638f4cb2a',
      key: '7b673f16-3006-4f45-86ba-ca8eeee3d1f0',
      secret: 'hdenVmQBEk4CIYNP',
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
