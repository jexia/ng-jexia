import { DataOperations, dataOperationsModule } from './dataOperations.service';
import { JexiaModule } from '@ngJexia/core';

class DataOperationsModuleClass implements JexiaModule {
  sdkModule = dataOperationsModule;
  providers = [
    DataOperations,
  ];
}

export const DataOperationsModule = new DataOperationsModuleClass();
