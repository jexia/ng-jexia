import { JexiaDataset } from './jexia-sdk.service';
import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

export interface JexiaConfig {
  projectID: string;
  key: string;
  secret: string;
}

export const JexiaSDKConfigToken = new InjectionToken<JexiaConfig>('JexiaSDKConfigToken');

export function jexiaDatasetFactory(configToken) {
  return new JexiaDataset(configToken);
}

@NgModule({
  providers: [
    {
      provide: JexiaDataset,
      useFactory: jexiaDatasetFactory,
      deps: [JexiaSDKConfigToken],
    },
  ],
})
export class NgJexiaModule {

  static initialize(config: JexiaConfig): ModuleWithProviders {
    return {
      ngModule: NgJexiaModule,
      providers: [
        { provide: JexiaSDKConfigToken, useValue: config },
      ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: NgJexiaModule) {
    if (parentModule) {
      throw new Error('JexiaSdkModule is already loaded.');
    }
  }
}
