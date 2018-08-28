import { Injectable } from '@angular/core';
import { dataOperations, Dataset, DataOperationsModule } from 'jexia-sdk-js/browser';
import { JexiaClient } from './client.service';

/**
 * @internal
 */
export const sdkDataOperationsModule: DataOperationsModule = dataOperations();

/**
 * Data Operations Service for ng-jexia, the Angular Adapter of Jexia JavaScript SDK
 */
@Injectable()
export class DataOperations {

  /**
   * @internal
   */
  constructor(
    private client: JexiaClient,
  ) { }

  /**
   * Gets a dataset instance of the given name and type
   *
   * @example
   * ```typescript
   * export class AppComponent {
   *
   *   userDataset = this.dataOperations.dataset<User>('myusers');
   *   users = this.userDataset.select().execute();
   *
   *   constructor(
   *     private dataOperations: DataOperations,
   *   ) {}
   * }
   * ```
   */
  dataset<T extends object = any>(name: string): Dataset<T> {
    this.client.init();
    return sdkDataOperationsModule.dataset<T>(name);
  }

  /**
   * Terminate this module.
   */
  terminate(): Promise<this> {
    return sdkDataOperationsModule.terminate().then(() => this);
  }

}
