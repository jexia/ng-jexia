import { InjectionToken, ModuleWithProviders, Provider, NgModule, Optional, SkipSelf } from '@angular/core';
import { IAuthOptions } from 'jexia-sdk-js/browser';
import { IModule } from 'jexia-sdk-js/api/core/module';
import { JexiaClient } from './client.service';

export interface JexiaModule {
  sdkModule: IModule;
  providers?: Provider;
}

export interface NgJexiaConfig extends IAuthOptions {
  providers?: JexiaModule[];
}

export const NgJexiaConfigToken = new InjectionToken<NgJexiaConfig>('NgJexiaConfig');

export function getSdkModules(m: JexiaModule) { return m.sdkModule; }

export function getModuleProviders(p: JexiaModule[], m: JexiaModule) { return m.providers ? [...p, ...(m.providers as any)] : p; }

@NgModule()
export class NgJexiaModule {

  static initialize({ providers = [], ...config }: NgJexiaConfig): ModuleWithProviders {
    return {
      ngModule: NgJexiaModule,
      providers: [
        { provide: JexiaClient, useValue: new JexiaClient(config, providers.map(getSdkModules)) },
        { provide: NgJexiaConfigToken, useValue: config },
        ...providers.reduce(getModuleProviders, []),
      ],
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: NgJexiaModule) {
    if (parentModule) {
      throw new Error('NgJexiaModule is already loaded.');
    }
  }
}
