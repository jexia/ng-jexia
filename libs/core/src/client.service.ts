import { IAuthOptions, Client } from 'jexia-sdk-js/browser';
import { Injectable } from '@angular/core';
import { jexiaClient } from 'jexia-sdk-js/browser';
import { IModule } from 'jexia-sdk-js/api/core/module';

@Injectable()
export class JexiaClient {

  private sdkClient = jexiaClient();

  private sdkInitialization: Promise<this>;

  constructor(
    private config: IAuthOptions,
    private modules: IModule[],
  ) {
    this.init();
  }

  init(): Promise<this> {
    if (this.sdkInitialization) {
      return this.sdkInitialization;
    }
    return this.sdkInitialization = this.sdkClient.init(
      this.config,
      ...this.modules,
    ).then(() => this);
  }

  terminate(): Promise<this> {
    return this.sdkClient.terminate().then(() => this);
  }

}
