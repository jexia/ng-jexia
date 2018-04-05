import { Injectable } from '@angular/core';
import { dataOperations, Dataset, DataOperationsModule } from 'jexia-sdk-js/browser';

export const sdkDataOperationsModule: DataOperationsModule = dataOperations();

@Injectable()
export class DataOperations {

  dataset<T = any>(name: string): Dataset<T> {
    return sdkDataOperationsModule.dataset<T>(name);
  }

  terminate(): Promise<this> {
    return sdkDataOperationsModule.terminate().then(() => this);
  }

}
