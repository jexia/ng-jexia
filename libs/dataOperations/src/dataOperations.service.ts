import { Injectable } from '@angular/core';
import { dataOperations, Dataset } from 'jexia-sdk-js/browser';

export const dataOperationsModule = dataOperations();

@Injectable()
export class DataOperations {

  dataset<T = any>(name: string): Dataset<T> {
    return dataOperationsModule.dataset<T>(name);
  }

  terminate(): Promise<this> {
    return dataOperationsModule.terminate().then(() => this);
  }

}
