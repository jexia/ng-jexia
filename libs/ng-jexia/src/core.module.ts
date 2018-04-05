import { InjectionToken, ModuleWithProviders, Provider, NgModule, Optional, SkipSelf } from '@angular/core';
import { IAuthOptions } from 'jexia-sdk-js/browser';
import { IModule } from 'jexia-sdk-js/api/core/module';
import { JexiaClient } from './client.service';

/**
 * Internal Jexia Module Interface
 */
export interface SubJexiaModule {
  /**
   * Jexia JavaScript SDK Module Instance
   */
  sdkModule: IModule;
  /**
   * Angular servicers that will be provider
   */
  providers?: Provider;
}

/**
 * Configuration options to initialize Jexia Module
 */
export interface NgJexiaConfig extends IAuthOptions {
  /**
   * Internal Jexia modules that will be used
   */
  providers?: SubJexiaModule[];
}

/**
 * @internal
 */
export const NgJexiaConfigToken = new InjectionToken<NgJexiaConfig>('NgJexiaConfig');

/**
 * @internal
 */
export function getSdkModules(m: SubJexiaModule) { return m.sdkModule; }

/**
 * @internal
 */
export function getModuleProviders(p: SubJexiaModule[], m: SubJexiaModule) { return m.providers ? [...p, ...(m.providers as any)] : p; }

/**
 * Main Module for ng-jexia, the Angular Adapter of Jexia JavaScript SDK
 *
 * @example
 * ```typescript
 * import { NgJexiaModule, DataOperationsModule } from 'ng-jexia';
 *
 * @NgModule({
 *   imports: [
 *     BrowserModule,
 *     NgJexiaModule.initialize({
 *       projectID: 'projectID',
 *       key: 'key',
 *       secret: 'secret',
 *       providers: [
 *         DataOperationsModule,
 *       ],
 *     }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 */
@NgModule()
export class NgJexiaModule {

  /**
   * Initialization method of ng-jexia module that receive configuration parameters and jexia modules
   */
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
