import { DataOperationsModule } from './dataOperations.module';
import { sdkDataOperationsModule, DataOperations } from './dataOperations.service';

describe('DataOperationsModule', () => {

  it('should expose data operation module from sdk', () => {
    expect(DataOperationsModule.sdkModule).toBe(sdkDataOperationsModule);
  });

  it('should provide the data operation service to DI', () => {
    expect(DataOperationsModule.providers).toEqual([DataOperations]);
  });

});
