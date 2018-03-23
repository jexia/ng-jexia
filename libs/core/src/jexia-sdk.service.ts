import { JexiaConfig } from './core.module';
import { Injectable } from '@angular/core';
import { dataOperations, jexiaClient, Dataset } from 'jexia-sdk-js/browser';

@Injectable()
export class JexiaDataset {

  private dataOperationsModule = dataOperations();
  private sdkClient = jexiaClient();
  private init = this.sdkClient.init(this.config, this.dataOperationsModule);

  constructor(
    private config: JexiaConfig,
  ) { }

  get<T = any>(name: string): Dataset<T> {
    return this.dataOperationsModule.dataset<T>(name);
  }

}
