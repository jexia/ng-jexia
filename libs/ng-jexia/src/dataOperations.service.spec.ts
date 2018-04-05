// tslint:disable:one-variable-per-declaration
import { mockPrototypeOf } from '../../../testUtils';
import { DataOperationsModule } from 'jexia-sdk-js/api/dataops/dataOperationsModule';
import { DataOperations } from './dataOperations.service';
import { Subject } from 'rxjs/Subject';

describe('DataOperations', () => {
  beforeEach(() => mockPrototypeOf(DataOperationsModule, { returnValue: Promise.resolve({}) }));

  describe('when getting a dataset reference', () => {
    it('should request it to the data operations module with the dataset name', () => {
      const subject = new DataOperations();
      const name = 'datasetname';
      subject.dataset(name);
      expect(DataOperationsModule.prototype.dataset).toHaveBeenCalledWith(name);
    });

    it('should return the dataset of the data operations module', () => {
      const myDataset = {} as any;
      (DataOperationsModule.prototype.dataset as jasmine.Spy).and.returnValue(myDataset);
      const subject = new DataOperations();
      const result = subject.dataset('datasetname');
      expect(result).toBe(myDataset);
    });
  });

  describe('when terminating', () => {
    it('should return itself at the return promise', async () => {
      const subject = new DataOperations();
      const result = await subject.terminate();
      expect(result).toBe(subject);
    });

    it('should await the sdk promise to conclude', (done) => {
      const defer = new Subject();
      (DataOperationsModule.prototype.terminate as jasmine.Spy).and.returnValue(defer.toPromise());
      const subject = new DataOperations();
      const spy = jasmine.createSpy('terminate');
      subject.terminate().then(spy);
      setTimeout(() => {
        expect(spy).not.toHaveBeenCalled();
        defer.complete();
        setTimeout(() => {
          expect(spy).toHaveBeenCalled();
          done();
        });
      });
    });
  });
});
