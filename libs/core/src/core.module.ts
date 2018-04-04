import { InjectionToken, ModuleWithProviders, Provider, NgModule, Optional, SkipSelf } from '@angular/core';
import { IAuthOptions } from 'jexia-sdk-js/browser';
import { IModule } from 'jexia-sdk-js/api/core/module';
import { JexiaClient } from './client.service';

export interface JexiaNgModule {
  sdkModule: IModule;
  providers?: Provider;
}

export interface NgJexiaConfig extends IAuthOptions {
  providers?: JexiaNgModule[];
}

export const NgJexiaConfigToken = new InjectionToken<NgJexiaConfig>('NgJexiaConfig');

@NgModule()
export class NgJexiaModule {

  static initialize({ providers = [], ...config }: NgJexiaConfig): ModuleWithProviders {
    return {
      ngModule: NgJexiaModule,
      providers: [
        { provide: JexiaClient, useValue: new JexiaClient(config, providers.map((m) => m.sdkModule)) },
        { provide: NgJexiaConfigToken, useValue: config },
        ...providers.reduce((p, m) => m.providers ? [...p, ...(m.providers as any)] : p, []),
     , ],
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: NgJexiaModule) {
    if (parentModule) {
      throw new Error('NgJexiaModule is already loaded.');
    }
  }
}
