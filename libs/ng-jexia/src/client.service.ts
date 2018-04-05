import { IAuthOptions } from 'jexia-sdk-js/browser';
import { Injectable } from '@angular/core';
import { jexiaClient } from 'jexia-sdk-js/browser';
import { IModule } from 'jexia-sdk-js/api/core/module';

/**
 * Main Client Service for ng-jexia, the Angular Adapter of Jexia JavaScript SDK
 */
@Injectable()
export class JexiaClient {

  private sdkClient = jexiaClient();

  private sdkInitialization: Promise<this>;

/**
 * Creates an instance of JexiaClient.
 * @param config Configuration object
 * @param modules Jexia SubModules
 */
constructor(
    private config: IAuthOptions,
    private modules: IModule[],
  ) {
    this.init();
  }

  /**
   * The client is initialized automatically when the system starts.
   * Use this function to get the initialization promise of the client.
   */
  init(): Promise<this> {
    if (this.sdkInitialization) {
      return this.sdkInitialization;
    }
    return this.sdkInitialization = this.sdkClient.init(
      this.config,
      ...this.modules,
    ).then(() => this);
  }

  /**
   * Terminate this module.
   */
  terminate(): Promise<this> {
    return this.sdkClient.terminate().then(() => this);
  }

}
