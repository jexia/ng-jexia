import { JexiaSdkModule } from '@ngJexia/core';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    JexiaSdkModule.initClient({
      projectID: 'f47edb9c-a456-4188-b215-011b64ee08c7',
      key: 'william@jexia.com',
      secret: 'password'
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
