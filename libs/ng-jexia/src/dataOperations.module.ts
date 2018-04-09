import { DataOperations, sdkDataOperationsModule } from './dataOperations.service';
import { SubJexiaModule } from './core.module';

/**
 * Data Operation Module contain the sdk module and the providers
 */
export const DataOperationsModule: SubJexiaModule = {
  get sdkModule() { return sdkDataOperationsModule; },
  providers: [
    DataOperations,
  ],
};
