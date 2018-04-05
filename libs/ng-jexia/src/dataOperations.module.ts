import { DataOperations, sdkDataOperationsModule } from './dataOperations.service';
import { JexiaModule } from './core.module';

class DataOperationsModuleClass implements JexiaModule {
  sdkModule = sdkDataOperationsModule;
  providers = [
    DataOperations,
  ];
}

export const DataOperationsModule: JexiaModule = new DataOperationsModuleClass();
