import { InjectionToken, Provider } from '@angular/core';
import { IAuthOptions } from 'jexia-sdk-js/browser';

/**
 * @internal
 */
export const NgJexiaConfigToken = new InjectionToken<IAuthOptions>('IAuthOptions');

/**
 * @internal
 */
export const NgJexiaModulesToken = new InjectionToken<Provider>('NgJexiaModules');
