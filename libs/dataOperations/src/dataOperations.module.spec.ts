import { TestBed } from '@angular/core/testing';
import { DataOperationsModule } from './dataOperations.module';
import { dataOperationsModule, DataOperations } from './dataOperations.service';

describe('DataOperationsModule', () => {

  it('should expose data operation module from sdk', () => {
    expect(DataOperationsModule.sdkModule).toBe(dataOperationsModule);
  });

  it('should provide the data operation service to DI', () => {
    TestBed.configureTestingModule({
      providers: DataOperationsModule.providers,
    });
    expect(TestBed.get(DataOperations) instanceof DataOperations).toBeTruthy();
  });

});
