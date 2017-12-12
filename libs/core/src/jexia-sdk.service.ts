import { Injectable } from '@angular/core';
import * as jexiaSDK from 'jexia-sdk-js/browser';

export interface JexiaSDKConfig {
  projectID: string;
  key: string;
  secret: string;
}

@Injectable()
export class JexiaSdkService {

  private dom = jexiaSDK.dataOperations();
  private client = jexiaSDK.jexiaClient();

  public initialization: Promise<any> = this.client.init(this.config, this.dom);

  constructor(
    private config: JexiaSDKConfig,
  ) { }

  dataset(name: string) {
    return this.dom.dataset(name);
  }

}
