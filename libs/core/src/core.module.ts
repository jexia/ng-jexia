import { JexiaSDKConfig, JexiaSdkService } from './jexia-sdk.service';
import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

export const JexiaSDKConfigToken = new InjectionToken<JexiaSDKConfig>('JexiaSDKConfigToken');

@NgModule({
  providers: [
    {
      provide: JexiaSdkService,
      useFactory: configToken => new JexiaSdkService(configToken),
      deps: [JexiaSDKConfigToken],
    },
  ],
})
export class JexiaSdkModule {

  static initClient(config: JexiaSDKConfig): ModuleWithProviders {
    return {
      ngModule: JexiaSdkModule,
      providers: [
        { provide: JexiaSDKConfigToken, useValue: config },
      ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: JexiaSdkModule) {
    if (parentModule) {
      throw new Error('JexiaSdkModule is already loaded.');
    }
  }
}
