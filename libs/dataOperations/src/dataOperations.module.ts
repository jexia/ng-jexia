import { DataOperations, dataOperationsModule } from './dataOperations.service';
import { JexiaNgModule } from '@ngJexia/core';

class DataOperationsModuleClass implements JexiaNgModule {
  sdkModule = dataOperationsModule;
  providers = [
    DataOperations,
  ];
}

export const DataOperationsModule = new DataOperationsModuleClass();
