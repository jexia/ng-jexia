import { DataOperations, sdkDataOperationsModule } from './dataOperations.service';
import { SubJexiaModule } from './core.module';

/**
 * @internal
 */
class DataOperationsModuleClass implements SubJexiaModule {
  sdkModule = sdkDataOperationsModule;
  providers = [
    DataOperations,
  ];
}

/**
 * Data Operation Module contain the sdk module and the providers
 */
export const DataOperationsModule: SubJexiaModule = new DataOperationsModuleClass();
